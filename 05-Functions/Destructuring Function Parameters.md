---
tags:
  - JavaScript
  - ES 6
  - Destructuring
  - Functions
  - Web-Development
date: 2026-04-21
subject: Destructuring Function Parameters
---
- [[#1. The Traditional Way (الطريقة التقليدية)|1. The Traditional Way (الطريقة التقليدية)]]
- [[#2. The ES 6 Way (الطريقة الحديثة)|2. The ES 6 Way (الطريقة الحديثة)]]

# ES 6 - Function Parameters Destructuring (تفكيك معاملات الدوال)

تفكيك المعاملات بيسمحلك تستخرج الخصائص اللي إنت محتاجها بس من الكائن (أو المصفوفة) الممرر للدالة مباشرة جوه أقواس الاستقبال `()`. الطريقة دي بتوفر تكرار الكود وبتخلي شكل الدالة أنظف وأسهل في القراءة (`Clean Code`).



---

## 1. The Traditional Way (الطريقة التقليدية)

في الطريقة القديمة، كنا بنستقبل الكائن كله في متغير (زي `obj`)، وعشان نوصل لأي خاصية جواه كنا بنضطر نكتب `obj.` قبل كل خاصية، وده بيعمل تكرار ممل جداً خصوصاً لو الكائن متداخل ومليان بيانات.

```javascript
const user = {
  theName: "Osama",
  theAge: 39,
  skills: { html: 70, css: 80 },
};

// استقبال الكائن كاملاً
function showDetails(obj) {
  console.log(`Your Name Is ${obj.theName}`);
  console.log(`Your Age Is ${obj.theAge}`);
  console.log(`Your CSS Skill Progress Is ${obj.skills.css}`);
}

showDetails(user);
```

---

## 2. The ES 6 Way (الطريقة الحديثة)

بنطبق نفس قواعد تفكيك الكائنات اللي اتعلمناها، بس المرة دي بنكتبها مباشرة جوه أقواس الدالة. نقدر كمان نغير أسماء المتغيرات (`Aliasing`) ونعمل تفكيك للكائنات المتداخلة (`Nested Destructuring`) في نفس اللحظة.

> [!info] Default Parameters (المعاملات الافتراضية)
> في الكود ده، إنت ضفت `= user` في آخر المعاملات. دي حركة أمان ممتازة (`Fallback`). معناها: لو حد استدعى الدالة `showDetails()` وساب الأقواس فاضية من غير ما يمرر أي كائن، الجافاسكريبت هتستخدم كائن `user` كقيمة افتراضية عشان الكود ميضربش `Error`.

```javascript
const user = {
  theName: "Osama",
  theAge: 39,
  skills: { html: 70, css: 80 },
};

// 1. التفكيك المباشر وتغيير أسماء المتغيرات (theName إلى n)
// 2. الدخول للكائن المتداخل skills واستخراج css في متغير c
// 3. إعطاء قيمة افتراضية = user لتجنب الأخطاء
function showDetails({ theName: n, theAge: a, skills: { css: c } } = user) {
  
  // استخدام المتغيرات القصيرة مباشرة بدون الحاجة لكتابة اسم الكائن
  console.log(`Your Name Is ${n}`);
  console.log(`Your Age Is ${a}`);
  console.log(`Your CSS Skill Progress Is ${c}`);
  
}

// استدعاء الدالة وتمرير الكائن لها
showDetails(user);
```