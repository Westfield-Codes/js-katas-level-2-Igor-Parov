
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

/* RANDOM STUDENT KATA:  */

// Who will be gatekeeper and keymaster today?

/* Global Variables */
// Create an array called students, start empty. 
// Create an array called picked, start empty. 
var students =[]
var picked = []
function main(){
let count = prompt("How many students are there? ")
addStudents(count);
let gateKeeper = randStudent()
let keymaster = randNewStudent();
alert("The gate keeper = " + gateKeeper + " and the keymaster " + keymaster)
}
/* Function Main()
 * Set variable called count to asking how many students there are.
  * Fill global array students by passing count as an argument to addStudents
   * Set gateKeeper = randStudent(count), the name of a random student in the list
    * Set keymaster = randNewStudent(), name of a different random student
     * Display gatekeeper name and keymaster name for this kata
      * @param = none
       * @return = none
        */

        function addStudents(count){
        for(let student=1; student<=count; student++){
            students.push(prompt ("Next Student?")) 


        }
    }

        


        
        /* Function addStudents(count) 
         * Use a for loop to add student names to the students array via user input.
          * The loop should run count number of times. 
           * @param = count {integer}
            * @return = none
             */

             
             function randStudent(){
                
                let student = Math.floor(Math.random()*students.length) 
                let sName = students[student];
                picked.push(sName)
                return sName;   
            
            }
                 /* Function randStudent(count)
                  * Set student = random number, 0 to length of students array.
                   * Set name = element in students array at that random index.
                    * Add name to picked array. 
                     * Return the name of the random student
                      * @param = count {integer}
                       * @return = name {string}
                        */
            function randNewStudent(){
                let sName = "0" 
                let pickedYet = "0"
             while(pickedYet!= -1){
                let student = Math.floor(Math.random()*students.length)
                sName = students[student];
                pickedYet = picked.indexOf(sName);
             }
                return sName
             }
                        /* Function randNewStudent() (start with copy of randStudent)
                         * Set name = "", student = 0 and pickedYet = 0. 
                          * Loop while pickedYet is not equal to -1
                           * Set student = random number, 0 to length of students array.
                            * Set name = element in students array at that random index.
                             * Set pickedYet = the index of that name the picked array. 
                              * End the while loop.
                               * Add name to picked array.
                                * Return the name of the new random student
                                 * @param = none
                                  * @return = name {string}
                                   */

                                    
                                    /* ************************************* */
                                    /* SHOPPING LIST KATA:  */

// Every day, you are sent to buy 5 items. 

/* 1. for loop and string concatenation */
function makeList(){
    let shoppingList = "To Buy: \n"
    for(let item=1;item<=5;item++){
        shoppingList+=prompt("Item #" + item)+"\n"
    }
    alert(shoppingList)
}
/* Function makeList()
 * Create a shopping list string called shoppingList as "To Buy:"
 * create a five-item loop, and in the loop, 
 * ask for next item to buy (item #), and add it to the list 
 * add a line break after each item added
 * when loop's done, alert the list
 */
 
/* 2. for loop and array with toString */
function makeList1(){
    let shoppingList = "To Buy: \n"
     shopArray=[];
    for(let item=0;item<=5;item++){
        shopArray.push(prompt("Item #" + item)) 
       
    }
    alert(shoppingList+shopArray.toString())
}
/* Same function, using previous code, BUT:
 * build shopArray variable for the shopping list
 * adjust loop to work with the array index values (start at 0)
 * ask for next list item and push it to the shopArray
 * no need to add a line break after
 * at end of loop, alert the list title, followed by
 * the list with toString() method (it won't have line breaks)*/
function makeList2(){
    let shoppingList = "To Buy: \n"
     shopArray=[];
    for(let item=0;item<=5;item++){
        shopArray.push(prompt("Item #" + item)) 
       
    }
    alert(shoppingList+shopArray.join("\n"))
}
/* 3. for loop and array with join method 

/* Same function, using previous code, BUT:
 * the at end, alert list with array.join() method with line breaks 
 * instead of commas */
 function makeList3(){
    let shoppingList = "To Buy: \n"
     shopArray=[];
     itemPrice=[];
    for(let item=0;item<=5;item++){
        shopArray.push(prompt("Item #" + item)) 
        itemPrice.push(prompt("Enter a price, separated by comma"))
    }
    alert(shoppingList+shopArray.join("\n"))
}
/* 4. 2D Arrays: add Pricing */

/* Same function, using previous code, but THIS TIME add prices
 * When someone enters an item, prompt them also to enter a price separating by comma (like milk, 1.99)])   
 * Convert that entry to an itemPrice array by using string.split() and use a comma as delimiter
 * Push the itemPrice array to shopArray
 */

/* 5. Total up the prices */

/* Same function, using previous code, but THIS TIME total the prices.
 * After you have built the array, create a NEW loop that adds the price 
 * of each item to a total. Do this before the alert. 
 * Save the first alert content as message. 
 * Add total as a line below message, then alert the message. 
 */
