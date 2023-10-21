"use client";
import React from "react";
import selectButton from "./select.module.css";

type SelectButtonProps = {
  title: string;
  onClick?: () => void;
};

const SelectCityButton = ({ title }: SelectButtonProps) => {
  return (
    <button className={selectButton.button} onClick={() => console.log(title)}>
      {title}
    </button>
  );
};

export default SelectCityButton;
