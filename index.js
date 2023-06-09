function generateIntegers (n) {
  const resultArray = []

  for(let i = 0; i <= n; i++) {
    resultArray.push(i)
  }
  return resultArray
}

//console.log(generateIntegers(5))



    v1 = 50,
    v2 = 100,
    v3 = 150,
    v4 = 200,
    v5 = 2,
    v6 = 250;

//console.log (v6 % v3)


function padIt(str,n){
  
  let resultString = str
  
  let i = 0
  
  while (i < n) {
  
  if (i % 2 === 0) resultString = '*' + resultString
  else resultString += '*'
  
  i++

  }
    
  return resultString
  
}

//console.log(padIt('a', 3))

function colorOf(r,g,b){
  return '#' + r.toString(16) + g.toString(16) + b.toString(16)
}

//console.log (colorOf(1, 2, 3))


function splitAndMerge(string, separator) {
  
  let resultString = ''
  
  const splitStringsArray = string.split(' ')
  
  for (let string of splitStringsArray) {
    
    resultString += string.split('').join(separator)

    resultString += ' '
    
  }
  
  return resultString.slice(0, -1)
}


//console.log(splitAndMerge('Hello world!',','))


function alienLanguage(str){
  
  const arrayOfStrings =  str.toLowerCase().split(' ')
  
  const resultArray = []
  
  for (let string of arrayOfStrings) {
   resultArray.push(string.slice(0, -1).toUpperCase() + string[string.length - 1])

  }
  
  return resultArray.join(' ')
}

//console.log(alienLanguage('HELLO WORLD'))



function topSecret(str){
  const arrayOfStrings = str.split(' ')
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'
  let counterString = ''
  let resArr = []


    //  if (alphabet.includes('!')) {console.log('yes')} else {console.log('no')}

  
  for (let string of arrayOfStrings) {


    
    for (let i = 0; i < string.length; i++) {
      
      if (alphabet.includes(string[i].toLowerCase())) {
     
         switch (String.fromCharCode(string[i].charCodeAt()-3)) {
          case ">": counterString += 'X'
             break
          case "?": counterString += 'Y'
             break
          case "@": counterString += 'Z'
             break
          case "^": counterString += 'x'
             break
          case "_": counterString += 'y'
             break
          case "`": counterString += 'z'
             break
          default: counterString += String.fromCharCode(string[i].charCodeAt()-3)
        }
      } else {
        counterString += string[i]
      
      }
                                
    }
    resArr.push(counterString)
    counterString = ''  
  }
  return resArr.join(' ')
}


//console.log(topSecret('Khoor Zruog!'))


function infiniteLoop(arr,d,n){
  
  if (d === 'right') {
    for (let item of arr) {
      for (let i = 0; i < item.length; i++) {
        item[i] += n
      }
    }
  }
  return arr
}

console.log(infiniteLoop([[1,2,3],[4,5,6],[7,8,9]],"right",1))
//result must be [[9,1,2],[3,4,5],[6,7,8]]

