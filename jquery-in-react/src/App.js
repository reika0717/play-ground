import React from 'react';
import './App.css';

const App = () => (
  <div className="App">
    <h1>Transition</h1>
    <p>ホバーすると幅がのびる</p>
    <div className="box box1"></div>
    <hr />

    <p>ボタンを押すとboxが動く</p>
    <div className="box box2"></div>
    <button className="button">move on!</button>
    <hr />

    <p>アニメーション回数を計算する</p>
    <div className="box box3"></div>
    <p>アニメーション回数：<span className="count"></span></p>
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

export default App
