---
tags:
  - JavaScript
  - ES 6
  - Destructuring
  - Objects
  - Web-Development
date: 2026-04-21
subject: Destructuring Objects
---
- [[#1. The Basics (الأساسيات)|1. The Basics (الأساسيات)]]
- [[#2. Naming & Default Values (تغيير الأسماء والقيم الافتراضية)|2. Naming & Default Values (تغيير الأسماء والقيم الافتراضية)]]
- [[#3. Nested Objects (الكائنات المتداخلة)|3. Nested Objects (الكائنات المتداخلة)]]
- [[#4. Destructuring Nested Object Only (التفكيك المباشر للداخل)|4. Destructuring Nested Object Only (التفكيك المباشر للداخل)]]

# ES 6 - Destructuring Objects (تفكيك الكائنات)

تفكيك الكائنات بيسمحلك تستخرج القيم (`Values`) من الكائن وتحطها في متغيرات منفصلة. الميزة الأقوى هنا إنك بتستخرج بناءً على "اسم الخاصية" مش "ترتيبها"، يعني مش مضطر تمشي بالترتيب زي المصفوفات.



---

## 1. The Basics (الأساسيات)

في الطريقة القديمة كنا بنضطر نكتب اسم الكائن دايماً (`user.theName`)، لكن دلوقتي بنكتب الخصائص اللي عايزينها جوه أقواس الكائن `{}` ونساويها باسم الكائن الأصلي.

> [!danger] Parentheses Trap (فخ الأقواس)
> لو إنت كنت معرف المتغيرات فوق (زي `let theName;`) وجيت تعمل `Destructuring` في سطر جديد من غير `let` أو `const` ، الجافاسكريبت هتعتبر الأقواس دي بداية كود (`Block Code`) وهتطلع `Error`. الحل إنك تحط التفكيك كله جوه أقواس عادية كدة: `({ theName, theAge } = user);`.

```javascript
const user = {
  theName: "Osama",
  theAge: 39,
  theTitle: "Developer",
  theCountry: "Egypt",
};

// استخراج الخصائص بأسماء مطابقة تماماً لما بداخل الكائن
const { theName, theAge, theCountry } = user;

console.log(theName); // Osama
console.log(theAge); // 39
```

---

## 2. Naming & Default Values (تغيير الأسماء والقيم الافتراضية)

مش دايماً أسماء الخصائص اللي جاية من السيرفر بتكون مناسبة للكود بتاعك. الجافاسكريبت بتسمحلك تغير اسم المتغير وإنت بتستخرجه، وكمان تديله قيمة افتراضية لو مش موجود.

- **تغيير الاسم:** بنستخدم نقطتين فوق بعض (`theName: n`).
- **القيمة الافتراضية:** بنستخدم علامة يساوي (`theColor = "Red"`).
- **الدمج مع بعض:** (`theColor: co = "Red"`).

```javascript
const user = {
  theName: "Osama",
  theAge: 39,
  theColor: "Black",
};

const {
  theName: n, // تغيير اسم المتغير إلى n
  theAge: a, 
  theColor: co = "Red", // تغيير الاسم وإعطاء قيمة افتراضية لو مش موجود
} = user;

console.log(n); // Osama
console.log(a); // 39
console.log(co); // Black (الخاصية موجودة فتجاهل القيمة الافتراضية)
```

---

## 3. Nested Objects (الكائنات المتداخلة)

لو الكائن جواه كائن تاني (`Nested Object`)، بنعمل نفس التطابق الهيكلي اللي عملناه في المصفوفات المعقدة.



```javascript
const user = {
  theName: "Osama",
  skills: {
    html: 70,
    css: 80,
  },
};

// الدخول لخصائص الـ skills عن طريق فتح أقواس كائن جديدة
const {
  theName,
  skills: { html: h, css }, // استخرجنا الـ html وغيرنا اسمها، واستخرجنا الـ css زي ما هي
} = user;

console.log(`My HTML Skill Progress Is ${h}`);
console.log(`My CSS Skill Progress Is ${css}`);
```

---

## 4. Destructuring Nested Object Only (التفكيك المباشر للداخل)

لو إنت مش محتاج أي حاجة من الكائن الأب (`user`) ومحتاج بيانات الكائن الداخلي بس (`skills`)، تقدر توجه عملية الاستخراج عليه بشكل مباشر لتوفير الكود.

```javascript
// توجيه التفكيك مباشرة على user.skills
const { html: skillOne, css: skillTwo } = user.skills;

console.log(`My HTML Skill Progress Is ${skillOne}`);
console.log(`My CSS Skill Progress Is ${skillTwo}`);
```