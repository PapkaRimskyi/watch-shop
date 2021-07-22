const buttonManipulationHandler = (e: React.MouseEvent): void => {
  e.preventDefault();
  const target = e.target as HTMLElement;
  if (target.closest('button')) {
    const button = target.closest('button') as HTMLButtonElement;
    if (button.classList.contains('basket')) {
      console.log('basket');
    } else {
      console.log('favorite');
    }
  }
};

export default buttonManipulationHandler;
