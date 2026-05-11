---
tags:
  - JavaScript
  - RegEx
  - String-Methods
  - Web-Development
date: 2026-04-25
subject: RegEx Syntax & Modifiers
---
- [[#1. Syntax|1. Syntax]]
- [[#2. Modifiers / Flags (معدلات البحث)|2. Modifiers / Flags (معدلات البحث)]]
- [[#3. The match() Method|3. The match() Method]]

# JavaScript - RegEx Syntax & Modifiers

الـ `Regular Expression` (أو اختصاراً `RegEx`) هو نمط (`Pattern`) بنستخدمه عشان نعمل بحث ومطابقة (`Match`) جوه النصوص. الجافاسكريبت بتتعامل مع الـ RegEx ككائنات (`Objects`).

![[image-1 2.png]]

---

## 1. Syntax 
عندنا طريقتين عشان نكتب بيهم أي Pattern:
- **الطريقة المباشرة (`Literal Syntax`):** وهي الأكثر استخداماً، بنكتب النمط بين علامتين سلاش `/` وبنحط المعدلات في الآخر.
- **طريقة المنشئ (`Constructor Function`):** بنستخدم `new RegExp` لو النمط ده هيتغير ديناميكياً (مثلاً جاي من متغير).

```javascript
// 1. Literal Syntax
let regexLiteral = /pattern/modifiers;

// 2. Constructor Syntax
let regexConstructor = new RegExp("pattern", "modifiers");
```

---

## 2. Modifiers / Flags (معدلات البحث)
الـ `Modifiers` عبارة عن حروف بنضيفها في نهاية النمط عشان نغير طريقة البحث:
- ** `i` (Case-Insensitive):** بيتجاهل حالة الأحرف (كبير أو صغير). يعني A هيطابق a.
- ** `g` (Global):** بيبحث في النص كله (`Global Search`). لو مأضفتوش، البحث هيقف عند أول نتيجة يلاقيها.
- ** `m` (Multiline):** بيتعامل مع النص اللي فيه سطور كتير على أساس إن كل سطر ليه بداية ونهاية مستقلة.

---

## 3. The match() Method
دالة `match` بتُستخدم مع النصوص (`Strings`)، وبتاخد الـ Pattern كمعامل عشان تدور عليه جوه النص.
- **النتيجة الإيجابية:** بترجع مصفوفة (`Array`) فيها كل الكلمات اللي طابقت النمط.
- **النتيجة السلبية:** لو ملقتش أي تطابق، بترجع `null`.

```javascript
let myString = "Hello Elzero Web School I Love elzero";

// البحث بدون معدلات
let strictRegex = /elzero/;

// البحث بمعدلات (i و g)
let flexibleRegex = /elzero/ig;

console.log(myString.match(flexibleRegex)); 
// النتيجة: ['Elzero', 'elzero']
```