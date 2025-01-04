declare module "*.scss" {
  interface IClassNames {
    [classname: string]: string;
  }
  const classNames: IClassNames;
  export = classNames;
}

declare type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>;
    }
  : T;

declare const DEV: boolean;
declare const __API__: string;
declare const __PROJECT__: "storybook" | "frontend" | "jest";

declare module "*.svg" {
  import React from "react";

  const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
  export default SVG;
}
declare module "*.png";
declare module "*.jpeg";
declare module "*.jpg";
