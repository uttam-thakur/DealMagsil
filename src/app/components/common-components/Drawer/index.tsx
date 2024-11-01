import cx from "classnames";

import { useEffect, useState, useCallback, ReactNode } from "react";

import styles from "./styles.module.css";

interface DrawerProps {
  open: boolean;
  children: ReactNode;
  direction: "left" | "right" | "up" | "down";
  className?: string;
  maxSize?: boolean;
}

const Drawer: React.FC<DrawerProps> = ({
  open,
  children,
  direction,
  className = "",
  maxSize = false,
}) => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [isMounted, setIsMounted] = useState(false);
  const [componentRef, setComponentRef] = useState<HTMLDivElement | null>(null);

  const handleComponentRef = useCallback((node: HTMLDivElement | null) => {
    if (node) {
      setComponentRef(node);
    }
  }, []);

  const updateDims = useCallback(() => {
    if (componentRef) {
      setDimensions({
        width: componentRef.offsetWidth,
        height: componentRef.offsetHeight,
      });
    }
  }, [componentRef]);

  useEffect(() => {
    if (!isMounted && componentRef) {
      updateDims();
      setIsMounted(true);
      window.addEventListener("resize", updateDims);
    }

    return () => {
      window.removeEventListener("resize", updateDims);
    };
  }, [componentRef, isMounted, updateDims]);

  const computedStyle: React.CSSProperties = {};

  if (direction === "left") {
    computedStyle.right = isMounted
      ? open
        ? 0
        : maxSize
        ? "-100vw"
        : -dimensions.width
      : -9999;
  }

  if (direction === "right") {
    computedStyle.left = isMounted
      ? open
        ? 0
        : maxSize
        ? "-100vw"
        : -dimensions.width
      : -9999;
  }

  if (direction === "up") {
    computedStyle.top = isMounted
      ? open
        ? 0
        : maxSize
        ? "-100vh"
        : -dimensions.height
      : -9999;
  }

  if (direction === "down") {
    computedStyle.bottom = isMounted
      ? open
        ? 0
        : maxSize
        ? "-100vh"
        : -dimensions.height
      : -9999;
  }

  const stateClass = isMounted ? (open ? "open" : "closed") : "closed";

  const classNames = cx(
    ["bg-white", styles[direction], styles[stateClass], styles.slideContainer],
    className,
    {
      "opacity-0": !open,
      "opacity-100": open,
    }
  );

  return (
    <>
      <div className={cx(styles.overlay, className, { [styles.open]: open })} />
      <div
        className={classNames}
        ref={handleComponentRef}
        style={computedStyle}
      >
        {children}
      </div>
    </>
  );
};

export default Drawer;
