import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align='center'>
      { showProfileData && (
        <Box mr='4' textAlign='right'>
          <Text>Lorem Ipsum Dolor</Text>
          <Text color='gray.300' fontSize='small'>
            lorem@ipsum.dol
          </Text>
        </Box>
      )}

      <Avatar size='md' name='Lorem Ipsum' src='https://github.com/yuribmontez.png' />
    </Flex>
  )
}
