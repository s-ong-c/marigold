import * as React from 'react';
import { useThemeSwitch } from './ThemeSwitch';
import { Select } from '@marigold/components';

export const ThemeSelect = () => {
  const { current, themes, setTheme } = useThemeSwitch();

  return (
    <Select
      id="theme-select"
      selectedKey={current}
      value={current}
      onSelectionChange={current => setTheme(current)}
      aria-label="theme-select"
    >
      {Object.keys(themes).map(name => (
        <Select.Option key={name}>{name}</Select.Option>
      ))}
    </Select>
  );
};