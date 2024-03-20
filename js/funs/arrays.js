function arrays(arr1, arr2) {

    for (n1 of arr1) {
        
        for (n2 of arr2) {

            if (n1 === n2) {

                return arr2.indexOf(n2)

            }

        }
    }

    return -1

}

console.log(arrays([10,20,30], [30,2,40,50]))