import NextLink from 'next/link';
import { Button as ChakraButton, ChakraProps, Link } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface ButtonProps extends ChakraProps {
  href: string;
  children: ReactNode;
  target?: string;
  colorScheme?: string;
}

export default function Button({
  children,
  href,
  target,
  colorScheme,
  _hover,
}: ButtonProps): JSX.Element {
  return (
    <NextLink href={href} passHref>
      <Link
        href={href}
        isExternal={target === '_blank'}
        _hover={{ textDecoration: 'none' }}
      >
        <ChakraButton
          colorScheme={colorScheme}
          variant="outline"
          textTransform="uppercase"
          fontFamily="Kontora"
          fontWeight="800"
          borderRadius={99}
          padding="0.875rem 1.875rem"
          fontSize=".875rem"
          lineHeight=".875rem"
          height="auto"
          _hover={_hover}
        >
          {children}
        </ChakraButton>
      </Link>
    </NextLink>
  );
}

Button.defaultProps = {
  target: '_self',
  colorScheme: 'gray',
};
