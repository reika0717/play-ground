//higher-oreder-function（高階関数）
const joinString = (n, f) => {
  let s = ''
  for (let i = 0; i < n; i++) {
    s += f(i)
  }
  return s
}

//高階関数を使用して数字の列を表紙する関数
const digit = joinString(10, i => i)

//ランダムな文字列を表示する関数
const randomChars = joinString(8, i =>
  String.fromCharCode(Math.floor(Math.random() * 26 + 'a'.charCodeAt(0))),
)

console.log(digit)
console.log(randomChars)
