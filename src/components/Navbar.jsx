import { HStack, Stack, Text, VStack } from "@chakra-ui/react"
import { Tabs, TabList, Tab } from '@chakra-ui/react'
import { BsCartPlus } from 'react-icons/bs'
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"

const Navbar = () => {
    const items = useSelector((state)=> state.cartReducer.cart)
    return (
        <Stack pos={'static'} pr={['35px','20px']} h={'70'} bgColor={'#000'}  display={'flex'} flexDir={'row'} alignItems={'center'} justifyContent={'space-between'} width={'100%'}>
            {/* <HStack > */}
            <Text color={'#fff'} ml={['2px', '5px']} cursor={'pointer'} fontSize={'2xl'} fontWeight={'bold'}>E-Shop</Text>
            <Tabs >
                <TabList>
                    <Tab color={"#fff"}>
                        <Link to={'/'}>Home</Link>
                    </Tab>
                    <Tab color={"#fff"}><Link to={'/cart'}>Cart</Link></Tab>
                </TabList>

            </Tabs>
            {/* </HStack> */}
            <HStack p={['-16px', '20px']} gap={['4px', '20px']} >
                <VStack pos={'relative'}>
                    <Text color={"#fff"} pos={'absolute'} top={'-10px'}>{items.length> 0 ? items.length : 0}</Text>
                    <BsCartPlus size={30} color="#fff" />
                </VStack>


            </HStack>
        </Stack>
    )
}
export default Navbar