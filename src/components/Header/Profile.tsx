import { Box, Flex, Text, Avatar } from "@chakra-ui/react";

export function Profile() {
    return (
        <Flex align="center">
            <Box mr="4" textAlign="right">
                <Text>Lucas Calixto</Text>
                <Text
                    color="gray.300"
                    fontSize="small"
                >lucas70matheus@gmail.com</Text>
            </Box>
            <Avatar size="md" name="Lucas Calixto" src="https://github.com/calixoto.png" />
        </Flex>
    );
}