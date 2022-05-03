import { Flex, Text } from '@chakra-ui/react'
import { LogoHeader } from './LogoHeader'
import { NotificationHeader } from './NotificationHeader'
import { Profile } from './Profile'
import { SearchBox } from './SearchBox'

export function Header(){
    return(
        <Flex 
            as="header" 
            w="100%" 
            h="20" 
            maxWidth={1480} 
            mx="auto" 
            mt="4" 
            px="6"
            align="center"
        >
            
            <LogoHeader />
            <SearchBox />

            <Flex
                align="center"
                ml="auto"    
            >
                
                <NotificationHeader />
                <Profile />
            </Flex>

        </Flex>
    )
}