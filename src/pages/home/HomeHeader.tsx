import { Flex } from "../../components/Flex"
import { HeaderBackground } from "./HeaderBackground"
import { HeaderLinks } from "./HeaderLinks"
import { HeaderText } from "./HeaderText"

export const HomeHeader = () => {
    return(
        <Flex className="home-header" justifyContent={'space-between'} alignItems={'center'}>
            <HeaderBackground />
            <HeaderText />
            <HeaderLinks />
        </Flex>
    )
}