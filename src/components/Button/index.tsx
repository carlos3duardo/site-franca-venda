import { Button as ChakraButton, ButtonProps } from '@chakra-ui/react';

export default function Button({
  children,
  ...rest
}: ButtonProps): JSX.Element {
  return (
    <ChakraButton
      variant="outline"
      // borderWidth="2px"
      textTransform="uppercase"
      fontFamily="Kontora"
      fontWeight="800"
      borderRadius={99}
      padding="0.5rem 1.25rem"
      fontSize=".875rem"
      lineHeight=".875rem"
      height="auto"
      {...rest}
    >
      {children}
    </ChakraButton>
  );
}
