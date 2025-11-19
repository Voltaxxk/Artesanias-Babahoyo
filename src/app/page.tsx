import Image from "next/image";
import styles from "./page.module.css";
import MainNavigation from './_components/MainaNavigation/MainNavigation';
import Link from "next/link";


export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />

        <h1 className="text-brand-600 text-3xl font-bold">Artesanias</h1>
        <MainNavigation />
        <Link href="/about">About</Link>
      </main>
    </div>
  );
}
