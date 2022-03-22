import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>4dev</title>
        <meta name="description" content="cs4dev portfolio" />
        <link rel="icon" href="/favicon.ico?v=2" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Hi, CS 4 DEV
        </h1>
      </main>
    </div>
  )
}

export default Home
