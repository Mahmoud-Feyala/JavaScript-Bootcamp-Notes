---
tags:
  - JavaScript
  - Higher-Order-Functions
  - Tricks
  - Cheat-Sheet
date: 2026-03-16
---
- [[#1. map Method|1. map Method]]
- [[#2. filter Method|2. filter Method]]
- [[#3. reduce Method|3. reduce Method]]
- [[#4. forEach Method|4. forEach Method]]
- [[#5.  (Method Chaining )|5.  (Method Chaining )]]
---
# Higher Order Functions - Ultimate Cheat Sheet

## 1. map Method

**إمتى نستخدمها؟ (When to use)**
لما نكون عايزين نعدل على **كل عنصر** في الـ `Array` ، ونطلع بـ `Array` جديدة بنفس الطول (نفس عدد العناصر الأصلية).

**الـ Syntax:**
```javascript
array.map(function(currentValue, index, arr), thisValue)
```

**التريكات والأمثلة:**
- **تريكة الـ Ternary Operator:** بنستخدمها عشان نختصر الـ `if` جوه الـ `map` ونعمل تبديل سريع للحالة (مثلاً عكس حالة الحروف).

```javascript
// Swap Cases Example
let sw = "elZERo".split("").map(function (ele) {
  return ele === ele.toUpperCase() ? ele.toLowerCase() : ele.toUpperCase(); 
}).join(""); // "ELzerO"
```

---

## 2. filter Method

**إمتى نستخدمها؟ (When to use)**
لما نكون عايزين نطلع **بجزء معين** من العناصر بناءً على شرط ( `Condition` ). لو الشرط `True` العنصر بيعدي، لو `False` بيتم استبعاده. الـ `Array` الجديدة ممكن تكون أقصر من الأصلية.

**الـ Syntax:**
```javascript
array.filter(function(currentValue, index, arr), thisValue)
```

**التريكات والأمثلة:**
- **تريكة تجاهل الأرقام/الحروف:** استخدام `isNaN` مع `parseInt` عشان نفلتر الـ `String` من الأرقام أو العكس.
- **فخ العمليات الحسابية:** إياك تستخدم `filter` عشان تعمل عملية حسابية ( `ele + ele` ) لأنها بتعتبر أي رقم غير الصفر `True` وهترجع العنصر الأصلي.
```javascript
// Ignore Numbers Example
let ign = "Elz123er4o".split("").filter(function (ele) {
  return isNaN(parseInt(ele)); // بيعدي الحروف بس
}).join(""); // "Elzero"
```

---

## 3. reduce Method

**إمتى نستخدمها؟ (When to use)**
لما نكون عايزين نضغط كل عناصر الـ `Array` ونطلع **بقيمة واحدة بس** ( `Single Value` ) في النهاية (سواء القيمة دي مجموع، أو أطول كلمة، أو دمج نصوص).

**الـ Syntax:**

```javascript
array.reduce(function(accumulator, currentValue, currentIndex, arr), initialValue)
```

**التريكات والأمثلة:**
- **فخ الـ Index:** لو محطيتش `initialValue` ، اللوب بتبدأ من `Index 1` . لو حطيت، بتبدأ من `Index 0` .
- **تريكة الاحتفاظ بالحالة (أطول كلمة):** الـ `Accumulator` مش مجرد رقم بيتجمع، ممكن يكون "أطول كلمة" بنحتفظ بيها ونقارنها باللي بعدها.

```javascript
// Longest Word Example
let words = ["Bla", "Propaganda", "Other"];
let longest = words.reduce(function (acc, current) {
  return acc.length > current.length ? acc : current;
}); // "Propaganda"
```

---

## 4. forEach Method

**إمتى نستخدمها؟ (When to use)**
لما نكون عايزين ننفذ أمر معين ( `Side Effect` ) على كل عنصر في الـ `Array` من غير ما نرجع `Array` جديدة (زي إننا نضيف `Event` لعناصر في الـ `DOM` ).

**الـ Syntax:**

```javascript
array.forEach(function(currentValue, index, arr), thisValue)
```

**التريكات والأمثلة:**
- **فخ الفرامل والرجوع:** الـ `forEach` بترجع `Undefined` دايماً، ومينفعش تستخدم جواها `break` أو `continue` (بتلف على كل العناصر إجباري).

```javascript
// DOM Manipulation Example
let allLis = document.querySelectorAll("ul li");
allLis.forEach(function (ele) {
  ele.onclick = function () {
    // بتلف على كل الـ li تمسح الكلاس، وتضيفه للي اتعمله كليك بس
    allLis.forEach((e) => e.classList.remove("active"));
    this.classList.add("active");
  };
});
```

---

## 5.  (Method Chaining )

**إمتى نستخدمها؟**
لما يكون عندنا نص أو بيانات محتاجة أكتر من مرحلة معالجة ورا بعض. بنرص الدوال ورا بعض في سطر واحد عشان الكود يكون احترافي وقصير.

**تريكة الترتيب المنطقي:**
دايماً بنبدأ بـ `split` (عشان نحول لـ Array) -> بعدين `filter` (عشان ننضف) -> بعدين `map` (عشان نعدل) -> وفي الآخر `join` (عشان نرجع لنص).


```javascript
// Filter Strings + Multiply Numbers
let mixed = "A13BS2ZX";
let result = mixed
  .split("")
  .filter((ele) => !isNaN(parseInt(ele))) // 1. فكها واطرد الحروف
  .map((ele) => ele * ele)                // 2. اضرب الأرقام اللي عدت
  .join("");                              // 3. الزقهم في بعض

console.log(result); // "194"
```