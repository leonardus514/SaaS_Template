import { createStyles, Container, Group, Anchor } from '@mantine/core';
import { MantineLogo } from '@mantine/ds';
import React from 'react';

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: 120,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    borderTop: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,

    [theme.fn.smallerThan('xs')]: {
      flexDirection: 'column',
    },
  },

  links: {
    [theme.fn.smallerThan('xs')]: {
      marginTop: theme.spacing.md,
    },
  },
}));

interface FooterSimpleProps {
  links: { link: string; label: string }[];
}

export function Footer({ links }: FooterSimpleProps) {
  const { classes } = useStyles();

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <MantineLogo size={28} />
        <Group className={classes.links}>
            <Anchor color="dimmed" size="sm" href="https://mantine.dev/" target="_blank">
                 Mantine docs
            </Anchor>
            <Anchor color="dimmed" size="sm" href="https://mantine.dev/" target="_blank">
                 Mantine docs
            </Anchor>
            <Anchor color="dimmed" size="sm" href="https://mantine.dev/" target="_blank">
                 Mantine docs
            </Anchor>
        </Group>
      </Container>
    </div>
  );
}