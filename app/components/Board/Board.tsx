"use client";
import React, { useState, useEffect, KeyboardEvent, MouseEvent } from "react";
import styles from "./styles.module.css";
import { CityProps } from "types/global";

export type BoardProps = {
  player: string;
  rival: string;
  playerDeck: CityProps[];
  rivalDeck: CityProps[];
  playerPoints: number;
  rivalPoints: number;
};

const Board = () => {
  const [selectedSpace, setSelectedSpace] = useState<number | null>(null);

  const handleKeyDown = (event: KeyboardEvent): void => {
    // Handle arrow key navigation to select spaces
    console.log(event.key);
    if (event.key === "ArrowUp") {
      setSelectedSpace(0);
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
    } else if (event.key === "Enter" && selectedSpace !== null) {
      // Add your logic here to handle the Enter key press on the selected space
      console.log("Enter key pressed on space: " + selectedSpace);
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
        <button
          key={index}
          className={[
            styles.space,
            index === selectedSpace ? styles.selected : "",
          ].join(" ")}
          onClick={() => handleSpaceClick(index)}
          onBlur={() => setSelectedSpace(null)}
          tabIndex={index}
        >
          {/* Your card component can be placed here */}
        </button>
      ))}
    </div>
  );
};

export default Board;
