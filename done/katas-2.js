
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
 function main(){
    let age = parseInt(prompt("How old are you?"))
    let born = parseInt(prompt("What year were you born?"))
    let calculatedAge = myAge(age)
    if (calculatedAge!==born){
        alert("Underaged")}
        else { 
            alert("Welcome!")
            }
            }
            /* FUNCTION main() 
             * Facebook wants to check if you're 13, so they ask your birth year 
              * set age = "How old are you?"
               * then set born = asking "What year were you born?"
                * If myAge(age) is not equal to born, say, "Underaged", otherwise "Welcome!"
                 * @param: none (main never gets params)
                  * @return: none (main never gets returns
                   */
                   function myAge(age){
                   let today = new Date();
                   let thisYear = today.getFullYear();
                   let birthYear=thisYear-age;
                   return birthYear;


                   }

                   /* FUNCTION myAge(age)
                    * define a function called myAge with number parameter age
                     * Get thisYear using the date function https://www.w3schools.com/js/js_date_methods.asp
                      * set birthYear as thisYear minus age and return that
                       * @param: age (integer)
                        * @return: birthYear (year)
                         */

                         /* NOTE TO PROGRAMMERS: myAge(age) only works if you have not had your birthday.  
                          * An additional checkAlready(birthYear) checks for that and makes an adjustment. 
                           * To use it, add birthYear = checkAlready(birthYear); before you return the value.
                            * function checkAlready(birthYear) asks if you had your birthday already this year.  
                             * If you have, it adds 1 to your birthYear and returns that.
                              */

                              /* ************************************* */

