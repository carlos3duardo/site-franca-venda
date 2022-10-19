/* eslint-disable react/require-default-props */
import { chakra } from '@chakra-ui/react';
import Link from 'next/link';
import React, { ReactElement } from 'react';

interface MobileNavItemProps {
  label: string;
  href?: string;
  bordered?: boolean;
  target?: string;
  icon: ReactElement;
}

export default function MobileNavItem({
  label,
  href,
  icon,
  bordered,
  target,
}: MobileNavItemProps): JSX.Element {
  return (
    <Link href={href} passHref>
      <chakra.a
        display="flex"
        alignItems="center"
        justifyContent="flex-end"
        textAlign={bordered ? 'center' : 'right'}
        backgroundColor="transparent"
        borderWidth="1px"
        borderStyle="solid"
        borderColor={bordered ? 'primary.400' : 'transparent'}
        fontSize="1rem"
        fontWeight="bold"
        padding="0.75rem 1.125rem"
        transition="all 0.2s ease"
        target={target || '_self'}
        _hover={{
          color: 'yellow.500',
          borderColor: () => (bordered ? 'primary.600' : 'primary.50'),
        }}
      >
        <chakra.span marginRight="1rem">{label}</chakra.span>
        {icon}
      </chakra.a>
    </Link>
  );
}
