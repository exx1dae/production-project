// @ts-ignore
import webpack from "webpack";
import { BuildPaths } from "../build/types/config";
// @ts-ignore
import path from "path";
import { buildCssLoader } from "../build/loaders/buildCssLoader";
import { buildSvgLoader } from "../build/loaders/buildSvgLoader";

export default ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPaths = {
    build: "",
    html: "",
    entry: "",
    src: path.resolve(__dirname, "..", "..", "src"),
    locales: path.resolve(__dirname, "public", "locales"),
    buildLocales: path.resolve(__dirname, "build", "locales"),
  };

  config!.resolve!.modules!.push(paths.src);
  config!.resolve!.extensions!.push(".ts", ".tsx");

  // eslint-disable-next-line no-param-reassign
  config!.module!.rules = config!.module!.rules!.map(
    // @ts-ignore
    (rule: webpack.RuleSetRule) => {
      if (/svg/.test(rule.test as string)) {
        return { ...rule, exclude: /\.svg$/i };
      }

      return rule;
    },
  );

  config!.module!.rules.push(buildSvgLoader());
  config!.module!.rules.push(buildCssLoader(true));

  config!.plugins!.push(
    new webpack.DefinePlugin({
      DEV: true,
      __API__: JSON.stringify(""),
      __PROJECT__: JSON.stringify("storybook"),
    }),
  );

  return config;
};
