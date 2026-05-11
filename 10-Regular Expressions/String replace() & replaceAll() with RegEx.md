---
tags:
  - JavaScript
  - RegEx
  - String-Methods
  - ES 2021
  - Web-Development
date: 2026-04-25
subject: String replace() & replaceAll() with RegEx
---
# JavaScript - String replace() & replaceAll() 

الـ `RegEx` مش بس للبحث والـ `Validation` ، نقدر ندمجه مع دوال النصوص زي `replace` و `replaceAll` عشان نعدل على البيانات بشكل ديناميكي وقوي جداً.



---

## 1. The replace() Method 

لو استخدمت دالة `replace` مع نص عادي (`String`)، هتبدل **أول تطابق فقط** وتقف. عشان تخليها تبدل كل الكلمات المطابقة، لازم تستخدم `RegEx` وتديله الـ Global Flag (`g`).

```javascript
let txt = "We Love Programming And @ Because @ Is Amazing";

// 1. الاستبدال بنص عادي (هيبدل أول @ بس)
console.log(txt.replace("@", "JavaScript"));
// النتيجة: "We Love Programming And JavaScript Because @ Is Amazing"

// 2. الاستبدال بـ RegEx مع Global Flag (هيبدل كل الـ @)
console.log(txt.replace(/@/ig, "JavaScript"));
// النتيجة: "We Love Programming And JavaScript Because JavaScript Is Amazing"
```

---

## 2. The replaceAll() Method (الاستبدال الشامل - ES 2021)

دي دالة حديثة نسبياً نزلت عشان تحل مشكلة الـ `replace` مع النصوص العادية. لو مررتلها نص عادي، هتبدله في الجملة كلها من غير ما تحتاج تستخدم `RegEx`.

```javascript
// الاستبدال بنص عادي (هيبدل كل الـ @ بدون الحاجة لـ RegEx)
console.log(txt.replaceAll("@", "JavaScript"));
// النتيجة: "We Love Programming And JavaScript Because JavaScript Is Amazing"
```

> [!danger] replaceAll with RegEx Trap (Global Flag)
> لو قررت تستخدم `RegEx` جوه دالة `replaceAll` ، **إجباري** لازم تحط الـ Global Flag (`g`). لو نسيته، الجافاسكريبت هتضرب `TypeError` وتوقف الكود فوراً.

```javascript
let re = /@/ig; // حرف الـ g هنا هو اللي حامي الكود من إنه يضرب Error

// استخدام المتغير اللي جواه الـ RegEx
console.log(txt.replaceAll(re, "JavaScript"));

// كتابة الـ RegEx مباشرة جوه الدالة
console.log(txt.replaceAll(/@/ig, "JavaScript"));

// النتيجة في الحالتين:
// "We Love Programming And JavaScript Because JavaScript Is Amazing"
```