var shoppingcart=[];
$(document).ready(function(){
	outputshoppingcart();
$(".productItem").click(function(e){
e.preventDefault();
var iteminfo=$(this.dataset)[0];
iteminfo.qty=1;
var itemincart=false;
$.each(shoppingcart,function(index,value){
	if (value.id==iteminfo.id){
		value.qty=parseInt(value.qty)+parseInt(iteminfo.qty);
		itemincart=true;
	}
});
if (!itemincart) {
	shoppingcart.push(iteminfo);
}
sessionStorage["sca"]=JSON.stringify(shoppingcart);
outputshoppingcart();
});

});

function outputshoppingcart() {
	if (sessionStorage["sca"]!=null) {
		shoppingcart=JSON.parse(sessionStorage["sca"].toString());
		$("#checkoutdiv").show();
	}

    var holderHTML="";
    var total=0;
	var itemcount=0;
	$.each(shoppingcart,function(index,value){
		var stotal=value.qty*value.price;
		total=total+stotal;
		itemcount=itemcount+parseInt(value.qty);
		holderHTML=holderHTML+'<tr><td>' + value.qty + '</td><td>' + value.id + ' ' + value.name + '</td><td> ' + value.price + ' </td><td class="text-xs-right"> ' + stotal + '</td></tr>';
	})
	holderHTML=holderHTML+'<tr><td colspan="3" class="text-xs-right">Total</td><td class="text-xs-right">' + total + '</td></tr>';
	$("#output").html(holderHTML);
	$(".total").html(total);
	$(".items").html(itemcount);
}




