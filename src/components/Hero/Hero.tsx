import { Paper, PaperProps, Text } from '@mantine/core';

export default function Hero(props: PaperProps) {
  return (
    <Paper radius="md" p="xl" withBorder {...props}>
      <Text size="lg" weight={500}>
        Welcome to Kemboi-dev
      </Text>
      {/*  */}
    </Paper>
  );
}
