---
tags:
  - JavaScript
  - BOM
  - Local-Storage
  - Web-Development
date: 2026-04-19
subject: BOM Local Storage API
icon: FiCode
---
- [[#1. Important Information (معلومات هامة)|1. Important Information (معلومات هامة)]]
- [[#2. Set & Get Methods (تخزين واسترجاع البيانات)|2. Set & Get Methods (تخزين واسترجاع البيانات)]]
- [[#3. Remove & Clear (الحذف والتنظيف)|3. Remove & Clear (الحذف والتنظيف)]]
- [[#4. Key Indexing (البحث بالترتيب)|4. Key Indexing (البحث بالترتيب)]]
- [[#5. Practical Application (تطبيق عملي)|5. Practical Application (تطبيق عملي)]]
- [[#1. Update Instead of Delete (التعديل بدلاً من الحذف)|1. Update Instead of Delete (التعديل بدلاً من الحذف)]]
- [[#2. Storing Objects & Arrays (تخزين الكائنات والمصفوفات)|2. Storing Objects & Arrays (تخزين الكائنات والمصفوفات)]]
- [[#3. The Ultimate Workflow (دورة العمل المثالية)|3. The Ultimate Workflow (دورة العمل المثالية)]]

# BOM - Local Storage (التخزين المحلي)

كائن (`localStorage`) بيسمحلك تحفظ بيانات على متصفح المستخدم في شكل (مفتاح وقيمة) أو `Key/Value Pairs`. البيانات دي بتفضل موجودة حتى لو اليوزر قفل الصفحة أو قفل المتصفح بالكامل.


---

## 1. Important Information (معلومات هامة)

عشان تفهم الـ `localStorage` صح وتعرف امتى تستخدمها، لازم تعرف خصائصها:
- **تاريخ الصلاحية (`No Expiration Time`):** البيانات دي ملهاش وقت وتاريخ انتهاء، بتفضل موجودة للأبد لحد ما اليوزر يمسحها بنفسه من إعدادات المتصفح، أو إنت تمسحها بالكود.
- **البروتوكول (`HTTP And HTTPS`):** بتشتغل عادي على المواقع الآمنة والغير آمنة.
- **التصفح الخفي (`Private Tab`):** في وضع الـ `Incognito` ، المتصفح بيكريت `localStorage` مؤقتة، وبمجرد ما اليوزر يقفل التاب، كل البيانات دي بتتمسح فوراً كنوع من الخصوصية.

---

## 2. Set & Get Methods (تخزين واسترجاع البيانات)

رغم إنك تقدر تتعامل مع الـ `localStorage` كأنه كائن (`Object`) عادي وتستخدم النقطة (`.`) أو الأقواس (`[]`)، إلا إن الطريقة القياسية والأكثر أماناً هي استخدام الدوال الجاهزة.

```javascript
// 1. Set (تخزين البيانات)
// بتاخد حاجتين: اسم المفتاح، والقيمة بتاعته
window.localStorage.setItem("color", "#F00");

// طرق تانية بتشتغل (لكن الدوال هي الأفضل)
window.localStorage.fontWeight = "bold";
window.localStorage["fontSize"] = "20px";

// 2. Get (استرجاع البيانات)
// بتاخد اسم المفتاح، وبترجع القيمة بتاعته (ولو مش موجود بيرجع null)
console.log(window.localStorage.getItem("color")); // #F00
```

---

## 3. Remove & Clear (الحذف والتنظيف)

الـ API بيوفرلك طريقتين للحذف، واحدة بتمسح بدقة، والتانية بتعمل فورمات كامل.

```javascript
// Remove One (مسح عنصر واحد فقط عن طريق المفتاح بتاعه)
window.localStorage.removeItem("color");

// Remove All (مسح كل البيانات اللي الموقع بتاعك مخزنها في المتصفح)
window.localStorage.clear();
```

---

## 4. Key Indexing (البحث بالترتيب)

دالة `key` بتاخد رقم (`Index`) وبترجع اسم المفتاح (`Key`) اللي متسجل في الترتيب ده. مفيدة لو بتعمل `Loop` على كل البيانات اللي متخزنة.

```javascript
// جلب اسم أول مفتاح متخزن في الـ Local Storage
console.log(window.localStorage.key(0));
```

---

## 5. Practical Application (تطبيق عملي)

> [!info] الفكرة البرمجية
> إحنا بنقرا اللون المتخزن في متصفح اليوزر، وبنطبقه مباشرة على خلفية الصفحة. ده الأساس اللي بيتبني عليه حفظ أي إعدادات لليوزر في أي موقع.

```javascript
// تطبيق اللون المحفوظ في الـ Local Storage على خلفية الصفحة
document.body.style.backgroundColor = window.localStorage.getItem("color");

// فحص الكائن بالكامل لمعرفة محتوياته ونوعه
console.log(window.localStorage);
console.log(typeof window.localStorage); // Object
```
---

# BOM - Local Storage Best Practices 
عند التعامل مع الـ `localStorage` في المشاريع الحقيقية، هناك ممارسات برمجية (`Best Practices`) يجب اتباعها لكتابة كود نظيف وتجنب الأخطاء الشائعة، خاصة عند التعامل مع البيانات المعقدة مثل الكائنات والمصفوفات.

---

## 1. Update Instead of Delete (التعديل بدلاً من الحذف)

من الأخطاء الشائعة للمبتدئين عند الرغبة في تحديث قيمة معينة، هو القيام بحذفها أولاً باستخدام `removeItem` ثم إضافتها مرة أخرى. 
الطريقة الصحيحة والأسرع هي **الكتابة الفوقية (`Overwriting`)**. بمجرد استخدام `setItem` لنفس المفتاح (`Key`)، ستقوم الجافاسكريبت تلقائياً بمسح القيمة القديمة ووضع الجديدة.

```javascript
// الطريقة الخاطئة (طويلة وتستهلك موارد)
window.localStorage.removeItem("theme");
window.localStorage.setItem("theme", "dark");

// الطريقة الصحيحة (الكتابة الفوقية المباشرة)
window.localStorage.setItem("theme", "dark"); // سيتم التعديل فوراً
```

---

## 2. Storing Objects & Arrays (تخزين الكائنات والمصفوفات)

> [!danger] Data Type Trap (فخ نوع البيانات)
> الـ `localStorage` **لا تقبل سوى النصوص (`Strings`) فقط**. لو حاولت تخزين كائن (`Object`) أو مصفوفة (`Array`) بشكل مباشر، المتصفح هيحولها لنص مبهم زي `[object Object]` والبيانات الحقيقية هتضيع.

لحل هذه المشكلة، نستخدم كائن الـ `JSON` (JavaScript Object Notation) كـ "مترجم" بين الجافاسكريبت والـ `localStorage`:
- **دالة (`JSON.stringify`):** تحول الكائن أو المصفوفة إلى نص (عشان نقدر نخزنه).
- **دالة (`JSON.parse`):** تحول النص اللي راجع من التخزين إلى كائن أو مصفوفة حقيقية (عشان نقدر نعدل عليها في الكود).

```javascript
let userSettings = {
  theme: "Dark",
  fontSize: 16,
  notifications: true
};

// 1. الطريقة الخاطئة (البيانات ستتلف)
// window.localStorage.setItem("settings", userSettings); 

// 2. الطريقة الصحيحة (التحويل لنص قبل التخزين)
window.localStorage.setItem("settings", JSON.stringify(userSettings));

// 3. الاسترجاع (التحويل من نص إلى كائن مرة أخرى للاستخدام)
let storedData = window.localStorage.getItem("settings");
let parsedData = JSON.parse(storedData);

console.log(parsedData.theme); // "Dark"
```

---

## 3. The Ultimate Workflow (دورة العمل المثالية)

لما تحب تعدل على جزء معين جوه كائن أو مصفوفة متخزنة في الـ `localStorage` ، ده هو الـ `Logic` القياسي اللي بنمشي عليه (قراءة -> تحويل -> تعديل -> إعادة حفظ):

```javascript
// تطبيق عملي: إضافة منتج لسلة المشتريات المتخزنة

// 1. قراءة البيانات القديمة وتحويلها لمصفوفة، ولو مفيش بنعمل مصفوفة فاضية
let cart = JSON.parse(window.localStorage.getItem("cart")) || [];

// 2. التعديل على البيانات في الجافاسكريبت (إضافة منتج جديد)
cart.push("New Laptop");

// 3. إعادة تخزين المصفوفة بعد تحويلها لنص (الكتابة الفوقية)
window.localStorage.setItem("cart", JSON.stringify(cart));
```