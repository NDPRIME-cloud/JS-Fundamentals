const args = process.argv.slice(2)
let myNumber = parseInt(args)
if(myNumber!==Number){
    console.log("Not a number")
}else{
  console.log("My number: " + myNumber)  }