---
tags:
  - JavaScript
  - Logical-Operators
  - Web-Development
date: 2026-02-20
icon: FabSquareJs
---
- [[#1. ! (Logical NOT)|1. ! (Logical NOT)]]
- [[#2. && (Logical AND)|2. && (Logical AND)]]
- [[#3. || (Logical OR)|3. || (Logical OR)]]
- [[#4. Important Notes & Pro Tips|4. Important Notes & Pro Tips]]
	- [[#4. Important Notes & Pro Tips#1. Truthy & Falsy Values|1. Truthy & Falsy Values]]
	- [[#4. Important Notes & Pro Tips#2. Double NOT (!!)|2. Double NOT (!!)]]
	- [[#4. Important Notes & Pro Tips#3. Short-Circuit Evaluation|3. Short-Circuit Evaluation]]
	- [[#4. Important Notes & Pro Tips#4. Nullish Coalescing Operator (??) (ES6+)|4. Nullish Coalescing Operator (??) (ES6+)]]
# JavaScript Logical Operators

## 1. ! (Logical NOT)
الـ NOT بتعكس الحالة. لو القيمة `true` بتخليها `false` والعكس. مبدأ عملها مطابق للـ Inverter Gate (NOT Gate) في تصميم الدوائر المنطقية

```javascript
console.log(true); // true
console.log(!true); // false
console.log(!(10 == "10")); // false (لأن الشرط اللي جوه القوس true، فالـ NOT بتعكسه)
```

---

## 2. && (Logical AND)
عشان النتيجة النهائية تكون `true`، لازم **كل** الشروط تكون `true`. لو شرط واحد بس `false`، النتيجة كلها هتبقى `false`. ده بالظبط نفس الـ Logic بتاع الـ AND Gate في الـ Digital Circuits.



```javascript
console.log(10 == "10" && 10 > 8 && 10 > 50); // false (لأن الشرط الأخير فولس)
```

---

## 3. || (Logical OR)
عشان النتيجة النهائية تكون `true`، يكفي إن **شرط واحد بس** على الأقل يكون `true`. النتيجة مش هتكون `false` غير لو كل الشروط `false`. وده نفس مبدأ الـ OR Gate.

```javascript
console.log(10 == "10" || 10 > 80 || 10 > 50); // true (لأن الشرط الأول ترو، فمش هيبص للباقي أصلاً)
```

---

## 4. Important Notes & Pro Tips

### 1. Truthy & Falsy Values
في الـ JavaScript، أي قيمة بتتحول لـ `true` أو `false` لما نستخدمها في شرط.
- **Falsy Values:** القيم دي دايماً بترجع `false` وهي:
  `0`, `""` (String فاضي), `null`, `undefined`, `NaN`, `false`.
- **Truthy Values:** أي حاجة تانية غير اللي فوق بتعتبر `true` (حتى لو كانت String جواه مسافة، أو رقم بالسالب).

### 2. Double NOT (!!)
بنستخدم علامتين `!!` ورا بعض عشان نحول أي قيمة للـ Boolean الأصلي بتاعها بسرعة.

```javascript
console.log(!!"Mahmoud"); // true
console.log(!!0); // false
```

### 3. Short-Circuit Evaluation
الـ JavaScript ذكية، مش دايماً بتقرأ الكود للآخر لو عرفت النتيجة:
- في الـ `&&`: لو لقت أول قيمة `false`، بتقف وترجعها فوراً ومش بتبص على الباقي. لو كلهم `true`، بترجع **آخر** قيمة.

```javascript
console.log(false && "Ahmed"); // false
console.log(10 && "Mahmoud"); // "Mahmoud" (لأن الـ 10 ترو، فرجعت القيمة التانية)
```

- في الـ `||`: لو لقت أول قيمة `true`، بتقف وترجعها فوراً. لو كلهم `false`، بترجع **آخر** قيمة.

```javascript
console.log("Mahmoud" || "Ahmed"); // "Mahmoud" (لأنها ترو، مش هتبص لأحمد)
console.log(0 || null || "Sayed"); // "Sayed"
```

### 4. Nullish Coalescing Operator (??) (ES6+)
ده عامل زي الـ `||` بس أدق شوية. الـ `||` بتعتبر الـ `0` والـ `""` (Falsy) كأنهم مش موجودين وتتخطاهم. لكن الـ `??` مش بتتخطى غير الـ `null` والـ `undefined` بس.

```javascript
let price = 0;

console.log(price || 50); // 50 (الـ OR اعتبرت الصفر كأنه مش موجود)
console.log(price ?? 50); // 0 (الـ ?? احترمت الصفر ورجعته لأنها مش بتسكيب غير الـ null والـ undefined)
```