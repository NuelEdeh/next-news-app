import Head from "next/head";
import Image from "next/image";
import { Toolbar } from "../components/toolbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="page-container">
      <Toolbar />
      <div className={styles.main}>
        <h1> Sandra's News App</h1>

        <h3>🔥 Latest news articles delivered to your homepage.</h3>
      </div>
    </div>
  );
}
