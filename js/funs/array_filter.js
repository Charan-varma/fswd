let a = [1,3,4,5,10,30]

function isOdd(n) {
    return n % 2 == 1
}

var odd_nums1 = a.filter(isOdd)
console.log(odd_nums1)

var odd_nums2 = a.filter(function (n) {
    return n % 2 == 1
})
console.log(odd_nums2)

var odd_nums3 = a.filter((n) => n % 2 == 1)
console.log(odd_nums3)
