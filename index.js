// code your solution here

/*function razzle() {
console.log( "you've been razzled!");   


}razzle();
*/

function saturdayFun (activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`
}

const mondayWork = function (location = 'go to the office') {
    return `This Monday, I will ${location}.`


}

     function wrapAdjective (visualFlair = '*') {
        return function inner (anyWord = 'special'){
           return `You are ${visualFlair}${anyWord}${visualFlair}!`
      
    
    }
     



}
/*
function wrapAdjective (visualFlair = '*') {
    return function inner (anyWord = 'special') {
        return `You are ${visualFlair}${anyWord}${visualFlair}!`
    }
}
*/