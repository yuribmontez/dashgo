import Link from 'next/link'
import { Text } from "@chakra-ui/react";

export function Logo() {
  return (
    <Link href='/dashboard' passHref>
      <Text fontSize={['2xl', '3xl']} fontWeight='bold' letterSpacing='tight' w='64' cursor='pointer'>
        ybmgo
        <Text as='span' ml='1' color='pink.500'>.</Text>
      </Text>
    </Link>
  )
}
