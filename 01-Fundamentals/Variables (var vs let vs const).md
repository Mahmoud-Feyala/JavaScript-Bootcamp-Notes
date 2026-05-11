---
tags:
  - JavaScript
  - Fundamentals
  - Variables
  - ES 6
  - Web-Development
date: 2026-04-23
subject: Variables (var vs let vs const)
---
- [[#1. Quick Comparison|1. Quick Comparison]]
- [[#2. Redeclaration|2. Redeclaration]]
- [[#3. Access Before Declare|3. Access Before Declare]]
- [[#4. Variable Scope Drama|4. Variable Scope Drama]]
- [[#5. Scope: Block vs Function (نطاق العمل)|5. Scope: Block vs Function (نطاق العمل)]]

# JavaScript Fundamentals - Variables (var, let, const)

ظهور الـ `let` والـ `const` في تحديث ES 6 مكانش مجرد تغيير في الأسماء، لكنه كان حل جذري لمشاكل وأخطاء كارثية كانت بتسببها الـ `var` في المشاريع الكبيرة.

---

## 1. Quick Comparison 

| الخاصية | `var` (القديم) | `let` (الحديث) | `const` (الحديث - الثابت) |
| :--- | :--- | :--- | :--- |
| **إعادة الإعلان (`Redeclare`)** | مسموح (Yes) | ممنوع (Error) | ممنوع (Error) |
| **الاستدعاء قبل الإعلان (`Access Before Declare`)** | يطبع `undefined` | يطبع خطأ (Error) | يطبع خطأ (Error) |
| **النطاق (`Scope Level`)** | نطاق الدالة (`Function Scope`) | نطاق الكتلة (`Block Scope`) | نطاق الكتلة (`Block Scope`) |
| **الإضافة لكائن النافذة (`Window Object`)** | نعم (يضاف) | لا (لا يضاف) | لا (لا يضاف) |

---

## 2. Redeclaration 

الـ `var` بتسمحلك تعلن عن نفس المتغير بنفس الاسم أكتر من مرة، وده كان بيعمل كوارث لو عندك مشروع كبير وعرّفت متغيرين بنفس الاسم بالغلط (القيمة القديمة هتتمسح). الـ `let` والـ `const` بيمنعوا ده تماماً وبيطلعوا `Error`.

```javascript
var a = 1;
var a = 2; // شغال عادي جداً وهيمسح القيمة القديمة

let b = 1;
// let b = 2; // هيرمي Error فوراً: Identifier 'b' has already been declared
```

---

## 3. Access Before Declare 

لو حاولت تطبع متغير قبل ما تكتب السطر اللي بتعلن فيه عنه:
- الـ `var`: الجافاسكريبت بترفع الإعلان بتاعه فوق (عملية اسمها `Hoisting`) وبتديله قيمة مبدئية `undefined` ، فالكود بيكمل ومبيضربش.
- الـ `let` والـ `const`: بيترفعوا برضه، لكن بيدخلوا في منطقة اسمها (Temporal Dead Zone - TDZ)، ومبياخدوش أي قيمة، ولو حاولت تطبعهم الكود هيضرب `Error` عشان ينبهك لغلطتك.

```javascript
console.log(x); // undefined
var x = 10;

// console.log(y); // ReferenceError: Cannot access 'y' before initialization
// let y = 20;
```

---

## 4. Variable Scope Drama 

في النطاق العام (`Global Scope`)، الـ `var` بتلزق نفسها في كائن الـ `window` (الـ BOM). ده معناه إنك لو سميت متغير بنفس اسم خاصية أساسية في المتصفح، هتبوظها!
الـ `let` والـ `const` بيتعرفوا في النطاق العام عادي، لكن مبيلزقوش نفسهم في الـ `window`.

```javascript
var myName = "Osama";
console.log(window.myName); // "Osama" (تمت إضافته للـ Window)

let myAge = 39;
console.log(window.myAge); // undefined (آمن، لم يتم إضافته)
```

---

## 5. Scope: Block vs Function (نطاق العمل)

- **الـ `var` (`Function Scope`):** مبيحترموش غير الدوال (Functions) بس. يعني لو كتبت `var` جوه `If Condition` أو `For Loop` ، المتغير هيتسرب بره وهيبوظ لك النطاق العام.
- **الـ `let` والـ `const` (`Block Scope`):** بيحترموا أي أقواس مجموعة `{}` (سواء بتاعت دالة، لوب، أو شرط). المتغير بيتولد جوه البلوك وبيموت جواه، ومستحيل يتسرب بره.

