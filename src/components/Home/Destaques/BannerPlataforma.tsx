import { chakra } from '@chakra-ui/react';

import desktopImage from './assets/destaque-desktop-01-plataforma.png';

export default function BannerPlataforma(): JSX.Element {
  return (
    <chakra.div>
      <chakra.a href="/">
        <chakra.img src={desktopImage} width="100%" />
      </chakra.a>
    </chakra.div>
  );
}
