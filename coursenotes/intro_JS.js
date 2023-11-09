/* introduction to java script 

1. JS in console 
2. DOM Manipulation ( DOM : Document object model )
3. Chrome Extensions
4. What is a Programming Language ?
5. HTML / CSS /JavaScript

*/

/*
1. Js in Console (inspect)

    1 - Allows real-time editing of html/css/Js
    2 - Run script : Test code in console 
    3 - Debug : Locate and fix errors 
    4 - Modify DOM : change webpage elements. 
        Errors : view error messages
 */ 

/*
2. DOM Manipulation 
    
   1 - Change HTML
   2 - Change CSS
   3 - Perform Actions
*/

/*
3. Chrome Extensions
   
    1 - Create Features: Add new functionalities to chrome
    2 - Interact wit web : Modify or read webpage content
    3 - API Access : Use of chromes built-in functions 
    4 - User Experience or Customizing
*/

/*

4. What is a Programming Language ?
   
    1 - Giving instructions to a computer 
    2 - Instruction : Tells computer what to do.
    3 - These instructions are called code .
*/

/*

5. What is syntax 
   
    1 - Structure of words in a sentence.
    2 - Rules of the language.
    3 - For programming exact syntax must be followed.
*/ 

/*

6. Front end / BackEnd / FullStack

    1 - HTML 
          * Structure : set up the layout
          * Content : Adds text,images,links.
          * Tags : Uses element like <p> , <a>
          * Hierarchy : Organizes elements in a tree
          
    2 - CSS 
          * Style : Sets the look and feel 
          * Colors & Fonts : Customizes text and background
          * Layout : Controls position and size 
          * Selectors : Targets specific HTML elements
    
     3 - JS = client side / Front-End Web Development  
          * JavaScript has nothing to do with Java
          * Actions : Enables interactivity .
          * Updates : Alerts page without reloading 
          * Events : Responds to user actions 
          * Data : Fetches and sends info to server
     
    M E R N =
      M = Mongo DB
      E = Express
      R = React 
      N = Node JS 

    2 - JAVA / PYTHON / C++ / = Server side Back-End  
         
        *when We are learn all of these things then we are full stack developer*
*/

/*
  7. Role of Browser 
     
    1 - Display Web Page : Turns HTML code into what you see on screen .
    2 - User clicks : Helps you interact with the web page .
    3 - Updates Content : Allows changes to the page using JavaScript .
    4 - Loads Files : Gets HTML ,images,etc.,from the server .
*/

/* 
  8. JS 
   
    1 - JavaScript runs at the client side in the browser .
    2 - Coffee Script / TypeScript are transpiled to JavaScript . 
*/

 /*
    ****** CHAPTER 2 ******
*/

/*
  NUmbers And Strings 
   
  1 - Arithmetic Operators 
  2 - Order of Operations 
  3 - Types of numbers (Integers & Floats )
  4 - Don't learn syntax
  5 - String 
  6 - Type of Operator 
*/

/*
  Arithmetic operators 

  1 :-     + , - , * , / , %
*/

/*
  2 - Order of Operations 

    * 15599 - 10/100*15599 - 272 + 2499 - 41 / 100 *2499 - 29 + 25 + 20

    * 15257.51
    * (15599 - (10/100*15599 )) - 272 + (2499 - (41 / 100 *2499)) - 29 + 25 + 20

    * 15257.51
    * (15599 - (10/100*15599 )) - 272 + (2499 - (41 / 100 *2499)) - 29 + 25 + 20 * 118 /100

    * 15261.11
    * (15599 - (10/100*15599 )) - 272 + (2499 - (41 / 100 *2499)) - 29 + 25 + 20 * 118 /100

    * 15261.11
    * ((15599 - (10/100*15599 )) - 272 + (2499 - (41 / 100 *2499)) - 29 + 25 + 20 )* 118 /100

*/

/*
  3 - Types of numbers (Integers & Floats )
       * JavaScript has 
       * We can us math.round convert floats to integers 
       * Always do money calculation in Paisa instead of Rupees

     integers :-
        * negative numbers -1 , -2 , -3 ....
        * whole numbers 0 , 1 ,2, 3 ....
        * zero 0 
        * natural numbers 1 ,2 ,3 ,4 ,5 ...
     
    Float :-
        * 125.566

        * 0.1 + 0.2 = 0.30000000000000004
    
*/

/*
  4 - Don't learn syntax 
        * Google: Quick answer to coding problems .
        * MND: In-depth guides and documentation .
           https://developer.mozilla.org/ 
        * ChatGpt: Real-time assistance   for coding queries .
        * Focus: Understand concepts ,not just syntax .
*/

/* 
   5 - Strings 
        * String hold textual data,anything from, a single character to paragraph
        * String can be defined using single quotes' ',double quotes" " , ` `or backticks ,Backticks allow for
        template literals , which can include variables . 
           1 - single quotes = 'hello world'
           2 - double quotes = "you'r Welcome"
           3 - backticks = `this is the end 
                          this is really end,
                           we are use to various line`
          4 - Value insert in backticks = ((15599 - (10/100*15599 )) - 272 + (2499 - (41 / 100 *2499)) - 29 + 25 + 20 )* 118 /100

                                              18003.8618
                                              '₹'((15599 - (10/100*15599 )) - 272 + (2499 - (41 / 100 *2499)) - 29 + 25 + 20 )* 118 /100

                                              '₹'+ ((15599 - (10/100*15599 )) - 272 + (2499 - (41 / 100 *2499)) - 29 + 25 + 20 )* 118 /100

                                              '₹18003.8618'

                                              `₹` ${((15599 - (10/100*15599 )) - 272 + (2499 - (41 / 100 *2499)) - 29 + 25 + 20 )* 118 /100} 

                                              '₹18003.8618'

        * You can combine(concatenate) strings using the + operator . for example, "Hello" + "world"  will produced "Hello world ".                   
    # String Concatenation

        * 'good morning' + ' sir'
           output: 'good morning  sir'
        
        * 'you hove got ' + 4.5 + 'stars our of 5' 
            output: 'you have got 4.5stars our of 5'
         
        * '4' + '5'
              output: '45'
             
        * 'you have got' + 1 + 1 + 1 + 'votes'
              output: 'you have got 111 votes'

        * 'you have got' + (1 + 1 + 1) + 'votes'
              output: 'you have got 3 votes'
*/

/*
    Typeof operator
        
     1 - check type : Tells you the data type of a variable . 
     2 - Syntax : Use it like typeof variable .
     3 - Common Types : Returns "number","string","boolean",etc.
        syntax : typeof'this is string' = 'string'
                 typeof 12345 = 'number'
                 typeof (11 == 11) = 'boolean'

*/