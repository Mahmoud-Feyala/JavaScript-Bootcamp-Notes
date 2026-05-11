---
tags:
  - JavaScript
  - OOP
  - Prototype
  - Web-Development
date: 2026-04-26
subject: Prototype Introduction
---
![[image 2.png]]
# JavaScript - Prototype Introduction 

الـ `Prototype` هو الآلية الأساسية اللي بتخلي الكائنات في الجافاسكريبت تورث الخصائص والدوال من بعضها (`Mechanism by which JavaScript objects inherit features from one another`). 

أي كائن بتكريته في الجافاسكريبت مش بيكون فاضي تماماً، لكنه بيكون مربوط بـ `Prototype` مخفي جواه دوال جاهزة تقدر تستخدمها مباشرة.

---

## 1. Classes and Prototypes 

لما بنكتب `class` ونحط جواه دوال (زي `sayHello`)، الجافاسكريبت مش بتنسخ الدالة دي جوه كل كائن بنكريته (عشان متستهلكش الذاكرة). بدل كده، بتحط الدالة دي في مكان مركزي اسمه `User.prototype` ، وكل الكائنات بتشاور على المكان ده.

```javascript
class User {
  constructor(id, username) {
    this.i = id;
    this.u = username;
  }
  
  // الدالة دي بتتحفظ في الـ Prototype الخاص بالكلاس
  sayHello() {
    return `Hello ${this.u}`;
  }
}

let userOne = new User(100, "Elzero");
console.log(userOne.u); // "Elzero"

// لو طبعنا الـ Prototype الخاص بالكلاس، هنلاقي جواه دالة sayHello
console.log(User.prototype); 
```

---

## 2. Built-in Prototypes 

نفس الفكرة دي الجافاسكريبت بتطبقها على أنواع البيانات الأساسية (زي النصوص والأرقام والمصفوفات). 

لما بتكتب نص عادي، الجافاسكريبت بتربطه تلقائياً بـ `String.prototype`. المكان ده هو "المخزن" اللي مليان بكل دوال النصوص اللي إحنا بنستخدمها (زي `toLowerCase` و `split` و `includes` وغيرها).

```javascript
let strOne = "Elzero";

// طباعة النموذج المبدئي الخاص بالنصوص
// هيعرضلك قائمة بكل الدوال المدمجة اللي تقدر تستخدمها مع أي نص
console.log(String.prototype);
```

> [!info] The Prototype Chain (سلسلة الوراثة)
> لو حاولت تستخدم دالة مع كائن معين، الجافاسكريبت بتدور عليها الأول جوه الكائن نفسه. لو ملقتهاش، بتروح تدور في الـ `Prototype` بتاعه. لو ملقتهاش، بتدور في الـ `Prototype` بتاع الأب.. وهكذا لحد ما توصل لنهاية السلسلة (`null`).



![Prototype Introduction](https://youtu.be/hAK4PgReRPA?si=RoWEiB_nRDhFTKZU "Prototype Introduction")

---
# Add To Prototype & Extend Built-ins

إحنا مش مجبرين نكتب كل الدوال جوه الـ `class` من البداية. الجافاسكريبت بتسمحلنا نضيف خصائص ودوال للنموذج المبدئي (`Prototype`) من بره في أي وقت، والميزة الجبارة إن التعديل ده بيُطبق فوراً على كل الكائنات اللي اتكريتت قبل التعديل واللي هتتكريت بعده.

![[image-1 3.png]]

## 1. Add To Custom Prototype 

لو عندنا كلاس اسمه `User` وكريتنا منه نسخة، نقدر بعد كده نضيف دالة جديدة للـ `Prototype` بتاع الكلاس، والنسخة القديمة هتقدر تستخدمها عادي جداً!

```javascript
class User {
  constructor(id, username) {
    this.i = id;
    this.u = username;
  }
  sayHello() {
    return `Hello ${this.u}`;
  }
}

let userOne = new User(100, "Elzero");

// إضافة دالة جديدة للنموذج المبدئي من الخارج
User.prototype.sayWelcome = function () {
  return `Welcome ${this.u}`;
};

// النسخة القديمة قادرة على الوصول للدالة الجديدة!
console.log(userOne.sayWelcome()); // "Welcome Elzero"
```

---

## 2. Extend Built-in Constructors 

دي واحدة من أقوى حركات المحترفين. إنت تقدر تضيف دوال جديدة من اختراعك لأساسيات اللغة زي `String` أو `Array` وتبقى متاحة لأي نص أو مصفوفة في مشروعك.

```javascript
// إضافة دالة جديدة لكل النصوص في المشروع
String.prototype.addDotBeforeAndAfter = function () {
  // الكلمة المفتاحية this هنا تعود على النص نفسه اللي هيستدعي الدالة
  return `.${this}.`; 
};

let myString = "Elzero";

// استخدام الدالة الجديدة كأنها دالة أصلية في اللغة!
console.log(myString.addDotBeforeAndAfter()); // ".Elzero."
```

---

## 3. The Ultimate Danger 

في الجافاسكريبت، كل حاجة (نصوص، أرقام، مصفوفات، كلاسات) بتورث في النهاية من الأب الأكبر وهو `Object.prototype`. لو ضفت خاصية هنا، هتكون متاحة حرفياً في **كل مكان** وفي أي متغير في مشروعك.

> [!danger] Object.prototype Trap
> التعديل على `Object.prototype` بيعتبر ممارسة سيئة (`Bad Practice`) في المشاريع الحقيقية، لأنه بيلوث النطاق العام (`Global Scope`) وممكن يعمل تعارض (`Conflicts`) مع مكتبات تانية. استخدمه بس لو إنت فاهم إنت بتعمل إيه بنسبة 100%.

```javascript
// إضافة خاصية للأب الأكبر
Object.prototype.love = "Elzero Web School";

// الخاصية دي بقت متاحة جوه أي حاجة!
console.log(userOne.love); // "Elzero Web School"
console.log(myString.love); // "Elzero Web School"
```