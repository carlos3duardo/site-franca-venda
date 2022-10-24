import { chakra, Heading, Text } from '@chakra-ui/react';

import backgroundImage from './assets/background.png';
import circuloAzul from './assets/circulo-azul.png';
import circulosAmarelos from './assets/circulos-amarelos.png';

export default function QuemSomos(): JSX.Element {
  return (
    <chakra.section
      id="quem-somos"
      display="flex"
      flexDirection={{ base: 'column-reverse', md: 'row' }}
      alignItems={{ base: 'stretch', xl: 'center' }}
      backgroundColor="#f7f7f7"
      position="relative"
      overflow="hidden"
    >
      <chakra.figure position="absolute" top="40px" right="-120px">
        <chakra.img
          src={circuloAzul}
          width="160px"
          height="160px"
          alt="Circulos amarelos"
        />
      </chakra.figure>
      <chakra.figure
        width={{ base: '100%', md: '40%', lg: '50%' }}
        position="relative"
        display="flex"
        alignItems="flex-end"
      >
        <img src={backgroundImage} alt="Jovem mulher de óculos com laptop" />
        <chakra.figure position="absolute" top="-16px" left="-42px">
          <chakra.img
            src={circulosAmarelos}
            width={{ base: '100px', md: '120px' }}
            height={{ base: '100px', md: '120px' }}
            alt="Circulos amarelos"
          />
        </chakra.figure>

        <chakra.figure
          position="absolute"
          bottom={{ base: '32px', md: '60%', lg: '40px' }}
          right={{ base: '32px', md: '64px', lg: '32px' }}
        >
          <chakra.img
            src={circuloAzul}
            width={{ base: '36px', md: '42px' }}
            height={{ base: '36px', md: '42px' }}
            alt="Circulos amarelos"
          />
        </chakra.figure>
      </chakra.figure>

      <chakra.div
        width={{ base: '100%', md: '60%', lg: '50%' }}
        maxWidth={{ base: '100%', lg: '40rem' }}
        padding={{ base: '3rem 1.5rem', lg: '3rem' }}
        position="relative"
      >
        <chakra.div position="relative">
          <Heading
            as="h2"
            fontSize="2.5rem"
            textTransform="uppercase"
            fontWeight="900"
            color="primary.500"
          >
            Quem somos
          </Heading>
          <Text mt="1.25rem" fontSize={{ base: '1.125rem', lg: '1.25rem' }}>
            A Franca Venda é uma plataforma de treinamentos que faz parte do
            Grupo Dental Gold com objetivo de preparar pessoas para ingressar no
            mundo empreendedor através das Vendas Diretas.
          </Text>
          <Text mt="1.25rem" fontSize={{ base: '1.125rem', lg: '1.25rem' }}>
            Disponibilizamos cursos e treinamentos com mentoria aplicada para o
            desenvolvimento de pessoas em vendas em um segmento de amplo
            crescimento com plano de carreira e remuneração diferenciada, com
            suporte e apoio ao empreendedor.
          </Text>
        </chakra.div>
      </chakra.div>
    </chakra.section>
  );
}
