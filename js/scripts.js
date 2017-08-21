jQuery(document).ready(function(){
  $(".game").submit(function(event){
    event.preventDefault()
    var inputNum=parseInt($('input#inp').val());
    console.log(inputNum);
    bsns (inputNum)
  });
});





var bsns = function(inputNum){
  for (var i=1; i<=inputNum; i++){
    if ((i%3 === 0)&&(i%5 === 0)){
      console.log("pingpong");
    }else if (i%5 === 0) {
      console.log("pong");
    }else if (i%3 === 0) {
      console.log("ping");
    }else {
      console.log(i);
    }
  }
};
