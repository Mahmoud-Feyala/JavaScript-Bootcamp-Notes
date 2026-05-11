---
tags:
  - JavaScript
  - Date-Time
  - Performance
  - Web-Development
date: 2026-04-28
subject: Track Operations Time
---
- [[#1. Track Time With Date|1. Track Time With Date]]
- [[#2. Web Performance API|2. Web Performance API]]

# JavaScript - Track Operations Time 

لما بتكتب كود بيعمل عمليات تقيلة (زي التكرار لمرات كتير والتعديل المباشر على الـ `DOM`)، بتبقى محتاج تعرف الكود ده بياخد وقت قد إيه عشان يتنفذ، عشان تقدر تحسن أداؤه وتسرع الموقع.

---

## 1. Track Time With Date 

الطريقة التقليدية هي إننا بناخد لقطة للوقت قبل بداية العملية، ولقطة تانية بعد ما العملية تخلص، ولما نطرحهم من بعض بيطلعلنا الوقت اللي الكود استهلكه بوحدة الميللي ثانية.

```javascript
// 1. تسجيل وقت البداية
let start = new Date();

// 2. العملية (إنشاء 100 ألف عنصر في الصفحة)
for (let i = 0; i < 100000; i++) {
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(i));
  document.body.appendChild(div);
}

// 3. تسجيل وقت النهاية
let end = new Date();

// 4. حساب مدة العملية
let duration = end - start;
console.log(`Operation took ${duration} milliseconds`);
```

---

## 2. Web Performance API 
كائن الـ `Date` كويس، بس مش أدق حاجة في الدنيا للسرعات الخيالية. عشان كده المتصفحات وفرت كائن الـ `performance` اللي بيقيس بأجزاء الميكرو ثانية!

- **أداة عالية الدقة** (`performance.now`): بترجع الوقت بأجزاء عشرية دقيقة جداً. الميزة الأهم إنها بتحسب الوقت من لحظة "تحميل الصفحة" مش من سنة 1970، وده بيخليها أسرع وأدق كتير من `Date.now()`.
- **وضع العلامات المرجعية** (`performance.mark`): بتسمحلك تحط علامة مسجلة باسم معين في الـ `Timeline` بتاع المتصفح، عشان لو الكود بتاعك متقسم لأجزاء، تقدر تقيس سرعة كل جزء لوحده من الـ `Performance Tab` في أدوات المطورين (`DevTools`).

```javascript
// قياس الأداء بالطريقة الحديثة والدقيقة
let t0 = performance.now();

// ... الكود اللي بياخد وقت هنا ...

let t1 = performance.now();
console.log(`Operation took ${t1 - t0} milliseconds.`);
// النتيجة هتطلع رقم دقيق جداً زي: 45.39999997615814
```