import { Button } from '@chakra-ui/react';

interface SubmitProps {
  label: string;
  isLoading: boolean;
}

export default function SubmitButton({
  label,
  isLoading,
}: SubmitProps): JSX.Element {
  return (
    <Button
      type="submit"
      variant="ghost"
      bgColor="secondary.500"
      color="primary.500"
      borderWidth="2px"
      borderStyle="solid"
      borderColor="secondary.500"
      fontWeight="bold"
      borderRadius="99px"
      padding=".75rem 1.5rem"
      height="55px"
      width="100%"
      filter="drop-shadow(0 4px 4px rgba(0, 0, 0, 0.25))"
      isLoading={!!isLoading}
      loadingText="Enviando..."
      _hover={{
        backgroundColor: 'secondary.600',
      }}
    >
      {label}
    </Button>
  );
}
