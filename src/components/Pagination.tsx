import { Box, Button, Stack } from "@chakra-ui/react";

export function Pagination() {
    return(
        <Stack spacing="6" direction="row" mt="8" justify="space-between" align="center">
            <Box>
                <strong>0</strong>-<strong>10</strong> de <strong>100</strong>
              </Box>
            <Button
              size="sm"
              fontSize="xs"
              width="4"
              colorScheme="pink"
              disabled
              _disabled={{
              bgColor:
              'pink.500',
              cursor:
              'default'}}>
                  1
              </Button>
              <Stack spacing="2" direction="row">
              <Button
                size="sm"
                fontSize="xs"
                width="4"
                bgColor="gray.700"
                _hover={{
                bgColor:
                'gray.500'
                }}>
                  2
              </Button>
              <Button
                size="sm"
                fontSize="xs"
                width="4"
                bgColor="gray.700"
                _hover={{
                bgColor:
                'gray.500'
                }}>
                  3
              </Button>
              <Button
                size="sm"
                fontSize="xs"
                width="4"
                bgColor="gray.700"
                _hover={{
                bgColor:
                'gray.500'
                }}>
                  4
              </Button>

              </Stack>
        </Stack>
    )
}