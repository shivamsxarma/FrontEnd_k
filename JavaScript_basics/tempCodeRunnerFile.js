   // else{
    //     console.log("number is odd")
    // }
function calc(count) {
  
//   console.log(count);

  return {
    inc: function() {
      count++;
      console.log(count);
    },
    dec: function() {
      count--;
      console.log(count);
    },
    reset: function() {
      count = 0;
      console.log(count);
    }
  };
}

var result = calc(499);
result.inc()
result.inc()
result.inc()