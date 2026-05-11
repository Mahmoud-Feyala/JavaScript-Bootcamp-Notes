---
tags:
  - JavaScript
  - OOP
  - Object-Methods
  - Meta-Data
  - Web-Development
date: 2026-04-27
subject: Object Meta Data And Descriptors
---
# JavaScript - Object Meta Data And Descriptors

لما بنكريت كائن بالطريقة العادية، الجافاسكريبت بتدي لكل خاصية صلاحيات كاملة (تتعدل، تتمسح، تظهر). لكن لو عايزين نتحكم في الصلاحيات دي بالمللي، بنستخدم دالة `Object.defineProperty()`.

---

## 1. The Descriptors (متحكمات الخاصية)

- **قابلة للتعديل** (`writable`): لو `false` ، مقدرش أغير قيمتها. (لو حاولت، الكود هيتجاهل التعديل في الوضع العادي، أو يضرب Error في الـ Strict Mode).
- **قابلة للظهور في التكرار** (`enumerable`): لو `false` ، الخاصية دي هتستخبى ومش هتظهر لو عملت `for...in loop` على الكائن أو استخدمت `Object.keys()`.
- **قابلة للحذف أو إعادة الضبط** (`configurable`): لو `false` ، مقدرش أمسح الخاصية دي باستخدام `delete` ، ومقدرش أفتح الـ `defineProperty` تاني عشان أغير إعداداتها!
---

## 2. Practical Example 

في المثال ده، إحنا ضفنا خاصية اسمها `c` للكائن، وقفلنا عليها التعديل والحذف، بس سمحنالها تظهر في الـ Loop.

```javascript
const myObject = {
  a: 1,
  b: 2,
};

// إضافة خاصية جديدة مع التحكم في صلاحياتها
Object.defineProperty(myObject, "c", {
  writable: false,     // ممنوع تعديل القيمة
  enumerable: true,    // مسموح تظهر في اللوب
  configurable: false, // ممنوع مسحها أو إعادة ضبط إعداداتها
  value: 3,            // القيمة نفسها
});

// 1. محاولة تعديل القيمة (محاولة فاشلة بسبب writable: false)
myObject.c = 100; 

// 2. محاولة الحذف (هترجع false ومش هتمسحها بسبب configurable: false)
console.log(delete myObject.c); 

// 3. التكرار على الخصائص (حرف الـ c هيظهر لأن enumerable: true)
for (let prop in myObject) {
  console.log(prop, myObject[prop]);
}
// النتيجة:
// a 1
// b 2
// c 3

// طباعة الكائن بالكامل للتأكد (القيمة زي ما هي 3 متعدلتش لـ 100)
console.log(myObject); // {a: 1, b: 2, c: 3}
```

> [!danger] The Configurable Trap (فخ إعادة الضبط)
> لو خليت الـ `configurable: false` ، المتصفح بيقفل الباب على الخاصية دي نهائياً. لو حاولت تكتب `Object.defineProperty` تاني لنفس الخاصية `c` عشان تخلي الـ `writable: true` مثلاً، الكود هيضرب `TypeError: Cannot redefine property`.

---
# JavaScript - Define Multiple Properties & Check Descriptors

في الدرس اللي فات عرفنا إزاي نتحكم في خاصية واحدة باستخدام `defineProperty`. في الدرس ده بنكمل على نفس الفكرة بس هنتعلم إزاي نطبق الإعدادات دي على أكتر من خاصية في نفس الوقت عشان نوفر كود، وإزاي أصلاً "نتجسس" على أي خاصية ونقرأ إعداداتها المخفية.

---

## 1. Define Multiple Properties (تعريف خصائص متعددة)

بدل ما نكتب الكود لكل خاصية لوحدها ونسحب سطور كتير، الجافاسكريبت بتوفرلنا دالة `Object.defineProperties` (مكتوبة بالجمع). الدالة دي بتاخد الكائن الأساسي، وبعدين بتاخد كائن تاني جواه كل الخصائص الجديدة اللي عايز تضيفها بإعداداتها.

```javascript
const myObject = {
  a: 1,
  b: 2,
};

// إضافة 3 خصائص مرة واحدة بإعداداتهم
Object.defineProperties(myObject, {
  c: {
    configurable: true,
    value: 3,
  },
  d: {
    configurable: true,
    value: 4,
  },
  e: {
    configurable: true,
    value: 5,
  },
});

console.log(myObject); 
// {a: 1, b: 2, c: 3, d: 4, e: 5}
```

> [!danger] Default Values Trap 
> لما بتكريت خاصية بالطريقة العادية زي `a: 1` ، كل الإعدادات (`writable`, `enumerable`, `configurable`) بتكون `true`. لكن لما بتستخدم دالة `defineProperties` ، أي إعداد **مش بتكتبه بإيدك** المتصفح بيعتبره تلقائياً `false`!

---

## 2. Check Descriptors 

لو عندك كائن جاهز وعايز تعرف إعدادات الخصائص بتاعته (`Meta Data`) عشان تتأكد هي مسموح تتعدل أو تتمسح ولا لأ، بنستخدم دوال الفحص دي:

- **لخاصية واحدة** (`getOwnPropertyDescriptor`): بتاخد الكائن واسم الخاصية، وبترجعلك كائن جواه تفاصيل الخاصية دي بس.
- **لكل الخصائص** (`getOwnPropertyDescriptors`): بتاخد الكائن بس، وبترجعلك تفاصيل كل الخصائص اللي جواه.

```javascript
// 1. فحص خاصية واحدة (d)
console.log(Object.getOwnPropertyDescriptor(myObject, "d"));
// النتيجة: {value: 4, writable: false, enumerable: false, configurable: true}
// (لاحظ إن الـ writable و enumerable طلعوا false لأننا محددناهمش فوق!)

// 2. فحص كل خصائص الكائن
console.log(Object.getOwnPropertyDescriptors(myObject));
// النتيجة هتكون كائن كبير جواه كل الخصائص (a, b, c, d, e)، وكل خاصية جواها الـ Meta Data بتاعتها بالظبط.
```