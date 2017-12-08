import $ from 'jquery'
import find from 'lodash/find'
// import d3 from 'd3'

/*JSONファイル読み込み*/
$.getJSON('/score.json', function(data) {
  var grade1 = data.examResults.grade1
  var mathScore = find(grade1, {group_cd: 'Math'}).values
  var mathScoreCount = mathScore.map(data => data.count)

  //点数をグレード分け
  var scoreList = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  mathScoreCount.map(score => {
    var index = Math.floor(score * 0.1)
    scoreList[index] += 1
  })
  console.log(scoreList)
})
