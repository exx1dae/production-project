import { classNames } from "shared/lib/classNames/classNames";
import { memo } from "react";

import cls from "./ArticleViewSelector.module.scss";
import { ArticleView } from "../../model/types/article";

import ListIcon from "shared/assets/icons/listIcon.svg";
import GridIcon from "shared/assets/icons/gridIcon.svg";

import { Button, ButtonTheme } from "shared/ui/Button/Button";
import { Icon } from "shared/ui/Icon/Icon";

interface ArticleViewSelectorProps {
  className?: string;
  view: ArticleView;
  onViewClick?: (view: ArticleView) => void;
}

const viewsTypes = [
  {
    view: ArticleView.GRID,
    icon: GridIcon,
  },
  {
    view: ArticleView.LIST,
    icon: ListIcon,
  },
];

export const ArticleViewSelector = memo((props: ArticleViewSelectorProps) => {
  const { className, view, onViewClick } = props;

  const onClickHandler = (newView: ArticleView) => {
    return () => {
      onViewClick?.(newView);
    };
  };

  return (
    <div className={classNames(cls.ArticleViewSelector, {}, [className])}>
      {viewsTypes.map((viewType) => (
        <Button
          key={viewType.view}
          theme={ButtonTheme.CLEAR}
          onClick={onClickHandler(viewType.view)}
          className={classNames("", { [cls.selected]: viewType.view === view })}
        >
          <Icon Svg={viewType.icon} />
        </Button>
      ))}
    </div>
  );
});
