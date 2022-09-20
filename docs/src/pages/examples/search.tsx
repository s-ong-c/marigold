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
  Box,
  Button,
  Image,
  Inline,
  MarigoldProvider,
  Split,
  Stack,
  TextField,
} from '@marigold/components';
import { Search } from '@marigold/icons';
import { useState } from 'react';
import useSWR, { Key, Fetcher } from 'swr';

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

const SearchForm = ({ query, onSubmit }) => (
  <form onSubmit={onSubmit}>
    <Inline space="small">
      <TextField
        label="Search"
        description="Type in what you are looking for!"
        placeholder="Search..."
        width="huge"
        value={query}
      />
      <Button variant="primary" size="small" type="submit">
        <Search /> Search
      </Button>
    </Inline>
  </form>
);

export default () => {
  const { current, themes } = useThemeSwitch();
  const theme = (current && themes[current]) || themes.b2b2;

  const [query, setQuery] = useState('');

  const { data, error } = useSWR(
    `https://swapi.dev/api/people/?search=${query}`,
    fetcher
  );

  const handleSubmit = ev => {
    ev.preventDefault();

    console.log(ev);
  };

  return (
    <MarigoldProvider theme={theme} selector="#search-example">
      <Box id="#search-example">
        <Stack space="xlarge">
          <Navigation />
          <SearchForm query={query} onSubmit={handleSubmit} />
          <Aside space="small">
            <div style={{ width: '10em' }}>liste</div>
            <div>details</div>
          </Aside>
        </Stack>
      </Box>
    </MarigoldProvider>
  );
};
