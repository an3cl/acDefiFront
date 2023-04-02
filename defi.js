// https://api.coindesk.com/v1/bpi/currentprice.json
function updateRate() {
  $.getJSON("https://api.coindesk.com/v1/bpi/currentprice.json", function(data){
    $("#btcvalue").text(data.bpi.EUR.rate);
  });
  //kjhkj

}
$(document).ready(updateRate);
