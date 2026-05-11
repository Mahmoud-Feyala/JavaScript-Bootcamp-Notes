---
tags:
  - JavaScript
  - Modules
  - Import-Export
  - Web-Development
date: 2026-04-28
subject: Modules Import And Export
---
# JavaScript - Modules Import And Export 

نظام الـ `Modules` بيسمحلك تقسم كود الجافاسكريبت بتاعك لملفات صغيرة ومنفصلة. كل ملف بيعتبر "وحدة" مستقلة، الخصائص والدوال اللي جواه بتكون مخفية عن باقي المشروع، إلا لو إنت قررت تعملها تصدير (`Export`)، وساعتها أي ملف تاني يقدر يعملها استيراد (`Import`) ويستخدمها.


---

## 1. Enable Modules in HTML 

عشان المتصفح يفهم إن الملفات دي مش مجرد سكربتات عادية وإنها بتكلم بعضها، **لازم** تضيف السمة `type="module"` جوه تاج الـ `<script>` في ملف الـ `index.html`.

```html
<body>
  <script src="main.js" type="module"></script>
  <script src="app.js" type="module"></script>
</body>
```
*(ملحوظة: الـ Modules بتحتاج تفتح الصفحة عن طريق Live Server عشان متضربش منك خطأ CORS Policy لو فتحتها كملف عادي من الكمبيوتر).*

---

## 2. Exporting Data 

في ملف الـ `main.js` (الملف اللي فيه البيانات الأساسية)، إحنا بنعرف المتغيرات والدوال عادي جداً. عشان نسمح للملفات التانية تستخدمهم، بنجمعهم في قوسين المجموعة `{}` ونكتب قبلهم كلمة `export`. دي بتتسمى (التصدير المُسمى - `Named Export`).

```javascript
/* ملف main.js */

let a = 10;
let arr = [1, 2, 3, 4];

function saySomething() {
  return `Something`;
}

// تصدير المتغيرات والدالة عشان تكون متاحة لباقي الملفات
export { a, arr, saySomething };
```

---

## 3. Importing & Aliasing 

في ملف الـ `app.js` (الملف اللي هيستقبل البيانات)، بنستخدم كلمة `import` وبعدها قوسين المجموعة عشان نحدد إحنا عايزين نسحب إيه بالظبط من ملف `main.js`. 

> [!info] The  as Keyword (تغيير الاسم المستعار)
> لو عندك دالة اسمها طويل، أو خايف يحصل تعارض (`Conflict`) مع دالة تانية بنفس الاسم في ملفك الحالي، تقدر تستخدم كلمة `as` عشان تديها اسم مختصر أو جديد جوه الملف ده بس.

```javascript
/* ملف app.js */

// استيراد a و arr زي ما هما، وتغيير اسم الدالة لـ s للسهولة
import { a, arr, saySomething as s } from "./main.js";

console.log(a);       // 10
console.log(arr);     // [1, 2, 3, 4]
console.log(s());     // "Something" (استخدمنا الاسم الجديد)
```

---

# JavaScript - Default Export & Import All 

في الدرس اللي فات اتعلمنا التصدير المُسمى (`Named Export`). في الدرس ده هنتعلم إزاي ندي اسم مستعار وإحنا بنصدر، وإزاي نعمل تصدير افتراضي أساسي للملف، وأخيراً إزاي نسحب كل البيانات في خطوة واحدة.

---

## 1. Export Alias (تغيير الاسم عند التصدير)

زي ما استخدمنا كلمة `as` لتغيير الاسم وإحنا بنعمل استيراد (`Import`)، نقدر كمان نستخدمها وإحنا بنعمل تصدير (`Export`) من المصدر نفسه عشان نغير اسم المتغير أو الدالة قبل ما تروح للملفات التانية.

```javascript
/* ملف main.js */
let a = 10;
let arr = [1, 2, 3, 4];

function saySomething() { return `Something`; }

// تصدير المتغير a باسم جديد (myNumber)
export { a as myNumber, arr, saySomething };
```

---

## 2. Default Export (التصدير الافتراضي)

كل ملف أو `Module` يقدر يكون جواه تصدير افتراضي **واحد فقط لا غير**. ده بيعبر عن "المهمة الأساسية" للملف ده. الميزة الجبارة هنا إنك وإنت بتستورده، مش بتحتاج تحطه بين أقواس `{}` ، وتقدر تسميه **أي اسم** يعجبك!

```javascript
/* ملف main.js */

// تصدير دالة مجهولة كـ Default Export (التصدير الأساسي للملف)
export default function () {
  return `Hello`;
}
```

```javascript
/* ملف app.js */

// استيراد التصدير الافتراضي (سميناه elzero) + استيراد الخصائص المسماة
import elzero, { myNumber, arr, saySomething as s } from "./main.js";

console.log(elzero()); // "Hello" (نفذ الدالة الافتراضية)
console.log(myNumber); // 10
```

> [!danger] قاعدة التصدير الافتراضي
> مستحيل تكتب `export default` أكتر من مرة في نفس الملف. هو واحد بس بيمثل الكيان الرئيسي للملف.

---

## 3. Import All 

لو ملف المصدر مليان دوال ومتغيرات، ومش عايز تكتبهم كلهم بين أقواس، تقدر تستخدم النجمة `*` عشان تستورد الملف كله وتخزنه جوه "كائن" (`Object`) واحد، وتقدر توصل لأي حاجة جواه بنظام النقطة (`Dot Notation`).

```javascript
/* ملف app.js */

// استيراد كل شيء وتجميعه في كائن اسمه all
import * as all from "./main.js";

// لو طبعنا all هنلاقيه كائن جواه كل الخصائص اللي اتعملها تصدير
console.log(all); 

// الوصول للبيانات المسماة
console.log(all.myNumber); // 10
console.log(all.arr);      // [1, 2, 3, 4]

// للوصول للتصدير الافتراضي باستخدام هذه الطريقة:
console.log(all.default()); // "Hello"
```