import { chakra } from '@chakra-ui/react';

import desktopImage from './assets/destaque-desktop-03-embaixador.png';

export default function BannerEmbaixador(): JSX.Element {
  return (
    <chakra.div>
      <chakra.a href="/">
        <chakra.img src={desktopImage} width="100%" />
      </chakra.a>
    </chakra.div>
  );
}
