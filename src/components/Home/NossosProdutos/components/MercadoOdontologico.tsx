import { chakra, Flex, Heading, Text } from '@chakra-ui/react';

import imagemMercadoOdontologico from '../assets/produto-mercado-odontologico.png';

export default function MercadoOdontologico(): JSX.Element {
  return (
    <Flex
      width="100%"
      direction={{ base: 'column', md: 'row' }}
      alignItems="center"
      justify="flex-end"
      marginTop="3rem"
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
          Mercado Odontológico
        </Heading>
        <Text
          fontSize={{ base: '1rem', lg: '1.125rem' }}
          mt="1.25rem"
          textAlign={{ base: 'center', md: 'right' }}
        >
          De acordo com o resultado do IDSS (Índice de Desenvolvimento da Saúde
          Suplementar) publicado pela ANS em 2020, apenas 17,7% dos brasileiros
          acima de 18 anos possuem plano odontológico.
        </Text>
      </chakra.div>

      <chakra.figure
        width={{ base: '100%', md: '40%', lg: '50%' }}
        padding={{ base: '2rem 3rem 0 3rem', md: '0 3rem 0 2rem' }}
      >
        <chakra.img
          src={imagemMercadoOdontologico}
          alt="Imagem com com azulado de uma paciente na cadeira de um dentista"
          width="100%"
        />
      </chakra.figure>
    </Flex>
  );
}
