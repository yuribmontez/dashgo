import Link from 'next/link'
import { Box, Flex, Heading, Divider, VStack, HStack, SimpleGrid, Button } from "@chakra-ui/react";
import { Input } from "../../components/Form/Input";
import { Header } from "../../components/Header"
import { Sidebar } from "../../components/Sidebar";

export default function CreateUser() {
  return(
    <Box>
      <Header />

      <Flex w='100%' my='6' maxWidth={1480} mx='auto' px='6'>
        <Sidebar />

        <Box flex='1' borderRadius={8} bg='gray.800' p={['6', '8']}>
          <Heading size='lg' fontWeight='normal'>Create user</Heading>

          <Divider my='6' borderColor='gray.700' />

          <VStack spacing='8'>
            <SimpleGrid w='100%' spacing={['6', '8']} minChildWidth='240px'>
              <Input name='name' label='Name' />
              <Input name='email' type='email' label='E-mail' />
            </SimpleGrid>

            <SimpleGrid w='100%' spacing={['6', '8']} minChildWidth='240px'>
              <Input name='password' type='password' label='Password' />
              <Input name='password_confirmation' type='password' label='Confirm password' />
            </SimpleGrid>
          </VStack>

          <Flex mt='8' justify='flex-end'>
            <HStack spacing='4'>
              <Link href='/users' passHref>
                <Button as='a' colorScheme='whiteAlpha'>Cancel</Button>
              </Link>
              <Button colorScheme='pink'>Save</Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}
