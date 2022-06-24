// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'

function reverse(str) {
  if (str.length === 1) return str;
  let lastChar = str.substring(str.length - 1);
  let newStr = str.substring(0, str.length - 1);
  return lastChar + reverse(newStr);
}
