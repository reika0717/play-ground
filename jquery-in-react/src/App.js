import React from 'react';
import './App.css';

const App = () => (
  <div className="App">
    <h1>Transition</h1>
    <p>ホバーすると幅がのびる</p>
    <div class="box box1"></div>
    <hr />

    <p>ボタンを押すとboxが動く</p>
    <div class="box box2"></div>
    <button class="button">move on!</button>
    <hr />

    <p>アニメーション回数を計算する</p>
    <div class="box box3"></div>
    <p>アニメーション回数：<span class="count"></span></p>
    <hr  />
    <h1>Animation</h1>

    <p>キーフレームアニメーション</p>
    <div class='box box4'></div>
    <hr />

    <p>カンマ区切りでシーケンシャルの表現</p>
    <div class='box5Wrapper'>
    <div class="box5"></div>
    </div>
    <hr />

    <p>テキストアニメーション</p>
    <section class='container'>
    <h1 class = 'title'>
      <span>Hi, nice</span>
      <span>to see</span>
      <span>you here</span>
    </h1>
    </section>
  </div>
)

export default App
