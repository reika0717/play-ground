import React, {Component} from 'react'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [
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
      ],
    }
  }

  init(input) {
    const re = new RegExp(input, 'i')

    if (!input) {
      this.setState({...this.state})
    }

    const names = [...this.state.list].filter(name => name.match(re))
    const newState = {...this.state, list: names}
    return newState
  }

  render() {
    let input = ''
    return (
      <div>
        <input
          type="text"
          ref={node => (input = node)}
          onKeyUp={() => {
            this.setState(this.init(input.value))
          }}
        />
        <ul>{this.state.list.map(data => <li>{data}</li>)}</ul>
      </div>
    )
  }
}

export default App
