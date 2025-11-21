import Image from "next/image";
import styles from "./page.module.css";
import MainNavigation from './_components/MainaNavigation/MainNavigation';
import Link from "next/link";
import Hero from "./_components/Hero/Hero";
import ImageInfo from './_components/Shared/ImageInfo/ImageInfo';
import HighlightProducts from './_components/highlightProducts/HighlightProducts';


export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
      
        <MainNavigation />
        <Hero/>
        <ImageInfo />
        <HighlightProducts />
      </main>
    </div>
  );
}
