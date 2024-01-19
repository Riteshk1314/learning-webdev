//*********Arrays*******
const myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]//elements can have diff data types
const myarr2= new Array(1,2,3,4,5,6,7,8,9,10)
myArr.push(6)
myArr.unshift(9)
console.log(myArr)

console.log(myArr.length)
console.log(myArr.pop())//also gives the element
console.log(myArr)
console.log(myArr.shift())//remove 1st element //also gives the element
console.log(myArr)
console.log(myArr.includes(1))
console.log(myArr.indexOf(1))
console.log(myArr.slice(2,4))//does not modify the original array
console.log(myArr.splice(2,4))//modifies the original array
const newmyarr= myArr.join()
console.log(newmyarr)
console.log(typeof newmyarr)
const marvel_heros = ["thor","ironman","spiderman","hulk"]
const dc_heros = ["batman","superman","flash"]
//marvel_heros.push(dc_heros)
console.log(marvel_heros)
const allhero= marvel_heros.concat(dc_heros)

console.log(allhero)
console.log(allhero.slice(1,4))
console.log("rev",allhero.reverse())
console.log("sort",allhero.sort())
const all_new_heros= [...marvel_heros,...dc_heros]
console.log("better way to join array",all_new_heros)