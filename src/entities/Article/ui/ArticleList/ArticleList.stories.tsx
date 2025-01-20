import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { ArticleList } from "./ArticleList";
import {
  Article,
  ArticleBlockType,
  ArticleType,
  ArticleView,
} from "../../model/types/article";
import storeDecorator from "shared/config/storybook/StoreDecorator/StoreDecorator";

const article: Article = {
  id: "1",
  user: {
    id: "1",
    username: "sarkis",
  },
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

export default {
  title: "entities/Article/ArticleList",
  component: ArticleList,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof ArticleList>;

const Template: ComponentStory<typeof ArticleList> = (args) => (
  <ArticleList {...args} />
);

Template.decorators = [
  storeDecorator({
    articlesPage: {
      entities: {
        article,
      },
    },
  }),
];

export const LoadingList = Template.bind({});
LoadingList.args = {
  articles: [],
  isLoading: true,
  view: ArticleView.LIST,
};

export const LoadingGrid = Template.bind({});
LoadingGrid.args = {
  articles: [],
  isLoading: true,
  view: ArticleView.GRID,
};

export const List = Template.bind({});
List.args = {
  articles: new Array(9).fill(0).map((item, index) => ({
    ...article,
    id: String(index),
  })),
  isLoading: false,
  view: ArticleView.LIST,
};

export const Grid = Template.bind({});
Grid.args = {
  articles: new Array(9).fill(0).map((item, index) => ({
    ...article,
    id: String(index),
  })),
  isLoading: false,
  view: ArticleView.GRID,
};
