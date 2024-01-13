import { chakra } from '@chakra-ui/react';
import Image from 'next/image';
import logoImage from '../../../assets/images/logo-header.png';
import icone from '../../../assets/images/em-construcao.png';

export default function VoltaremosEmBreve(): JSX.Element {
  return (
    <chakra.div
      display="flex"
      flexDirection="column"
      gap="3rem"
      alignItems="center"
      justifyContent="center"
      width={{ base: '100vw' }}
      height={{ base: '100vh' }}
    >
      <Image src={logoImage} width={300} height={120} />
      <chakra.div display="flex" flexDirection="column" alignItems="center">
        <figure>
          <Image src={icone} width={64} height={64} />
        </figure>
        <chakra.p fontSize="2rem" textAlign="center">
          Site em construção
        </chakra.p>
        <chakra.p fontSize="1.5rem" textAlign="center">
          Estaremos de volta dia 18 de janeiro
        </chakra.p>
      </chakra.div>
    </chakra.div>
  );
}
