export const scrollToCategory = (categoryId: string) => {
  const element = document.getElementById(categoryId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
};