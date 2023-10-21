import React from "react";
import styles from "./styles.module.css";

export type CardProps = {
  title: string;
};

export const CityCard = ({ title }: CardProps) => {
  return (
    <section className={styles.container} title={title}>
      <div className={styles.content}>
        <h1>{title}</h1>
      </div>
    </section>
  );
};
