/*
    NAME: Nikunj Rathod
    Date: 1/19/2020
    PURPOSE: JAVASCRIPT HOMEWORK Assignment #2 (Strings)
*/  

let txt=
"Web and Mobile Application development was the program Fred entered in the Fall of 2019. "
+"\n\nIntro to Programming is going to be the course Fred likes best.  Fred is going to study very hard."
+"\n\nEach night Fred is going to spend time reviewing all of the course material."
+"\n\nFred will be committed to learning as much as possible about C# in 2019!\n\n";
console.log(txt);

let fred="Fred";

let txt2=
"Fred was excited about starting his course at NBCC."
+"\n\nWeb and Mobile Application development was the program "+fred+" entered in the Fall of 2019. "
+"\n\nIntro to Programming is going to be the course "+fred+" likes best. "+fred+" is going to study very hard."
+"\n\nEach night "+fred+" is going to spend time reviewing all of the course material."
+"\n\n"+fred+" will be committed to learning as much as possible about C# in 2019!\n\n";
console.log(txt2);

let templiteralfred=`Fred`;
let tempstringfred="Fred";
//both works in template literals
let templiteral=
`${templiteralfred} was excited about starting his course at NBCC.

Web and Mobile Application development was the program ${tempstringfred} entered in the Fall of 2019. 

Intro to Programming is going to be the course ${templiteralfred} likes best. ${templiteralfred} is going to study very hard.
\nEach night ${templiteralfred} is going to spend time reviewing all of the course material.
\n${templiteralfred} will be committed to learning as much as possible about C# in 2019!\n`;
console.log(templiteral);
//spaces in code works as spaces in template literal so we dont have to specify \n