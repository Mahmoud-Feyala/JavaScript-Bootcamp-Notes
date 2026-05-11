---
tags:
  - JavaScript
  - BOM
  - Window-Object
  - Web-Development
date: 2026-04-18
subject: BOM Introduction & Window Object
icon: FiCode
---
- [[#1. Introduction to BOM (مقدمة عن الـ BOM)|1. Introduction to BOM (مقدمة عن الـ BOM)]]
- [[#2. Window Object Capabilities (قدرات كائن النافذة)|2. Window Object Capabilities (قدرات كائن النافذة)]]
	- [[#2. Window Object Capabilities (قدرات كائن النافذة)#1. Alert (رسالة التنبيه)|1. Alert (رسالة التنبيه)]]
	- [[#2. Window Object Capabilities (قدرات كائن النافذة)#2. Confirm (رسالة التأكيد)|2. Confirm (رسالة التأكيد)]]
	- [[#2. Window Object Capabilities (قدرات كائن النافذة)#3. Prompt (رسالة الإدخال)|3. Prompt (رسالة الإدخال)]]
- [[#1. Delayed Execution (التنفيذ المؤجل)|1. Delayed Execution (التنفيذ المؤجل)]]
- [[#2. Clear Timeout (الإلغاء قبل التنفيذ)|2. Clear Timeout (الإلغاء قبل التنفيذ)]]
- [[#1. Syntax & Usage (طريقة الكتابة والاستخدام)|1. Syntax & Usage (طريقة الكتابة والاستخدام)]]
- [[#2. Practical Application (تطبيق عملي: عداد تنازلي)|2. Practical Application (تطبيق عملي: عداد تنازلي)]]


# BOM - Browser Object Model (نموذج كائنات المتصفح)

## 1. Introduction to BOM (مقدمة عن الـ BOM)

لو الـ `DOM` هو الشجرة اللي بتتحكم في محتوى الصفحة (HTML)، فالـ `BOM` هو البيئة أو المتصفح نفسه اللي جواه الصفحة دي. 



- **نافذة المتصفح (`Window Object`):** هو الكائن الأساسي والأب الروحي لكل حاجة في الجافاسكريبت جوه المتصفح.
- **المستند (`Document Object`):** الـ `document` اللي كنا شغالين عليه طول الدروس اللي فاتت هو في الحقيقة مجرد خاصية (`Property`) صغيرة جوه كائن الـ `window` الكبير.

> [!danger] Global Scope (فخ المتغيرات العامة)
> أي متغير بتعمله بـ `var` ، وأي دالة بتكتبها بشكل عام، وأي كائن أساسي (زي `console` أو `document`) بيتم إضافتهم تلقائياً كأعضاء جوه كائن الـ `window`.

```javascript
// الطريقة الكاملة للوصول لعنوان الصفحة (لأن document جزء من window)
window.document.title = "Hello JS";

// بس لأن window هو الـ Global Object، المتصفح بيسمحلك تتجاهل كتابته
document.title = "Hello JS";

// نفس الفكرة مع الكونسول
window.console.log("Test"); // هي هي console.log
```

---

## 2. Window Object Capabilities (قدرات كائن النافذة)

من خلال الـ `window` ، الجافاسكريبت بتدينا تحكم شبه كامل في متصفح اليوزر:

- **فتح نافذة (`Open Window`):** نقدر نفتح تابات أو نوافذ جديدة.
- **إغلاق نافذة (`Close Window`):** نقدر نقفل النوافذ (اللي إحنا فتحناها بالسكريبت).
- **تحريك نافذة (`Move Window`):** نقدر نغير مكان النافذة على شاشة اليوزر.
- **تغيير الحجم (`Resize Window`):** نقدر نتحكم في أبعاد النافذة.
- **طباعة المستند (`Print Document`):** نقدر نفتح شاشة الطباعة الخاصة بالمتصفح كأن اليوزر داس `Ctrl + P`.
- **التحكم بالوقت (`Timers`):** نقدر نشغل كود بعد فترة معينة (مرة واحدة أو يتكرر).
- **التحكم بالرابط (`URL Control`):** نقدر نقرأ رابط الصفحة، أو نوجه اليوزر لصفحة تانية خالص.
- **حفظ البيانات (`Save Data`):** نقدر نخزن بيانات في المتصفح (زي الـ `LocalStorage`) عشان تفضل موجودة حتى لو اليوزر قفل الصفحة.

---

# BOM - Popup Boxes (صناديق الحوار)

المتصفح بيوفرلنا 3 أنواع من النوافذ المنبثقة الجاهزة للتعامل المباشر مع المستخدم.



> [!warning] Blocking Code (فخ الإيقاف المؤقت)
> التريكة الأهم في الدوال دي إنها بتوقف قراءة الكود تماماً (`Synchronous`). يعني لو كتبت `alert` ، أي كود تحتها (حتى لو `console.log`) مش هيتنفذ غير لما اليوزر يضغط `OK` والنافذة تختفي. عشان كده المواقع الحديثة بتفضل تصمم `Modals` بالـ HTML والـ CSS بدل ما تستخدم دوال المتصفح دي.

### 1. Alert (رسالة التنبيه)
دالة بتعرض رسالة لليوزر ومش بتنتظر منه أي رد فعل غير إنه يدوس موافق (`OK`). مبتستقبلش بيانات ومبترجعش أي قيمة.

```javascript
// الكونسول مش هيطبع الكلمة غير لما اليوزر يقفل رسالة التنبيه الأول
alert("Test");
console.log("Test");
```

### 2. Confirm (رسالة التأكيد)
دالة بتسأل اليوزر سؤال، وبتدي له اختيارين: موافق (`OK`) أو إلغاء (`Cancel`). الميزة القوية هنا إنها بترجع قيمة منطقية (`Boolean`)، لو وافق هترجع `true` ولو لغى هترجع `false`.

```javascript
// تخزين رد فعل اليوزر في متغير
let confirmMsg = confirm("Are You Sure You Want To Delete?");
console.log(confirmMsg);

// بناء قرار برمجي على رد اليوزر
if (confirmMsg === true) {
  console.log("Item Deleted Successfully");
} else {
  console.log("Item Not Deleted");
}
```

### 3. Prompt (رسالة الإدخال)
دالة بتطلب من اليوزر يدخل بيانات نصية (`Data Collection`). بتاخد 2 (`Parameters`): الأول هو الرسالة أو السؤال، والتاني هو القيمة الافتراضية اللي هتظهر جوه المربع.
لو اليوزر كتب حاجة وداس موافق هترجع النص اللي كتبه، ولو داس إلغاء هترجع `null`.

```javascript
// الرسالة الأولى هي السؤال، والتانية هي نص افتراضي بيساعد اليوزر يفهم المطلوب
let promptMsg = prompt("Good Day To You?", "Write Day With 3 Characters");
console.log(promptMsg);
```

---

# BOM - Timers (المؤقتات)

دوال الوقت في الجافاسكريبت بتسمحلك تجدول أكواد معينة عشان تتنفذ في المستقبل. أهم ميزة هنا إنها مباتوقفش قراءة باقي الكود (`Non-blocking`) عكس الـ `alert` اللي بتوقف الصفحة.



## 1. Delayed Execution (التنفيذ المؤجل)

دالة (`setTimeout`) بتاخد كود (أو دالة) وتأجل تنفيذه لعدد معين من الملي ثانية (`Milliseconds`).
بتاخد 3 حاجات أساسية:
1. **الدالة (`Function`):** الكود اللي هيتنفذ.
2. **الوقت (`Timeout`):** وقت التأخير بالملي ثانية (الألف ملي ثانية = ثانية واحدة).
3. **المعاملات الإضافية (`Additional Params`):** البيانات اللي هتتبعت للدالة لو كانت بتقبل معاملات.

> [!danger] Execution Trap (فخ الأقواس المباشرة)
> لما تيجي تباصي دالة ليها اسم جوه `setTimeout` ، **إياك** تحط جنبها أقواس التنفيذ `()`. لو كتبت `setTimeout(sayMsg(), 3000)` الدالة هتتنفذ فوراً ومش هتستنى الوقت. الصح إنك تكتب اسم الدالة بس `sayMsg`.

```javascript
// 1. استخدام دالة مجهولة (Anonymous Function)
setTimeout(function () {
  console.log("Msg");
}, 3000); 

// 2. استخدام دالة ليها اسم
function sayHi() {
  console.log(`I am Message`);
}
setTimeout(sayHi, 3000); 

// 3. تمرير بيانات للدالة (Additional Params)
function sayMsg(user, age) {
  console.log(`I am Message For ${user} Age Is : ${age}`);
}
setTimeout(sayMsg, 3000, "Osama", 38); 
```

## 2. Clear Timeout (الإلغاء قبل التنفيذ)

لما بتشغل `setTimeout` ، المتصفح بيديها رقم تعريفي (`Identifier`). لو حبيت تلغي العملية قبل ما الوقت يخلص، لازم تحفظ الرقم ده في متغير وتمرره لدالة (`clearTimeout`).

```javascript
let counter = setTimeout(sayMsg, 3000, "Osama", 38);
let btn = document.querySelector("button");

// لو اليوزر ضغط على الزرار قبل مرور الوقت، الدالة مش هتتنفذ
btn.onclick = function () {
  clearTimeout(counter);
  console.log("Timer Stopped!");
};
```

---

# BOM - setInterval & clearInterval (التكرار المستمر)

عكس دالة التأجيل اللي بتنفذ الكود مرة وتقف، دالة التكرار (`setInterval`) بتشغل الكود وتفضل تعيده كل ما الوقت يخلص، ومش هتقف لوحدها غير لو وقفتها إجبارياً.



## 1. Syntax & Usage (طريقة الكتابة والاستخدام)

```javascript
// استخدام دالة مجهولة
setInterval(function () {
  console.log(`Msg`);
}, 1000); 

// تمرير بيانات للدالة
function sayMsg(user, age) {
  console.log(`I am Message For ${user} His Age Is: ${age}`);
}
setInterval(sayMsg, 1000, "Osama", 38);
```

## 2. Practical Application (تطبيق عملي: عداد تنازلي)

عشان نوقف التكرار، بنحفظه في متغير ونستخدم (`clearInterval`) مع شرط معين.

> [!info] Implicit Coercion (التحويل الضمني)
> في الكود ده استخدام `div.innerHTML -= 1` بيخلي الجافاسكريبت تفهم إنك عايز تعمل عملية حسابية، فبتحول النص لرقم وتطرح منه.

```javascript
let div = document.querySelector("div");

function countdown() {
  div.innerHTML -= 1; 
  
  // شرط الإيقاف
  if (div.innerHTML === "0") {
    clearInterval(counter);
  }
}

let counter = setInterval(countdown, 1000);
```