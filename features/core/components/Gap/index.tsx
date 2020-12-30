import React from "react";

import styles from "./styles.module.scss";

type Props = {
  unity?: "rem" | "px" | "%";
  height?: number;
  width?: number;
  size?: number;
};

const Gap: React.FC<Props> = ({
  height = 0,
  width = 0,
  unity = "rem",
  size,
}) => {

  if (size) {
    height = size;
    width = size;
  }

  return (
    <span
      className={styles.gap}
      style={{ width: width + unity, height: height + unity }}
    >
      WorkAttackLovers
    </span>
  );
};

export default Gap;
