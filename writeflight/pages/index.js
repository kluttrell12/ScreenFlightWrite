import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Write Flight</title>
        <meta name="description" content="Welcome to my Next.js app" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Write Flight</h1>
      </main>
    </div>
  );
}
