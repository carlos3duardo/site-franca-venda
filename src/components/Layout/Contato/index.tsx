import {
  Box,
  Flex,
  Heading,
  Text,
  chakra,
  Grid,
  GridItem,
  VStack,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

import Container from '../Container';
import { api } from '../../../services/api';

import backgroundImage from './assets/background.png';
import { Input, MaskedInput, SubmitButton } from '../../FormElements';

const formSchema = yup.object({
  nome: yup
    .string()
    .required('Campo obrigatório')
    .min(6, 'Não pode possuir menos de 6 caracteres')
    .max(128, 'Não pode possuir mais de 128 caracteres'),
  email: yup
    .string()
    .email('Endereço de e-mail inválido')
    .required('Campo obrigatório'),
  municipio: yup
    .string()
    .required('Campo obrigatório')
    .min(2, 'Não pode possuir menos de 2 caracteres')
    .max(128, 'Não pode possuir mais de 128 caracteres'),
  uf: yup
    .string()
    .min(2, 'Informe a sigla com 2 caracteres')
    .max(2, 'Informe a sigla com 2 caracteres')
    .required('Informe a sigla com 2 caracteres'),
  celular: yup.string().required('Campo obrigatório'),
});

export default function Contato(): JSX.Element {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted },
    reset,
  } = useForm({
    resolver: yupResolver(formSchema),
    defaultValues: {
      nome: '',
      email: '',
      municipio: '',
      uf: '',
      celular: '',
    },
  });

  interface FormProps {
    nome: string;
    email: string;
    municipio: string;
    uf: string;
    celular: string;
  }

  function submitNovoContato(data: FormProps) {
    api.post('/contato', data).then(res => {
      if (res.status === 200) {
        const MySwal = withReactContent(Swal);

        MySwal.fire({
          icon: 'success',
          title: 'Mensagem enviada com sucesso!',
          html: 'Agradecemos o seu contato.<br />Aguarde o nosso feedback. Não demoraremos.',
        });

        reset();
      }
    });
  }

  return (
    <Flex
      padding="10rem 0"
      backgroundImage={backgroundImage}
      backgroundPosition="center center"
      backgroundSize="cover"
      id="contato"
    >
      <Container>
        <Flex direction="row" justifyContent="flex-end" position="relative">
          <Box
            width={{ base: '100%', lg: '50%' }}
            position="relative"
            zIndex="1"
            padding={{ base: '0', lg: '0 0 0 2rem' }}
          >
            <Heading
              as="h2"
              fontSize="2.25rem"
              textTransform="uppercase"
              fontWeight="900"
              color="white"
            >
              Entre em contato conosco
            </Heading>
            <Text
              fontSize={{ base: '1.25rem', md: '1.25rem' }}
              color="white"
              fontWeight="semibold"
            >
              Preencha o formulário que em breve retornaremos!
            </Text>
            <chakra.form
              marginTop="2rem"
              onSubmit={handleSubmit(submitNovoContato)}
            >
              <Grid templateColumns="repeat(12, 1fr)" gap="1.125rem">
                <GridItem gridColumnEnd="span 12">
                  <Input
                    type="text"
                    name="nome"
                    label="Seu nome"
                    isRequired
                    error={errors.nome}
                    {...register('nome')}
                  />
                </GridItem>
                <GridItem gridColumnEnd="span 12">
                  <Input
                    type="email"
                    name="email"
                    label="Seu e-mail"
                    isRequired
                    error={errors.email}
                    {...register('email')}
                  />
                </GridItem>
                <GridItem gridColumnEnd={{ base: 'span 12', md: 'span 8' }}>
                  <Input
                    type="text"
                    name="municipio"
                    label="Sua cidade"
                    isRequired
                    error={errors.municipio}
                    {...register('municipio')}
                  />
                </GridItem>
                <GridItem gridColumnEnd={{ base: 'span 12', md: 'span 4' }}>
                  <Input
                    type="text"
                    name="uf"
                    label="Estado"
                    isRequired
                    error={errors.uf}
                    {...register('uf')}
                  />
                </GridItem>
                <GridItem gridColumnEnd={{ base: 'span 12', md: 'span 7' }}>
                  <MaskedInput
                    type="text"
                    name="celular"
                    label="Seu celular"
                    isRequired
                    error={errors.celular}
                    mask="(99) 99999-9999"
                    {...register('celular')}
                  />
                </GridItem>
                <GridItem gridColumnEnd={{ base: 'span 12', md: 'span 5' }}>
                  <SubmitButton label="Enviar" isLoading={isSubmitted} />
                </GridItem>
              </Grid>
              <VStack spacing="1.25rem" />
            </chakra.form>
          </Box>
        </Flex>
      </Container>
    </Flex>
  );
}
