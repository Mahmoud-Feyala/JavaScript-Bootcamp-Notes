---
tags:
  - JavaScript
  - BOM
  - Location-Object
  - URL-Routing
  - Web-Development
date: 2026-04-19
subject: BOM Location Object
ollama_min_p:
icon: FiCode
---
- [[#1. URL Properties (خصائص قراءة وتعديل الرابط)|1. URL Properties (خصائص قراءة وتعديل الرابط)]]
- [[#2. Location Methods (دوال التحكم في الموقع)|2. Location Methods (دوال التحكم في الموقع)]]

# BOM - Location Object (كائن الموقع)

كائن الـ `location` هو جزء من كائن الـ `window` الكبير، ومسؤوليته الكاملة هي التعامل مع الرابط (`URL`) بتاع الصفحة اللي اليوزر فاتحها حالياً، سواء بقراءة بيانات منه أو تعديله لتوجيه اليوزر لمكان تاني.



---

## 1. URL Properties (خصائص قراءة وتعديل الرابط)

الجافاسكريبت بتفصص الرابط لأجزاء عشان تقدر توصل لأي جزء فيه بسهولة.

- **الرابط الكامل (`href`):** بتجيب الرابط كله، وتقدر تستخدمها عشان توجه اليوزر لأي حاجة (موقع تاني، قسم في نفس الصفحة عن طريق الـ Hash، ملف، أو حتى تفتح الإيميل بـ `mailto:`).
- **المضيف (`host`):** بتجيب اسم الدومين مضاف إليه البورت (`Port`) لو موجود (زي `localhost:3000`).
- **اسم المضيف (`hostname`):** بتجيب اسم الدومين بس من غير البورت (زي `localhost` أو `google.com`).
- **البروتوكول (`protocol`):** بتجيب نوع الاتصال (زي `http:` أو `https:`).
- **الهاش (`hash`):** بتجيب الجزء اللي بيبدأ بعلامة `#` في الرابط (ممتازة جداً لمعرفة اليوزر واقف في أي سكشن في الصفحة).

```javascript
// طباعة كائن الموقع بالكامل لرؤية كل تفاصيله
console.log(location);

// 1. قراءة الرابط الحالي
console.log(location.href);

// 2. توجيه المستخدم (تعديل الرابط)
// location.href = "[https://google.com](https://google.com)"; // لموقع خارجي
// location.href = "/#sec02"; // لسكشن في نفس الصفحة

// 3. قراءة أجزاء محددة من الرابط
console.log(location.host);     // developer.mozilla.org
console.log(location.hostname); // developer.mozilla.org
console.log(location.protocol); // https:
console.log(location.hash);     // #reference
```

---

## 2. Location Methods (دوال التحكم في الموقع)

بجانب الـ `href` ، عندنا دوال جاهزة بتعمل أكشن مباشر على الصفحة.

- **إعادة التحميل (`reload`):** بتعمل ريفريش للصفحة. (تقدر تمرر لها `true` عشان تجبر المتصفح يجيب الصفحة من السيرفر مش من الـ Cache).

> [!danger] Interview Trap: assign vs replace (فخ الانترفيوهات)
> إيه الفرق بين إنك توجه اليوزر باستخدام `assign` أو توجهه باستخدام `replace` ؟
> - **دالة (`assign`):** بتودي اليوزر للصفحة الجديدة، **وبتحتفظ** بالصفحة القديمة في تاريخ المتصفح (`History`). يعني اليوزر يقدر يدوس زرار "Back" (رجوع) ويرجع للصفحة اللي كان فيها.
> - **دالة (`replace`):** بتودي اليوزر للصفحة الجديدة، **وبتمسح** الصفحة الحالية من الـ `History`. يعني اليوزر ملوش أي طريقة يرجع بيها خطوة لورا (ممتازة جداً بعد عمليات الدفع أو تسجيل الخروج عشان اليوزر ميرجعش للصفحة بالغلط).

```javascript
// إعادة تحميل الصفحة
// location.reload();

// توجيه مع الاحتفاظ بإمكانية الرجوع (نفس فكرة location.href)
// location.assign("[https://google.com](https://google.com)");

// توجيه مع مسح الصفحة الحالية من التاريخ
// location.replace("[https://google.com](https://google.com)");
```

----
