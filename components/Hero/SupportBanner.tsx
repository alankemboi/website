import { NavLink, Paper, PaperProps, Text } from '@mantine/core';
import { IconBrandPatreon } from '@tabler/icons';
// import Link from 'next/link';
import React from 'react';

function SupportBanner(props: PaperProps) {
  return (
    <>
      <Paper {...props}>
        <NavLink
          sx={(theme) => ({
            borderRadius: theme.radius.sm,
          })}
          component="a"
          href="https://www.patreon.com/makotools"
          color="orange"
          variant="filled"
          active
          icon={<IconBrandPatreon size={16} />}
          label={<Text weight={700}>Support us on Patreon!</Text>}
          description="Get exclusive perks and beta features!"
          target="_blank"
        />
      </Paper>
    </>
  );
}

export default SupportBanner;
