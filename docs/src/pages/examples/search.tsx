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
import { Link, ThemeSelect, useThemeSwitch } from '~/components';

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

const SearchForm = () => (
  <Inline space="small">
    <form>
      <TextField
        label="Search"
        description="Type in what you are looking for!"
        placeholder="Search..."
        width="huge"
      />
      <Button variant="primary" size="small" type="submit">
        <Search /> Search
      </Button>
    </form>
  </Inline>
);

export default () => {
  const { current, themes } = useThemeSwitch();
  const theme = (current && themes[current]) || themes.b2b2;

  return (
    <MarigoldProvider theme={theme} selector="#search-example">
      <Box id="#search-example">
        <Stack space="xlarge">
          <Navigation />
          <SearchForm />
          <Aside space="small">
            <div style={{ width: '10em' }}>liste</div>
            <div>details</div>
          </Aside>
        </Stack>
      </Box>
    </MarigoldProvider>
  );
};
