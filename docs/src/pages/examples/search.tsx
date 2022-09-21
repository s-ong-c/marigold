/**
 * - API: https://swapi.dev/documentation
 *
 * - search people (optional: toggle between other entitites?)
 * - toggle for wookie
 *
 * - do we need a form library?
 * - what fetch API do we use? -> https://swr.vercel.app/
 */
import {
  Aside,
  Body,
  Box,
  Button,
  Card,
  Center,
  Header,
  Headline,
  Image,
  Inline,
  MarigoldProvider,
  Split,
  Stack,
  Table,
  TextField,
  Container,
} from '@marigold/components';
import { Eye, Search } from '@marigold/icons';
import React from 'react';
import { SetStateAction, useState } from 'react';
import useSWR from 'swr';

import { Link, ThemeSelect, useThemeSwitch } from '~/components';

const fetcher: any = url => fetch(url).then(res => res.json());

const Navigation = () => (
  <nav>
    <Inline space="small">
      <Image src="/sw.png" alt="Star Wars Logo" height={60} />
      <Link href="#">Home</Link>
      <Link href="https://swapi.dev">About</Link>

      <Split />

      <ThemeSelect />
    </Inline>
  </nav>
);

const SearchForm = ({ query, onSubmit, onChange }) => (
  <form onSubmit={onSubmit}>
    <Inline space="small">
      <TextField
        label="Search"
        description="Type in what you are looking for!"
        placeholder="Search..."
        width="huge"
        value={query}
        onChange={onChange}
      />
      <Button variant="primary" size="small" type="submit">
        <Search /> Search
      </Button>
    </Inline>
  </form>
);

const DataList = data => {
  const newData = data.getData?.results;
  const [state, setState] = useState('');

  const onPressHandler = key => {
    setState(key);
    return state;
  };

  return (
    <>
      <Table aria-label="Table">
        <Table.Header>
          <Table.Column>Details</Table.Column>
          <Table.Column>Name</Table.Column>
          <Table.Column>Homeworld</Table.Column>
        </Table.Header>
        <Table.Body>
          {newData?.map(key => (
            <Table.Row key={key.name}>
              <Table.Cell>
                <Button
                  variant="primary"
                  onPress={() => onPressHandler(key)}
                  size="small"
                >
                  <Eye />
                </Button>
              </Table.Cell>
              <Table.Cell>{key.name}</Table.Cell>
              <Table.Cell>{key.homeworld}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      <Details detailData={state} />
    </>
  );
};

const Details = detailData => {
  console.log(detailData);
  return (
    <Card aria-hidden="false">
      <Header>
        <Center>
          <Headline level="2">Detail</Headline>
        </Center>
      </Header>
      <Body>
        <Container>
          Detailview from Search: {detailData.detailData.name}
        </Container>
      </Body>
    </Card>
  );
};

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const { current, themes } = useThemeSwitch();
  const theme = (current && themes[current]) || themes.b2b2;

  const [query, setQuery] = useState('');

  const { data, error } = useSWR(
    `https://swapi.dev/api/people/?search=${query}`,
    fetcher
  );

  const handleSubmit = (event: any) => {
    event.preventDefault();
    // Use FormData to get the input values
    const formData = new FormData(event.target as HTMLFormElement);
    // Optionally, convert FormData into an object
    const dataObject = Object.fromEntries(formData);
    event.target.reset();
  };

  const handleOnChange = (event: SetStateAction<string>) => {
    setQuery(event);
  };

  return (
    <MarigoldProvider theme={theme} selector="#search-example">
      <Box id="#search-example">
        <Stack space="xlarge">
          <Navigation />
          <SearchForm
            query={query}
            onSubmit={handleSubmit}
            onChange={handleOnChange}
          />
          <Aside space="small" sideWidth="10em">
            <DataList getData={data} />
          </Aside>
        </Stack>
      </Box>
    </MarigoldProvider>
  );
};
