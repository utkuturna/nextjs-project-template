import Head from 'next/head';
import { FunctionComponent, ReactNode } from 'react';
import styles from './MainLayout.module.css';

type Props = {
  children: ReactNode;
};

const MainLayout: FunctionComponent<Props> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Primary Layout Example</title>
      </Head>
      <main className={styles['main-layout']}>{children}</main>
    </>
  );
};

export default MainLayout;
