import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Skeleton.module.scss";

import { CSSProperties, memo } from "react";

interface SkeletonProps {
  className?: string;
  height?: string | number;
  width?: string | number;
  border?: string;
}

export const Skeleton = memo((props: SkeletonProps) => {
  const { className, border, width, height } = props;

  const styles: CSSProperties = {
    width,
    height,
    borderRadius: border,
  };

  return (
    <div style={styles} className={classNames(cls.Skeleton, {}, [className])} />
  );
});
