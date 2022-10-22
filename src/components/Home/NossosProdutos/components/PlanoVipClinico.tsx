import { chakra, Flex, Heading, Text } from '@chakra-ui/react';
import Button from '../../../Button';

import imagemPlanoVip from '../assets/produto-plano-vip-clinico.png';

export default function PlanoVipClinico(): JSX.Element {
  return (
    <Flex
      width="100%"
      direction={{ base: 'column', md: 'row' }}
      alignItems="center"
      justify="flex-end"
    >
      <chakra.div
        width={{ base: '100%', md: '60%', lg: '50%' }}
        maxWidth={{ base: '100%', lg: '30rem' }}
        padding={{ base: '0 1rem', lg: '0' }}
        textAlign={{ base: 'center', md: 'right' }}
      >
        <Heading
          as="h2"
          fontSize="1.75rem"
          textTransform="uppercase"
          fontWeight="800"
          color="primary.500"
        >
          Plano Vip Clínico
        </Heading>
        <Text
          fontSize={{ base: '1.125rem', lg: '1.5rem' }}
          mt="1.25rem"
          textAlign={{ base: 'center', md: 'right' }}
        >
          Plano odontológico com cobertura para procedimentos, como
          restaurações, limpeza, canal, coroa, extração e muito mais. Ideal para
          quem busca cuidar do sorriso com segurança e cobertura clínica
          completa.
        </Text>

        <chakra.div mt="2rem">
          <Button
            colorScheme="primary"
            href="https://loja.dentalgold.com.br/Detalhe/1/Vip-Clinico"
            target="_blank"
          >
            Saiba mais
          </Button>
        </chakra.div>
      </chakra.div>

      <chakra.figure
        width={{ base: '100%', md: '40%', lg: '50%' }}
        paddingLeft={{ base: '3rem', md: '2rem' }}
        paddingTop={{ base: '2rem', md: '0' }}
      >
        <chakra.img
          src={imagemPlanoVip}
          alt="Valor do plano vip clinico"
          width="100%"
        />
      </chakra.figure>
    </Flex>
  );
}
