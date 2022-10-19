import Image from 'next/image';
import { chakra, Link } from '@chakra-ui/react';
import Container from '../Container';

import logoImage from '../../../assets/images/logo-header.png';
import DesktopNav from './components/DesktopNav';

interface NavItemProps {
  label: string;
  href?: string;
  bordered?: boolean;
  target?: string;
}

const navItems: Array<NavItemProps> = [
  {
    label: 'Quem somos',
    href: '/#quem-somos',
  },
  {
    label: 'Produtos',
    href: '/#produtos',
  },
  {
    label: 'Escritório',
    href: '/#escritorio',
  },
  {
    label: 'Contato',
    href: '/#contato',
  },
  {
    label: 'Login',
    href: 'http://escritorio.dentalgold.com.br',
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
      </Container>
    </chakra.header>
  );
}
