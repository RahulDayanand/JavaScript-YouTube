// function calculateCartPrice(...num1){
//     return num1;
// }

function calculateCartPrice(val1,val2,...num1){
    return num1;
}

console.log(calculateCartPrice(100,200,300,400,500));

//Objects

const avengers = {
     superhero : "IronMan",
     movie : "IronMan"
}

function HeroesData(dataconfirmation){
      console.log(`SuperHero is ${dataconfirmation.superhero} And the movie is ${dataconfirmation.movie}`);
}

HeroesData(avengers);

HeroesData({
    superhero : "Captain America",
    movie : "First Avenger"
})

const numbers = [1,2,3,4,5,6,7];

function Find(n){
  return n[1];
}

console.log(Find(numbers));

console.log(Find([
    7,6,5,4,3,2,1
]))