function StopWatchCreate() {
  return new Date().getTime();
}

var start = StopWatchCreate();

function elpasedTime(start) {
  var now = new Date().getTime();
  return (now - start);
}

console.log(elpasedTime(start));
