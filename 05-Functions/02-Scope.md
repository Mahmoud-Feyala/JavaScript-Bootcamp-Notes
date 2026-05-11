---
tags:
  - JavaScript
  - Scope
  - Web-Development
date: 2026-03-15
---
- [[#1. Global vs Local Scope|1. Global vs Local Scope]]
	- [[#1. Global vs Local Scope#Global Scope|Global Scope]]
	- [[#1. Global vs Local Scope#Local Scope (Function Scope)|Local Scope (Function Scope)]]
- [[#2. The Scope Trap (Scope Chain & Variable Lookup)|2. The Scope Trap (Scope Chain & Variable Lookup)]]
	- [[#2. The Scope Trap (Scope Chain & Variable Lookup)#(Error Example):|(Error Example):]]
- [[#3. Block Scope ( if , switch , for )|3. Block Scope ( if , switch , for )]]
	- [[#3. Block Scope ( if , switch , for )#1.  Problem var (Scope Leaking)|1.  Problem var (Scope Leaking)]]
	- [[#3. Block Scope ( if , switch , for )#2. Solution with  let (Block-Scoped Variables)|2. Solution with  let (Block-Scoped Variables)]]
- [[#4. Lexical Scope (Static Scope)|4. Lexical Scope (Static Scope)]]
	- [[#4. Lexical Scope (Static Scope)#Code analysis and error explanation|Code analysis and error explanation]]

# JavaScript Scope

الـ **Scope** هو النطاق أو المساحة اللي المتغير ( `Variable` ) بيكون متشاف ومتاح للاستخدام فيها جوه الكود.

## 1. Global vs Local Scope

### Global Scope
أي متغير بيتعرف بره أي `Function` بيبقى اسمه `Global Variable` . 
- **ميزته:** الكود كله يقدر يشوفه، ونقدر نوصل ليه من أي مكان (سواء بره أو جوه أي `Function` ).

```javascript
var a = 1;
let b = 2;

// We can access the global from anywhere
function showText() {
  console.log(`From Global a = ${a}`); // 1
  console.log(`From Global b = ${b}`); // 2
}

showText(); 
// هتبحث جوه الـ Function مش هتلاقي a و b، فهتطلع للـ Global وتاخدهم.
```

### Local Scope (Function Scope)
أي متغير بيتعرف جوه `Function` بيبقى اسمه Local Variable .
- **خصائصه:** المتغير ده مش متشاف غير جوه الـ `Function` بتاعته بس. لو حاولت تستخدمه بره، هيضرب Error.
- **التحديث الصحيح:** لو عايز تعمل متغيرات جوه الـ `Local` بنفس أسامي الـ `Global` ، لازم تعرفهم قبل ما تطبعهم.

```javascript
var a = 1;
let b = 2;

function showTextLocal() {
  // هنا إحنا عرفنا متغيرات جديدة جوه الـ Local Scope ملهاش دعوة باللي بره
  var a = 10;
  let b = 20;
  
  console.log(`From Local a = ${a}`); // 10
  console.log(`From Local b = ${b}`); // 20
}

showTextLocal();

console.log(`From Global a = ${a}`); // 1 (الـ Global متغيرش)
console.log(`From Global b = ${b}`); // 2
```

---

## 2. The Scope Trap (Scope Chain & Variable Lookup)

> [!danger] ملاحظة هامة جداً (سبب الـ Error)
> الجافاسكريبت لما بتيجي تقرأ متغير، بتبحث أول حاجة في الـ **Local Scope** (النطاق اللي هي فيه حالياً). 
> لو لقت إنك معرف متغيرات بنفس الاسم جوه الـ `Function` (حتى لو في السطور اللي تحت)، هترفض تستخدم الـ `Global` ، وتعتبر إنك تقصد الـ `Local` . ولأنك بتحاول تطبعهم قبل ما تديلهم قيمة، الكود هيضرب Error .

###  (Error Example):

```javascript
var a = 1; // Global
let b = 2; // Global

function showErrorText() {
  console.log(`From Local ${a}`);
  console.log(`From Local ${b}`); 
  
  var a = 1; // Local Declaration
  let b = 2; // Local Declaration
}
showErrorText();
```

---

## 3. Block Scope ( if , switch , for )

الـ **Block Scope** هو النطاق اللي بيكون بين أي قوسين `{}` مش بتوع `Function` ، زي أقواس الـ `if` أو الـ `for` أو الـ `switch` .

> [!important] Important Note
> - `var` **لا تحترم** الـ `Block Scope` . لو عدلت عليها جوه البلوك، هتعدل في الـ `Global` .
> - `let` و `const` **بيحترموا** الـ `Block Scope` . لو عرفتهم جوه البلوك، مش هيأثروا على أي حاجة بره.

### 1.  Problem var (Scope Leaking)

لما بنستخدم `var` جوه الـ Block ، بتتسرب بره وتأثر على المتغير الأساسي (الـ Global ).

```javascript
var x = 10;

if (10 === 10) {
  var x = 50; // هنا إحنا عدلنا على قيمة x الأساسية
}

console.log(x); // 50 
// المشكلة: التعديل اللي حصل في الـ Local Block أثر على الـ Global Scope وبوظ القيمة الأصلية.
```

### 2. Solution with  let (Block-Scoped Variables)

الـ `let` (ومعاها الـ `const` ) بتحصر المتغير جوه البلوك اللي اتعرفت فيه بس، وبكده بنحمي المتغيرات الـ Global من أي تعديل غير مقصود.

```javascript
var x = 10;

if (10 === 10) {
  let x = 50; // ده متغير جديد تماماً خاص بالبلوك ده بس
}

console.log(x); // 10 
// هنا let حلت المشكلة. التعديل اللي جوه البلوك ملوش أي تأثير على الـ Global Scope.
```

---

## 4. Lexical Scope (Static Scope)

الـ **Lexical Scope** (أو النطاق المعجمي) معناه إن الـ `Functions` اللي جوه ( `Inner` ) تقدر تشوف وتستخدم المتغيرات بتاعت الـ `Functions` اللي براها ( `Outer` ). بس العكس **غير صحيح**! الـ `Function` اللي بره متعرفش تشوف المتغيرات اللي جوه الـ `Function` اللي جواها.

بمعنى أبسط: "الابن يورث من الأب، لكن الأب لا يرث من الابن".

### Code analysis and error explanation

الكود ده فيه خطأ ( `Error` ) مقصود عشان يوضح فكرة إن البحث في الـ `Scope` بيكون للخارج فقط ( `Upward Lookup` ) مش للداخل.

```javascript
function parent() {
  let a = 10;

  function child() {
    console.log(a); // (نجاح) هيطبع 10 لأنه قدر يوصل لمتغير الأب
    
    // (خطأ) السطر الجاي هيضرب ReferenceError
    // لأن child متعرفش تشوف المتغيرات اللي جوه grand (ممنوع النظر للداخل)
    console.log(`From Child ${b}`); 

    function grand() {
      let b = 100;
      console.log(`From Grand ${a}`); // (نجاح) هيطبع 10 لأنه فضل يدور لبره لحد ما لقاه في الـ parent
      console.log(`From Grand ${b}`); // (نجاح) هيطبع 100 لأنه في نفس النطاق المحلي بتاعه
    }
    
    grand();
  }
  
  child();
}

parent();
```
> [!danger] الخلاصة وسبب الخطأ
> الـ Function اللي اسمها `child` حاولت تطبع المتغير `b` ، ولأن `b` متعرف جوه الـ Function اللي اسمها `grand` (واللي تعتبر Inner بالنسبة لـ `child` )، فالـ Scope مش بيسمح بالنظر للداخل. الكود بيعرف يدور على المتغيرات في مستويات أعلى منه بس (الأب، ثم الجد، ثم الـ Global)، لكن مستحيل يدور في مستوى تحته

---
