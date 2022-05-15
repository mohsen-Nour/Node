function printAll(array){
  var n = array.length
  for(var i=0; i <n; i++ ){
    for(var j=i ; j < n ; j++) {
      for( var k= j; k<n ; k++){
        console.log(array[i] + " " + array[j] +" " + array[k])
      }
    }
  }
}

printAll([1,2,3,5,-3])