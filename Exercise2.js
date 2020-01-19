/*
    NAME: Nikunj Rathod
    Date: 1/15/2020
    PURPOSE: JAVASCRIPT Codealong EXERCISE #2 (Strings)
*/  

let strTestData="''''''Hey everyone! im string!";
console.log(strTestData);

strTestData="'''''''";
console.log(strTestData);

let classSlotNum=4;
let strTemplate=`"\"This is class: ${classSlotNum} ${5*5}`.substring(2,20);
console.log(strTemplate);

let strTemplate1="\"This is class: ${classSlotNum} ${5*5}";
console.log(strTemplate1);

let strsearch="Where is letter z within this?"
console.log(strsearch.indexOf('z'));
console.log(strsearch.indexOf('?'));
console.log(strsearch.indexOf('W'));
console.log(strsearch.indexOf('e'));
console.log(strsearch.lastIndexOf('e'));
console.log(strsearch.indexOf('q'));

console.log(`total length ${strsearch.length}`);
let formatstr="~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~";
let firstname="Nikunj";
let lastname="Rathod";
console.log(formatstr);
let fullname=`${firstname}${lastname}`;
console.log(`"Total string length: ",${fullname.length}`);
let searchchar1='N';
console.log(`Hello, ${firstname}${lastname}: Welcome to Javascript!`);



