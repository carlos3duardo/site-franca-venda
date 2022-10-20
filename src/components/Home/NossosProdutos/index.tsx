import { chakra, Flex, Heading, Text } from '@chakra-ui/react';

import planoVipClinico from './assets/produto-plano-vip-clinico.png';
import MercadoOdontologico from './components/MercadoOdontologico';
import PlanoVipClinico from './components/PlanoVipClinico';
import PlanoVipOrtodontico from './components/PlanoVipOrtodontico';

export default function NossosProdutos(): JSX.Element {
  return (
    <chakra.section
      display="flex"
      flexDirection="column"
      backgroundColor="white"
    >
      <Heading
        as="h2"
        fontSize="2rem"
        textTransform="uppercase"
        fontWeight="800"
        color="primary.500"
        textAlign="center"
        padding="4rem 0 2rem 0"
      >
        Conheça os nossos produtos
      </Heading>

      <PlanoVipClinico />
      <PlanoVipOrtodontico />
      <MercadoOdontologico />
    </chakra.section>
  );
}
