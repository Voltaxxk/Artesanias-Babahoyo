import Image from "next/image";
import styles from "./page.module.css";
import MainNavigation from './_components/MainaNavigation/MainNavigation';
import Link from "next/link";
import Hero from "./_components/Hero/Hero";


export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
      
        <MainNavigation />
        <Hero/>
      
      </main>
    </div>
  );
}
