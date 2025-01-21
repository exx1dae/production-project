import { Flex, FlexProps } from "../Flex/Flex";

type HStackProps = Omit<FlexProps, "direction">;

export const HStack = ({ children, ...rest }: HStackProps) => {
  return (
    <Flex direction="row" {...rest}>
      {children}
    </Flex>
  );
};
