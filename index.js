// add solution here

function theBeatlesPlay(musicians, instruments){
  var array = [];
  for( i = 0; i <= musicians.length; i++){
    var temp = `${musicians} plays ${instruments}`;
    array.push(temp);
  }
  return array;
}