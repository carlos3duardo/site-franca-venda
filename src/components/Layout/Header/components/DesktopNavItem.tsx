/* eslint-disable react/require-default-props */
import { chakra } from '@chakra-ui/react';
import Link from 'next/link';

interface DesktopNavItemProps {
  label: string;
  href?: string;
  bordered?: boolean;
  target?: string;
}

export default function DesktopNavItem({
  label,
  href,
  bordered,
  target,
}: DesktopNavItemProps): JSX.Element {
  return (
    <Link href={href} passHref>
      <chakra.a
        backgroundColor="transparent"
        borderWidth="1px"
        borderStyle="solid"
        borderColor={bordered ? 'primary.400' : 'transparent'}
        borderRadius="99rem"
        textTransform="uppercase"
        fontFamily="Kontora"
        fontSize="1rem"
        fontWeight="800"
        padding="0.75rem 1.125rem"
        transition="all 0.2s ease"
        target={target || '_self'}
        _hover={{
          borderColor: () => (bordered ? 'primary.600' : 'primary.50'),
          boxShadow:
            '0 4px 6px -1px rgba(27, 60, 84, 0.1), 0 2px 4px -1px rgba(27, 60, 84, 0.06)',
        }}
      >
        {label}
      </chakra.a>
    </Link>
  );
}
