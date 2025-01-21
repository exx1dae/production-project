import { Flex, FlexProps } from "../Flex/Flex";

type VStackProps = Omit<FlexProps, "direction">;

export const VStack = ({ children, ...rest }: VStackProps) => {
  return (
    <Flex direction="column" {...rest}>
      {children}
    </Flex>
  );
};
