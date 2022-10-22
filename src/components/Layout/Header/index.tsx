import Image from 'next/image';
import { chakra, Link } from '@chakra-ui/react';
import {
  HiOutlineBriefcase,
  HiOutlineLogin,
  HiOutlineMail,
  HiOutlineShoppingBag,
  HiOutlineUserGroup,
} from 'react-icons/hi';
import { ReactElement } from 'react';
import Container from '../Container';

import logoImage from '../../../assets/images/logo-header.png';
import DesktopNav from './components/DesktopNav';
import MobileNav from './components/MobileNav';

interface NavItemProps {
  label: string;
  href?: string;
  bordered?: boolean;
  target?: string;
  icon: ReactElement;
}

const navItems: Array<NavItemProps> = [
  {
    label: 'Quem somos',
    href: '/#quem-somos',
    icon: <HiOutlineUserGroup size={24} />,
  },
  {
    label: 'Produtos',
    href: '/#produtos',
    icon: <HiOutlineShoppingBag size={24} />,
  },
  {
    label: 'Escritório',
    href: '/#escritorio',
    icon: <HiOutlineBriefcase size={24} />,
  },
  {
    label: 'Contato',
    href: '/#contato',
    icon: <HiOutlineMail size={24} />,
  },
  {
    label: 'Login',
    href: 'https://escritorio.dentalgold.com.br',
    icon: <HiOutlineLogin size={24} />,
    target: '_blank',
    bordered: true,
  },
];

export default function Header(): JSX.Element {
  return (
    <chakra.header backgroundColor="white" padding="1rem 0">
      <Container
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Link href="/">
          <chakra.a>
            <Image src={logoImage} width={150} height={60} />
          </chakra.a>
        </Link>

        <DesktopNav navItems={navItems} />
        <MobileNav navItems={navItems} />
      </Container>
    </chakra.header>
  );
}
