function encode(string) {
  return string.replace(/[aeiou]/g, (x) => {'_aeiou'.indexOf(x)})
}
function decode(string) {
  return string.replace(/[1-5]/g, (x) => {'_aeiou'.charAt(x)})
}