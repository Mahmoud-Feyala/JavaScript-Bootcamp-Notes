---
tags:
  - JavaScript
  - ES 6
  - Map
  - Data-Structures
  - Web-Development
date: 2026-04-22
subject: ES 6 Map Data Type
---
- [[#1. map vs Object (الفروق الجوهرية)|1. map vs Object (الفروق الجوهرية)]]
- [[#2. Initialization & Default Keys (الإنشاء والمفاتيح الافتراضية)|2. Initialization & Default Keys (الإنشاء والمفاتيح الافتراضية)]]
- [[#3. The Key Type Trap (فخ نوع المفتاح)|3. The Key Type Trap (فخ نوع المفتاح)]]
- [[#4. Map Capabilities (  في التخزين map قدرات الـ )|4. Map Capabilities (  في التخزين map قدرات الـ )]]
- [[#1. Initialization with Data|1. Initialization with Data]]
- [[#2. Reading and Checking (القراءة والفحص)|2. Reading and Checking (القراءة والفحص)]]
- [[#3. Size and Deletion (العدد والحذف)|3. Size and Deletion (العدد والحذف)]]
- [[#1. Core Differences (الفروق الجوهرية)|1. Core Differences (الفروق الجوهرية)]]
- [[#2. Garbage Collection (إدارة الذاكرة والتنظيف)|2. Garbage Collection (إدارة الذاكرة والتنظيف)]]

# ES 6 - Map Data Type (بنية بيانات الـ Map)

الـ `Map` هو كائن مخصص لتخزين البيانات على شكل (مفتاح وقيمة) أو `Key/Value Pairs` ، زيه زي الـ `Object` العادي، لكنه متصمم عشان يحل كل القصور والمشاكل اللي كانت موجودة في الكائنات التقليدية، وبيوفر أداء أعلى في الإضافة والحذف.

---
## 1. map vs Object (الفروق الجوهرية)

| وجه المقارنة                           | <center>Object</center>                               | <center>Map</center>                                  |
| :------------------------------------- | :---------------------------------------------------- | :---------------------------------------------------- |
| **المفاتيح الافتراضية (Default Keys)** | بيحتوي على مفاتيح موروثة افتراضياً (ممكن تعمل تعارض). | نظيف تماماً، لا يحتوي على أي مفاتيح افتراضية.         |
| **نوع المفتاح (Key Type)**             | يجب أن يكون نص (`String`) أو `Symbol` فقط.            | يمكن أن يكون أي شيء (رقم، دالة، كائن، قيمة منطقية).   |
| **الترتيب (Ordering)**                 | غير مضمون بنسبة 100%.                                 | مرتب دائماً حسب وقت الإضافة (`Ordered By Insertion`). |
| **حساب العدد (Size)**                  | يحتاج خطوات يدوية معقدة `Object.keys().length`.       | يمتلك خاصية جاهزة ومباشرة `size`.                     |
| **التكرار (Iteration)**                | لا يقبل التكرار المباشر (يحتاج `Object.keys`).        | قابل للتكرار المباشر بـ `for...of` أو `forEach`.      |
| **الأداء (Performance)**               | بطيء نسبياً مع عمليات الإضافة والحذف المتكررة.        | أداء ممتاز وأسرع بكثير في الإضافة والحذف.             |

---

## 2. Initialization & Default Keys (الإنشاء والمفاتيح الافتراضية)

لو طبعت كائن عادي فاضي  {}  ، هتلاقي جواه خصائص موروثة (زي `toString`). الـ `Map` بيجي فاضي تماماً.

```javascript
let myObject = {}; // كائن عادي (يحتوي على Prototype موروث)
let myEmptyObject = Object.create(null); // طريقة قديمة لإنشاء كائن نظيف تماماً
let myMap = new Map(); // طريقة الـ Map الحديثة (نظيف ومجهز)

console.log(myObject);
console.log(myMap);
```

---

## 3. The Key Type Trap (فخ نوع المفتاح)

> [!danger] Data Overwrite (فخ الكتابة الفوقية)
> في الـ `Object` ، المتصفح بيحول أي مفتاح لنص (`String`) غصب عنك. يعني لو كتبت المفتاح مرة رقم `10` ومرة نص `"10"` ، الكائن هيعتبرهم حاجة واحدة وهيمسح القديم ويحط الجديد. الـ `Map` بيحترم نوع البيانات وبيعتبر كل واحد فيهم مفتاح مستقل.

```javascript
// 1. سلوك الكائن العادي (سيتم دمجهم في مفتاح واحد)
let myNewObject = {
  10: "Number",
  "10": "String",
};
console.log(myNewObject[10]); // هيطبع "String" لأنها عملت Overwrite

// 2. سلوك الـ Map (يعتبرهما مفتاحين منفصلين تماماً)
let myNewMap = new Map();
myNewMap.set(10, "Number");
myNewMap.set("10", "String");

console.log(myNewMap.get(10));   // هيطبع "Number"
console.log(myNewMap.get("10")); // هيطبع "String"
```

---

## 4. Map Capabilities (  في التخزين map قدرات الـ )

باستخدام دالة الإضافة `set` ودالة القراءة `get` ، نقدر نستخدم أي نوع بيانات تتخيله كمفتاح.

```javascript
// استخدام أنواع بيانات معقدة كمفاتيح
myNewMap.set(true, "Boolean");
myNewMap.set({a: 1, b: 2}, "Object");
myNewMap.set(function doSomething() {}, "Function");

// فحص الخريطة بالكامل لرؤية جميع الأنواع
console.log(myNewMap);
```

---
# ES 6 - Map Methods & Properties 

الـ `Map` بيجي معاه مجموعة دوال (`Methods`) جاهزة بتخلي عملية إدارة البيانات (إضافة، قراءة، فحص، حذف) سريعة ومباشرة جداً من غير ما نضطر نكتب لوجيك معقد زي ما كنا بنعمل في الـ `Object` العادي.

---

## 1. Initialization with Data 

بدل ما نعمل `Map` فاضي ونستخدم دالة `set` سطر بسطر، نقدر نمرر البيانات كلها دفعة واحدة وإحنا بننشئ الـ `Map`. بنعمل ده عن طريق تمرير مصفوفة رئيسية، جواها مصفوفات فرعية، كل مصفوفة فرعية بتمثل عنصر (المفتاح والقيمة).

```javascript
// إنشاء Map وإضافة البيانات مباشرة وقت التهيئة
let myMap = new Map([
  [10, "Number"],
  ["Name", "String"],
  [false, "Boolean"],
]);

console.log(myMap);
```

---

## 2. Reading and Checking (القراءة والفحص)

- **القراءة (`get`):** بتاخد المفتاح وبترجع القيمة بتاعته. لو المفتاح مش موجود بترجع `undefined`.
- **الفحص (`has`):** بتاخد المفتاح وبترجع قيمة منطقية (`Boolean`)، `true` لو موجود و `false` لو مش موجود (أسرع وأفضل من الـ Object).

```javascript
// قراءة القيم بناءً على المفتاح (بغض النظر عن نوع المفتاح)
console.log(myMap.get(10));      // "Number"
console.log(myMap.get("Name"));  // "String"
console.log(myMap.get(false));   // "Boolean"

// التحقق من وجود مفتاح معين
console.log(myMap.has("Name"));  // true
```

---

## 3. Size and Deletion (العدد والحذف)

- **العدد (`size`):** خاصية (مش دالة) بترجع عدد العناصر الموجودة في الـ `Map` فوراً.
- **الحذف (`delete`):** بتمسح عنصر معين بناءً على المفتاح. بترجع `true` لو لقت العنصر ومسحته، و `false` لو ملقتهوش.
- **التنظيف (`clear`):** بتمسح كل العناصر دفعة واحدة وبترجع الـ `Map` فاضي تماماً.

> [!info] Performance Tip (معلومة عن الأداء)
> دالة `delete` في الـ `Map` تم تصميمها برمجياً عشان تكون سريعة جداً (`Highly Optimized`) مقارنة باستخدام الكلمة المحجوزة `delete` مع الكائنات العادية اللي بتستهلك موارد أكتر من المتصفح.

```javascript
// معرفة عدد العناصر
console.log(myMap.size); // 3

// حذف عنصر معين ومعرفة هل تم الحذف بنجاح أم لا
console.log(myMap.delete("Name")); // true
console.log(myMap.size); // 2 (العدد قل)

// تنظيف الخريطة بالكامل
myMap.clear();
console.log(myMap.size); // 0
```
---
# ES 6 - Map vs WeakMap 

نفس المبدأ اللي بيحكم الـ `Set` بيتكرر هنا. البنيتين بيخزنوا البيانات بنظام (المفتاح والقيمة)، لكن الفرق الجوهري بيكمن في نوع المفتاح المسموح به، وطريقة تعامل محرك الجافاسكريبت مع الذاكرة.

---

## 1. Core Differences (الفروق الجوهرية)

- **نوع المفتاح (`Key Type`):**
  - `Map`: المفتاح ممكن يكون أي حاجة (رقم، نص، دالة، كائن).
  - `WeakMap`: المفتاح **يجب أن يكون كائن فقط (`Object Only`)**. لو حاولت تستخدم نوع بيانات بسيط كـ `Key` ، الكود هيضرب `Error`.

- **الخصائص والدوال (`Properties & Methods`):**
  - زي ما شفنا في الـ `WeakSet` ، الـ `WeakMap` ملوش خاصية `size` ، ومينفعش نعمل عليه `Loop` ، ومفيش فيه دوال زي `clear` أو `keys`.

---

## 2. Garbage Collection (إدارة الذاكرة والتنظيف)

المثال ده بيوضح صميم عمل الـ `Garbage Collector` (جامع القمامة). لما بنمسح المرجعية بتاعة الكائن الأساسي (بإننا نخليه `null`)، استجابة الـ `Map` بتختلف تماماً عن الـ `WeakMap`.

> [!danger] The Memory Trap (فخ الذاكرة)
> في الـ `Map` العادي، المتصفح بيمسك الكائن بقوة (`Strong Reference`). يعني حتى لو مسحت الكائن الأصلي من الكود، الـ `Map` هيفضل محتفظ بنسخة منه واخدة مساحة في الذاكرة. لكن في الـ `WeakMap` ، المتصفح بيمسكه بضعف (`Weak Reference`)، فبمجرد ما تمسح الكائن الأصلي، بيتم مسحه فوراً من الـ `WeakMap` عشان يفضي الذاكرة.

```javascript
// 1. سلوك الـ Map (الاحتفاظ القوي بالبيانات)
let mapUser = { theName: "Elzero" };
let myMap = new Map();

myMap.set(mapUser, "Object Value");

// قطعنا الاتصال بالكائن الأصلي
mapUser = null; 

// الـ Map لسه محتفظ بالكائن ومسحهوش من الذاكرة!
console.log(myMap); 

console.log("#".repeat(20));

// 2. سلوك الـ WeakMap (الاحتفاظ الضعيف والتنظيف التلقائي)
let wMapUser = { theName: "Elzero" };
let myWeakMap = new WeakMap();

myWeakMap.set(wMapUser, "Object Value");

// قطعنا الاتصال بالكائن الأصلي
wMapUser = null; 

// الـ Garbage Collector هيدخل يمسح الكائن من الـ WeakMap تلقائياً
console.log(myWeakMap);
```

> [!info] DevTools Note 
> في بعض الأحيان وأنت بتختبر الكود بتاع الـ `WeakMap` ، ممكن تلاقي الكونسول لسه طابع الكائن وممسحهوش فوراً. ده بيحصل لأن عملية الـ `Garbage Collection` بتحصل في الخلفية بأوقات بيحددها المتصفح عشان ميعطلش الأداء، لكن برمجياً الكائن تم تعليمه للحذف ومبقاش ليه وجود فعلي تقدر تستخدمه