import { chakra } from '@chakra-ui/react';

import mobileImage from './assets/destaque-mobile-02-plano-de-negocio.png';
import desktopImage from './assets/destaque-desktop-02-plano-de-negocio.png';

export default function BannerPlanoDeNegocio(): JSX.Element {
  return (
    <chakra.div>
      <chakra.a href="/">
        <chakra.figure display={{ base: 'none', lg: 'block' }}>
          <chakra.img src={desktopImage} width="100%" />
        </chakra.figure>
        <chakra.figure display={{ base: 'block', lg: 'hidden' }}>
          <chakra.img src={mobileImage} width="100%" />
        </chakra.figure>
      </chakra.a>
    </chakra.div>
  );
}
