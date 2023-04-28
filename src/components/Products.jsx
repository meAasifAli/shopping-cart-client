import React, {  useEffect } from "react"
import { Container, HStack } from "@chakra-ui/react"
import ProductCard from "./ProductCard"
import Loader from "./Loader"
import { useDispatch, useSelector } from "react-redux"
import { add } from '../store/CartSlice'
import { fetchProducts } from "../store/ProductSlice"
import { STATUSES } from "../store/ProductSlice"
import Error from "./Error"
const Products = () => {
    const dispatch = useDispatch()
    const {data:products,status} = useSelector((state) => state.productReducer)
    // const [products, setProducts] = useState([])
    // const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        // const fetchProducts = async () => {
        //     try {
        //         let { data } = await axios.get('https://fakestoreapi.com/products')
        //         setProducts(data)
        //         setLoading(false)
        //     } catch (error) {
        //         setLoading(false)
        //     }

        // }
        // fetchProducts()
        dispatch(fetchProducts())
    }, [dispatch])
    return (

        <Container maxW={'container.xl'}>
            {
                status === STATUSES.LOADING ? <Loader /> : <HStack wrap={'wrap'} justifyContent='space-evenly'>
                    {
                        products.map((product) => (
                            <ProductCard key={product.id} image={product.image} description={product.description} price={product.price} title={product.title} category={product.category} product={product} add={add} dispatch={dispatch} />
                        ))
                    }
                    {
                        status === STATUSES.ERROR ? <Error/> : ""
                    }

                </HStack>
            }

        </Container>

    )
}
export default Products