import { Button, HStack, Heading, Image, Text, VStack } from "@chakra-ui/react"



const CartCard = ({ image, title, description, price, id, quantity, handleRemove, dispatch, remove, increaseQuantity, decreaseQuantity }) => {
    return (
        <>
            <VStack w={['64', '54']} shadow='lg' p={'2'} borderRadius='lg' transition={'all 0.3s'}
                m='2' alignItems={'center'} >
                <Image src={image} w='20' h='20' objectFit='contain' alt='error' />
                <Text noOfLines={1} color={'green.700'} fontSize={'2xl'} fontWeight={'medium'}>{title}</Text>
                <Text noOfLines={3} fontWeight={'thin'} color={'gray.700'} w={'full'}>{description.substr(0, 70)}..</Text>
                <Text noOfLines={1} fontWeight={'bold'}>Unit Price: ₹{price}  </Text>
                <Text noOfLines={1} fontWeight={'bold'}>Total Price: ₹{price * quantity}</Text>
                <HStack>
                    <Heading>Qty:</Heading>
                    <Button onClick={() => { dispatch(increaseQuantity(id)) }}>+</Button>
                    <Text>{quantity}</Text>
                    <Button onClick={() => { dispatch(decreaseQuantity(id)) }}>-</Button>
                </HStack>
                <Button variant={'solid'} colorScheme={'red'} width={'full'} onClick={() => { handleRemove(dispatch(remove(id))) }}>REMOVE ITEM</Button>
            </VStack>
        </>
    )
}
export default CartCard