import { chakra } from '@chakra-ui/react';

import desktopImage from './assets/destaque-desktop-02-plano-de-negocio.png';

export default function BannerPlanoDeNegocio(): JSX.Element {
  return (
    <chakra.div>
      <chakra.a href="/">
        <chakra.img src={desktopImage} width="100%" />
      </chakra.a>
    </chakra.div>
  );
}
