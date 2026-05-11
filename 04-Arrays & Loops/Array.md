---
tags:
  - JavaScript
  - Arrays
  - Web-Development
date: 2026-02-20
aliases: []
sticker:
banner:
icon: FabSquareJs
---
- [[#1. Array Example|1. Array Example]]
- [[#2. Array Methods|2. Array Methods]]
	- [[#2. Array Methods#1. Using Length|1. Using Length]]
	- [[#2. Array Methods#2. unshift (Add Element to the First)|2. unshift (Add Element to the First)]]
	- [[#2. Array Methods#3. push (Add Element to the End)|3. push (Add Element to the End)]]
	- [[#2. Array Methods#4. shift (Remove The First Element From Array)|4. shift (Remove The First Element From Array)]]
	- [[#2. Array Methods#5. pop (Remove The Last Element From Array)|5. pop (Remove The Last Element From Array)]]
	- [[#2. Array Methods#6. indexOf (Search Element, From Index [opt])|6. indexOf (Search Element, From Index [opt])]]
	- [[#2. Array Methods#7. lastIndexOf (Search Element, From Index [opt])|7. lastIndexOf (Search Element, From Index [opt])]]
	- [[#2. Array Methods#8. includes (valueToFind, fromIndex [opt])|8. includes (valueToFind, fromIndex [opt])]]
	- [[#2. Array Methods#9. Sorting Arrays (sort, reverse)|9. Sorting Arrays (sort, reverse)]]
	- [[#2. Array Methods#10. slice (Start [opt], End [opt] Not Including End)|10. slice (Start [opt], End [opt] Not Including End)]]
	- [[#2. Array Methods#11. splice (Start [Mandatory], DeleteCount [opt], Items To Add [opt])|11. splice (Start [Mandatory], DeleteCount [opt], Items To Add [opt])]]
- [[#Resources|Resources]]

# JavaScript Arrays

## 1. Array Example

```javascript
let myFriends = ["Ahmed", "Mohamed", "Sayed", ["marwan", "Ali"]];

console.log(typeof(myFriends)); // object(Array)

console.log(`Hello ${myFriends[0]}`); // Hello Ahmed
console.log(`Hello ${myFriends[1]}`); // Hello Mohamed
console.log(`${myFriends[2][2]}`); // y
console.log(`${myFriends[3][1]}`); // Ali (Nested Array)
console.log(`${myFriends[3][1][0]}`); // A

// To change in an Array: Mohamed to Abdo
console.log(myFriends); // ['Ahmed', 'Mohamed', 'Sayed', Array(2)]

myFriends[1] = "Abdo";
console.log(myFriends); // ['Ahmed', 'Abdo', 'Sayed', Array(2)]
```

---

## 2. Array Methods

### 1. Using Length
```javascript
// Index Starts From 0 [0, 1, 2, 3, 4]
let myFriends = ["Ahmed", "Mohamed", "Sayed", "Alaa"];

// If I Want to Add an Element at the End
myFriends[myFriends.length] = "Mahmoud"; // ["Ahmed", "Mohamed", "Sayed", "Alaa", "Mahmoud"]
console.log(myFriends);

// If I Want to Change The Last Element
myFriends[myFriends.length - 1] = "Kage"; // Mahmoud ---> Kage

// I Can Control the length of the Array too
myFriends.length = 2; // ["Ahmed", "Mohamed"]
```

### 2. unshift (Add Element to the First)
```javascript
let myFriend = ["Ahmed", "Mohamed", "Sayed", "Alaa"];

myFriend.unshift("Mahmoud", "Adel");
console.log(myFriend); // ["Mahmoud", "Adel", "Ahmed", "Mohamed", "Sayed", "Alaa"]
```

### 3. push (Add Element to the End)
```javascript
let myFriend = ["Ahmed", "Mohamed", "Sayed", "Alaa"];

myFriend.push("Mahmoud", "Adel");
console.log(myFriend); // ['Ahmed', 'Mohamed', 'Sayed', 'Alaa', 'Mahmoud', 'Adel']
```

### 4. shift (Remove The First Element From Array)

> [!note] ملاحظة
> أقدر أحتفظ بالـ Element اللي طلعته في متغير وأعيد استخدامه.

```javascript
let myFriend = ["Ahmed", "Mohamed", "Sayed", "Alaa"];

let theName = myFriend.shift();

console.log(myFriend);  // ["Mohamed", "Sayed", "Alaa"]
console.log(theName);   // Ahmed
```

### 5. pop (Remove The Last Element From Array)

> [!note] ملاحظة
> أقدر أحتفظ بالـ Element اللي طلعته في متغير وأعيد استخدامه.

```javascript
let myFriend = ["Ahmed", "Mohamed", "Sayed", "Alaa"];

let theLastName = myFriend.pop();

console.log(myFriend); // ['Ahmed', 'Mohamed', 'Sayed']
console.log(`the last Name is ${theLastName}`); // Alaa
```

### 6. indexOf (Search Element, From Index [opt])

> [!note] ملاحظة
> هنا أنا ببحث عن الـ index لكلمة معينة جوه الـ Array، فهديله الكلمة، وممكن أحدد هبدأ البحث من index كام. لاحظ الفرق في الكود لما كانت قيمة "Ahmed" متكررة. لو لم يجد العنصر اللي بيبحث عنه بيرجع `-1`.

```javascript
let myFriends = ["Ahmed", "Mohamed", "Sayed", "Alaa", "Ahmed"];

console.log(myFriends.indexOf("Ahmed")); // 0
console.log(myFriends.indexOf("Ahmed", 2)); // 4
```

### 7. lastIndexOf (Search Element, From Index [opt])

> [!note] ملاحظة
> الفرق هنا إنه بيبحث من الآخر للأول. لو لم يجد العنصر اللي بيبحث عنه بيرجع `-1`.

```javascript
let myFriends = ["Ahmed", "Mohamed", "Sayed", "Alaa", "Ahmed"];

console.log(myFriends.lastIndexOf("Ahmed")); // 4
console.log(myFriends.lastIndexOf("Ahmed", -2)); // 0
```

### 8. includes (valueToFind, fromIndex [opt])

> [!note] ملاحظة
> بتسأل سؤال إجابته `true` أو `false`: هل العنصر اللي بتبحث عنه موجود؟

```javascript
let myFriends = ["Ahmed", "Mohamed", "Sayed", "Alaa", "Ahmed"];

console.log(myFriends.includes("Ahmed")); // true
console.log(myFriends.includes("Ahmed", 2)); // true
console.log(myFriends.includes("Adel")); // false
```

### 9. Sorting Arrays (sort, reverse)
```javascript
let myFriends = [10, "Sayed", "Mohamed", "90", 9000, 100, 20, "10", -20, -10];

console.log(myFriends);
console.log(myFriends.sort().reverse());
```

### 10. slice (Start [opt], End [opt] Not Including End)

> [!info] Notice
> This method returns a **New Array** and doesn't modify the original one.

```javascript
let myFriends = ["Ahmed", "Sayed", "Ali", "Osama", "Gamal", "Ameer"];

console.log(myFriends.slice()); // ["Ahmed", "Sayed", "Ali", "Osama", "Gamal", "Ameer"]
console.log(myFriends.slice(1)); // ["Sayed", "Ali", "Osama", "Gamal", "Ameer"]
console.log(myFriends.slice(1, 3)); // ["Sayed", "Ali"]
console.log(myFriends.slice(-3)); // ["Osama", "Gamal", "Ameer"]
console.log(myFriends.slice(1, -2)); // ["Sayed", "Ali", "Osama"]
console.log(myFriends.slice(-4, -2)); // ["Ali", "Osama"]
```

### 11. splice (Start [Mandatory], DeleteCount [opt], Items To Add [opt])

> [!info] Notice
> This method modifies the original array and **does not** return a new one.

```javascript
let myFriends = ["Ahmed", "Sayed", "Ali", "Osama", "Gamal", "Ameer"];

myFriends.splice(1, 2, "Sameer", "Samara");

console.log(myFriends); // ['Ahmed', 'Sameer', 'Samara', 'Osama', 'Gamal', 'Ameer']
```

---

## Resources
- **Videos From 40 To 47**: [PlayList (Elzero Web School)](https://youtu.be/MLVJhya1CV0?si=eZhvzCHUZ00WkwcV)