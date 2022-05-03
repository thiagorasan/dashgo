import { Text } from "@chakra-ui/react";

export function LogoHeader() {
    return (
        <Text
            fontSize="3xl"
            fontWeight="bold"
            letterSpacing="tight"
            w="64"
        >
            Dashboard
            <Text as="span" ml="1" color="pink.500">.</Text>
        </Text>
    )
}