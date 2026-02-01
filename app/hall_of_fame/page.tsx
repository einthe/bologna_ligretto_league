import Image from "next/image";
import styles from "../page.module.css";
import Background from "../components/backgrounds/hall_of_fame";


export default function HallOfFame() {
  return (
    <main>
      <div className={styles.main}>
        <Background />
      </div>
    </main>
  );
}