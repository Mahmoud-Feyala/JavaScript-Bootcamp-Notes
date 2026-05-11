---
tags:
  - JavaScript
  - Functions
  - Basics
  - Web-Development
date: 2026-03-15
---
- [[#1. What is a Function?|1. What is a Function?]]
- [[#2. Calling Functions|2. Calling Functions]]
- [[#3. User-Defined vs Built-In|3. User-Defined vs Built-In]]
- [[#4. Syntax & Examples|4. Syntax & Examples]]
	- [[#4. Syntax & Examples#1. Basic Function|1. Basic Function]]
	- [[#4. Syntax & Examples#2. Using Parameters|2. Using Parameters]]
- [[#5. Using return|5. Using return]]
	- [[#5. Using return#1. Returning a Value|1. Returning a Value]]
	- [[#5. Using return#2. Using return to Interrupt (Stop Execution)|2. Using return to Interrupt (Stop Execution)]]
- [[#6. Default Function Parameters|6. Default Function Parameters]]
	- [[#6. Default Function Parameters#The Old Way|The Old Way]]
	- [[#6. Default Function Parameters#The Best Way ( ES6 Method)|The Best Way ( ES6 Method)]]
- [[#7. Rest Parameters ( ... )|7. Rest Parameters ( ... )]]
- [[#8. Anonymous Function (الدالة المجهولة)|8. Anonymous Function (الدالة المجهولة)]]
	- [[#8. Anonymous Function (الدالة المجهولة)#Example 1: Assigning to a Variable|Example 1: Assigning to a Variable]]
	- [[#8. Anonymous Function (الدالة المجهولة)#Example 2: DOM Events & Callbacks (الاستخدام الأشهر)|Example 2: DOM Events & Callbacks (الاستخدام الأشهر)]]
- [[#9. Nested Functions (الدوال المتداخلة)|9. Nested Functions (الدوال المتداخلة)]]
	- [[#9. Nested Functions (الدوال المتداخلة)#Example 1: Basic Nesting|Example 1: Basic Nesting]]
	- [[#9. Nested Functions (الدوال المتداخلة)#Example 2: Returning the Result directly|Example 2: Returning the Result directly]]
	- [[#9. Nested Functions (الدوال المتداخلة)#Example 3: Deep Nesting (3 Levels)|Example 3: Deep Nesting (3 Levels)]]
- [[#10. Arrow Function ( => )|10. Arrow Function ( => )]]
	- [[#10. Arrow Function ( => )#1. Normal vs Arrow|1. Normal vs Arrow]]
	- [[#10. Arrow Function ( => )#2. Implicit Return (One Line)|2. Implicit Return (One Line)]]
	- [[#10. Arrow Function ( => )#3. Handling Parameters|3. Handling Parameters]]
# JavaScript Functions

## 1. What is a Function?
- الـ **Functions** عبارة عن بلوكات من الكود ( `Reusable code blocks` ) مصممة عشان تنفذ مهمة معينة ( `Specific task` ).
- بتعتبر جزء أساسي ( `Fundamental` ) في كل لغات البرمجة.
- الكود اللي جواها مش بيشتغل غير لما نعملها **Call** أو **Invoke** (استدعاء).

---

## 2. Calling Functions
- عشان تنفذ الـ `Function` ، لازم تعملها استدعاء.
- بنعمل `Call` عن طريق كتابة اسم الـ `Function` وبعدها أقواس `()` .
- **مثال:** `name()`

---

## 3. User-Defined vs Built-In
* **Built-in Functions:** دي دوال جاهزة في اللغة (زي `console.log` )، مش بعمل حاجة غير إني بستخدمها بس.
* **User-Defined Functions:** دي الدوال اللي أنا كمبرمج بكريتها ( `Create` ) بنفسي جوه اللغة عشان تنفذ لوجيك معين.

---

## 4. Syntax & Examples

### 1. Basic Function
```javascript
console.log(typeof console.log); // Output: "function"

// Function Declaration (Syntax)
function sayHello() {
  console.log("Hello Mahmoud");
}

sayHello(); // Calling the Function -> Output: Hello Mahmoud
```

### 2. Using Parameters
بنستخدم الـ **Parameters** عشان نبعت داتا متغيرة للـ `Function` وتتعامل معاها.
```javascript
function sayHello(userName) {
  console.log(`Hello ${userName}`);
}

sayHello("Mahmoud"); // Output: Hello Mahmoud
```

---

## 5. Using return

> [!warning] ملاحظة  
> مينفعش يكون في أي كود بيتنفذ بعد الـ `return` جوه نفس البلوك. الـ `return` بتنهي تنفيذ الـ `Function` فوراً.

### 1. Returning a Value
```javascript
function calc(num1, num2) {
  return num1 + num2; // بترجع القيمة عشان أقدر أستخدمها بره
}

let result = calc(1, 4);
console.log(result); // Output: 5
```

### 2. Using return to Interrupt (Stop Execution)
ممكن نستخدم `return` فاضية عشان نوقف الـ `loop` أو الـ `Function` بناءً على شرط معين.

```javascript
function generate(start, end) {
  for (let i = start; i <= end; i++) {
    console.log(i);
    if (i === 25) {
      return; // Interrupting the execution
    }
  }
}

generate(20, 89); // هيطبع الأرقام من 20 لـ 25 ويقف
```

---

## 6. Default Function Parameters

لو معملناش pass لقيمة وإحنا بنعمل `Call` للـ Function ، قيمة الـ `Parameter` بتكون undefined

### The Old Way
```javascript
function sayHello(userName, age) {
  if (age === undefined) {
    age = "Unknown";
  }
  return `Hello ${userName} Your age is ${age}`;
}

console.log(sayHello("Mahmoud", 20)); // Hello Mahmoud Your age is 20
console.log(sayHello("Mahmoud")); // Hello Mahmoud Your age is Unknown
```

### The Best Way ( ES6 Method)
دي الطريقة الأفضل والأحدث عشان نتحكم في الـ `Default values` بطريقة نظيفة.
```javascript
function sayHello(username = "Unknown", age = "Unknown") {
  return `Hello ${username} Your Age Is ${age}`;
}

console.log(sayHello()); // Hello Unknown Your Age Is Unknown
```

---

## 7. Rest Parameters ( ... )

لو عايز أعمل Function تحسب مجموع عناصر ومش عارف الـ Function هتاخد كام `Parameter` وقت الـ `Call` ، بنستخدم الـ **Rest Parameters**. دي بتجمع كل الـ Arguments اللي متبعتة وتخليها في **Array**.

```javascript
function calcSum(...numbers) {
  let result = 0;
  for (let index = 0; index < numbers.length; index++) {
    result += numbers[index];
  }
  return `Final Result is ${result}`;
}

console.log(calcSum(10, 20, 30, 90)); // Output: Final Result is 150
```

---

## 8. Anonymous Function (الدالة المجهولة)

دي `Function` ملهاش اسم. بنستخدمها عادة لما نكون محتاجين نربط أكشن معين بحدث، أو نمررها كـ `Parameter` ، ومش هنحتاج ننادي عليها بالاسم في مكان تاني في الكود.

> [!info] ملاحظة هامة (Hoisting)
> الـ Anonymous Function (لو متخزنة في متغير) لازم تتكتب **قبل** ما تستخدمها لأنها بتتعمل في الـ Runtime ومش بيحصلها `Hoisting` زي الـ Function Declaration العادية.

### Example 1: Assigning to a Variable
```javascript
let calculator = function (num1, num2) {
  return num1 + num2;
}

console.log(typeof calculator); // function
```

### Example 2: DOM Events & Callbacks (الاستخدام الأشهر)
```javascript
// بتشتغل بس لما يحصل كليك
document.getElementById("show").onclick = function () {
  console.log("Start"); 
};

// بتشتغل بعد وقت معين (Callback Function)
setTimeout(function () {
  console.log("Good");
}, 9000); // After 9 seconds print Good
```

---

## 9. Nested Functions (الدوال المتداخلة)

بنقدر نكتب `Function` جوه `Function` تانية. ده بيفيدنا في تنظيم الكود وإخفاء اللوجيك الداخلي. الدالة الداخلية بتقدر توصل لمتغيرات الدالة الخارجية ( Scope ).

### Example 1: Basic Nesting
```javascript
function sayMessage(fName, lName) {
  let message = `Hello`;

  function concatMessage() {
    message = `${message} ${fName} ${lName}`;
  }

  concatMessage();
  return message;
}
console.log(sayMessage("Mahmoud", "Feyala")); // Hello Mahmoud Feyala
```

### Example 2: Returning the Result directly
```javascript
function sayMessage(fName, lName) {
  let message = `Hello`;

  function concatMessage() {
    return `${message} ${fName} ${lName}`;
  }

  return concatMessage();
}
console.log(sayMessage("Mahmoud", "Feyala")); // Hello Mahmoud Feyala
```

### Example 3: Deep Nesting (3 Levels)
```javascript
function sayMessage(fName, lName) {
  let message = `Hello`;

  function concatMessage() {
    function getFullName() {
        return `${fName} ${lName}`;
    }
    return `${message} ${getFullName()}`;
  }

  return concatMessage();
}
console.log(sayMessage("Mahmoud", "Feyala")); // Hello Mahmoud Feyala
```

---

## 10. Arrow Function ( => )

الـ Arrow Function هي طريقة مختصرة جداً لكتابة الـ `Functions` في الجافاسكريبت (ظهرت في ES6 ). مفيدة جداً عشان بتخلي الكود أنظف وأقصر.

> [!note] تدرج الاختصار في الـ Arrow Functions
> الجافاسكريبت بتسمحلك تشيل أجزاء من الـ Syntax (زي الأقواس وكلمة return ) لو الكود بتاعك بسيط وعبارة عن سطر واحد بس.

### 1. Normal vs Arrow
```javascript
// Normal Anonymous Function
let printNormal = function () {
  return 10;
}

// Arrow Function
let printArrow = () => {
  return 10;
}
```

### 2. Implicit Return (One Line)
لو الـ `Function` بتعمل `return` لسطر واحد بس، ممكن نشيل كلمة `return` ونشيل الأقواس `{}` .

```javascript
let print = () => 10;
console.log(print()); // 10

// تكة: لو مش عايز تكتب أقواس فاضية () ممكن تستخدم _ (Underscore) كبديل لشكل الأقواس.
let printUnderscore = _ => 10; 
console.log(printUnderscore()); // 10
```

### 3. Handling Parameters
لو الـ `Function` بتاخد **Parameter واحد بس**، تقدر تشيل الأقواس `()` من حوالين الـ Parameter . لو أكتر من واحد، لازم تكتب الأقواس.

```javascript
// Single Parameter (No Parentheses needed)
let printNum = num => num;
console.log(printNum(300)); // 300

// Multiple Parameters (Parentheses required)
let calc = (num1, num2) => num1 + num2;
console.log(calc(100, 200)); // 300
```
---
