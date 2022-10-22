import {
  Box,
  chakra,
  Flex,
  Heading,
  ListItem,
  Text,
  UnorderedList,
} from '@chakra-ui/react';
import Button from '../../Button';
import Container from '../../Layout/Container';

import imagemUsuario from './assets/kit-adesao-homem-celular.png';
import bgCirculoAzulPequeno from './assets/kit-adesao-background-pequeno-circulo-azul.png';
import bgCirculoAzulGrande from './assets/kit-adesao-background-grande-circulo-azul.png';

export default function KitBasico(): JSX.Element {
  return (
    <chakra.section bg="gray.100" position="relative" overflow="hidden">
      <chakra.img
        src={bgCirculoAzulPequeno}
        position="absolute"
        top="0"
        left={{ base: '-60px', md: '-80px', xl: '-90px' }}
        width={{ base: '120px', md: '160px', xl: '180px' }}
        height={{ base: '75px', md: '100px', xl: '112px' }}
      />
      <chakra.img
        src={bgCirculoAzulGrande}
        position="absolute"
        bottom="0"
        right={{ base: '-0', md: '-0', xl: '-4rem' }}
        width={{ base: '600px', md: '600px', xl: '800px' }}
        height={{ base: '240px', md: '240px', xl: '320px' }}
      />
      <Container position="relative">
        <Flex flexDirection={{ base: 'column', lg: 'row' }}>
          <chakra.div
            display="flex"
            alignItems="center"
            justifyContent="center"
            width={{ base: '100%', lg: '60%' }}
            padding={{ base: '3rem 3rem', md: '5rem', lg: '3rem' }}
            fontSize={{ base: '1.125rem', lg: '1.25rem' }}
          >
            <Box
              backgroundColor="primary.500"
              color="white"
              borderRadius="16px"
              padding="2.5rem"
              width="100%"
            >
              <Heading
                as="h2"
                fontSize="2.5rem"
                fontWeight="900"
                textTransform="uppercase"
                textAlign="center"
                margin="0 0 1rem 0"
              >
                Kit Basic
              </Heading>
              <Text>
                Inicie o seu próprio negócio Franca Venda e aproveite uma nova
                oportunidade no emprendedorismo que lhe permite atuar em tempo
                integral ou parcial, como renda principal ou complementar.
              </Text>

              <Text
                fontSize="2.5rem"
                fontWeight="900"
                textAlign="center"
                margin="1rem 0"
              >
                R$ 100,00
              </Text>

              <UnorderedList>
                <ListItem>Curso de Vendas Diretas</ListItem>
                <ListItem>Acesso a Plataforma de Treinamentos</ListItem>
                <ListItem>Escritório Virtual</ListItem>
                <ListItem>Ferramentas e Materiais de Apoio</ListItem>
                <ListItem>
                  Oportunidade para empreender em Vendas Diretas
                </ListItem>
                <ListItem>
                  Mentoria Aplicada para o Desenvolvimento Pessoal
                </ListItem>
                <ListItem>Suporte ao Empreendedor</ListItem>
              </UnorderedList>

              <chakra.div
                display="flex"
                alignItems="center"
                justifyContent="center"
                marginTop="2rem"
              >
                <Button
                  colorScheme="gray"
                  href="https://escritorio.dentalgold.com.br/novo/dentalgold2"
                  target="_blank"
                  _hover={{
                    backgroundColor: 'gray.100',
                    color: 'primary.500',
                  }}
                >
                  Tenho interesse
                </Button>
              </chakra.div>
            </Box>
          </chakra.div>
          <chakra.figure
            display="flex"
            alignItems="flex-end"
            justifyContent="center"
            width={{ base: '100%', lg: '40%' }}
            paddingTop={{ base: '0', lg: '2rem' }}
          >
            <chakra.img
              src={imagemUsuario}
              width={{ base: '80%', lg: '100%', xl: '96%' }}
              alt=""
            />
          </chakra.figure>
        </Flex>
      </Container>
    </chakra.section>
  );
}
