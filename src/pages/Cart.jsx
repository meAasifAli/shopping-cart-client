import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Container, HStack, Heading, Text, VStack } from "@chakra-ui/react";
import CartCard from "../components/CartCard";
import EmptyCart from "../components/EmptyCart";
import { remove, increaseQuantity, decreaseQuantity } from '../store/CartSlice'
import { useEffect } from "react";
import axios from "axios";

const Cart = () => {
  const dispatch = useDispatch()
  const products = useSelector((state) => state.cartReducer.cart)
  const [totalAmt, setTotalAmt] = useState("");
  const handleRemove = (id) => {
    dispatch(remove(id))
  }
  useEffect(() => {
    let price = 0;
    products.map((product) => {
      price += product.price * product.quantity;
      return price
    }, [])
    setTotalAmt(price.toFixed(2));
  }, [products])
  const checkoutHandler = async (amount) => {

    const { data: { key } } = await axios.get("http://www.localhost:4000/api/getkey")

    const { data: { order } } = await axios.post("http://localhost:4000/api/checkout", {
      amount
    })
    const options = {
      key,
      amount: order.amount,
      currency: "INR",
      name: "Dummy Payment",
      description: "Tutorial of RazorPay",
      image: "https://avatars.githubusercontent.com/u/96048712?v=4",
      order_id: order.id,
      callback_url: "http://localhost:4000/api/paymentverification",
      prefill: {
        name: "Asif Ali",
        email: "asif15310@gmail.com",
        contact: "123456789"
      },
      notes: {
        "address": "Razorpay Corporate Office"
      },
      theme: {
        "color": "#121212"
      }
    };
    const razor = new window.Razorpay(options);
    razor.open();
  }
  return (
    <Container maxW={'container.xl'}>
      <VStack>
        <Heading textAlign={'center'}>Cart Items</Heading>
        <VStack display={'flex'} alignItems={'center'} justifyContent={'center'} shadow={'lg'} p={'4'} borderRadius={'md'} w={['80%','50%']} >
          <Text fontSize={'xl'} fontWeight={'medium'}>Your order qualifies for FREE Shipping Choose this option at checkout. See details....</Text>
          <Text fontSize={'xl'} fontWeight={'bold'} textAlign={'start'}>Net Amount in Rs: ₹{totalAmt}</Text>
          <Button bgColor={'green.700'} color={'white'} onClick={() => { checkoutHandler(totalAmt) }}>Proceed To Buy</Button>
        </VStack>
      </VStack>
      <HStack pos={'relative'}>
        <HStack wrap={'wrap'} justifyContent={'space-evenly'} mt={['80px', '0px']}>

          {
            products.length === 0 ? <EmptyCart /> :
              products.map((product) => (
                <CartCard key={product.id} image={product.image} title={product.title} description={product.description} price={product.price} id={product.id} quantity={product.quantity} handleRemove={handleRemove} dispatch={dispatch} remove={remove} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity} />
              ))
          }
        </HStack>

      </HStack>
    </Container>
  )
}
export default Cart