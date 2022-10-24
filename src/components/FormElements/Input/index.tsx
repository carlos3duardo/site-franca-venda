/* eslint-disable import/prefer-default-export */
/* eslint-disable react/require-default-props */
import { forwardRef, ForwardRefRenderFunction } from 'react';
import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form';
import {
  FormControl,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
  chakra,
  Tooltip,
} from '@chakra-ui/react';
import { BsExclamationDiamond, BsExclamationDiamondFill } from 'react-icons/bs';

interface InputProps extends ChakraInputProps {
  name: string;
  label: string;
  error?: FieldError | Merge<FieldError, FieldErrorsImpl<unknown>> | null;
  isRequired?: boolean;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, label, error = null, isRequired = false, ...rest }: InputProps,
  ref,
) => {
  return (
    <>
      <FormControl
        bgColor="#e5e5e5"
        borderRadius="99px"
        padding=".75rem 1.5rem"
        filter="drop-shadow(0 4px 4px rgba(0, 0, 0, 0.25))"
        display="flex"
        flexDirection="row"
        alignItems="center"
        borderWidth="2px"
        borderStyle="solid"
        borderColor={error ? 'red.600' : 'transparent'}
      >
        <ChakraInput
          id={name}
          name={name}
          placeholder={label}
          type="text"
          variant="unstyled"
          width="100%"
          size="lg"
          ref={ref}
          {...rest}
        />
        {isRequired && !error && (
          <Tooltip hasArrow label="Campo obrigatório" placement="top">
            <chakra.div color="gray.400">
              <BsExclamationDiamond />
            </chakra.div>
          </Tooltip>
        )}
        {!!error && (
          <Tooltip hasArrow label={error.message} placement="left">
            <chakra.div color="red.600">
              <BsExclamationDiamondFill />
            </chakra.div>
          </Tooltip>
        )}
      </FormControl>
    </>
  );
};

export const Input = forwardRef(InputBase);
