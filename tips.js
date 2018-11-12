const foo = { name: "Tom", age: 19, bool: false };
const bar = { name: "Rick", age: 29, bool: true };
const baz = { name: "Harry", age: 45, bool: false };

//You can't see the var name
console.log(foo, bar, baz);
// Now you can
console.log({ foo, bar, baz });
console.table([foo, bar, baz]);

console.time("Looper");
let i = 0;
while (i < 10000) {
  i++;
}
console.timeEnd();

//Object
const turtle = {
  name: "bob",
  legs: 4,
  shell: true,
  meal: 10,
  diet: "berries"
};

//Bad code
function food(animal) {
  return `Feed ${animal.name}  ${animal.meal} kilos of ${animal.diet}`;
}

//Good code
function feed({ name, meal, diet }) {
  return `Feed ${name} ${meal} kilos of ${diet}`;
}

const pikachu = { name: "Pikachu" };
const stats = { hp: 40, attack: 60, defense: 55 };

//Bad code
pikachu["hp"] = stats.hp;
pikachu["attack"] = stats.attack;
pikachu["defense"] = stats.defense;

//Good code
const lv10 = { ...pikachu, ...stats };

let pokemon = ["Arbok", "Raichu", "Sandshrew"];

//Bad array code
pokemon.push("Bulbasaur");
pokemon.push("Metapod");

//Good arrray code

//Push
pokemon = [...pokemon, "Bulbasaur", "Metapod"];
//Unshift
pokemon = ["Bulbasaur", "Metapod", ...pokemon];

const arr = [500, 30, 99, 15, 223];

//Bad loop code
let total = 0;
const withTax = [];
const highValue = [];
for (let index = 0; index < arr.length; index++) {
  //Reduce
  total += arr[index];

  //Map
  withTax.push(arr[index] * 1.1);

  //Filter
  if (arr[index] > 100) {
    highValue.push(arr[index]);
  }
}

//Good loop code

//Reduce
const total2 = arr.reduce((acc, cur) => acc + cur);

//Map
const withTax2 = arr.map(v => v * 1.1);

//Filter
const highValue2 = arr.filter(v => v > 100);

const random = () => {
  return Promise.resolve(Math.random());
};

//Bad promise code
const sumRandomAsyncNums = () => {
  let first;
  let second;
  let third;

  return random()
    .then(v => {
      first = v;
      return random();
    })
    .then(v => {
      second = v;
      return random();
    })
    .then(v => {
      third = v;
      return first + second + third;
    });
};

//Good promise code
const sumRandomAsyncNums2 = async () => {
  const first2 = await random();
  const second2 = await random();
  const third2 = await random();
};

//Destructuring assignment
const user = {
  id: 1,
  name: "Yuri"
};

const arr = [1, 2, 3];

//Bad code
const id = user.id;
const name = user.name;

let n1 = arr[0];
let n2 = arr[1];
let n3 = arr[2];

//Good code
const { id, name } = user;
const [n1, n2, n3] = arr;
//OR
const { id: ID, name: firstName } = user;
