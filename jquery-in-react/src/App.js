import React, {Component} from 'react';
import './App.css';
import $ from 'jquery'

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      count: 0
    }
  }

  componentDidMount () {
    this.moveOn()
    this.transitionEnd()
  }

  moveOn () {
    const {$button, $box2} = this
    $($button).on('click', () =>
      $($box2).toggleClass('action')
    )
  }

  transitionEnd () {
    const {$box3} = this

    $($box3).on('transitionend', e => {
      if (e.originalEvent.propertyName === 'width') {
        this.setState(prevState => {
          return {
            count: ++prevState.count
          }
        })
      }
    })
  }

  render () {
    return (
      <div className="App">
        <h1>Transition</h1>
        <p>ホバーすると幅がのびる</p>
        <div className="box box1"></div>
        <hr />

        <p>ボタンを押すとboxが動く</p>
        <div ref={el => this.$box2 = el} className="box box2"></div>
        <button ref={el => this.$button = el} className="button">move on!</button>
        <hr />

        <p>アニメーション回数を計算する</p>
        <div ref={el => this.$box3 = el} className="box box3"></div>
        <p>アニメーション回数：<span className="count">{this.state.count}</span></p>
        <hr  />
        <h1>Animation</h1>

        <p>キーフレームアニメーション</p>
        <div className='box box4'></div>
        <hr />

        <p>カンマ区切りでシーケンシャルの表現</p>
        <div className='box5Wrapper'>
        <div className="box5"></div>
        </div>
        <hr />

        <p>テキストアニメーション</p>
        <section className='container'>
        <h1 className='title'>
          <span>Hi, nice</span>
          <span>to see</span>
          <span>you here</span>
        </h1>
        </section>
      </div>
    )
  }
}

export default App
