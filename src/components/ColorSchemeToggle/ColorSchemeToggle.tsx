import { ActionIcon, Group, Popover, Text, useMantineColorScheme } from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons';

export function ColorSchemeToggle() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  return (
    <Group position="center">
      <ActionIcon
        onClick={() => toggleColorScheme('dark')}
        size="md"
        sx={(theme) => ({
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
          color: theme.colorScheme === 'dark' ? theme.colors.yellow[4] : theme.colors.blue[6],
        })}
      >
        {colorScheme === 'dark' ? (
          <Popover withArrow trapFocus position="bottom">
            <Popover.Target>
              <IconSun size={20} stroke={1.5} />
            </Popover.Target>
            <Popover.Dropdown>Light mode disabled</Popover.Dropdown>
          </Popover>
        ) : (
          <IconMoonStars size={20} stroke={1.5} />
        )}
      </ActionIcon>
    </Group>
  );
}
