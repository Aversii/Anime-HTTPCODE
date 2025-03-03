"use client"
import Footer from './component/footer/footer';
import Header from './component/header/header';
import styles from './page.module.css';
import StatusGrid from './component/grid/grid';

export default function Home() {
  return (
    <div className={styles.page}>
      <Header logo="logo" text="HTTP STATUS CODE ANIME  " />
      <StatusGrid />  
      <Footer />
    </div>
  );
}
