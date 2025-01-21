import { Flex, FlexProps } from "../Flex/Flex";

type VStackProps = Omit<FlexProps, "direction">;

export const VStack = (props: VStackProps) => {
  const { children } = props;
  return (
    <Flex {...props} direction="column">
      {children}
    </Flex>
  );
};
