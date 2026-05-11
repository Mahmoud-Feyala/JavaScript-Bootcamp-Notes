---
tags:
  - JavaScript
  - Strings
  - Web-Development
date: 2026-02-20
icon: FabSquareJs
banner:
---
- [[#1. Accessing Characters|1. Accessing Characters]]
	- [[#1. Accessing Characters#Access With Index  []|Access With Index  []]]
	- [[#1. Accessing Characters#Access With charAt()|Access With charAt()]]
- [[#2. String Properties|2. String Properties]]
	- [[#2. String Properties#length (طول النص)|length (طول النص)]]
- [[#3. Formatting & Manipulation Methods|3. Formatting & Manipulation Methods]]
	- [[#3. Formatting & Manipulation Methods#trim() (تنظيف المسافات)|trim() (تنظيف المسافات)]]
	- [[#3. Formatting & Manipulation Methods#toUpperCase() & toLowerCase() (حالة الحروف)|toUpperCase() & toLowerCase() (حالة الحروف)]]
	- [[#3. Formatting & Manipulation Methods#repeat() (تكرار النص)|repeat() (تكرار النص)]]
- [[#4. Searching & Extracting Methods|4. Searching & Extracting Methods]]
	- [[#4. Searching & Extracting Methods#indexOf() (البحث عن الـ Index)|indexOf() (البحث عن الـ Index)]]
	- [[#4. Searching & Extracting Methods#includes() (هل القيمة موجودة؟)|includes() (هل القيمة موجودة؟)]]
	- [[#4. Searching & Extracting Methods#substring() (قطع جزء من النص)|substring() (قطع جزء من النص)]]
- [[#5. Checking Data Type (is string)|5. Checking Data Type (is string)]]
- [[#6. Checking Data Type (Array.isArray)|6. Checking Data Type (Array.isArray)]]

# JavaScript String Methods

## 1. Accessing Characters 

عندنا طريقتين عشان نجيب حرف معين من الـ String بناءً على الـ Index بتاعه (وبنبدأ عد من صفر):

### Access With Index  [] 
```javascript
let myName = "Mahmoud";
console.log(myName[0]); // "M"
console.log(myName[myName.length - 1]); // "d" (آخر حرف)
```

### Access With charAt()
```javascript
let myName = "Mahmoud";
console.log(myName.charAt(0)); // "M"

// التكة هنا: لو طلبت Index مش موجود
console.log(myName[10]); // undefined
console.log(myName.charAt(10)); // "" (بيرجع String فاضي مش undefined)
```

---

## 2. String Properties

### length (طول النص)
دي Property (خاصية) مش Method، فمش بنحط بعدها أقواس `()`. بترجعلك عدد الحروف اللي في الـ String شاملة المسافات.

```javascript
let myName = "Mahmoud";
console.log(myName.length); // 7
```

---

## 3. Formatting & Manipulation Methods

### trim() (تنظيف المسافات)
بيشيل المسافات (Spaces) من أول وآخر الـ String بس، مش بيقرب للمسافات اللي في النص.

```javascript
let theName = "   Mahmoud   ";
console.log(theName.trim()); // "Mahmoud"
```

### toUpperCase() & toLowerCase() (حالة الحروف)
```javascript
let myName = "Mahmoud";
console.log(myName.toUpperCase()); // "MAHMOUD"
console.log(myName.toLowerCase()); // "mahmoud"
```

### repeat() (تكرار النص)
بيكرر الـ String عدد معين من المرات.

```javascript
let word = "Code";
console.log(word.repeat(3)); // "CodeCodeCode"
```

---

## 4. Searching & Extracting Methods

### indexOf() (البحث عن الـ Index)
بنديله الكلمة أو الحرف، وبيرجعلك الـ Index اللي بتبدأ منه الكلمة دي. لو ملقاش حاجة بيرجع `-1`.

```javascript
let title = "Elzero Web School";
console.log(title.indexOf("Web")); // 7
console.log(title.indexOf("Mahmoud")); // -1
```

### includes() (هل القيمة موجودة؟)
بتسأل سؤال إجابته `true` أو `false`: هل الـ String ده موجود جوه النص ولا لأ؟

```javascript
let title = "Elzero Web School";
console.log(title.includes("Web")); // true
console.log(title.includes("Zero")); // false (لأن الحرف الأول كابيتال في الـ String الأصلي)
```

### substring() (قطع جزء من النص)
بنستخدمها عشان نقطع حتة من الـ String. بتاخد (نقطة البداية، نقطة النهاية)، ومش بتاخد نقطة النهاية معاها في القطع.

```javascript
let title = "Elzero Web School";
console.log(title.substring(0, 6)); // "Elzero" (قطع من اندكس 0 لحد اندكس 5)
console.log(title.substring(7)); // "Web School" (لو مديتوش نهاية، بيكمل للآخر)
```

---

## 5. Checking Data Type (is string)

في الجافاسكريبت مفيش Method مباشرة اسمها `isString` على الـ String نفسه. الطريقة الصح عشان تتأكد إن المتغير ده نوعه String هي استخدام `typeof`.

```javascript
let myName = "Mahmoud";
let myAge = 20;

console.log(typeof myName === "string"); // true
console.log(typeof myAge === "string"); // false
```
---
## 6. Checking Data Type (Array.isArray)

بما إن الـ Arrays في الجافاسكريبت بتعتبر نوع من أنواع الـ Objects، فلو استخدمنا `typeof` معاها هترجع كلمة `object`. عشان كده لو عايزين نتأكد 100% إن المتغير ده عبارة عن Array بنستخدم `Array.isArray()`.

```javascript
let myFriends = ["Ahmed", "Sayed", "Ali"];
let myName = "Mahmoud";

console.log(typeof myFriends); // "object" (نتيجة مش دقيقة كفاية)

// الطريقة الصح عشان تتأكد إن المتغير ده Array
console.log(Array.isArray(myFriends)); // true
console.log(Array.isArray(myName)); // false
```
---
