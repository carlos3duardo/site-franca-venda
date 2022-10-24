import { chakra } from '@chakra-ui/react';

import mobileImage from './assets/destaque-mobile-01-plataforma.png';
import desktopImage from './assets/destaque-desktop-01-plataforma.png';

export default function BannerPlataforma(): JSX.Element {
  return (
    <chakra.div>
      <chakra.a href="#escritorio">
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
