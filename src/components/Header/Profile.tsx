import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align='center'>
      <Box mr='4' textAlign='right'>
        <Text>Lorem Ipsum Dolor</Text>
        <Text color='gray.300' fontSize='small'>
          lorem@ipsum.dol
        </Text>
      </Box>

      <Avatar size='md' name='Lorem Ipsum' src='https://github.com/yuribmontez.png' />
    </Flex>
  )
}
