import Image from "next/image";
import styles from "./page.module.css";
import Background from "./components/backgrounds/background";
import logo from "@/app/graphics/images/logos/BLL_Logo.png";


export default function Home() {
  return (
    <main>
      <div className={styles.main}>
        <Background />
        {/* <div className={styles.hero_text}>
          <h1>
            Welcome to
          </h1>
        </div> */}
        <div className={styles.hero_logo}>
          <Image src={logo} alt="" width={400} height={400} priority />
        </div>
      </div>
    </main>
  );
}
