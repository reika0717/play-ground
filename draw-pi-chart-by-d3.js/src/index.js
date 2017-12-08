import $ from 'jquery'
import find from 'lodash/find'
// import d3 from 'd3'

/*JSONファイル読み込み*/
$.getJSON('/score.json', function(data) {
  var grade1 = data.examResults.grade1
  var mathScore = find(grade1, {group_cd: 'Math'}).values

  var mathScoreCount = mathScore.map(data => data.count)
})
