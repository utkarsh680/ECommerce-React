import React from "react";
import styles from "../styles/home.module.scss";

export default function Home() {
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((json) => console.log(json));

  return (
    <>
      <div className={styles.container}>
        hello sir
      </div>
    </>
  );
}
