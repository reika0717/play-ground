const list1 = [
  '中村 享介',
  '高津戸 壮',
  '小山田 晃浩',
  '外村 奈津子',
  '德田 和規',
  '山田 順久',
  '山田 敬美',
  '小原 司',
  '坂巻 翔大郎',
  '中島 直博',
  '宇野 陽太',
  '丸山 陽子',
  '大杉 充',
  '森 大典',
  '杉浦 有右嗣',
  '矢倉 眞隆',
  '奥野 賢太郎',
  '藤田 智朗',
]

const list2 = [
  'Kyosuke Nakamura',
  'Takeshi Takatsudo',
  'Akihiro Oyamada',
  'Natsuko Sotomura',
  'Kazunori Tokuda',
  'Yukihisa Yamada',
  'Takami Yamada',
  'Tsukasa Obara',
  'Shotaro Sakamaki',
  'Naohiro Nakajima',
  'Yota Uno',
  'Yoko Maruyama',
  'Makoto Oosugi',
  'Hironori Mori',
  'Yuji Sugiura',
  'Masataka Yakura',
  'Kentaro Okuno',
  'Tomoaki Fujita',
]

const showOptions = names => {
  const el = document.getElementById('js-options')
  el.innerHTML = ''

  for (const name of names) {
    const nameEl = document.createElement('div')
    nameEl.innerHTML = name
    el.append(nameEl)
  }

  if (names.length) {
    el.style.display = 'block'
  } else {
    el.style.display = 'none'
  }
}

const init = () => {
  const input = document.getElementById('js-input')
  const options = document.getElementById('js-options')

  input.addEventListener('keyup', event => {
    console.log('ho')
    const name = event.target.value
    const re = new RegExp(name, 'i')

    if (!name) {
      return showOptions([])
    }

    const names = [...list1, ...list2].filter(name => name.match(re))
    showOptions(names)
  })

  options.addEventListener('click', event => {
    const name = event.target.innerText
    input.value = name
    options.innerHTML = ''
    options.style.display = 'none'
  })
}

document.addEventListener('DOMContentLoaded', init)
