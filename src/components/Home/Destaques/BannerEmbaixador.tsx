import { chakra, Show } from '@chakra-ui/react';

import mobileImage from './assets/destaque-mobile-03-embaixador.png';
import desktopImage from './assets/destaque-desktop-03-embaixador.png';

export default function BannerEmbaixador(): JSX.Element {
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
