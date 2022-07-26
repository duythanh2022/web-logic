import React from "react";
import styles from "./home.module.scss";
const Home = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className="container-header">
          <div className={styles.title}>
            <h1>FREIGHT THAT JUST WORKS</h1>
          </div>
          <div className={styles.subtitle}>
            <span>Compare, book, and manage your freight across the world’s top logistics providers, all on one platform.</span>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
