---
tags:
  - JavaScript
  - Promises
  - Asynchronous
  - Web-Development
date: 2026-04-30
subject: Promise Intro And Syntax
---
# JavaScript - Promise Intro And Syntax 

الـ `Promise` في الجافاسكريبت فكرته قريبة جداً من الوعد في الحقيقة. إنت بتعمل وعد بحاجة هتحصل في المستقبل (زي جلب بيانات من سيرفر). برمجياً، الوعد ده عبارة عن كائن (`Object`) بيمثل حالة العملية اللامتزامنة والنتيجة بتاعتها، والهدف الأساسي منه إنه ينقذنا من الـ `Callback Hell`.


---

## 1. Promise Status 

أي وعد بيمر بحالة من التلاتة دول:
- **قيد الانتظار** (`Pending`): دي الحالة المبدئية أول ما الوعد يبتدي، لسه العملية شغالة ومنعرفش نتيجتها.
- **اكتمل بنجاح** (`Fulfilled` أو `Resolved`): العملية تمت بنجاح والبيانات وصلت.
- **مرفوض** (`Rejected`): العملية فشلت لسبب ما (مثلاً مفيش نت أو الرابط غلط).

---

## 2. The Story 

أول ما بتنشئ الـ `Promise` بيبدأ فوراً في حالة الـ `Pending`. العملية بتاخد وقتها، وفي النهاية بتستقر على حالة من اتنين: يا إما `Resolved` (نجح) أو `Rejected` (فشل). 
بناءً على النتيجة دي، الوعد بيستدعي دوال الـ `Callback` اللي إحنا ممررينها عشان تتعامل مع النجاح أو الفشل.

---

## 3. Syntax & "then" 

عشان ننشئ وعد، بنستخدم `new Promise` وبنمررله دالة بتاخد مُعاملين: دالة للنجاح (`resolveFunction`) ودالة للفشل (`rejectFunction`).
ولما نحب نستقبل النتيجة، بنستخدم دالة `.then()`. الدالة دي بتاخد مُعاملين اختياريين:
- المعامل الأول: دالة بتشتغل لو الوعد نجح.
- المعامل التاني: دالة بتشتغل لو الوعد فشل.
```javascript
// 1. إنشاء الوعد
const myPromise = new Promise((resolveFunction, rejectFunction) => {
  let connect = true; // تخيل إن ده اتصال بقاعدة البيانات
  
  if (connect) {
    // لو الاتصال نجح، ابعت الرسالة دي لدالة النجاح
    resolveFunction("Connection Established");
  } else {
    // لو فشل، ارمي خطأ وابعتها لدالة الفشل
    rejectFunction(Error("Connection Failed"));
  }
});

console.log(myPromise); // هيطبع كائن الوعد وحالته

// 2. دوال التعامل مع النتيجة (Callbacks)
let resolver = (resolveValue) => console.log(`Good: ${resolveValue}`);
let rejecter = (rejectValue) => console.log(`Bad: ${rejectValue}`);

// 3. استخدام then لتنفيذ الدوال بناءً على النتيجة
// هنباصي دالة النجاح ودالة الفشل
myPromise.then(resolver, rejecter);

// نقدر نكتبها بشكل مختصر ومباشر كده:
myPromise.then(
  (resolveValue) => console.log(`Good: ${resolveValue}`),
  (rejectValue) => console.log(`Bad: ${rejectValue}`)
);
```

> [!info] ملاحظة هامة
> الميزة في الـ Promise إنك تقدر تستدعي `.then()` عليه أكتر من مرة في أماكن مختلفة في كودك، وكل مرة هيرد عليك بنفس النتيجة اللي استقر عليها.