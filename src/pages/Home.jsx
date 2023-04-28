import { Stack } from "@chakra-ui/react"
import Products from "../components/Products"

const Home = () => {
  return (
    <Stack display={'flex'} flexDir={"row"} alignItems={"center"} m={'10px'}>
      <Products/>
    </Stack>
  )
}
export default Home