---
tags:
  - JavaScript
  - RegEx
  - Boundaries
  - Validation
date: 2026-04-25
subject: RegEx Word Boundaries & Test
---
- [[#1. Word Boundaries|1. Word Boundaries]]
- [[#2. The test() Method|2. The test() Method]]

# JavaScript - RegEx Word Boundaries & Test Method

---

## 1. Word Boundaries 

- `\b` (Boundary): بتطابق الحد الفاصل للكلمة (في البداية أو النهاية). بتتأكد إن الكلمة مش لازقة في حروف تانية من الناحية المحددة.
- `\B` (Non-Boundary): بتتأكد إن الكلمة لازم تكون محشورة ولازقة في حروف تانية.

```javascript
let names = "Sayed 1Spam 2Spam 3Spam Spam4 Spam5 Osama Ahmed Aspamo";
let re = /(\bspam|spam\b)/ig;
console.log(names.match(re)); // ['Spam', 'Spam', 'Spam', 'Spam', 'Spam']
```

---

## 2. The test() Method

دالة `test` هي الأداة الأساسية للـ `Form Validation`. بترجع قيمة منطقية فقط (`true` أو `false`).

> [!info] match vs test
> - `match`: بتُستخدم مع النصوص وبترجع مصفوفة (تستهلك موارد أكبر).
> - `test`: بتُستخدم مع نمط الـ RegEx للتحقق من وجود النمط وترجع `true/false` (أسرع وأخف).

```javascript
console.log(/(\bspam|spam\b)/ig.test("Osama")); // false
console.log(/(\bspam|spam\b)/ig.test("1Spam")); // true
```