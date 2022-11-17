import type { NextPage } from 'next';
import { Welcome } from '@components/Welcome';
// import { useEffect } from 'react';
// import { useMantineColorScheme } from '@mantine/core';

const Home: NextPage = () => {
  // const {toggleColorScheme } = useMantineColorScheme();
  // useEffect(() => {
  //   toggleColorScheme('dark');
  // });
  Home.displayName = 'Home';
  return (
    <>
      <Welcome />
    </>
  );
};
export default Home;
