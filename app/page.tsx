import Image from "next/image";
import styles from "./page.module.css";
import Background from "./components/backgrounds/background3";


export default function Home() {
  return (
    <main>
      <div className={styles.main}>
        <Background />
      </div>
    </main>
  );
}
