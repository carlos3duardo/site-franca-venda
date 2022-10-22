import { chakra, Heading } from '@chakra-ui/react';

import MercadoOdontologico from './components/MercadoOdontologico';
import PlanoVipClinico from './components/PlanoVipClinico';
import PlanoVipOrtodontico from './components/PlanoVipOrtodontico';

export default function NossosProdutos(): JSX.Element {
  return (
    <chakra.section
      id="produtos"
      display="flex"
      flexDirection="column"
      backgroundColor="white"
      padding="2rem 0"
    >
      <Heading
        as="h2"
        fontSize="2.5rem"
        textTransform="uppercase"
        fontWeight="900"
        color="primary.500"
        textAlign="center"
        padding="2rem 0 2rem 0"
      >
        Conheça os nossos produtos
      </Heading>

      <PlanoVipClinico />
      <PlanoVipOrtodontico />
      <MercadoOdontologico />
    </chakra.section>
  );
}
