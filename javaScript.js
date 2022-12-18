// 1.
let num = +prompt('введите число')
console.log (typeof NaN)
if (isNaN(num)) {
  console.log ('Упс, кажется, вы ошиблись')
} else {
  if (num%2=== 0) {
    console.log ('четное')
  } else if (num%1=== 0) {
    console.log ('нечетное')
  }  
}

// 2.
let x ='любое значение'
switch (x) {
    case 'number':
    console.log ('x=числу')
    break
  case 'string':
    console.log ('x=строке')
    break
  case 'boolean': 
    console.log ('x=логическому типу')
  default:
    console.log ('тип не определен')
}

// 3. 
let str = "hello";
let reverse = str.split('').reverse().join('');
console.log(reverse);

// 4. 
let x = (Math.floor(Math.random() * 100) + 1)
console.log (x)

// 5. 
let a = ["a", "b", "c"]
console.log (a.length)
a.forEach(function(entry) {
    console.log(entry)
});

// 6. 
let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 's'];

let theSame = true;
for (let i = 0; i < arr.length - 1; i++){
    for (let j = i + 1; j < arr.length; j++){
        if (typeof(arr[i]) !== typeof(arr[j])){
            theSame = false;
        }
    }
}
if (theSame) {
    console.log("array is the same");
} else {
    console.log("array is not the same");
}

// 7.
let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'd', null, 'e'];
let countEven = 0;
let countOdd = 0;
let countOther = 0;

for (let i = 0; i < arr.length; i++){
    if ((arr[i] === 0) || (typeof(arr[i]) != 'number')) {
        countOther++;
    } else {
        if (arr[i] % 2 === 0) {
            countEven++;
        } else {
            countOdd++;
        }
    }
}

console.log("Even is " + countEven);
console.log("Odd is " + countOdd);
console.log("Other is " + countOther);

// 8.
let users = new Map();
users.set("student 1", "grade A");
users.set("student 2", "grade B");
users.set("student 3", "grade A");
users.set("student 4", "grade B");
users.set("student 5", "grade A");
users.set("student 6", "grade C");
users.set("student 7", "grade A");

for (let user of users.keys()){
    console.log(user + " is " + users.get(user));
}