import { chakra } from '@chakra-ui/react';
import { ReactElement, useState } from 'react';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';
import MobileNavItem from './MobileNavItem';

type NavItemProps = {
  label: string;
  href?: string;
  bordered?: boolean;
  target?: string;
  icon: ReactElement;
};

interface NavigationButtonProps {
  menuToggle: () => void;
}

function NavigationButton({ menuToggle }: NavigationButtonProps) {
  return (
    <chakra.div color="primary.500">
      <chakra.div cursor="pointer" onClick={menuToggle}>
        <HiOutlineMenu size={32} />
      </chakra.div>
    </chakra.div>
  );
}

interface NavigationMenuProps {
  navItems: NavItemProps[];
  menuToggle: () => void;
}

function NavigationMenu({ navItems, menuToggle }: NavigationMenuProps) {
  return (
    <chakra.div
      position="fixed"
      top="0"
      right="0"
      height="100vh"
      backgroundColor="primary.50"
      zIndex={10}
      padding="1rem"
    >
      <chakra.div
        color="primary.500"
        display="flex"
        justifyContent="flex-end"
        padding="0rem 1.125rem"
      >
        <chakra.span cursor="pointer" onClick={menuToggle}>
          <HiOutlineX size={32} />
        </chakra.span>
      </chakra.div>
      <chakra.ul listStyleType="none" margin="0" padding="0">
        {navItems.map(navItem => (
          <chakra.li key={navItem.href} mr="0.25rem">
            <MobileNavItem
              label={navItem.label}
              href={navItem.href}
              target={navItem.target || '_self'}
              bordered={navItem.bordered}
              icon={navItem.icon}
            />
          </chakra.li>
        ))}
      </chakra.ul>
    </chakra.div>
  );
}

interface MobileNavProps {
  navItems: NavItemProps[];
}

export default function MobileNav({ navItems }: MobileNavProps): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  function menuToggle() {
    setIsOpen(!isOpen);
  }

  return (
    <chakra.nav display={{ base: 'block', lg: 'none' }}>
      <NavigationButton menuToggle={() => menuToggle()} />
      {isOpen && (
        <NavigationMenu navItems={navItems} menuToggle={() => menuToggle()} />
      )}
    </chakra.nav>
  );
}
