function list(inputNum) {
  var itemList = []
  for (var i = 1; i <= inputNum; i++) {
    if ((i % 3 === 0) && (i % 5 === 0)) {
      itemList.push("pingpong");
    } else if (i % 5 === 0) {
      itemList.push("pong");
    } else if (i % 3 === 0) {
      itemList.push("ping");
    } else {
      itemList.push(i);

    }
  }
  return itemList
}


jQuery(document).ready(function() {
  $(".game").submit(function(event) {
    event.preventDefault()
    var inputNum = parseInt($('input#inp').val());
    var results = list(inputNum)
    results.forEach(function(result) {
      $("#outputList").append("<li>" + result + "</li>")
    })

  });
});
