import { styled } from '@linaria/react';
import { Header } from '../components/typography/Header';
import { Flex } from '../components/layout/index';

export const Home = () => {
  return (
    <Container direction="column" align="flex-start" justify="center">
      <Header as="h1" size="xlarge">
        Hi, I'm Evan Godon
      </Header>
      <Header as="h2" size="large">
        I'm a software developer from Montreal. Welcome to my website.
      </Header>
    </Container>
  );
};

const Container = styled(Flex)`
  grid-column: 2;
`;