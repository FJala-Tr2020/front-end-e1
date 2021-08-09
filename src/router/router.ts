export const index = () => {
  document.querySelector<HTMLElement>('#content-area')!.style.display = 'none';
  document.querySelector<HTMLElement>('#sales-area')!.style.display = 'none';
};
export const leads = () => {
  document.querySelector<HTMLElement>('#content-area')!.style.display = 'block';
  document.querySelector<HTMLElement>('#sales-area')!.style.display = 'none';
};
export const sales = () => {
  document.querySelector<HTMLElement>('#content-area')!.style.display = 'none';
  document.querySelector<HTMLElement>('#sales-area')!.style.display = 'block';
};
