// app/page.tsx
import Image from "next/image";
import styles from "./styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to My Portfolio</h1>
        <Image
          src="/images/profile.PNG"
          alt="Profile Picture"
          width={150}
          height={150}
        />
        <p className={styles.description}>
          Hi, I'm Oumaima, a student. Here you'll find some of my work and
          projects.
        </p>
      </main>
    </div>
  );
}
