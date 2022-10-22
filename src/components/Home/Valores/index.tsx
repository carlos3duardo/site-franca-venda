import { chakra, Heading, Text } from '@chakra-ui/react';
import Container from '../../Layout/Container';

import iconeEscritorio from './assets/valor-escritorio-virtual.png';
import iconeEcommerce from './assets/valor-ecommerce.png';
import iconeClientes from './assets/valor-clientes.png';
import iconeMateriais from './assets/valor-materiais-de-apoio.png';
import iconeProspeccao from './assets/valor-prospeccao.png';
import iconeTreinamentos from './assets/valor-treinamentos.png';

import imagemCelular from './assets/valor-arte-telefone.png';

type ValorProps = {
  id: string;
  name: string;
  description: string;
  icon: string;
  align: 'left' | 'right';
};

const valores: Array<ValorProps> = [
  {
    id: 'escritorio',
    name: 'Escritório Virtual',
    description: 'Gerencie seu negócio a qualquer momento e em qualquer lugar.',
    icon: iconeEscritorio,
    align: 'right',
  },
  {
    id: 'loja',
    name: 'Loja E-Commerce',
    description: 'Divulgue sua loja e-commerce para realizar vendas.',
    icon: iconeEcommerce,
    align: 'right',
  },
  {
    id: 'clientes',
    name: 'Clientes',
    description: 'Acompanhe a sua carteira de clientes e comissões a receber.',
    icon: iconeClientes,
    align: 'right',
  },
  {
    id: 'materiais',
    name: 'Materiais de Apoio',
    description:
      'Divulgue o seu negócio com os materiais já dimensionados para as redes sociais.',
    icon: iconeMateriais,
    align: 'left',
  },
  {
    id: 'prospeccao',
    name: 'Prospecção',
    description:
      'Construa uma equipe divulgando o seu link para novos Embaixadores.',
    icon: iconeProspeccao,
    align: 'left',
  },
  {
    id: 'treinamentos',
    name: 'Treinamentos',
    description:
      'Mantenha-se atualizado acessando todos os cursos e treinamentos para o seu crescimento.',
    icon: iconeTreinamentos,
    align: 'left',
  },
];

export default function Valores(): JSX.Element {
  return (
    <chakra.section padding="4rem 0">
      <Heading
        as="h2"
        fontSize="2.5rem"
        textTransform="uppercase"
        fontWeight="900"
        color="primary.500"
        textAlign="center"
        marginBottom="3rem"
      >
        Seu Próximo Negócio
      </Heading>
      <Container padding={{ base: '1rem 1rem', xl: '1rem 0' }}>
        <chakra.div
          display="grid"
          gridTemplateColumns={{ base: '1fr 1fr', lg: '1fr 1fr 1fr' }}
          gridTemplateRows="auto"
          gridTemplateAreas={{
            base: `
              "celular celular"
              "escritorio materiais"
              "loja prospeccao"
              "clientes treinamentos"`,
            md: `
              "celular celular"
              "escritorio materiais"
              "loja prospeccao"
              "clientes treinamentos"`,
            lg: `
              "escritorio celular materiais"
              "loja celular prospeccao"
              "clientes celular treinamentos"`,
          }}
        >
          {valores.map(({ id, name, description, align, icon }) => (
            <chakra.div
              key={id}
              gridArea={id}
              display="flex"
              flexDirection={{
                base: 'column-reverse',
                md: align === 'right' ? 'row' : 'row-reverse',
              }}
              alignItems="center"
              padding={{ base: '2rem 1rem', md: '2rem 0' }}
            >
              <chakra.div
                textAlign={{
                  base: 'center',
                  md: align === 'right' ? 'right' : 'left',
                }}
                flex="1"
              >
                <Heading
                  as="h4"
                  color="primary.500"
                  fontSize={{ base: '1.125rem', md: '1.25rem' }}
                  fontWeight="800"
                  textTransform="uppercase"
                  margin={{ base: '1rem 0', md: '0' }}
                >
                  {name}
                </Heading>
                <Text
                  fontSize={{
                    base: '1rem',
                    md: '1rem',
                    lg: '0.875rem',
                    xl: '1rem',
                  }}
                  color="gray.600"
                >
                  {description}
                </Text>
              </chakra.div>
              <chakra.figure padding="0 1rem">
                <chakra.img
                  src={icon}
                  alt=""
                  width={{ base: '64px', md: '64px', lg: '76px', xl: '96px' }}
                  height={{ base: '64px', md: '64px', lg: '76px', xl: '96px' }}
                />
              </chakra.figure>
            </chakra.div>
          ))}
          <chakra.div
            gridArea="celular"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <chakra.img
              src={imagemCelular}
              alt=""
              height={{ base: '462px', md: '462px', lg: '462px', xl: '480px' }}
            />
          </chakra.div>
        </chakra.div>
      </Container>
    </chakra.section>
  );
}
