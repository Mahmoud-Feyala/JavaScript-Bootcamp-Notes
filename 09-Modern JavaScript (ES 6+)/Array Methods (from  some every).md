---
tags:
  - JavaScript
  - ES 6
  - Array-Methods
  - Web-Development
date: 2026-04-22
subject: Array.from Method
---
- [[#1. Syntax (طريقة الكتابة)|1. Syntax (طريقة الكتابة)]]
- [[#2. Strings & Map Function (النصوص ودالة التعديل)|2. Strings & Map Function (النصوص ودالة التعديل)]]
- [[#3. The Unique Array Trick (خدعة المصفوفة الفريدة)|3. The Unique Array Trick (خدعة المصفوفة الفريدة)]]
- [[#4. The "arguments" Object (كائن المعاملات)|4. The "arguments" Object (كائن المعاملات)]]
- [[#1. Syntax & Parameters (طريقة الكتابة والمعاملات)|1. Syntax & Parameters (طريقة الكتابة والمعاملات)]]
- [[#2. Practical Examples (أمثلة عملية)|2. Practical Examples (أمثلة عملية)]]
- [[#1. Syntax & Parameters (طريقة الكتابة والمعاملات)|1. Syntax & Parameters (طريقة الكتابة والمعاملات)]]
- [[#2. Basic Usage (الاستخدام الأساسي)|2. Basic Usage (الاستخدام الأساسي)]]
- [[#3. Practical Use Cases|3. Practical Use Cases]]
- [[#4. The Power of "This Argument"|4. The Power of "This Argument"]]
- [[#1. Syntax & Parameters|1. Syntax & Parameters]]
- [[#2. Advanced Practical Example|2. Advanced Practical Example]]

# ES 6 - Array.from() 

دالة `Array.from` بتستقبل أي عنصر قابل للتكرار (`Iterable`) زي النصوص أو الـ `Set` ، أو أي كائن يشبه المصفوفة (`Array-like Object`)، وبترجع منه مصفوفة حقيقية (`Real Array`) جديدة.



---

## 1. Syntax (طريقة الكتابة)

الدالة بتقبل 3 معاملات (`Parameters`):
1. ** `Iterable`:** (إجباري) العنصر اللي عايزين نحوله لمصفوفة.
2. ** `MapFunc`:** (اختياري) دالة `Map` بتتنفذ على كل عنصر وهو بيتحول.
3. ** `This`:** (اختياري) القيمة اللي هيشير ليها الـ `this` جوه الدالة.

---

## 2. Strings & Map Function (النصوص ودالة التعديل)

لو مررت نص للدالة، هتفصص حروفه وتخلي كل حرف عنصر في المصفوفة. الميزة الأقوى هي استخدام المعامل التاني (`MapFunc`) عشان تعدل البيانات في نفس اللحظة.

```javascript
// 1. تحويل النص لمصفوفة
console.log(Array.from("Osama")); 
// ['O', 's', 'a', 'm', 'a']

// 2. التحويل مع التعديل (الطريقة العادية)
// استخدام الزائد (+) بيحول النص لرقم عشان نقدر نجمعه
console.log(
  Array.from("12345", function (n) {
    return +n + +n;
  })
); // [2, 4, 6, 8, 10]

// 3. التحويل مع التعديل (باستخدام Arrow Function لتوفير الكود)
console.log(Array.from("12345", (n) => +n + +n)); 
// [2, 4, 6, 8, 10]
```

---

## 3. The Unique Array Trick (خدعة المصفوفة الفريدة)

عشان تشيل التكرار من أي مصفوفة، بتدمج قوة الـ `Set` (اللي بيرفض التكرار) مع الـ `Array.from` (اللي بيرجعه مصفوفة تاني).

> [!info] Future Note (طريقة التمدد)
> الطريقة الحديثة والأكثر اختصاراً  في الكود هي استخدام الـ `Spread Operator` كدة: `[...new Set(myArray)]`. الاتنين بيأدوا نفس الغرض بالظبط.

```javascript
let myArray = [1, 1, 1, 2, 3, 4];

// تحويل المصفوفة لـ Set لمسح التكرار
let mySet = new Set(myArray);

// تحويل الـ Set لمصفوفة مرة أخرى
console.log(Array.from(mySet)); 
// [1, 2, 3, 4]
```

---

## 4. The "arguments" Object (كائن المعاملات)

أي دالة عادية في الجافاسكريبت بيكون جواها كائن مخفي اسمه `arguments` بيشيل كل القيم اللي اليوزر مررها للدالة. المشكلة إن `arguments` ده "شبه مصفوفة" مش مصفوفة حقيقية (يعني ملوش `push` و `pop`). `Array.from` بتحل الأزمة دي.

```javascript
function af() {
  // تحويل كائن الـ arguments لمصفوفة حقيقية
  return Array.from(arguments);
}

// الدالة هتقبل أي عدد من المعاملات وترجعهم في مصفوفة محترمة
console.log(af("Osama", "Ahmed", "sayed", 1, 2, 3));
// ['Osama', 'Ahmed', 'sayed', 1, 2, 3]
```

---

# JavaScript - Array.copyWithin() (النسخ الداخلي للمصفوفة)

دالة `copyWithin` بتسمحلك تاخد جزء من المصفوفة (تنسخه) وتحطه في مكان تاني (تلصقه) جوه **نفس المصفوفة**. الدالة دي بتعدل على المصفوفة الأصلية (`Mutates the array`)، والميزة الأهم إنها **لا تغير طول المصفوفة الأصلي** (لو اللصق هيعدي الحجم، بيتم تجاهل الباقي).



---

## 1. Syntax & Parameters (طريقة الكتابة والمعاملات)

الدالة بتقبل 3 معاملات: `Array.copyWithin(Target, Start, End)`

1. ** `Target` (الهدف - إجباري):**
   - ده الـ `Index` اللي هتبدأ تلصق (`Paste`) البيانات فيه.
   - لو الرقم ده أكبر من أو يساوي طول المصفوفة، مفيش حاجة هتتنسخ.
1. ** `Start` (نقطة البداية - اختياري):**
   - ده الـ `Index` اللي هتبدأ تنسخ (`Copy`) من عنده.
   - لو مكتبتوش، الدالة هتبدأ نسخ من أول المصفوفة (Index 0).
1. ** End (نقطة النهاية - اختياري) **
   - ده الـ `Index` اللي النسخ هيقف عنده (**العنصر ده نفسه مش بيتاخد في النسخ**).
   - لو مكتبتوش، الدالة هتكمل نسخ لحد آخر المصفوفة.

> [!info] Negative Values (القيم السالبة)
> لو استخدمت أي رقم سالب في المعاملات دي، الجافاسكريبت هتبدأ تعد من آخر المصفوفة مش من الأول (يعني -1 هو آخر عنصر، -2 هو اللي قبله، وهكذا).

---

## 2. Practical Examples (أمثلة عملية)

كل سطر من دول بيعمل عملية نسخ ولصق مختلفة على نفس المصفوفة الأساسية:

```javascript
// المصفوفة الأساسية (طولها 7 عناصر)
// الـ Index:   0   1   2   3   4    5    6
// الـ Values: [10, 20, 30, 40, 50, "A", "B"]
let myArray = [10, 20, 30, 40, 50, "A", "B"];

// الحالة 1: تحديد الهدف فقط
// هيلصق من أول Index 3، وهينسخ المصفوفة من بدايتها الافتراضية
// myArray.copyWithin(3); 
// النتيجة: [10, 20, 30, 10, 20, 30, 40]

// الحالة 2: تحديد هدف وبداية
// هيلصق في Index 4، وهينسخ من Index 6 لحد الآخر (يعني حرف B بس)
// myArray.copyWithin(4, 6); 
// النتيجة: [10, 20, 30, 40, "B", "A", "B"]

// الحالة 3: استخدام القيم السالبة (البداية)
// هيلصق في Index 4، وهينسخ من Index -1 (اللي هو الأخير "B")
// myArray.copyWithin(4, -1); 
// النتيجة: [10, 20, 30, 40, "B", "A", "B"]

// الحالة 4: النسخ بالقيم السالبة واللصق في البداية
// هيلصق في Index 1، وهينسخ من Index -2 (اللي هو "A") لحد الآخر
// myArray.copyWithin(1, -2); 
// النتيجة: [10, "A", "B", 40, 50, "A", "B"]

// الحالة 5: تحديد هدف، وبداية ونهاية (نهاية غير متضمنة)
// هيلصق في Index 1، هينسخ من Index -2 ("A") لحد Index -1 ("B" بس مش هياخده معاه)
myArray.copyWithin(1, -2, -1); 
// النتيجة النهائة: [10, "A", 30, 40, 50, "A", "B"]

console.log(myArray);
```

---
# ES 6 - Array.some() 

دالة `some` بتختبر هل يوجد **عنصر واحد على الأقل** في المصفوفة بيحقق الشرط الموجود جوه دالة الـ `Callback` ولا لأ. النتيجة دايماً بتكون قيمة منطقية (`Boolean`): `true` لو لقت تطابق، و `false` لو ملقتش خالص.



---

## 1. Syntax & Parameters (طريقة الكتابة والمعاملات)

الدالة بتقبل معاملين أساسيين: `Array.some(CallbackFunc(Element, Index, Array), ThisArgument)`

1. ** `CallbackFunc`:** الدالة اللي هتتنفذ على كل عنصر، وبتاخد 3 معاملات:
   - `Element`: (إجباري) العنصر الحالي اللي بيتم فحصه.
   - `Index`: (اختياري) ترتيب العنصر الحالي.
   - `Array`: (اختياري) المصفوفة الأساسية اللي بنعمل عليها اللوب.
1. ** `ThisArgument`:** (اختياري) القيمة اللي هيشير ليها الـ `this` جوه دالة الـ `Callback`.

---

## 2. Basic Usage (الاستخدام الأساسي)

هنا بنختبر هل في أي رقم في المصفوفة أكبر من 5. نقدر نكتبها بالطريقة العادية أو نختصرها بالـ `Arrow Function`.

```javascript
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 1. الطريقة العادية
/*
let check = nums.some(function (e) {
  console.log("Test"); // هتطبع Test لحد ما توصل لرقم 6 وتقف (Short-circuit)
  return e > 5;
});
*/

// 2. طريقة الـ Arrow Function (الأكثر استخداماً واختصاراً)
let check = nums.some((e) => e > 5);

console.log(check); // true
```

---

## 3. Practical Use Cases 

من أشهر استخدامات `some` هي البحث عن قيمة معينة جوه المصفوفة (زي دالة `includes` بس بشكل متقدم أكتر).

```javascript
// عمل دالة ديناميكية للبحث عن أي قيمة في أي مصفوفة
function checkValues(arr, val) {
  return arr.some(function (e) {
    return e === val;
  });
}

console.log(checkValues(nums, 20)); // false (مش موجود)
console.log(checkValues(nums, 5));  // true (موجود)
```

---

## 4. The Power of "This Argument" 

أحياناً بنكون عايزين نقارن عناصر المصفوفة بقيم خارجية (متغيرات أو كائنات). بدل ما نعتمد على الـ `Global Scope` ، دالة `some` بتسمحلك تمرر القيمة دي كمعامل تاني (`ThisArgument`) وتستدعيها بكلمة `this`.

> [!danger] Arrow Function & This Trap
> لو هتستخدم الـ `ThisArgument` ، **لازم** تستخدم الدالة العادية `function()` ومينفعش تستخدم الـ `Arrow Function`. لأن الـ `Arrow Function` مبتفهمش كلمة `this` وبتربطها بالـ Window Object.

```javascript
// مثال 1: تمرير متغير عادي
let myNumber = 10;

let checkNum = nums.some(function (e) {
  return e > this; // this هنا تعود على myNumber
}, myNumber);


// مثال 2: تمرير كائن (Object) للتحقق من نطاق أرقام
let range = {
  min: 10,
  max: 20,
};

let checkNumberInRange = nums.some(function (e) {
  // this هنا تعود على الكائن range
  return e >= this.min && e <= this.max;
}, range);

console.log(checkNumberInRange); // true (لأن رقم 10 بيحقق الشرط)
```

---

# ES 6 - Array.every() 

دالة `every` بتختبر هل **جميع عناصر المصفوفة بدون استثناء** بتحقق الشرط الموجود جوه دالة الـ `Callback` ولا لأ. لو كلهم حققوا الشرط بترجع `true` ، لكن لو لقت عنصر واحد بس مش بيحقق الشرط، بتوقف اللوب فوراً وترجع `false`.

---

## 1. Syntax & Parameters 

بنفس طريقة `some` بالظبط، الدالة بتقبل معاملين أساسيين: `Array.every(CallbackFunc(Element, Index, Array), ThisArgument)`

1. ** `CallbackFunc`:** الدالة اللي بتتنفذ على كل عنصر (تستقبل العنصر الحالي، ترتيبه، والمصفوفة كاملة).
2. ** `ThisArgument`:** (اختياري) القيمة اللي هيشير ليها الـ `this` جوه دالة الـ `Callback`.

---

## 2. Advanced Practical Example 

المثال ده بيوضح إزاي نتعامل مع مفاتيح الكائن (`Object Keys`)، نحولها لمصفوفة أرقام، وبعدين نفحصها كلها باستخدام `every` مع تمرير متغير خارجي كـ `ThisArgument`.

```javascript
// 1. عندنا كائن بيحتوي على مواقع (المفاتيح عبارة عن أرقام مسافات مثلاً)
const locations = {
  20: "Place 1",
  30: "Place 2",
  50: "Place 3",
  40: "Place 4",
};

let mainLocation = 15;

// 2. استخراج مفاتيح الكائن (بترجع دايماً مصفوفة من النصوص "Strings")
let locationsArray = Object.keys(locations);
console.log(locationsArray); // ["20", "30", "40", "50"]

// 3. تحويل مصفوفة النصوص لمصفوفة أرقام صحيحة باستخدام map وعلامة (+)
let locationArrayNumbers = locationsArray.map((n) => +n);
console.log(locationArrayNumbers); // [20, 30, 40, 50]

// 4. الفحص الشامل: هل "كل" الأرقام في المصفوفة أكبر من mainLocation (اللي هو 15)؟
let check = locationArrayNumbers.every(function (e) {
  return e > this; // this تعود على mainLocation
}, mainLocation);

console.log(check); // true (لأن 20 و 30 و 40 و 50 كلهم أكبر من 15)
```

> [!danger] Empty Arrays (المصفوفات الفارغة)
> لو استخدمت دالة `every` على مصفوفة فاضية `[]` ، دايماً هترجع `true` أياً كان الشرط! لأنها ببساطة ملقتش أي عنصر يكسر القاعدة.

---
tags:
  - JavaScript
  - ES6
  - Spread-Operator
  - Arrays
  - Objects
  - Web-Development
date: 2026-04-23
subject: ES6 Spread Operator
---
# ES6 - Spread Operator (عامل التمدد)

الـ `Spread Operator` (`...`) بيقوم بوظيفة "فك أو تمدد" لأي عنصر قابل للتكرار (`Iterable` زي المصفوفات أو النصوص)، بحيث يستخرج العناصر اللي جواه ويوزعها كعناصر فردية مستقلة في المكان اللي بتستدعيه فيه.



---

## 1. Spread With Strings (التمدد مع النصوص)

لو استخدمت الـ `Spread` مع نص، هيفكك النص لحروف منفصلة. دي طريقة ممتازة وسريعة جداً لتحويل نص إلى مصفوفة (بديل ممتاز لدالة `Array.from` أو `split`).

```javascript
console.log("Osama");      // "Osama" (نص عادي)
console.log(..."Osama");   // O s a m a (حروف متفرقة)
console.log([..."Osama"]); // ['O', 's', 'a', 'm', 'a'] (مصفوفة)
```

---

## 2. Spread With Arrays (التمدد مع المصفوفات)

ده الاستخدام الأكتر شيوعاً في الـ `Front-End`، وبيقوم بتلات مهام أساسية:

- **الدمج (`Concatenate`):** بديل أنظف لدالة `concat()`.
- **النسخ (`Copy`):** بيعمل نسخة سطحية (`Shallow Copy`) من المصفوفة.

```javascript
let myArray1 = [1, 2, 3];
let myArray2 = [4, 5, 6];

// 1. دمج أكثر من مصفوفة في مصفوفة واحدة جديدة
let allArrays = [...myArray1, ...myArray2];
console.log(allArrays); // [1, 2, 3, 4, 5, 6]

// 2. أخذ نسخة من مصفوفة
let copiedArray = [...myArray1];
console.log(copiedArray); // [1, 2, 3]
```

---

## 3. Spread Inside Functions (التمدد كمعاملات للدوال)

> [!danger] The Array Argument Trap (فخ تمرير المصفوفات)
> دوال زي `Math.max()` أو دالة `push()` مابتقبلش تمررلة مصفوفة كاملة كمعامل واحد، لازم تمرر الأرقام مفصولة بفاصلة. زمان كنا بنستخدم طرق معقدة زي `apply()`، لكن الـ `Spread` حل المشكلة دي بمجرد إنه "بيفك" المصفوفة جوه أقواس الدالة.

```javascript
// استخدام 1: الإضافة داخل مصفوفة
let allFriends = ["Osama", "Ahmed", "Sayed"];
let thisYearFriends = ["Sameh", "Mahmoud"];

// بنفك مصفوفة الأصدقاء الجدد ونضيفهم كعناصر فردية
allFriends.push(...thisYearFriends);
console.log(allFriends); // ["Osama", "Ahmed", "Sayed", "Sameh", "Mahmoud"]

// استخدام 2: مع كائن الرياضيات
let myNums = [10, 20, -100, 100, 1000, 500];

// بيفك المصفوفة لأرقام فردية عشان دالة max تقدر تقارنهم
console.log(Math.max(...myNums)); // 1000
```

---

## 4. Spread With Objects (التمدد مع الكائنات)

نفس قوة الـ `Spread` مع المصفوفات، بتطبق على الكائنات لدمجها أو أخذ نسخة منها (بديل ممتاز لدالة `Object.assign`). ولو في خاصية متكررة، القيمة الأخيرة هي اللي بتعمل `Overwrite` (كتابة فوقية).

```javascript
let objOne = { a: 1, b: 2 };
let objTwo = { c: 3, d: 4 };

// دمج الكائنين، وإضافة خاصية جديدة e في نفس اللحظة
let finalObject = { ...objOne, ...objTwo, e: 5 };

console.log(finalObject); 
// {a: 1, b: 2, c: 3, d: 4, e: 5}
```