import { Footer, Text, Anchor, useMantineTheme, Stack, Group, Box, Container } from '@mantine/core';

import { CONSTANTS } from '../../config/constants';
import Affiliates from './affiliates.svg';

// import SvgBackground from './mkt_bg.svg';
import SupportBanner from './SupportBanner';

function Hero({ wide, textOnly }: { wide: boolean; textOnly: boolean }) {
  const theme = useMantineTheme();
  return (
    <Footer
      style={{
        top: 0,
        zIndex: 0,
        display: 'flow-root',
        borderTop: 'none',
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[0],
        position: 'relative',
        overflow: 'hidden',
      }}
      pt="xl"
      p="md"
      height="auto"
    >
      <Text
        color="dimmed"
        sx={{
          svg: {
            position: 'absolute',
            // height: "100%",
            // width: "100%",
            right: 0,
            bottom: 0,
            strokeWidth: 10,
            objectPosition: 'right',
            objectFit: 'cover',
            maskImage: 'linear-gradient(135deg, transparent 70%, #fff6 100%)',
            pointerEvents: 'none',

            width: '200%',
            height: '140%',
          },
        }}
      >
        {/* <SvgBackground /> */}
      </Text>
      <Container
        size="sm"
        px="xl"
        py="md"
        sx={(themes) => ({
          width: '100%',
          '@media (max-width: 768px)': {
            padding: themes.spacing.md,
          },
        })}
      >
        <Group
          sx={{
            flexWrap: 'wrap',
            alignItems: 'flex-start',
          }}
          spacing="xs"
        >
          <Stack
            spacing={3}
            sx={{
              flexBasis: 150,
              maxWidth: 350,
              flexGrow: 1,
              alignItems: 'flex-start',
            }}
            mb="xl"
          >
            <SupportBanner mb="xs" sx={{ width: '100%' }} />
            <Anchor component="a" href="/issues" size="sm">
              Issues and Suggestions
            </Anchor>
            <Anchor component="a" href={`mailto:${CONSTANTS.MAKOTOOLS.EMAIL}`} size="sm">
              {wide}
              Contact Us
            </Anchor>
            <Anchor component="a" href="/about" size="sm">
              About MakoTools
            </Anchor>
            <Text color="dimmed" size="xs" mt="xs">
              <Anchor component="a" href="/about/guidelines" inherit color="dimmed">
                Community Guidelines
              </Anchor>
              <br />
              <Anchor component="a" href="/about/terms" inherit color="dimmed">
                Terms of Service
              </Anchor>
              {' · '}
              <Anchor component="a" href="/about/privacy" inherit color="dimmed">
                Privacy
              </Anchor>
            </Text>
          </Stack>

          <Box sx={{ flexGrow: 0.1 }} />
          <Box sx={{ flex: '1 1 350px', maxWidth: 560 }}>
            {!textOnly && (
              <Text
                color="dimmed"
                mb="xs"
                sx={{
                  svg: {
                    maxWidth: 500,
                    minWidth: 250,
                    width: '60%',
                  },
                }}
              >
                <Affiliates viewBox="0 0 898 239" height="auto" />
              </Text>
            )}
            <Text size="xs" color="dimmed" mt="xs">
              MakoTools is a non-commercial open-sourced fan project. Makotools is not official nor
              related to Ensemble Stars!!, Cacalia Studio, Happy Elements K.K, or Happy Elements in
              any way. All assets belong to their respective owners.
            </Text>
          </Box>
        </Group>
      </Container>
    </Footer>
  );
}

export default Hero;