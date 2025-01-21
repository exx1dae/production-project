import { memo } from "react";
import { Skeleton } from "shared/ui/Skeleton/Skeleton";
import { VStack } from "shared/ui/Stack";

export const ArticleDetailsSkeleton = memo(() => {
  return (
    <VStack full gap={16}>
      <Skeleton width={128} height={128} border="50%" />
      <VStack gap={4} full align="start">
        <Skeleton width={300} height={32} />
        <Skeleton width={600} height={24} />
      </VStack>
      <VStack full gap={8}>
        <Skeleton width="100%" height={200} />
        <Skeleton width="100%" height={200} />
      </VStack>
    </VStack>
  );
});
