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
  const [selectedSpace, setSelectedSpace] = useState<number>(0);
  const columns = 3;

  const handleKeyDown = (event: KeyboardEvent) => {
    setSelectedSpace((prevSelectedSpace) => {
      let newSelectedSpace = prevSelectedSpace;

      switch (event.key) {
        case "ArrowLeft":
          if (newSelectedSpace % columns !== 0) newSelectedSpace -= 1;
          break;
        case "ArrowRight":
          if (newSelectedSpace % columns < columns - 1) newSelectedSpace += 1;
          break;
        case "ArrowUp":
          if (newSelectedSpace - columns >= 0) newSelectedSpace -= columns;
          break;
        case "ArrowDown":
          if (newSelectedSpace + columns < columns * columns)
            newSelectedSpace += columns;
          break;
        default:
          break;
      }

      return newSelectedSpace;
    });
  };

  const handleSpaceClick = (index: number) => {
    setSelectedSpace(index);
  };

  useEffect(() => {
    document.addEventListener(
      "keydown",
      handleKeyDown as unknown as EventListener
    );

    return () => {
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
        >
          {/* Your card component can be placed here */}
        </button>
      ))}
    </div>
  );
};

export default Board;
