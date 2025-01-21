import { memo } from "react";
import { VStack } from "shared/ui/Stack";
import { CommentCardLoader } from "../CommentCard/CommentCardLoader";

export const CommentListLoader = memo(() => {
  return (
    <VStack full gap={16}>
      <CommentCardLoader />
      <CommentCardLoader />
      <CommentCardLoader />
    </VStack>
  );
});
