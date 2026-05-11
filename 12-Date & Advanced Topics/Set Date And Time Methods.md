---
tags:
  - JavaScript
  - Date-Time
  - Methods
  - Web-Development
date: 2026-04-27
subject: Set Date And Time Methods
---
- [[#1. Set Time|1. Set Time]]
- [[#2. Rollover Behavior|2. Rollover Behavior]]
- [[#3. Multiple Parameters|3. Multiple Parameters]]

# JavaScript - Set Date And Time Methods 

زي ما عندنا دوال لاستخراج التاريخ، عندنا دوال تانية عشان نعدل على أي كائن `Date` موجود معانا. الدوال دي بتسمحلنا نغير اليوم، الشهر، السنة، أو حتى الثواني.

---

## 1. Set Time 

دالة `setTime()` بتاخد رقم بالميللي ثانية، وبتحسبه ابتداءً من نقطة الصفر (1 يناير 1970) وتغير التاريخ بناءً عليه.

```javascript
let dateNow = new Date();

// 1. العودة لنقطة الصفر
dateNow.setTime(0); 
console.log(dateNow); // Thu Jan 01 1970

// 2. تزويد 10 ثواني (10000 ميللي ثانية) على نقطة الصفر
dateNow.setTime(10000);
console.log(dateNow); // Thu Jan 01 1970 02:00:10 (مع مراعاة التوقيت المحلي)
```

---

## 2. Rollover Behavior 

دي أهم ميزة في دوال الـ `Set`. إنت مش مقيد بالحدود الطبيعية للأرقام. لو كتبت رقم سالب، الجافاسكريبت هترجع لورا. ولو كتبت رقم أكبر من الطبيعي، هترحل الزيادة للشهر أو السنة اللي بعدها!

- ** `setDate(day)`:** لو اديته يوم 35 (والشهر 31 يوم)، هيخلي التاريخ يوم 4 في الشهر اللي بعده.
- ** `setMonth(month)`:** لو اديته شهر 15 (وهما 12 شهر بس من 0 لـ 11)، هيزود سنة كاملة، ويخلي الشهر هو شهر 3 (أبريل) في السنة الجديدة.

```javascript
// إعادة ضبط التاريخ للوقت الحالي للتجربة
let myDate = new Date();

// 1. تجاوز الأيام (شهر جديد)
myDate.setDate(35);
console.log(myDate); // هيرحل الأيام الزيادة للشهر التالي

// 2. تجاوز الشهور (سنة جديدة)
// ملحوظة: الشهور Zero Based (0 = يناير، 11 = ديسمبر)
myDate.setMonth(15);
console.log(myDate); // هيزود سنة ويدخل في شهر أبريل (رقم 3)
```

---

## 3. Multiple Parameters 

معظم دوال الـ `Set` الكبيرة بتسمحلك تعدل كذا حاجة في نفس السطر بدل ما تستخدم دالة لكل حاجة:

- `setFullYear(year, month, day)`: بتعدل السنة، وممكن تعدل معاها الشهر واليوم.
- `setHours(Hours, Minutes, Seconds, MS)`: بتعدل الساعات، وممكن تكمل لحد الميللي ثانية.

```javascript
// تعديل السنة لـ 2020، والشهر لـ 13 (اللي هو هيترحل لسنة 2021 شهر فبراير)
myDate.setFullYear(2020, 13);
console.log(myDate);
```