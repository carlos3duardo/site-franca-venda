import { Box, chakra, Flex, Heading, List, ListItem } from '@chakra-ui/react';
import Image from 'next/image';
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaPhoneAlt,
  FaRegEnvelope,
  FaYoutubeSquare,
} from 'react-icons/fa';
import Container from '../Container';

export default function Footer() {
  return (
    <chakra.footer>
      <Box bgColor="white" color="primary.500">
        <Container>
          <Flex
            direction={{ base: 'column', lg: 'row' }}
            gap={{ base: '3rem', lg: '0' }}
            alignItems={{ base: 'center', lg: 'flex-start' }}
            justifyContent="space-between"
            padding="3rem 0"
          >
            <chakra.figure>
              <Image
                src="/images/logo-franca-venda.png"
                width={150}
                height={60}
              />
            </chakra.figure>
            <chakra.div>
              <Heading
                as="h4"
                fontSize="1.2rem"
                textTransform="uppercase"
                fontWeight="900"
                textAlign={{ base: 'center', lg: 'left' }}
              >
                Siga nossas redes sociais
              </Heading>
              <List
                display="flex"
                gap="1.5rem"
                margin="1rem 0 0 0"
                justifyContent={{ base: 'center', lg: 'flex-start' }}
              >
                <ListItem>
                  <chakra.a
                    href="https://www.facebook.com/francavenda/"
                    target="_blank"
                    rel="noreferrer"
                    _hover={{ color: 'primary.600' }}
                  >
                    <FaFacebookSquare size={36} />
                  </chakra.a>
                </ListItem>
                <ListItem>
                  <chakra.a
                    href="https://www.instagram.com/francavenda/"
                    target="_blank"
                    rel="noreferrer"
                    _hover={{ color: 'primary.600' }}
                  >
                    <FaInstagramSquare size={36} />
                  </chakra.a>
                </ListItem>
                <ListItem>
                  <chakra.a
                    href="https://www.youtube.com/channel/UC-p-qH1aiuyAbYbDRmk2brw"
                    target="_blank"
                    rel="noreferrer"
                    _hover={{ color: 'primary.600' }}
                  >
                    <FaYoutubeSquare size={36} />
                  </chakra.a>
                </ListItem>
                <ListItem>
                  <chakra.a
                    href="https://www.linkedin.com/showcase/franca-venda/"
                    target="_blank"
                    rel="noreferrer"
                    _hover={{ color: 'primary.600' }}
                  >
                    <FaLinkedin size={36} />
                  </chakra.a>
                </ListItem>
              </List>
            </chakra.div>
            <chakra.div>
              <Heading
                as="h4"
                fontSize="1.2rem"
                textTransform="uppercase"
                fontWeight="900"
                textAlign={{ base: 'center', lg: 'left' }}
              >
                Atendimento ao cliente
              </Heading>
              <List
                display="flex"
                flexDirection="column"
                gap="0.5rem"
                margin="1rem 0 0 0"
              >
                <ListItem
                  display="flex"
                  alignItems="center"
                  gap="0.75rem"
                  fontWeight="800"
                  justifyContent={{ base: 'center', lg: 'flex-start' }}
                >
                  <FaPhoneAlt /> (83) 2107-8900
                </ListItem>
                <ListItem
                  display="flex"
                  alignItems="center"
                  gap="0.75rem"
                  fontWeight="800"
                  justifyContent={{ base: 'center', lg: 'flex-start' }}
                >
                  <FaRegEnvelope />{' '}
                  <chakra.a
                    href="mailto:comunicacao@francavenda.com.br"
                    _hover={{ color: 'primary.600' }}
                  >
                    comunicacao@francavenda.com.br
                  </chakra.a>
                </ListItem>
              </List>
            </chakra.div>
          </Flex>
        </Container>
      </Box>
      <Box bgColor="primary.500" color="white" padding="1rem 0">
        <Container>
          <Flex>
            <chakra.div bgColor="primary.500" color="white" fontSize="1rem">
              2022 &copy; Todos os direitos reservados
            </chakra.div>
          </Flex>
        </Container>
      </Box>
    </chakra.footer>
  );
}
