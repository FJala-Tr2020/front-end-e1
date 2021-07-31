export const index = () => {
  document.querySelector<HTMLElement>('#content-area')!.style.display = 'none';
};
export const leads = () => {
  document.querySelector<HTMLElement>('#content-area')!.style.display = 'block';
};
export const sales = () => {
  document.querySelector<HTMLElement>('#content-area')!.style.display = 'none';
};
