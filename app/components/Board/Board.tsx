"use client";
import React, { useState, useEffect, KeyboardEvent, MouseEvent } from "react";
import styles from "./styles.module.css";

const Board = () => {
  const [selectedSpace, setSelectedSpace] = useState<number | null>(null);

  const handleKeyDown = (event: KeyboardEvent): void => {
    // Handle arrow key navigation to select spaces
    if (
      event.key === "ArrowUp" &&
      selectedSpace !== null &&
      selectedSpace > 2
    ) {
      setSelectedSpace(selectedSpace - 3);
    } else if (
      event.key === "ArrowDown" &&
      selectedSpace !== null &&
      selectedSpace < 6
    ) {
      setSelectedSpace(selectedSpace + 3);
    } else if (
      event.key === "ArrowLeft" &&
      selectedSpace !== null &&
      selectedSpace % 3 !== 0
    ) {
      setSelectedSpace(selectedSpace - 1);
    } else if (
      event.key === "ArrowRight" &&
      selectedSpace !== null &&
      selectedSpace % 3 !== 2
    ) {
      setSelectedSpace(selectedSpace + 1);
    }
  };

  const handleSpaceClick = (index: number) => {
    setSelectedSpace(index);
  };

  console.log(selectedSpace);

  useEffect(() => {
    // Add event listener for keyboard navigation
    document.addEventListener(
      "keydown",
      handleKeyDown as unknown as EventListener
    );

    return () => {
      // Remove event listener on component unmount
      document.removeEventListener(
        "keydown",
        handleKeyDown as unknown as EventListener
      );
    };
  }, []);

  return (
    <div className={styles.board}>
      {Array.from({ length: 9 }).map((_, index) => (
        <div
          key={index}
          className={`${styles.space} ${
            index === selectedSpace ? styles.selected : ""
          }`}
          onClick={() => handleSpaceClick(index)}
        >
          {/* Your card component can be placed here */}
        </div>
      ))}
    </div>
  );
};

export default Board;
