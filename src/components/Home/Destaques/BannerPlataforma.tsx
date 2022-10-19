import { chakra, Image, Show } from '@chakra-ui/react';

const mobileImage = '/images/destaque-mobile-01-plataforma.png';
const desktopImage = '/images/destaque-desktop-01-plataforma.png';

export default function BannerPlataforma(): JSX.Element {
  return (
    <chakra.div>
      <chakra.a href="/#opa">
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
