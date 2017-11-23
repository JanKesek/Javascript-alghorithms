function chunkArrayInGroups(arr, size) {
	var groups = []; //pozwala wrzucic mniejsze arraye w jedna wieksza przez wlasnosc .push()
	for (var i=0; i<arr.length; i+=size) //petla for uzyteczna dla powtarzania jednej funkcji na danym array az do skutku.
//Pierwszy warunek - gdzie sie zaczyna. Drugi - gdzie sie konczy. Trzeci jak dojsc do celu.
	{
		groups.push(arr.slice(i, i+size)); //wrzuca do push arr podzielone na rowne czesci (ktorych poczatkiem jest i a koncem i +size)
	}
	return groups;
}


chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2) // should return [[0, 1], [2, 3], [4, 5], [6, 7], [8]]

// kod dzieli jedna array na kilka array, zlozonych z size liczby elementow (chyba ze ostatek nie spelnia size)
