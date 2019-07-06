chrome.storage.sync.get(null, function(items) {
var ship = items.selected_ship;
console.log(items.selected_ship);
var souryou = document.querySelector("[data-testid = 'SpcOrderSummarySubtotalsShipping']").children[1].textContent;
var kingaku =parseInt(souryou.match(/\d+/gm))
if(kingaku >ship){
alert('送料は'+kingaku+'円です');
}
});


