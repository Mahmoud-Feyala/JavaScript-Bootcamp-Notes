---
tags:
  - JavaScript
  - Date-Time
  - Methods
  - Web-Development
date: 2026-04-27
subject: Get Date And Time Methods
---
- [[#1. Calculate Time Difference (حساب الفرق بين تاريخين)|1. Calculate Time Difference (حساب الفرق بين تاريخين)]]
- [[#2. Date Component Methods (دوال استخراج أجزاء التاريخ)|2. Date Component Methods (دوال استخراج أجزاء التاريخ)]]
- [[#3. The Zero-Based Trap (فخ الترقيم الصفري)|3. The Zero-Based Trap (فخ الترقيم الصفري)]]

# JavaScript - Get Date And Time Methods 

كائن الـ `Date` بيوفرلنا دوال جاهزة (`Methods`) بتسمح لنا نستخرج أي جزء من التاريخ أو الوقت بشكل منفصل، عشان نقدر نعرضه لليوزر بالشكل اللي يناسبنا.

---

## 1. Calculate Time Difference (حساب الفرق بين تاريخين)

لما بنطرح تاريخ قديم من التاريخ الحالي، الجافاسكريبت بترجعلنا الفرق بوحدة الميللي ثانية. نقدر نقسم الرقم ده عشان نحوله لثواني، دقايق، ساعات، أيام، وسنين. 

```javascript
let dateNow = new Date();
let birthday = new Date("Oct 25, 82"); 

// الطرح بيرجع الفرق بالميللي ثانية
let dateDiff = dateNow - birthday;

console.log(dateDiff);

// تحويل الميللي ثانية لسنين (قسمة متتالية)
// (1000 ميللي * 60 ثانية * 60 دقيقة * 24 ساعة * 365 يوم)
console.log(dateDiff / 1000 / 60 / 60 / 24 / 365); // هيطبع العمر بالسنين
```

---

## 2. Date Component Methods (دوال استخراج أجزاء التاريخ)

لو عندنا كائن تاريخ زي `let dateNow = new Date();` نقدر نستخدم معاه الدوال دي:

- `getTime()`: بترجع الوقت بالميللي ثانية من سنة 1970 (نفس فكرة `Date.now()`).
- `getFullYear()`: بترجع السنة كاملة (مثلاً 2026).
- `getDate()`: بترجع رقم اليوم في الشهر (من 1 إلى 31).
- `getHours()`: بترجع الساعة الحالية (من 0 لـ 23).
- `getMinutes()`: بترجع الدقائق الحالية.
- `getSeconds()`: بترجع الثواني الحالية.

---

## 3. The Zero-Based Trap (فخ الترقيم الصفري)

دي أهم تريكة في التعامل مع التاريخ في الجافاسكريبت، لأن في دالتين بيبدأوا العد من صفر (`Zero Based`) مش من واحد!

- `getMonth()`: بترجع رقم الشهر، بس بتبدأ من صفر! 
  - (يناير = 0، فبراير = 1 ... ديسمبر = 11).
  - **نصيحة**: دايماً زود `+ 1` على نتيجة الدالة دي لو هتعرضها لليوزر.
  
- `getDay()`: بترجع رقم اليوم في الأسبوع، وبتبدأ العد من يوم الأحد كأول يوم!
  - (الأحد = 0، الإثنين = 1 ... السبت = 6).

```javascript
console.log(dateNow.getTime());     // الوقت بالميللي ثانية
console.log(dateNow.getDate());     // اليوم في الشهر
console.log(dateNow.getFullYear()); // السنة
console.log(dateNow.getMonth());    // الشهر (من 0 لـ 11)
console.log(dateNow.getDay());      // اليوم في الأسبوع (من 0 لـ 6)
console.log(dateNow.getHours());    // الساعات
console.log(dateNow.getMinutes());  // الدقائق
console.log(dateNow.getSeconds());  // الثواني
```