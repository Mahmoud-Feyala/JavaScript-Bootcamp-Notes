---
tags:
  - JavaScript
  - Objects
  - Basics
  - Web-Development
date: 2026-03-18
share_link: https://share.note.sx/etrk8ogr#zOrElOyHxkZIQKdy9OF6a6GUZxiBL129dkiZJtnLvok
share_updated: 2026-03-20T00:15:28+02:00
---
- [[#1. Intro and What Is Object|1. Intro and What Is Object]]
- [[#2. Properties and Methods|2. Properties and Methods]]
- [[#3. Accessing Object|3. Accessing Object]]
- [[#4. Testing Window Object|4. Testing Window Object]]
- [[#5. Dig Deeper: Dot Notation vs Bracket Notation|5. Dig Deeper: Dot Notation vs Bracket Notation]]
	- [[#5. Dig Deeper: Dot Notation vs Bracket Notation#1. Dot Notation (  .  )|1. Dot Notation (  .  )]]
	- [[#5. Dig Deeper: Dot Notation vs Bracket Notation#2. Bracket Notation (  []  )|2. Bracket Notation (  []  )]]
	- [[#5. Dig Deeper: Dot Notation vs Bracket Notation#3. Dynamic Property Name (فخ المتغيرات)|3. Dynamic Property Name (فخ المتغيرات)]]
- [[#6. Nested Object And Trainings|6. Nested Object And Trainings]]
	- [[#6. Nested Object And Trainings#1. Basic Access & Arrays (الوصول الأساسي والمصفوفات)|1. Basic Access & Arrays (الوصول الأساسي والمصفوفات)]]
	- [[#6. Nested Object And Trainings#2. Nested Objects|2. Nested Objects]]
	- [[#6. Nested Object And Trainings#3. Methods & The this Keyword|3. Methods & The this Keyword]]
- [[#7. Create Object With new Keyword|7. Create Object With new Keyword]]
- [[#8. Function this Keyword|8. Function this Keyword]]
	- [[#8. Function this Keyword#1. Global Context (النطاق العام)|1. Global Context (النطاق العام)]]
	- [[#8. Function this Keyword#2. Test Variables With window And this|2. Test Variables With window And this]]
	- [[#8. Function this Keyword#3. Function Context (نطاق الدوال العادية)|3. Function Context (نطاق الدوال العادية)]]
	- [[#8. Function this Keyword#4. this Inside DOM Events (نطاق الأحداث)|4. this Inside DOM Events (نطاق الأحداث)]]
	- [[#8. Function this Keyword#5. this Inside Object Method (نطاق الكائنات)|5. this Inside Object Method (نطاق الكائنات)]]
	- [[#8. Function this Keyword#6. Search: Strict Mode (البحث)|6. Search: Strict Mode (البحث)]]

# JavaScript Objects

## 1. Intro and What Is Object
الـ `Object` هو من أهم وأقوى أنواع البيانات في الجافاسكريبت. هو عبارة عن كيان بيجمع بيانات ووظائف مرتبطة ببعضها في مكان واحد عشان ينظم الكود. 
البيانات دي بتتخزن على هيئة أزواج من الـ `Key` والـ `Value` (مفتاح وقيمة).



## 2. Properties and Methods
محتويات الـ `Object` بتتقسم لحاجتين أساسيتين:
- الـ**Properties:** (خصائص) دي الـ `Keys` اللي شايلة بيانات أو معلومات عن الكيان ده (زي الاسم، السن).
- الـ**Methods:** (أفعال) دي عبارة عن `Functions` متخزنة جوه الـ `Object` وبتنفذ أكشن معين خاص بيه.

```javascript
let user = {
  // Properties
  theName: "Mahmoud",
  theAge: 28,
  
  // Methods
  sayHello: function() {
    return "Hello"; // الأفضل نرجع القيمة بس ونطبعها بره
  }
};
```

---

## 3. Accessing Object

عشان نوصل لأي بيانات جوه الـ `Object` ، بنستخدم اسم الـ `Object` وبعده نقطة ( `Dot Notation` )، وبعدين نكتب اسم الخاصية أو الـ `Method` .

```javascript
// Accessing Properties
console.log(user.theName); // "Mahmoud"
console.log(user.theAge);  // 28

// Accessing Methods (لازم نحط الأقواس عشان ننفذ الـ Function)
console.log(user.sayHello()); // "Hello"
```

---

## 4. Testing Window Object
الـ `Window` هو أكبر `Object` موجود في المتصفح ( `Browser` )، وهو الأب الروحي اللي بيحتوي على كل حاجة في الجافاسكريبت (زي `console` و `document` و `alert` ).

أي متغير بتعمله بـ `var` في الـ `Global Scope` ، بتتسجل تلقائياً كـ `Property` جوه الـ `Window Object` .

```javascript
// جرب تكتب دي في الـ Console بتاع المتصفح عشان تشوف كل محتوياته
console.log(window);

// الـ console نفسه عبارة عن Object جوه الـ Window
window.console.log("Hello from Window");
```

---
## 5. Dig Deeper: Dot Notation vs Bracket Notation

في الجافاسكريبت، عندنا طريقتين عشان نوصل للبيانات جوه الـ `Object` ، وكل طريقة ليها استخدامها والمميزات بتاعتها.

### 1. Dot Notation (  .  )

دي الطريقة العادية والأكثر استخداماً. بنكتب اسم الـ `Object` وبعده نقطة وبعدين اسم الـ `Key` مباشرة.
- **القيود بتاعتها:** 1. مينفعش تستخدمها لو اسم الـ `Key` فيه مسافات (زي `"first name"` ).
  2. مينفعش الـ `Key` يبدأ برقم.
  3. **مينفعش نستخدم معاها متغيرات ( `Dynamic variables` ).**

### 2. Bracket Notation (  []  )

هنا بنكتب اسم الـ `Object` وبعده أقواس مربعة وجواها اسم الـ `Key` على هيئة `String` .
- **المميزات:** بتحل كل مشاكل الـ `Dot Notation` . بتقبل مسافات، وبتقبل أسماء بتبدأ بأرقام، والأهم إنها **بتدعم المتغيرات الديناميكية**.

---

### 3. Dynamic Property Name (فخ المتغيرات)

> [!danger] ملاحظة هامة جداً ( Variable Trap )
> الـ `Dot Notation` بتدور حرفياً على الكلمة اللي اتكتبت بعدها. لو استخدمت معاها متغير، هتدور على اسم المتغير نفسه مش قيمته!
> عشان الجافاسكريبت تقرأ القيمة اللي جوه المتغير الأول، **لازم وحتماً** تستخدم الـ `Bracket Notation` من غير علامات تنصيص ( Quotes ).

```javascript
let myVar = "country";

let user = {
  theName: "Osama",
  country: "Egypt",
};

// 1. Normal Access (العادي)
console.log(user.theName); // "Osama"
console.log(user.country); // "Egypt"

// 2. The Mistake (الخطأ الشائع)
console.log(user.myVar); // undefined (بيدور على مفتاح اسمه حرفياً myVar وملاقاهوش)

// 3. Dynamic Property (الطريقة الصح للمتغيرات)
console.log(user[myVar]); // "Egypt" (هنا شاف المتغير، ترجمه لكلمة "country"، وبعدين جاب قيمتها)

// 4. Bracket Notation with Strings (الاستخدام العادي للأقواس)
console.log(user["country"]); // "Egypt"
```
---

## 6. Nested Object And Trainings

الـ `Object` مش مجرد `Key` و `Value` بسيطة، إنت تقدر تحط جواه أي نوع بيانات تتخيله: `Array` ، `Function` ، أو حتى `Object` تاني جواه `Object` تالت (وده اللي بنسميه `Nested Object` ).

في البداية، ده الهيكل الأساسي للـ `Object` بتاعنا اللي هنطبق عليه كل الأمثلة الجاية:

```javascript
let available = true; // Global Variable

let user = {
  name: "Osama",
  age: 38,
  skills: ["HTML", "CSS", "JS"],
  available: false, // Object Property
  addresses: {
    ksa: "Riyadh",
    egypt: {
      one: "Cairo",
      two: "Giza",
    },
  },
  checkAv: function () {
    if (this.available === true) { 
      return `Free For Work`;
    } else {
      return `Busy`;
    }
  },
};
```

---

### 1. Basic Access & Arrays (الوصول الأساسي والمصفوفات)
عشان نوصل للبيانات العادية بنستخدم الـ  Dot Notation  . ولما يكون عندنا `Array` جوه الـ Object  ، بنقدر نتعامل معاها بكل دوال الـ `Arrays` العادية (زي `join` ) أو نوصل لعنصر معين بالـ Index  بتاعه.

```javascript
// الوصول لخصائص عادية
console.log(user.name); // "Osama"
console.log(user.age); // 38

// التعامل مع مصفوفة جوه الكائن
console.log(user.skills); // ["HTML", "CSS", "JS"]
console.log(user.skills.join(" | ")); // "HTML | CSS | JS"
console.log(user.skills[2]); // "JS" (Access With Index)
```

---

### 2. Nested Objects 
عشان نوصل لقيمة جوه `Object` متداخل، بنفضل نعمل "سلسلة" ( `Chaining` ). نقدر نستخدم الـ `Dot Notation` لوحدها، أو الـ `Bracket Notation` لوحدها، أو ندمج الطريقتين مع بعض عادي جداً.

```javascript
// استخدام Dot Notation فقط
console.log(user.addresses.ksa); // "Riyadh"
console.log(user.addresses.egypt.one); // "Cairo"

// دمج الطريقتين مع بعض
console.log(user["addresses"].egypt.one); // "Cairo"

// استخدام Bracket Notation فقط
console.log(user["addresses"]["egypt"]); // {one: 'Cairo', two: 'Giza'}
console.log(user["addresses"]["egypt"]["one"]); // "Cairo"
```

---

### 3. Methods & The this Keyword 
عندنا متغير `Global` بره اسمه `available` وقيمته `true` ، وخاصية جوه الـ `Object` اسمها `available` وقيمتها `false` . جوه الـ `Method` ، إزاي نحدد إحنا قاصدين مين فيهم؟

- **الخطأ (فخ الـ Global):** لو كتبنا `if (available === true)` ، هيدور بره الـ `Object` ويجيب المتغير الـ `Global` ، وده هيدينا نتيجة غلط.
- **الصح (طريقة ثابتة):** لو كتبنا `if (user.available === true)` ، ده شغال صح وهيبص جوه الـ `Object` . **لكن عيبه:** لو غيرنا اسم الـ `Object` في المستقبل لـ `employee` مثلاً، الكود هيضرب `Error` .
- **الأكثر احترافية (استخدام `this` ):** كلمة `this` بتشاور على الـ `Object` اللي بيشغل الـ `Method` (الـ `Owner` ). فلو كتبنا `this.available` ، الكود هيشتغل دايماً صح أياً كان اسم الـ `Object` إيه.


```javascript
// جوه الـ Method في الـ Object الأساسي كتبنا:
/*
  checkAv: function () {
    if (this.available === true) { 
      return `Free For Work`;
    } else {
      return `Busy`;
    }
  }
*/

// استدعاء الـ Method
console.log(user.checkAv()); // "Busy" 
```
---
## 7. Create Object With new Keyword

لحد دلوقتي إحنا كنا بنعمل الـ `Object` بالطريقة المباشرة واللي اسمها `Object Literal` عن طريق الأقواس `{}` . الجافاسكريبت بتوفرلنا طريقة تانية عشان نكريت بيها الـ `Object` باستخدام الكلمة المحجوزة `new` مع الـ `Constructor` اللي اسمه `Object()` .

**إضافة وتعديل البيانات ( `Update & Add` ):**

الميزة القوية في الـ `Objects` في الجافاسكريبت إنها مرنة جداً. سواء عملت الـ `Object` بالطريقة العادية أو بـ `new Object()` ، إنت تقدر في أي وقت (بعد الإنشاء) تعدل قيمة موجودة، أو تضيف خاصية ( `Property` ) جديدة، أو حتى تضيف دالة ( `Method` ) جديدة من بره باستخدام الـ `Dot Notation` أو الـ `Bracket Notation` .

```javascript
// إنشاء الكائن باستخدام new Object
let user = new Object({
  age: 20,
});

console.log(user); // {age: 20}

// 1. Update Property (تعديل خاصية موجودة بالفعل)
user.age = 38;

// 2. Add New Property (إضافة خاصية جديدة باستخدام Bracket Notation)
user["country"] = "Egypt";

// 3. Add New Method (إضافة دالة جديدة باستخدام Dot Notation)
user.sayHello = function () {
  return `Hello`;
};

// النتيجة النهائية بعد التعديل والإضافة
console.log(user); // {age: 38, country: 'Egypt', sayHello: ƒ}

// استدعاء البيانات الجديدة
console.log(user.age); // 38
console.log(user.country); // "Egypt"
console.log(user.sayHello()); // "Hello"
```
---
## 8. Function this Keyword

الـ `this` هي كلمة محجوزة في الجافاسكريبت بتشاور على كائن ( `Object` ) معين، والـ `Object` ده بيتغير بناءً على السياق ( `Context` ) اللي الـ `this` اتكتبت فيه واشتغلت منه.

### 1. Global Context (النطاق العام)
لما بنكتب `this` في النطاق العام (بره أي دالة أو كائن)، الـ `this` بتشاور على الـ `Global Object` . في حالة المتصفح ( `Browser` )، الـ `Global Object` ده هو الـ `window` .

```javascript
// بتشاور على الـ Window Object
console.log(this); 

// النتيجة هتكون true لأن الاتنين واحد هنا
console.log(this === window); 
```

---

### 2. Test Variables With window And this

أي متغير بتعمله في النطاق العام من غير `let` أو `const` (أو باستخدام `var` )، بيتسجل تلقائياً كخاصية ( `Property` ) جوه كائن الـ `window` . وبما إن الـ `this` هي هي الـ `window` هنا، فتقدر توصل للمتغير بالاتنين.

```javascript
myVar = 100; // متغير عام 

console.log(window.myVar); // 100
console.log(this.myVar); // 100
```

---

### 3. Function Context (نطاق الدوال العادية)
لما بنستخدم `this` جوه دالة عادية ( `Regular Function` ) وبننادي عليها بشكل مباشر في النطاق العام، الجافاسكريبت بتعتبر إن الـ `window` هو اللي نادى على الدالة دي، وبالتالي `this` هتشاور على الـ `window` برضه.

```javascript
function sayHello() {
  console.log(this); // هيطبع الـ Window Object
  return this;
}

sayHello();

// النتيجة true لأن الدالة بترجع الـ Window
console.log(sayHello() === window); 
```

---

### 4. this Inside DOM Events (نطاق الأحداث)
لما بنربط دالة بحدث معين على عنصر في الـ `HTML` (زي الـ `onclick` )، الـ `this` جوه الدالة دي بتشاور على **العنصر نفسه** اللي حصل عليه الحدث.

```javascript
// الـ this هنا بتشاور على الزرار أو العنصر اللي الأي دي بتاعه "cl"
document.getElementById("cl").onclick = function () {
  console.log(this); 
};
```

---

### 5. this Inside Object Method (نطاق الكائنات)
 أهم قاعدة:
When a function is called as a method of an object, its `this` is set to the object the method is called on.

يعني لما الدالة تكون جزء من كائن ( `Method` )، الـ `this` بتشاور على الكائن نفسه اللي بيملك الدالة دي.

```javascript
let user = {
  age: 38,
  ageInDays: function () {
    console.log(this); // هيطبع الكائن user بالكامل
    
    // this.age تعادل user.age بالظبط
    return this.age * 365; 
  },
};

console.log(user.age); // 38
console.log(user.ageInDays()); // 13870
```

---

### 6. Search: Strict Mode (البحث)

> [!info] ملاحظة هامة عن الـ `Strict Mode`
> في الوضع الصارم ( `"use strict";` )، الجافاسكريبت بتمنع الدالة العادية إنها تشاور على الـ `window` كإجراء أمني. لو كتبت `this` جوه دالة عادية في الـ `Strict Mode` ، قيمتها هتكون `undefined` مش `window` .

---



