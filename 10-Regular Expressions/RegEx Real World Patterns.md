---
tags:
  - JavaScript
  - RegEx
  - Validation
date: 2026-04-25
subject: RegEx Real World Patterns
---
- [[#1. URL Pattern|1. URL Pattern]]
- [[#2. Email Pattern|2. Email Pattern]]
- [[#3. IPv 4 Pattern|3. IPv 4 Pattern]]

# JavaScript - RegEx Real World Patterns

الاستخدام الأساسي للـ `Regular Expressions` في الـ `Front-End` هو التحقق من صحة البيانات (`Form Validation`).

---

## 1. URL Pattern
بيصطاد الرابط بكل حالاته (سواء بيبدأ بـ http أو https، وسواء فيه www أو لأ).
```javascript
// (https?://)?   => بروتوكول اختياري
// (?:www\.)?     => الـ www. اختيارية 
// \w+            => اسم الموقع
// \.\w+          => الامتداد
let urlRegex = /(https?:\/\/)?(www\.)?\w+\.\w+/ig; 
```

## 2. Email Pattern
```javascript
// \w+      => اسم المستخدم
// @        => علامة الإيميل الإجبارية
// \w+      => اسم الشركة
// \.       => النقطة الإجبارية
// \w+      => الامتداد
let emailRegex = /\w+@\w+\.\w+/ig;
```

## 3. IPv 4 Pattern
الـ IP بيكون عبارة عن 4 أرقام بيفصل بينهم 3 نقط.

```javascript
let ipRegex = /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/ig;
```

> [!info] نصيحة للمشاريع الحقيقية
> غالباً بنبحث عن النمط الجاهز (`Standard Pattern`) للروابط والإيميلات وبنستخدمه مباشرة، لكن الأهم تكون قادر تقرأه وتعدل عليه.