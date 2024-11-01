"use client";

import { useState, FC, MouseEventHandler } from "react";
import cx from "classnames";
import Image from "next/image";
import DefaultImage from "../DefaultImage";

import styles from "./styles.module.css";

interface SecureImageProps {
  type?: string;
  imgSrc?: any;
  className?: any;
  onClickHandler?: MouseEventHandler<HTMLButtonElement | HTMLDivElement>;
  priority?: boolean;
  defaultImageText?: string;
  imgClassName?: string;
  imgAltText?: string;
  objectfit?: any;
  sizes?: string;
  [key: string]: any; // for any additional props
}

const SecureImage: FC<SecureImageProps> = ({
  type = "",
  imgSrc = "",
  className,
  onClickHandler,
  priority = false,
  defaultImageText,
  imgClassName = "",
  imgAltText = "N/A",
  objectfit = "cover",
  sizes = "(max-width: 900px) 100vw, 30vw",
  ...rest
}) => {
  const [fallbackError, setFallbackError] = useState<boolean>(false);

  if (imgSrc === "#") {
    imgSrc = "";
  }

  return (
    <>
      {imgSrc && !fallbackError ? (
        <>
          {onClickHandler ? (
            <button
              className={cx(styles?.disableClick, className)}
              aria-label={imgAltText}
              onClick={onClickHandler}
              style={{ position: "relative" }}
            >
              <Image
                fill
                src={imgSrc}
                sizes={sizes}
                alt={imgAltText}
                priority={priority}
                className={cx("", imgClassName)}
                style={{ objectFit: objectfit }}
                onError={() => setFallbackError(true)}
                {...rest}
              />
            </button>
          ) : (
            <div className={cx(styles.disableClick, className)}>
              <Image
                fill
                src={imgSrc}
                sizes={sizes}
                alt={imgAltText}
                priority={priority}
                className={cx("object-fill", imgClassName)}
                style={{ objectFit: objectfit }}
                onError={() => setFallbackError(true)}
                {...rest}
              />
            </div>
          )}
        </>
      ) : (
        <DefaultImage
          className={cx(
            "flex justify-center items-center text-center",
            className
          )}
          defaultImageText={defaultImageText}
        />
      )}
    </>
  );
};

export default SecureImage;
