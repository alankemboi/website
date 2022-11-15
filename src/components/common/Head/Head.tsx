import NextHead from 'next/head';
import { FC } from 'react';
import { DefaultSeo } from 'next-seo';
import config from '../../../config/seo.json';

const Head: FC = () => (
  <>
    <DefaultSeo {...config} />
    <NextHead>
      <title>Kemboi | Blog</title>
      <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      <link rel="shortcut icon" href="/favicon.svg" />
      <link rel="manifest" href="/site.webmanifest" key="site-manifest" />
    </NextHead>
  </>
);

export default Head;
