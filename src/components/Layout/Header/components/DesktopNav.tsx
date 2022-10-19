import { chakra } from '@chakra-ui/react';
import DesktopNavItem from './DesktopNavItem';

type NavItemProps = {
  label: string;
  href?: string;
  bordered?: boolean;
  target?: string;
};

interface DesktopNavProps {
  navItems: NavItemProps[];
}

export default function DesktopNav({ navItems }: DesktopNavProps): JSX.Element {
  return (
    <chakra.ul
      role="menu"
      listStyleType="none"
      margin="0"
      display={{ base: 'none', lg: 'flex' }}
      flexDirection="row"
    >
      {navItems.map(navItem => (
        <chakra.li key={navItem.href} mr="0.25rem">
          <DesktopNavItem
            label={navItem.label}
            href={navItem.href}
            target={navItem.target || '_self'}
            bordered={navItem.bordered}
          />
        </chakra.li>
      ))}
    </chakra.ul>
  );
}
