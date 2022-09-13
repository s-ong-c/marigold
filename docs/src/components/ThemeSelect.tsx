import * as React from 'react';
import { Button, Menu, Select } from '@marigold/components';
import { useThemeSwitch } from '~/components';

export const ThemeSelect = () => {
  const { current, themes, setTheme } = useThemeSwitch();

  return (
    <Menu.Trigger>
      <Button variant="menu" size="small">
        Choose Menu
      </Button>
      <Menu>
        {Object.keys(themes).map(name => (
          <Menu.Item>{name}</Menu.Item>
        ))}
      </Menu>
    </Menu.Trigger>
  );
  // return (
  //   <Select
  //     id="theme-select"
  //     selectedKey={current}
  //     onSelectionChange={current => setTheme(current)}
  //     aria-label="theme-select"
  //   >
  //     {Object.keys(themes).map(name => (
  //       <Select.Option key={name}>{name}</Select.Option>
  //     ))}
  //   </Select>
  // );
};
