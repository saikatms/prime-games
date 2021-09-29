import { useLayoutEffect } from "react";

const useDocumentTitle = (title) => {
  useLayoutEffect(() => {
    if (title) {
      document.title = title;
    } else {
      document.title = "All Is Well - Pharmacy";
    }
  }, [title]);
};

export default useDocumentTitle;
