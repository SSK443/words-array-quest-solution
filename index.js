stringarray=['maya','mohit','manual','mahin','mihir']
//1. is mohit present in array?
console.log(`is mohit present = ${stringarray.some(po=>po=='mohit')?'yes':'no'}`)
console.log('------------------')
//includes method
console.log(`is mohit present = ${stringarray.includes('mohit')?'yes':'no'}`)
console.log('------------------')
let name=stringarray.includes('mihir')
console.log('is mihir present',name?'yes':'no')
console.log('------------------')
//if mohit is in array then display its index
console.log('if manual is in array then display its index')

console.log(`display its index = ${stringarray.indexOf('manual')}`)
index=stringarray.indexOf('manual')
if(stringarray.includes('manual')){
  console.log('index of manual',index)
}
else{
  console.log('nothing available')
}
console.log('------------------')
//splice to remove mohit
console.log('splice to remove mohit')
// ````let remove=stringarray.splice(index,5)
// console.log(stringarray)
// console.log(`${stringarray.splice(index,5)}`)
// console.log('------------------')
//splice can used to any item
console.log(`${stringarray.splice(index,1,'gandhi')}`)
console.log(stringarray)
console.log('------------------')
// display a new array without "mahin"
let k=stringarray.filter(m=>m!=='maya')
console.log(k)
array=['ssk','john','jio','logon']
// is jio present in array?
console.log('s jio present in array?')
console.log(`is jio present=${array.includes('jio')?'yes':'np'}`)
// find the index of jio
console.log('find the index of jio')
jio=array.indexOf('jio')
console.log(`index of jio=${jio}`)
//delete and replace jio with bsnl
console.log('delete and replace jio with bsnl')
console.log(`delete and replace jio with bsnl=${array.splice(index,1,'bsnl')}`)
console.log(array)
//display with jio
console.log('display with jio')
console.log(`${array.filter(k=>k!=='jio')}`)
