import { Flex, useBreakpointValue, Icon, IconButton } from '@chakra-ui/react'
import { RiMenuLine } from 'react-icons/ri'
import { useSidebarDrawer } from '../../contexts/SidebarDrawerContext'
import { Logo } from './Logo'
import { NotificationsNav } from './NotificationsNav'
import { Profile } from './Profile'
import { SearchBox } from './SearchBox'

export function Header() {
  const { onOpen } = useSidebarDrawer()

  const isDesktop = useBreakpointValue({
    base: false,
    lg: true,
  })

  return (
    <Flex as='header' w='100%' maxWidth={1480} h='20' mx='auto' mt='4' px='6' align='center'>

      {!isDesktop && (
        <IconButton
          aria-label='Open navigation'
          icon={<Icon as={RiMenuLine} />}
          fontSize='24'
          variant='unstyled'
          onClick={onOpen}
          mr='2'
        />
      )}

      <Logo />

      { isDesktop &&  <SearchBox /> }

      <Flex align='center' ml='auto'>
        <NotificationsNav />
        <Profile showProfileData={isDesktop} />
      </Flex>
    </Flex>
  )
}
