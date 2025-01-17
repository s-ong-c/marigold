import {
  Card,
  Header,
  Headline,
  Body,
  Footer,
  Text,
} from '@marigold/components';

export const BasicBody = () => (
  <>
    <Card>
      <Header>
        <Headline level="2">A really good header!</Headline>
      </Header>
      <Body>
        <Text>In this body fits really great content.</Text>
      </Body>
      <Footer>
        <Text>And awesome footer!</Text>
      </Footer>
    </Card>
  </>
);
