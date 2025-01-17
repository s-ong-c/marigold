import { Link, Text } from '@marigold/components';

export const LinkTarget = () => (
  <Text>
    Link something nice like{' '}
    <Link href="https://github.com/marigold-ui/marigold" target="_blank">
      Marigold
    </Link>{' '}
    github repositories
  </Text>
);
