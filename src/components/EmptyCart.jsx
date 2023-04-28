import { Button, Text, VStack } from "@chakra-ui/react"
import { Link } from "react-router-dom"

const EmptyCart = () => {
    return (
        <VStack height={['20vh','50vh']} ml={['0px','450px']} mt={['0px','100px']} alignItems={'center'} gap={'10px'}>
            <Text colorScheme='linkedin'>Cart Feels Empty Please Add Items From The Shop</Text>
            <Button variant={'solid'} bgColor={'chakra-body-bg._light'}>
                <Link to={'/'}>
                    Go To Shop
                </Link>
            </Button>
        </VStack>
    )
}
export default EmptyCart