import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
    return (
        <Flex
            align="center"
        >
            <Box mr="4" textAlign="right">
                <Text>
                    Thiago Ramos
                </Text>
                <Text color="gray.300" fontSize="small">
                    thiago@gmail.com
                </Text>
            </Box>

            <Avatar size="md" name="Thiago Ramos" src="https://github.com/thiagorasan.png" />
        </Flex>
    )
}