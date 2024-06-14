// app/components/About.js
import styles from "../styles/About.module.css";

export default function About() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>About Me</h1>
        <p>This is the about page.</p>
      </main>
    </div>
  );
}
