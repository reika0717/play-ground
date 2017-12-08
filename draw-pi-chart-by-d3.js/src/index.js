import $ from 'jquery'
import _ from 'lodash'
import * as d3 from 'd3'

/*JSONファイル読み込み*/
$.getJSON('/score.json', function(data) {
  var grade1 = data.examResults.grade1
  var mathScore = _.find(grade1, {group_cd: 'Math'}).values
  var mathScoreCount = mathScore.map(data => data.count)

  //点数をグレード分け
  var scoreList = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  mathScoreCount.map(score => {
    var index = Math.floor(score * 0.1)
    scoreList[index] += 1
  })
  console.log(scoreList)

  //グレード分けしたscoreListをソート
  // var scoreListSorted = _.sortBy(scoreList, data => -data)
  // scoreListSorted = _.reject(scoreListSorted, data => data === 0)
  // console.log(scoreListSorted)
  //
  // //ここから描画
  // var width = 200,
  //     height = 200;
  //
  // var svg = d3.select("body").append("svg")
  // .attr("width", width)
  // .attr("height", height)
  // .append("g")
  // .attr("transform", "translate(100,100)");
  //
  // var r = 100;
  // var arc = d3.arc()
  // .innerRadius(80)
  // .outerRadius(r);
  //
  // var pie = d3.pie();
  //
  // svg.selectAll("path").data(pie(scoreListSorted)).enter() // pie(data)で変換している。
  // .append("path")
  // .attr('fill', 'blue')
  // .attr("d", function(c){ return arc(c);}) // arcはstartAngleとendAngleのオブジェクトがあれば自動で取る。
  // .attr('stroke', '#fff')
})
