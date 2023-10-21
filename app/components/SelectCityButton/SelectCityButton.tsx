"use client";
import React, { ReactNode } from "react";
import styles from "./styles.module.css";

type SelectButtonProps = {
  title: string;
  selectCity: (name: string) => void;
  children: ReactNode;
};

const SelectCityButton = ({
  title,
  selectCity,
  children,
}: SelectButtonProps) => {
  return (
    <button className={styles.button} onClick={() => selectCity(title)}>
      {children}
    </button>
  );
};

export default SelectCityButton;
