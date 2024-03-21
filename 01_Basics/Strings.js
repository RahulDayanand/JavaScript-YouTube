const name = "Rahul";
const repoCount = 10;

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Rahul');  //It gives key-value pairs

console.log(gameName[0]);
console.log(name[0]);
console.log(gameName.__proto__);  //to see prototype

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('h'));

console.log(gameName.substring(1,3));

console.log(gameName.slice(-4,3));

let name1 = "    NaMe      ";
console.log(name1);
console.log(name1.trim());

const url = "https://rahul.com/rahul%50dayanand";

console.log(url.replace("%50","-"));

console.log(url.includes('rah'));

name2 = "asu-jhe-klr";
console.log(name2.split("-"));