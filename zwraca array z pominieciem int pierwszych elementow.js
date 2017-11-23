function slasher(arr,howMany) { 
	return arr.splice(howMany);
	}

slasher([1, 2, 3], 4);  // obcina arr o 4 pierwsze elementy
slasher(["burgers", "fries", "shake"], 1);  //obcina arr o pierwszy element