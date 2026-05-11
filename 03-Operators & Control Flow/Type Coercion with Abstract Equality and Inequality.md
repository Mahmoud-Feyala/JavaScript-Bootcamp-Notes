---
tags:
  - JavaScript
  - Comparison-Operators
  - Web-Development
date: 2026-02-20
icon: FabSquareJs
---
- [[#1. Abstract Equality ( == ) & Inequality ( != )|1. Abstract Equality ( == ) & Inequality ( != )]]
- [[#2. Strict Equality (  === ) & Strict Inequality ( !== )|2. Strict Equality (  === ) & Strict Inequality ( !== )]]
- [[#3. Relational Operators (> , < , >= , <=)|3. Relational Operators (> , < , >= , <=)]]
- [[#4. Important Notes & Pro Tips (تكات مهمة)|4. Important Notes & Pro Tips (تكات مهمة)]]

## 1. Abstract Equality ( == ) & Inequality ( != )
هنا بيحصل حاجة اسمها **Type Coercion**، يعني اللغة بتحاول توحد نوع الداتا (Data Type) قبل ما تقارن. عشان كده بيقارن الـ Value بس.

```javascript
console.log(10 == "10"); // true -> Compare Value Only
console.log(-100 == "-100"); // true -> Compare Value Only
console.log(10 != "10"); // false -> Compare Value Only
```

---

## 2. Strict Equality (  === ) & Strict Inequality ( !== )
هنا بيقارن القيمة (Value) والنوع (Type) مع بعض من غير ما يغير نوع أي حاجة. ودي **الطريقة الموصى بيها دايماً** في الشغل عشان تمنع أي أخطاء غير متوقعة.



```javascript
console.log(10 === "10"); // false -> Compare Value + Type
console.log(-100 === "-100"); // false -> Compare Value + Type
console.log(10 !== "10"); // true -> Compare Value + Type
console.log(-100 !== "-100"); // true -> Compare Value + Type
```

---

## 3. Relational Operators (> , < , >= , <=)
بنستخدمهم للمقارنة الأكبر من والأصغر من، سواء مع الأرقام أو حتى مع الـ Strings (عن طريق مقارنة ترتيب الحروف الأبجدية).

```javascript
console.log(10 > 20); // false
console.log(10 > 10); // false 
console.log(10 >= 10); // true

console.log(10 < 20); // true 
console.log(10 < 10); // false 
console.log(10 <= 10); // true 
```

---

## 4. Important Notes & Pro Tips (تكات مهمة)

> [!warning] احذر من الـ NaN
> قيمة `NaN` (Not a Number) هي القيمة الوحيدة في لغة JavaScript اللي لا تساوي نفسها.

```javascript
console.log(NaN == NaN); // false
console.log(NaN === NaN); // false

// الطريقة الصح عشان تتأكد إن القيمة NaN
console.log(Number.isNaN(NaN)); // true
```

> [!note] مقارنة الـ null والـ undefined
> الـ `null` والـ `undefined` قيمتين بيساووا بعض في القيمة، بس مش بيساووا بعض في النوع.

```javascript
console.log(null == undefined); // true
console.log(null === undefined); // false
```

> [!danger] مقارنة الـ Arrays والـ Objects (Reference Types)
> لما بتقارن اتنين Arrays أو اتنين Objects، الجافاسكريبت مش بتبص على المحتوى اللي جواهم، لكن بتبص على مكانهم في الذاكرة (Reference in Memory).

```javascript
let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3];

console.log(arr1 == arr2); // false
console.log(arr1 === arr2); // false

// النتيجة false لأن كل Array متخزنة في مكان مختلف في الميموري
```

> [!info] Type Coercion with Booleans
> لما بتقارن الأرقام مع الـ Booleans باستخدام `==` ، الجافاسكريبت بتحول الـ `true` لـ 1، والـ `false` لـ 0.

```javascript
console.log(true == 1); // true
console.log(false == 0); // true
console.log(true === 1); // false (لأن النوع مختلف)
```