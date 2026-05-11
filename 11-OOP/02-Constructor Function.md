---
tags:
  - JavaScript
  - OOP
  - Constructor-Function
  - Web-Development
date: 2026-04-26
subject: Constructor Function Introduction
---
- [[#1. The Problem|1. The Problem]]
- [[#2. The Solution|2. The Solution]]
- [[#3. The Magic of "new" Keyword|3. The Magic of "new" Keyword]]
- [[#JavaScript - ES 6 Class Syntax|JavaScript - ES 6 Class Syntax]]
- [[#1. The New Syntax|1. The New Syntax]]
- [[#2. Instance Validation|2. Instance Validation]]
- [[#1. Updating Properties (تحديث خصائص الكائن)|1. Updating Properties (تحديث خصائص الكائن)]]
- [[#2. Built-in Constructors|2. Built-in Constructors]]
- [[#3. The Auto-Boxing Trap|3. The Auto-Boxing Trap]]

# JavaScript - Constructor Function 

دوال البناء (`Constructor Functions`) هي الأساس اللي بنبني عليه الكائنات في الجافاسكريبت. الفكرة منها إننا بنعمل "قالب" (`Blueprint`) نكريت منه كائنات كتير جداً بنفس الهيكل والخصائص، بدل ما نكتب كل كائن بإيدينا من الصفر.

---

## 1. The Problem 

لو عندنا نظام فيه 100 مستخدم، الطريقة العادية (`Object Literals`) هتخلينا نكتب نفس الهيكل 100 مرة، وده بيخلي الكود طويل جداً ومستحيل تعدل عليه بعدين (لو حبيت تضيف خاصية جديدة هتحتاج تلف على الـ 100 كائن).

```javascript
// الطريقة اليدوية (مملة، متكررة، وصعبة التعديل)
const userOne = { id: 100, username: "Elzero", salary: 5000 };
const userTwo = { id: 101, username: "Hassan", salary: 6000 };
const userThree = { id: 102, username: "Sayed", salary: 7000 };
```

---

## 2. The Solution 

بنعمل دالة عادية جداً، بس المتفق عليه بين المبرمجين (`Convention`) إن أول حرف من اسمها لازم يكون كابيتال (`PascalCase`) عشان نميزها عن الدوال العادية. الدالة دي بتاخد البيانات كـ `Parameters` وبتربطها بالكائن عن طريق كلمة `this`.

```javascript
// 1. إنشاء القالب (Constructor Function)
function User(id, username, salary) {
  // this هنا تعود على الكائن الجديد اللي لسه هيتنشأ
  this.i = id;
  this.u = username;
  
  // نقدر نعمل عمليات حسابية أو لوجيك جوه القالب وهيتطبق على كل النسخ
  this.s = salary + 1000; 
}

// 2. إنشاء النسخ باستخدام كلمة new
let userOne = new User(100, "Elzero", 5000);
let userTwo = new User(101, "Hassan", 6000);
let userThree = new User(102, "Sayed", 7000);

// 3. اختبار طباعة البيانات
console.log(userOne.i); // 100
console.log(userOne.u); // "Elzero"
console.log(userOne.s); // 6000 (تم إضافة 1000 من داخل القالب تلقائياً)
```

---

## 3. The Magic of "new" Keyword 

أهم حاجة في العملية دي كلها هي كلمة `new`. لما بتكتبها قبل استدعاء دالة البناء، محرك الجافاسكريبت بيعمل 3 خطوات ورا الكواليس:
1. بيكريت كائن فاضي جديد في الميموري `{}`.
2. بيخلي كلمة `this` جوه الدالة تشاور على الكائن الفاضي ده.
3. بيرجع الكائن ده مليان بالبيانات في النهاية من غير ما إنت تكتب كلمة `return`.

## JavaScript - ES 6 Class Syntax 

تحديث ES 6 جاب معاه طريقة جديدة لكتابة القوالب (`Blueprints`) باستخدام كلمة `class`. الطريقة دي بتنظم الكود أكتر وتفصل بين الخصائص الأساسية وبين الدوال (`Methods`) اللي الكائن هيعملها.

---
## 1. The New Syntax 

بدل ما نكتب دالة عادية، بنستخدم كلمة `class` ، وجواها بنعرف دالة محجوزة اسمها `constructor` (ودي الدالة اللي بتشتغل تلقائياً أول ما نستخدم كلمة `new` عشان تاخد البيانات المبدئية).

```javascript
// 1. إنشاء القالب بالطريقة الحديثة
class User {
  // دالة البناء (تستقبل البيانات وتوزعها على الكائن الجديد)
  constructor(id, username, salary) {
    this.i = id;
    this.u = username;
    this.s = salary + 1000;
  }
}

// 2. إنشاء نسخة جديدة (نفس الطريقة القديمة بالظبط)
let userOne = new User(100, "Elzero", 5000);

console.log(userOne.i); // 100
console.log(userOne.u); // "Elzero"
console.log(userOne.s); // 6000
```

---

## 2. Instance Validation 

أحياناً في المشاريع الكبيرة بيكون عندنا كائنات كتير جداً ومحتاجين نتأكد "الكائن ده مبني من أنهي قالب؟" قبل ما ننفذ عليه لوجيك معين. الجافاسكريبت بتوفرلنا طريقتين للتحقق:

- **طريقة `instanceof`:** بتسأل: "هل الكائن ده يعتبر نسخة (`Instance`) من القالب الفلاني؟" وبترجع `true` أو `false`.
- **طريقة `constructor ===`:** بتدخل جوه الكائن وتشوف خاصية الـ `constructor` بتاعته وتطابقها بشكل مباشر مع اسم القالب.

```javascript
// هل userOne هو نسخة مصنوعة من كلاس User ؟
console.log(userOne instanceof User); // true

// هل القالب اللي بنى userOne متطابق تماماً مع كلاس User ؟
console.log(userOne.constructor === User); // true
```

> [!info] Pro Tip 
> استخدام `instanceof` هو الطريقة الأفضل والأكثر أماناً في الشغل العملي، لأنها بتشتغل بشكل صحيح حتى لو كنت عامل وراثة (`Inheritance`) من كلاس تاني

---

# JavaScript - Update Properties & Built-in Constructors 

الكائنات مش مجرد قوالب ثابتة، إحنا نقدر نغير البيانات اللي جواها في أي وقت باستخدام الدوال. كمان لغة الجافاسكريبت نفسها مبنية بالكامل على فكرة الـ `OOP` وعندها قوالب جاهزة (`Built-in Constructors`) للتعامل مع البيانات.



---

## 1. Updating Properties (تحديث خصائص الكائن)

بعد ما نكريت النسخة باستخدام كلمة `new` ، نقدر نغير البيانات اللي جواها. أفضل ممارسة (`Best Practice`) هي إنك متعدلش الخاصية بشكل مباشر، لكن تعمل دالة (`Method`) جوه الكلاس هي اللي تكون مسؤولة عن التعديل ده.

```javascript
class User {
  constructor(id, username, salary) {
    this.i = id;
    this.u = username;
    this.s = salary;
  }
  
  // دالة مخصصة لتحديث الاسم
  updateName(newName) {
    this.u = newName;
  }
}

let userOne = new User(100, "Elzero", 5000);

console.log(userOne.u); // "Elzero" (الاسم القديم)

// نستخدم الدالة لتحديث الاسم
userOne.updateName("Osama");

console.log(userOne.u); // "Osama" (الاسم الجديد)
```

---

## 2. Built-in Constructors 

الجافاسكريبت عندها قوالب جاهزة زي `String`, `Number`, `Array`, `Object`. 
لما بتكتب نص عادي بين علامتين تنصيص، ده بيسموه `Primitive Value` (قيمة بدائية)، لكن لما تستخدم كلمة `new` مع قالب الـ `String` ، إنت كده بتكريت `Object` كامل.

```javascript
// 1. الطريقة العادية (Primitive)
let strOne = "Elzero";

// 2. الطريقة باستخدام القوالب الجاهزة (Object)
let strTwo = new String("Elzero");

// التحقق من نوع البيانات
console.log(typeof strOne); // "string"
console.log(typeof strTwo); // "object"
```

---

## 3. The Auto-Boxing Trap 

هنا بتيجي تريكة الانترفيوهات: ليه النص العادي (`strOne`) بيقول إنه مش نسخة من `String` ، بس في نفس الوقت بيقول إن الـ `constructor` بتاعه هو `String` ؟!

- **مع دالة `instanceof`:** الدالة دي صارمة جداً. بتسأل "هل ده كائن حقيقي متكريت بكلمة new؟" وبما إن `strOne` قيمة بدائية مش كائن، بترجع `false`.
- **مع دالة `constructor`:** لما بتحاول توصل لخاصية جوه قيمة بدائية (زي `strOne.length` أو `strOne.constructor`)، الجافاسكريبت بتعمل حركة سحرية اسمها التغليف (`Auto-boxing`): بتحول النص العادي لكائن مؤقت في الخلفية، تجيبلك المعلومة اللي إنت عايزها، وبعدين تدمره وترجعه نص عادي تاني!

```javascript
// هل هم نسخ فعلية من القالب؟
console.log(strOne instanceof String); // false (لأنه مجرد قيمة بدائية)
console.log(strTwo instanceof String); // true (لأنه كائن حقيقي)

// من هو القالب المنشئ؟
console.log(strOne.constructor === String); // true (بسبب التغليف التلقائي المؤقت)
console.log(strTwo.constructor === String); // true
```