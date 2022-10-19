import { chakra, Show } from '@chakra-ui/react';

import mobileImage from './assets/destaque-mobile-02-plano-de-negocio.png';
import desktopImage from './assets/destaque-desktop-02-plano-de-negocio.png';

export default function BannerPlanoDeNegocio(): JSX.Element {
  return (
    <chakra.div>
      <chakra.a href="/">
        <Show above="md">
          <chakra.img src={desktopImage} width="100%" />
        </Show>
        <Show below="md">
          <chakra.img src={mobileImage} width="100%" />
        </Show>
      </chakra.a>
    </chakra.div>
  );
}
