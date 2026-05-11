---
tags:
  - JavaScript
  - BOM
  - Session-Storage
  - Web-Development
date: 2026-04-20
subject: BOM Session Storage
icon: FiCode
---
- [[#1. Session Lifecycle (عمر الجلسة)|1. Session Lifecycle (عمر الجلسة)]]
- [[#2. API Methods (دوال التحكم)|2. API Methods (دوال التحكم)]]
- [[#3. Practical Application (تطبيق عملي)|3. Practical Application (تطبيق عملي)]]

# BOM - Session Storage (التخزين المؤقت)

كائن (`sessionStorage`) بيشتغل بنفس الطريقة ونفس الدوال بتاعة الـ `localStorage` بالظبط، لكن الفرق الجوهري بينهم هو **العمر الافتراضي** للبيانات ومجال رؤيتها.



---

## 1. Session Lifecycle (عمر الجلسة)

الـ `Session` أو الجلسة بتبدأ أول ما تفتح التاب، وبتنتهي (والبيانات بتتمسح تماماً) بمجرد ما تقفل التاب ده. دي القواعد الأساسية اللي بتنظم عملها:

- **تاب جديد (`New Tab = New Session`):** لو فتحت تاب جديد، بيبدأ جلسة جديدة تماماً وملوش دعوة ببيانات التابات التانية.
- **تكرار التاب (`Duplicate Tab = Copy Session`):** دي الحالة الوحيدة اللي بتنقل البيانات! لو عملت كليك يمين على التاب واخترت `Duplicate` ، المتصفح بياخد نسخة من الجلسة الحالية بكل بياناتها للتاب الجديد.
- **نفس الرابط في تاب جديد (`New Tab With Same Url = New Session`):** لو أخدت لينك الموقع كوبي وفتحته في تاب جديد بنفسك، المتصفح هيعتبره جلسة جديدة تماماً وبيانات الـ `sessionStorage` هتكون فاضية.

---

## 2. API Methods (دوال التحكم)

بتستخدم نفس الـ 5 دوال اللي حفظناهم في التخزين المحلي بدون أي اختلاف:
- `setItem("key", "value")` للإضافة.
- `getItem("key")` للقراءة.
- `removeItem("key")` لمسح عنصر.
- `clear()` لمسح كل عناصر الجلسة.
- `key(index)` للبحث بالترتيب.

---

## 3. Practical Application (تطبيق عملي)

التطبيق اg عبقري دا مستخدم في كل المواقع الكبيرة. فكرته إنك بتحفظ البيانات اللي اليوزر بيكتبها في الـ `Input` أول بأول (بمجرد ما يفقد التركيز `onblur`)، عشان لو عمل `Refresh` للصفحة بالغلط ميفقدش اللي كتبه ويعيد من الأول.

```javascript
// 1. مقارنة التخزين
// window.localStorage.setItem("color", "red"); // دائم: هيكمل معاك حتى لو قفلت المتصفح
// window.sessionStorage.setItem("color", "blue"); // مؤقت: هيتمسح بمجرد قفل التاب الحالية

// 2. تطبيق حفظ بيانات الفورم
document.querySelector(".name").onblur = function () {
  
  // الكلمة المحجوزة this بتشير لعنصر الإدخال نفسه
  // this.value بتجيب النص اللي اليوزر كتبه جواه
  window.localStorage.setItem("input-name", this.value);
  
};
```