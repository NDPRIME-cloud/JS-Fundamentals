
const x = parseInt(process.argv[2])
if (isNaN(x) ){
    console.log( "Missing number of occurrences")
}else{
    Array.from({length:x}).forEach(() =>console.log("C is fun"))
}
