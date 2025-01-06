import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import ArticleDetailsPage from "./ArticleDetailsPage";
import StoreDecorator from "shared/config/storybook/StoreDecorator/StoreDecorator";
import { Article } from "entities/Article";
import {
  ArticleBlockType,
  ArticleType,
} from "entities/Article/model/types/article";

export default {
  title: "pages/ArticleDetailsPage",
  component: ArticleDetailsPage,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof ArticleDetailsPage>;

const Template: ComponentStory<typeof ArticleDetailsPage> = (args) => (
  <ArticleDetailsPage {...args} />
);

const article: Article = {
  id: "1",
  title: "Javascript news",
  subtitle: "Что нового в JS за 2022 год?",
  img: "https://teknotower.com/wp-content/uploads/2020/11/js.png",
  views: 1022,
  createdAt: "26.02.2022",
  type: [ArticleType.IT],
  blocks: [
    {
      id: "1",
      type: ArticleBlockType.TEXT,
      title: "Заголовок этого блока",
      paragraphs: [
        "Программа, которую по традиции называют «Hello, world!», очень проста. " +
          "Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.",
        "JavaScript — это язык, программы на котором можно выполнять в разных средах. " +
          "В нашем случае речь идёт о браузерах и о серверной платформе Node.js. " +
          "Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, " +
          "на настольном компьютере, это значит, что вы буквально в считанных секундах от " +
          "своей первой JavaScript-программы.",
      ],
    },
    {
      id: "4",
      type: ArticleBlockType.CODE,
      // eslint-disable-next-line max-len
      code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;',
    },
    {
      id: "5",
      type: ArticleBlockType.TEXT,
      title: "Заголовок этого блока",
      paragraphs: [
        "Программа, которую по традиции называют «Hello, world!», очень проста. " +
          "Она выводит куда-либо фразу «Hello, world!», или другую подобную, " +
          "средствами некоего языка.",
      ],
    },
    {
      id: "2",
      type: ArticleBlockType.IMAGE,
      src: "https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png",
      title: "Рисунок 1 - скриншот сайта",
    },
  ],
};

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [
  StoreDecorator({
    articleDetails: {
      data: article,
    },
  }),
];