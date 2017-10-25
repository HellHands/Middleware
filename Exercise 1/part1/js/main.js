$(document).ready(function (){
	$(".submit").on("click", function(){
		var amount 		= $("#total_amount").val(); //fetch amount from form
		var pct 		= $("#tax_pct").val(); 		//fetch tax percentage from form
		var currency 	= $("#currency").val();		//fetch currency selected

		if (currency === "dollar") {
			currency = "Dollar";
		} else if (currency === "euro") {
			currency = "Euro";
		} else {
			currency = "N/A";
		}

		pct = pct/100;								//get the value based on percentage

		var calculatedPct 	= (pct)*(amount);		//calculate amount based on percentage
		var total_amount 	= parseInt(calculatedPct) + parseInt(amount);	//calculate total amount with amount calculated from percentage value.

		$("div#result").empty();					//clear the div 
		$("div#result").append("The total amount is " + total_amount + " " + currency);		//output the result


	});
});