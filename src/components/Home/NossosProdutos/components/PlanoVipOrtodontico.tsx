import { chakra, Flex, Heading, Text } from '@chakra-ui/react';

import imagemPlanoOrtodontico from '../assets/produto-plano-vip-ortodontico.png';

export default function PlanoVipOrtodontico(): JSX.Element {
  return (
    <Flex
      width="100%"
      direction={{ base: 'column', md: 'row-reverse' }}
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
          textAlign={{ base: 'center', md: 'left' }}
        >
          Plano Vip Ortodôntico
        </Heading>
        <Text
          fontSize={{ base: '1rem', lg: '1.125rem' }}
          mt="1.25rem"
          textAlign={{ base: 'center', md: 'left' }}
        >
          Plano odontológico para procedimentos clínicos, como restaurações,
          limpesa, canal, coroa, extração, bem como o tratamento ortodôntico que
          inclui o aparelho e manutenções. Ideal para quem busca cuidar do
          sorriso com ampla cobertura e manter o sorriso saudável.
        </Text>
      </chakra.div>

      <chakra.figure
        width={{ base: '100%', md: '40%', lg: '50%' }}
        paddingRight={{ base: '3rem', md: '2rem' }}
        paddingTop={{ base: '2rem', md: '0' }}
      >
        <chakra.img
          src={imagemPlanoOrtodontico}
          alt="Valor do plano vip ortodôntico"
          width="100%"
        />
      </chakra.figure>
    </Flex>
  );
}
