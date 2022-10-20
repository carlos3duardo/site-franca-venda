import { chakra, Flex, Heading, Text } from '@chakra-ui/react';

import mockupDispositivos from './assets/mockup-dispositivos.png';

export default function EscritoriVirtual(): JSX.Element {
  return (
    <chakra.section padding="3rem 0" backgroundColor="#f7f7f7">
      <Heading
        as="h2"
        fontSize="2rem"
        textTransform="uppercase"
        fontWeight="800"
        color="primary.500"
        textAlign="center"
        marginBottom="3rem"
      >
        Escritório Virtual e Vantagens
      </Heading>
      <Flex direction={{ base: 'column', md: 'row' }} alignItems="center">
        <chakra.figure width={{ base: '100%', md: '50%' }}>
          <chakra.img
            src={mockupDispositivos}
            alt="Dispositivos com a tela do escritório virtual"
          />
        </chakra.figure>

        <chakra.div
          width={{ base: '100%', md: '60%', lg: '50%' }}
          maxWidth={{ base: '100%', lg: '30rem' }}
          padding={{ base: '1.5rem 1.5rem' }}
          position="relative"
        >
          <chakra.div position="relative">
            <Text
              fontSize={{ base: '1rem', lg: '1.125rem' }}
              mt="1.25rem"
              textAlign={{ base: 'center', md: 'left' }}
            >
              Acompanhe o seu negócio em tempo real com acesso a todas as
              ferramentas e materiais de apoio em todos os dispositivos.
            </Text>
          </chakra.div>
        </chakra.div>
      </Flex>
    </chakra.section>
  );
}
