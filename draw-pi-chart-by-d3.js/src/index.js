/*JSONファイル読み込み*/
$.getJSON('./src/score.json', function(data) {
  var grade1 = data.examResults.grade1
  var mathScore = _.findWhere(grade1, {group_cd: 'Math'}).values

  var mathScoreCount = mathScore.map(data => data.count)
})
