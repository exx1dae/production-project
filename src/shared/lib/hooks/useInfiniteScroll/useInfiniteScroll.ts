import { MutableRefObject, useEffect } from "react";

export interface UseInfiniteScrollOptions {
  callback?: () => void;
  triggerRef: MutableRefObject<HTMLElement>;
  wrapperRef: MutableRefObject<HTMLElement>;
}

export const useInfiniteScroll = (props: UseInfiniteScrollOptions) => {
  const { callback, wrapperRef, triggerRef } = props;

  useEffect(() => {
    let observer: IntersectionObserver | null = null;
    const wrapperElement = wrapperRef.current;
    const triggerElement = triggerRef.current;

    if (callback) {
      const options = {
        root: wrapperElement,
        rootMargin: "0px",
        threshold: 0.01,
      };

      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log("Trigger intersected");
            callback();
          }
        });
      }, options);

      observer.observe(triggerElement);
    }

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, [triggerRef, wrapperRef, callback]);
};
