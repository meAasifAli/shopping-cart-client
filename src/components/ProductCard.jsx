import { Button, Image, Text, VStack } from "@chakra-ui/react"

const ProductCard = ({ image, description, price, title, category,dispatch,add,product }) => {
    const handleAdd = (product)=>{
        dispatch(add(product))
    }
  return (
      <VStack w={['64','54']} shadow='lg' p={'8'} borderRadius='lg' transition={'all 0.3s'}
          m='5'
          pos={'relative'}
          css={{
              "&:hover": {
                  transform: "scale(1.1)"

              }
          }}
      >
          <Image src={image} w='20' h='20' objectFit='contain' alt='error' />
          <Text noOfLines={1} color={'green.700'} fontSize={'2xl'} fontWeight={'medium'}>{title}</Text>
          <Text noOfLines={3} fontWeight={'thin'} color={'gray.700'} w={'full'}>{description.substr(0, 70)}..</Text>
          <Text noOfLines={1} fontWeight={'bold'}>Rs: ₹{price}  </Text>
          <Text noOfLines={1}  position={'absolute'} top={0} color={'purple.700'} fontWeight={'light'}>{category}</Text>
          <Button variant={'solid'} colorScheme={"telegram"} width={'full'} onClick={() => handleAdd({
              id: product.id,
              title: product.title,
              description: product.description,
              price: product.price,
              category: product.category,
              image: product.image,
              quantity: 1,
          })}>ADD TO CART</Button>

          
      </VStack>
  )
}
export default ProductCard