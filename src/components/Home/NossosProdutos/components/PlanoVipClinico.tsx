import { chakra, Flex, Heading, Text } from '@chakra-ui/react';

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
      >
        <Heading
          as="h2"
          fontSize="1.75rem"
          textTransform="uppercase"
          fontWeight="800"
          color="primary.500"
          textAlign={{ base: 'center', md: 'right' }}
        >
          Plano Vip Clínico
        </Heading>
        <Text
          fontSize={{ base: '1rem', lg: '1.125rem' }}
          mt="1.25rem"
          textAlign={{ base: 'center', md: 'right' }}
        >
          Plano odontológico com cobertura para procedimentos, como
          restaurações, limpeza, canal, coroa, extração e muito mais. Ideal para
          quem busca cuidar do sorriso com segurança e cobertura clínica
          completa.
        </Text>
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
