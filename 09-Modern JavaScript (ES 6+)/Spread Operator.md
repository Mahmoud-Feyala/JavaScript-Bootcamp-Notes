---
tags:
  - JavaScript
  - ES 6
  - Spread-Operator
  - Arrays
  - Objects
  - Web-Development
date: 2026-04-23
subject: ES 6 Spread Operator
---
- [[#1. Spread With Strings|1. Spread With Strings]]
- [[#2. Spread With Arrays|2. Spread With Arrays]]
- [[#3. Spread Inside Functions|3. Spread Inside Functions]]
- [[#4. Spread With Objects|4. Spread With Objects]]

# ES 6 - Spread Operator 

الـ `Spread Operator` (`...`) بيقوم بوظيفة "فك أو تمدد" لأي عنصر قابل للتكرار (`Iterable` زي المصفوفات أو النصوص)، بحيث يستخرج العناصر اللي جواه ويوزعها كعناصر فردية مستقلة في المكان اللي بتستدعيه فيه.

---
## 1. Spread With Strings 

لو استخدمت الـ `Spread` مع نص، هيفكك النص لحروف منفصلة. دي طريقة ممتازة وسريعة جداً لتحويل نص إلى مصفوفة (بديل ممتاز لدالة `Array.from` أو `split`).

```javascript
console.log("Osama");      // "Osama" (نص عادي)
console.log(..."Osama");   // O s a m a (حروف متفرقة)
console.log([..."Osama"]); // ['O', 's', 'a', 'm', 'a'] (مصفوفة)
```

---
## 2. Spread With Arrays 

ده الاستخدام الأكتر شيوعاً في الـ `Front-End` ، وبيقوم بتلات مهام أساسية:

- **الدمج (`Concatenate`):** بديل أنظف لدالة `concat()`.
- **النسخ (`Copy`):** بيعمل نسخة سطحية (`Shallow Copy`) من المصفوفة.

```javascript
let myArray1 = [1, 2, 3];
let myArray2 = [4, 5, 6];

// 1. دمج أكثر من مصفوفة في مصفوفة واحدة جديدة
let allArrays = [...myArray1, ...myArray2];
console.log(allArrays); // [1, 2, 3, 4, 5, 6]

// 2. أخذ نسخة من مصفوفة
let copiedArray = [...myArray1];
console.log(copiedArray); // [1, 2, 3]
```

---
## 3. Spread Inside Functions 

> [!danger] The Array Argument Trap 
> دوال زي `Math.max()` أو دالة `push()` مابتقبلش تمررلة مصفوفة كاملة كمعامل واحد، لازم تمرر الأرقام مفصولة بفاصلة. زمان كنا بنستخدم طرق معقدة زي `apply()` ، لكن الـ `Spread` حل المشكلة دي بمجرد إنه "بيفك" المصفوفة جوه أقواس الدالة.

```javascript
// استخدام 1: الإضافة داخل مصفوفة
let allFriends = ["Osama", "Ahmed", "Sayed"];
let thisYearFriends = ["Sameh", "Mahmoud"];

// بنفك مصفوفة الأصدقاء الجدد ونضيفهم كعناصر فردية
allFriends.push(...thisYearFriends);
console.log(allFriends); // ["Osama", "Ahmed", "Sayed", "Sameh", "Mahmoud"]

// استخدام 2: مع كائن الرياضيات
let myNums = [10, 20, -100, 100, 1000, 500];

// بيفك المصفوفة لأرقام فردية عشان دالة max تقدر تقارنهم
console.log(Math.max(...myNums)); // 1000
```

---
## 4. Spread With Objects 

نفس قوة الـ `Spread` مع المصفوفات، بتطبق على الكائنات لدمجها أو أخذ نسخة منها (بديل ممتاز لدالة `Object.assign`). ولو في خاصية متكررة، القيمة الأخيرة هي اللي بتعمل `Overwrite` (كتابة فوقية).

```javascript
let objOne = { a: 1, b: 2 };
let objTwo = { c: 3, d: 4 };

// دمج الكائنين، وإضافة خاصية جديدة e في نفس اللحظة
let finalObject = { ...objOne, ...objTwo, e: 5 };

console.log(finalObject); 
// {a: 1, b: 2, c: 3, d: 4, e: 5}
```