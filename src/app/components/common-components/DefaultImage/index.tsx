import cx from "classnames";
import React, { FC } from "react";

import { twMerge } from "tailwind-merge";

import styles from "./styles.module.css";

interface DefaultImageProps {
  className?: string;
  defaultImageText?: string;
}

const DefaultImage: FC<DefaultImageProps> = ({
  className = "",
  defaultImageText,
}) => {
  return (
    <div className={twMerge(cx(styles.container, className))}>
      <div>{defaultImageText ? defaultImageText : "Image not available"}</div>
    </div>
  );
};

export default DefaultImage;