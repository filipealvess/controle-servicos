export function formatPrice(originalPrice) {
  const cleanPrice = originalPrice.replace(/\D/g, '');
  const price = Number(cleanPrice);
  const length = cleanPrice.length;
  let formatedPrice = '';

  if (length === 0 || price === 0) {
    formatedPrice = '0,00';
  }

  if (price < 10) {
    formatedPrice = `0,0${price}`;
  }

  if (price >= 10 && price < 100) {
    formatedPrice = `0,${price}`;
  }

  if (price >= 100 && price < 1000) {
    formatedPrice = `${price}`.replace(/(\d)(\d{2})/, '$1,$2');
  }

  if (price >= 1000 && price < 100000) {
    formatedPrice = `${price}`.replace(/(\d{1,3})(\d{2})/, '$1,$2');
  }

  if (price >= 100000 && price < 100000000) {
    formatedPrice = `${price}`.replace(/(\d{1,3})(\d{3})(\d{2})/, '$1.$2,$3');
  }

  if (price > 10000000) {
    formatedPrice = `${price}`.replace(/(\d{8})\d+?/, '$1')
      .replace(/(\d{3})(\d{3})(\d{2})/, '$1.$2,$3');
  }

  return `R$ ${formatedPrice}`;
}
