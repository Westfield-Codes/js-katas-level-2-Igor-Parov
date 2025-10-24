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
