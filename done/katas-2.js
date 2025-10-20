
/* ICE CREAM CONE KATA */

/* Var, Alert, Prompt, Conditional, While, Function. Global, Concatenation */

var myScoops = "Here's your cone with: "


function main() { 
 //* initialize variable scoops, prompt user for "how many scoops (max 3)?"
let scoops = prompt("How much scoorps [max 3]?")
 //* //if scoops is less than 4, call scoopLoop with argument scoops
 if(scoops<4) scoopLoop(scoops);
 else {
    alert("Oink, Oink");
    main();
 }
 //* //otherwise display "oink oink" and call main again.
 //* //@param: none (main never gets params)
 //* //@return: none (main never gets returns
 //*/
}
function scoopLoop(scoops){
let scoop = 1;
while(scoop<=scoops){
myScoops+=nextScoop(scoop)
scoop++
}
alert(myScoops)
myScoops = "Here's your cone with : "
} 
// * start scoop at 1 and loop while scoop is less than or equal to scoops
 //* inside the loop add nextScoop(scoop) to myScoops
 // after the loop's done, display "Here's your cone with " myScoops
 // @param: scoops (integer)
 //@return: none
 //*/

 function nextScoop(scoop){
  let flavor = prompt("Flavor for scoop number " + scoop)
return flavor+" " ;
 }
// * initialize a variable called flavor, prompt for "Flavor for scoop number [scoop]"
 //* @param: scoop (integer)
 //* @return: flavor (string)
 //