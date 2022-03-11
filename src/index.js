function sum() {
  let args = Array.from(arguments)
  return args.reduce((start, result) => {
    return start + result
  }, 0)
}
console.log(sum(1, 2))
export { sum }
