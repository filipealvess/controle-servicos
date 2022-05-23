export function formatPhone(originalPhone) {
  return originalPhone.replace(/\D/g, '')
    .replace(/^(\d)/, '($1')
    .replace(/\((\d)(\d)(\d)/, '($1$2) $3')
    .replace(/(\d{5})(\d)/, '$1-$2')
    .replace(/(-\d{4})\d+?/, '$1');
}
