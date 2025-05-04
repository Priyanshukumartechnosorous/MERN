//string method


//str.trim() trim method
//trims whitespace from both ends of string and returns a new one
//let msg ="   hello   ";
//msg.trim();------'hello' space khatam last and starting wala 
//let password = prompt("set your password");
//console.log(password.trim());
//space khatam ho gayga passowrd mai


//string are immutable in JS
//no change in string --- 
//we do try to make change new string are formed and old remains same

//uper case and lower case method
//str.toUpperCase()-------uppercase-------"RANDOM STRING"
//str.toLowerCase()-------Lower case------"random string"
//let name = "Apna collage";
//for example
//let msg = "error";
//console.log(msg.toUpperCase);

//String Method with Arguments
//Argument is a some value that we pass to the method.
//Format
//stringName.method(arg)
//Indexof---
//Returns the first index of occurrence of some value in string or gives -1if not found.
//let str = "IloveCoding";
//str.indexof("love")====//1
//str.indexof("J")====//-1(not found)
//str.indexof("O")====//2(only 1 index)
//for example
//let msg = "My Name is Priyanshu"
//msg.indexOf("Name");

//method chaining
//using one method after another.orger of execution will be left to right.
//str.Uppercase().trim()//phela uppercase mai hoga phir trim hoga
//example
//let msg = "    hello   ";
//let newmsg = msg.trim();
//console.log("after trim : ", newmsg);
//newmsg = newmsg.toUpperCase();
//console.log("after uppercase : ",newmsg);
//let newmsg = msg.trim().toUpperCase();
//console.log(newmsg);
//Slice
//Returns a part of the orignal string as a new string.
//let str ="IloveCoding";
//str.slice(5)    //coding
//str.slice(1,4)  //love
//str.slice(-num) = str.slice(length-num)
//str.slice(-ve),-2 means {str.lenght-2}
//example
//let msg = "hello";
//console.log(msg.slice(0, 4));//hell
//console.log(msg.slice(2));   //llo
//console.log(msg.slice(-1));//5-1==4 (o)
//console.log(msg.slice(-2));//5-2==3 (lo)
//***REPLACE  ****
//Searches a value in the string & returns a new string with the value replaced.
//let str = "IloveCoding";
//str.slice("love","do")  //"IdiCoding"
//str.slice("o","x")     //"IlxveCoding"
//example 
//let msg = "I love Coding";
//console.log(msg.replace("love", "do"));//I do coding.
//*****REPEAT ******
//Returns a string with the number of copies of a string
//let str = "Mango";
//str.repeat(3)     //"MangoMangoMango"
//Example
//let msg = "I love Coding";
//console.log(msg.repeat(10));

/////Array (dsa)
//linear collection of things
//let students = ["aman","vinod","Priyanshu"]
// arrays are Mutable (we can change the value )
//*******Array Methods ***********
//  1. push method  (add element in last)
//let cars = ['Audi', 'bmw', 'xuv', 'maruti'];
//cars.push("toyota");
//console.log(cars);//[audi,bmw,xuv,maruti,toyota]
//  2. POP method (delete last element)
//let cars = ['Audi', 'bmw', 'xuv', 'maruti'];
//cars.pop();
//console.log(cars);/////  ['Audi', 'bmw', 'xuv']
//   3. Unshift ( add element in first)
//let cars = ['Audi', 'bmw', 'xuv', 'maruti'];
//cars.unshift("toyota");
//console.log(cars);/// ['toyota', Audi', 'bmw', 'xuv', 'maruti'];
//    4. shift  (first element delete )
//let cars = ['toyota','audi','bmw','xuv','maruti'];
//cars.shift();
//console.log(cars);
// example*****
//let followers = ["a","b","c"];
//let blocked = followers.shift();
//console.log(followers);  --------['b', 'c']
// ***********practice question******
//let starts = ["january","july","march","august"];
//starts.shift();
//starts.shift();
//starts.unshift("june");
//starts.unshift("july");
//console.log(starts);--------['july', 'june', 'march', 'august']
//   5.indexof method (returs index of something)
//let primary = ['red','yellow','blue'];
//primary.indexof(red);   ---- 1 (found= index value)
//primary.indexof(green);------  -1 (not found = -1)
//    6.includes  (search values)
//let primary = ['red','yellow','blue'];
//primary.includes("red");----true (found = true)
//primary.includes("green");----false (notfound = false)
//     7. Concat method (merge two array)
//let primary = ['red','yellow','blue'];
//let secondary= ['orange','green','violet'];
//primary.concat(secondary);
//let allColors = primary.concat(secondary);
//console.log(allColors);  ----['red', 'yellow', 'blue', 'orange', 'green', 'violet']
//    8. Reverse method (reverse an array)
//let primary = ['red','yellow','blue'];
//let reverse = primary.reverse();
//console.log(reverse);-----['blue', 'yellow', 'red']
//   9. slice method
//copies a portion of an array
//let colors = ["red", "yellow", "blue", "orange" ,"pink", "white"];
//let slice = colors.slice(2);
//console.log(slice);----(4) ['blue', 'orange', 'pink', 'white']
//let slice = colors.slice(2,3);
//console.log(slice);-----['blue']
//let slice = colors.slice(-2);---(-2)means last sa 2 length tak 
//console.log(slice);-----(2) ['pink', 'white']
//(2,4)mai 2 and 4 ko include karta hai hai 4 ko nahi karta
// 10   splice method 
//remove /replace/add elements in place
//splice(start,deletCount,item0...item N)
//let colors = ["red", "yellow", "blue", "orange" ,"pink", "white"];
//let splice = colors.splice(0,1);
//console.log(splice);-------['red']
//console.log(colors);-----(5) ['yellow', 'blue', 'orange', 'pink', 'white']
//let splice = colors.splice(0,1,"black","grey");
//console.log(splice);//['red']
//console.log(colors);----(7) ['black', 'grey', 'yellow', 'blue', 'orange', 'pink', 'white']
//  11. sort methods 
//let colors = ["red", "yellow", "blue", "orange" ,"pink", "white"];
//let sort = colors.sort();
//console.log(colors);-----6) ['blue', 'orange', 'pink', 'red', 'white', 'yellow']
//      *** question
//let months = ["january","july","march","august"];
//let splice = months.splice(0,2,"july","june");
//console.log(splice);---- ['january', 'july']
//console.log(months);-----(4) ['july', 'june', 'march', 'august']
//let lang = ["c","c++","html","javascipt","python","java","c#"];
//lang.push("sql");
//console.log(lang);
//console.log(lang.reverse().indexOf("javascipt"));------4
//   12.  Array References---adress in memory
//[1]is not equal to [1]---- because array does not contains value it contain adreess in memory
//new array= new adress
//   13. Constant Array
// const arr = [1,2,3,4];
//in case of constant array we change value of array but we can not change adress of array  (array refrence)
// Nested array -- array of array, multi dimensional array
//let nums =[ [2,4], [3,6], [4,8] ];
//console.log(nums);//----[Array(2), Array(2), Array(2)]

//                           [2, 4][3, 6] [4, 8]
//console.log(nums[0][0]);//2
//console.log(nums [2][0]);//4
//******practice question
//let game = [ ['x',null,'o'], [null,'x',null], ['o',null,'x'] ];
//console.log(game);//----[Array(3), Array(3), Array(3)]
  //                   0: (3) ['x', null, 'o']
    //                 1: (3) [null, 'x', null]
      //               2:(3) ['o', null, 'x']
//game[0][1] = 'o';
//console.log(game); //o is came in the place of null in first array















