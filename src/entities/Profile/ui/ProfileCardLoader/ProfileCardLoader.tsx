import { classNames } from "shared/lib/classNames/classNames";
import { memo } from "react";

import cls from "./ProfileCardLoader.module.scss";
import { VStack } from "shared/ui/Stack";
import { Skeleton } from "shared/ui/Skeleton/Skeleton";

interface ProfileCardLoaderProps {
  className?: string;
}

export const ProfileCardLoader = memo((props: ProfileCardLoaderProps) => {
  const { className } = props;

  return (
    <VStack
      align="start"
      full
      gap={16}
      className={classNames(cls.ProfileCard, {}, [className])}
    >
      <Skeleton width={64} height={64} border="50%" className={cls.avatar} />
      <Skeleton width="25%" height={27} />
      <Skeleton width="15%" height={27} />
      <Skeleton width="10%" height={27} />
      <Skeleton width="12.5%" height={27} />
      <Skeleton width="25%" height={27} />
      <Skeleton width="35%" height={27} />
      <Skeleton width="25%" height={27} />
      <Skeleton width="30%" height={27} />
    </VStack>
  );
});
