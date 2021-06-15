const setPageTitle = (title: string | undefined): void => {
  if (title) {
    document.title = title;
  }
};

export default setPageTitle;
