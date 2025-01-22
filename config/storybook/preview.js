import { addDecorator } from "@storybook/react";
import { RouterDecorator } from "../../src/shared/config/storybook/RouterDecorator/RouterDecorator";
import { CenterDecorator } from "../../src/shared/config/storybook/CenterDecorator/CenterDecorator";

addDecorator(CenterDecorator);
addDecorator(RouterDecorator);
