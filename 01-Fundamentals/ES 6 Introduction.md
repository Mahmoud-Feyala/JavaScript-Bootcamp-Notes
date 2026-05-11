---
tags:
  - JavaScript
  - ES 6
  - Template-Literals
  - Babel
  - Web-Development
date: 2026-04-23
subject: ES 6 Introduction & Template Literals
---
- [[#1. Important Organizations & Tools (منظمات وأدوات هامة)|1. Important Organizations & Tools (منظمات وأدوات هامة)]]
- [[#2. Template Literals (النصوص القالبية)|2. Template Literals (النصوص القالبية)]]

# ES 6 - Introduction & Template Literals (مقدمة ES 6 والنصوص القالبية)

الـ `ES6` (أو ECMAScript 2015) هو التحديث الأضخم في تاريخ لغة الجافاسكريبت. جاب معاه ميزات كتير جداً سهلت كتابة الكود (زي الـ Arrow Functions والـ Destructuring والـ Classes).

---

## 1. Important Organizations & Tools (منظمات وأدوات هامة)

في بداية دراسة الـ ES 6، في أسماء ومواقع أساسية لازم تكون فاهم دورها في بيئة عمل الجافاسكريبت:

- **ECMA International:** دي المنظمة المسؤولة عن وضع القواعد والمعايير (`Standards`) للغة الجافاسكريبت (عشان كده اسم الإصدارات بيبدأ بـ ES).
- **ES 6 Features:** موقع بيستعرض كل التحديثات الجديدة اللي نزلت في الإصدار ده بشكل مختصر ومقارنتها بالكود القديم.
- **Wikipedia:** للبحث المتقدم عن تاريخ لغة ECMAScript وتطور إصداراتها عبر السنين.

> [!info] Babel
> المتصفحات القديمة (زي Internet Explorer) مبتفهمش كود الـ ES 6 الحديث. هنا بيجي دور **Babel**، وهو عبارة عن `JavaScript Compiler` (أو Transpiler). وظيفته إنه ياخد الكود الحديث اللي إنت بتكتبه، ويحوله لكود جافاسكريبت قديم (`ES5`) عشان يشتغل على كل المتصفحات بدون أي `Errors`.

![[javaScript/others/img/image.png]][Image of Babel compiler converting modern ES 6 JavaScript code into backwards compatible ES 5 code]

---

## 2. Template Literals (النصوص القالبية)

واحدة من أجمل إضافات الـ ES 6 هي الـ `Template Literals`. بتخلينا نكتب النصوص وندمج معاها المتغيرات بشكل أنظف بكتير من الطريقة التقليدية، عن طريق استخدام الـ Backticks (`` ` ``) اللي بتيجي من حرف
![[javaScript/others/img/image-1.png]]