---
tags:
  - JavaScript
  - Higher-Order-Functions
  - Arrays
  - Web-Development
date: 2026-03-15
share_link: https://share.note.sx/rzmf9p4c#PdD7vduTWeJRVV2e4FcSHM70vNcgLyA8oxGgRqijgBs
share_updated: 2026-03-24T19:00:34+02:00
aliases:
---
- [[#1. What is a Higher Order Function?|1. What is a Higher Order Function?]]
- [[#2. The map Method|2. The map Method]]
	- [[#2. The map Method#Syntax|Syntax]]
	- [[#2. The map Method#Parameters (معاملات الـ Callback)|Parameters (معاملات الـ Callback)]]
- [[#3. Code Examples|3. Code Examples]]
	- [[#3. Code Examples#Example 1: The Old Way (Using for Loop)|Example 1: The Old Way (Using for Loop)]]
	- [[#3. Code Examples#Example 2: Same Idea With map (Anonymous Function)|Example 2: Same Idea With map (Anonymous Function)]]
	- [[#3. Code Examples#Example 3: Using Arrow Function|Example 3: Using Arrow Function]]
	- [[#3. Code Examples#Example 4: Using Named Function|Example 4: Using Named Function]]
- [[#1. Swap Cases (عكس حالة الحروف)|1. Swap Cases (عكس حالة الحروف)]]
- [[#2. Inverted Numbers (عكس الإشارة)|2. Inverted Numbers (عكس الإشارة)]]
- [[#3. Ignore Numbers (تجاهل الأرقام من النص)|3. Ignore Numbers (تجاهل الأرقام من النص)]]
	- [[#3. Ignore Numbers (تجاهل الأرقام من النص)#Syntax|Syntax]]
- [[#1. Test: Map vs Filter|1. Test: Map vs Filter]]
- [[#2. Practical Examples|2. Practical Examples]]
	- [[#2. Practical Examples#Example 1: Filtering Strings (فلترة النصوص)|Example 1: Filtering Strings (فلترة النصوص)]]
	- [[#2. Practical Examples#Example 2: Filtering Even Numbers (الأرقام الزوجية)|Example 2: Filtering Even Numbers (الأرقام الزوجية)]]
- [[#3. Filter Method - Practice|3. Filter Method - Practice]]
	- [[#3. Filter Method - Practice#1. Filter Words by Length (فلترة الكلمات حسب الطول)|1. Filter Words by Length (فلترة الكلمات حسب الطول)]]
	- [[#3. Filter Method - Practice#2. Ignore Numbers (تجاهل الأرقام من النص)|2. Ignore Numbers (تجاهل الأرقام من النص)]]
	- [[#3. Filter Method - Practice#3. Method Chaining (دمج Filter مع Map)|3. Method Chaining (دمج Filter مع Map)]]
- [[#6. The reduce Method|6. The reduce Method]]
	- [[#6. The reduce Method#Syntax|Syntax]]
	- [[#6. The reduce Method#Parameters (Callback معاملات الـ)|Parameters (Callback معاملات الـ)]]
	- [[#6. The reduce Method#Code Examples (بدون ومع القيمة الابتدائية)|Code Examples (بدون ومع القيمة الابتدائية)]]
		- [[#Code Examples (بدون ومع القيمة الابتدائية)#Example 1: Without initialValue|Example 1: Without initialValue]]
		- [[#Code Examples (بدون ومع القيمة الابتدائية)#Example 2: With initialValue|Example 2: With initialValue]]
- [[#7. Reduce Method - Practice|7. Reduce Method - Practice]]
	- [[#7. Reduce Method - Practice#1. Longest Word (استخراج أطول كلمة)|1. Longest Word (استخراج أطول كلمة)]]
	- [[#7. Reduce Method - Practice#2. Remove Characters (إزالة رموز معينة ودمج النص)|2. Remove Characters (إزالة رموز معينة ودمج النص)]]
- [[#8. The forEach Method|8. The forEach Method]]
	- [[#8. The forEach Method#Syntax|Syntax]]
	- [[#8. The forEach Method#Parameters (  Callback معاملات)|Parameters (  Callback معاملات)]]
	- [[#8. The forEach Method#Practical Example (DOM)|Practical Example (DOM)]]
		- [[#Practical Example (DOM)#1. HTML Code|1. HTML Code]]
		- [[#Practical Example (DOM)#2. JavaScript Code|2. JavaScript Code]]

## 1. What is a Higher Order Function?
الـ **Higher Order Function** هي عبارة عن Function بتقبل Function تانية كـ Parameter، أو بترجع Function جديدة كـ Result.

---

## 2. The map Method
- الـ `map` بتعمل **Array جديدة** (New Array).
- الـ Array الجديدة دي بتتملي بنتيجة تنفيذ Function معينة (Callback Function) على كل عنصر من عناصر الـ Array الأصلية.
- **ملاحظة هامة:** الـ `map` مش بتعدل على الـ Array الأصلية، دايماً بترجع Array جديدة.



### Syntax

```javascript
map(callBackFunction(Element, Index, Array) { }, thisArg)
```

### Parameters (معاملات الـ Callback)
1. **Element:** Array العنصر الحالي اللي بيتم معالجته جوه الـ .
2. **Index:** Index رقم   بتاع العنصر الحالي الـ.
3. **Array:**   الأصلية اللي بنعمل عليها اللوب Arrayالـ.
4. **ThisArg:** (اختياري) القيمة اللي هتستخدم كـ `this` جوه الـ Callback Function.

---

## 3. Code Examples

### Example 1: The Old Way (Using for Loop)
لو عايزين نجمع كل رقم على نفسه باستخدام اللوب العادية:
```javascript
let myNums = [1, 2, 3, 4, 5, 6];
let newArray = [];

for (let i = 0; i < myNums.length; i++) {
  newArray.push(myNums[i] + myNums[i]);
}

console.log(newArray); // [2, 4, 6, 8, 10, 12]
```

### Example 2: Same Idea With map (Anonymous Function)
نفس الفكرة بس باستخدام الـ `map` مع توضيح كل الـ Parameters:
```javascript
let myNums = [1, 2, 3, 4, 5, 6];

let addSelf = myNums.map(function (element, index, arr) {
  // console.log(`Current Element => ${element}`);
  // console.log(`Current Index => ${index}`);
  // console.log(`Array => ${arr}`);
  // console.log(`This => ${this}`);
  
  return element + element;
}, 10); // thisArg الـ 10 هنا هي   الاختياري

console.log(addSelf); // [2, 4, 6, 8, 10, 12]
```

### Example 3: Using Arrow Function
طريقة مختصرة جداً ومفضلة في كتابة الكود:

```javascript
let myNums = [1, 2, 3, 4, 5, 6];

let addSelfArrow = myNums.map((a) => a + a);

console.log(addSelfArrow); // [2, 4, 6, 8, 10, 12]
```

### Example 4: Using Named Function
لو عندك Function جاهزة بره وعايز تباصيها للـ `map` :

```javascript
let myNums = [1, 2, 3, 4, 5, 6];

function addition(ele) {
  return ele + ele;
}

let add = myNums.map(addition);

console.log(add); // [2, 4, 6, 8, 10, 12]
```
---
# Map Method - Practical Examples

## 1. Swap Cases (عكس حالة الحروف)

الفكرة هنا إن الـ `map` بتتعامل مع `Array` بس، وعشان كده بنستخدم `split("")` عشان نحول الـ `String` لـ `Array` من الحروف، وبعدين نستخدم `join("")` عشان نرجعه `String` تاني بعد ما نخلص تعديل.

```javascript
let swappingCases = "elZERo";

let sw = swappingCases
  .split("")  // String to array
  .map(function (ele) {
    // Condition ? True : False (Ternary Operator - جملة if مختصرة)
    return ele === ele.toUpperCase() ? ele.toLowerCase() : ele.toUpperCase(); 
  })
  .join(""); // array to string

console.log(sw); // "ELzerO"
```

---

## 2. Inverted Numbers (عكس الإشارة)

تطبيق مباشر وسريع لتغيير إشارة كل الأرقام جوه الـ `Array` (السالب يبقى موجب والموجب يبقى سالب) عن طريق الضرب في -1.

```javascript
let invertedNumbers = [1, -10, -20, 15, 100, -30];

let inv = invertedNumbers.map(function (ele) {
  return ele * -1; // ele *= -1  or -ele 
});

console.log(inv); // [-1, 10, 20, -15, -100, 30]
```

---

## 3. Ignore Numbers (تجاهل الأرقام من النص)

هنا بنستخدم الدالة `isNaN` (Is Not a Number) جوه الـ `map` كشرط. لو العنصر مش رقم (يعني حرف) هيرجعه زي ما هو، ولو رقم هيرجع مكانه `""` (String فاضي) عشان يختفي لما نعمل `join` .

```javascript
let ignoreNumbers = "Elz123er4o";

let ign = ignoreNumbers
  .split("")
  .map(function(ele) {
    return isNaN(ele) ? ele : "";
  })
  .join("");

console.log(ign); // "Elzero"
```
---
# 2. Filter Method

الـ `filter` بتعمل `Array` جديدة، بس مش بتعدل على العناصر. هي بتعمل اختبار ( `Condition` ) على كل عنصر، ولو النتيجة طلعت `True` ، العنصر ده بيعدي ويدخل في الـ `Array` الجديدة. لو طلعت `False` ، بيتم استبعاده.

### Syntax
```javascript
filter(callBackFunction(Element, Index, Array) { }, thisArg)
```
* **Element:** العنصر الحالي اللي بيتم اختباره.
* **Index:** رقم العنصر.
* **Array:** الـ Array الأصلية.

---

## 1. Test: Map vs Filter 

عشان نفهم الفرق الجوهري، تخيل إننا بنحاول نجمع كل رقم على نفسه باستخدام الـ `map` مرة والـ `filter` مرة:

```javascript
let numbers = [11, 20, 2, 5, 17, 10];

// Map: بتنفذ العملية الحسابية وترجع النتيجة الجديدة
let addMap = numbers.map(function (ele) {
  return ele + ele;
});
console.log(addMap); // [22, 40, 4, 10, 34, 20]

// Filter: بتختبر النتيجة كشرط (Condition)
let addFilter = numbers.filter(function (ele) {
  return ele + ele; 
});
console.log(addFilter); // [11, 20, 2, 5, 17, 10]
```

> [!danger] ليه الـ Filter رجعت الأرقام الأصلية؟
> الـ `filter` مش بتعمل `return` لناتج العملية ( `ele + ele` ). هي بتبص للناتج ده وتشوفه: هل هو `True` ولا `False` ؟
> بما إن ناتج الجمع رقم عادي (مش صفر)، فالجافاسكريبت بتعتبره `Truthy` ، وبناءً عليه الـ `filter` بتسمح للعنصر الأصلي `ele` إنه يعدي ويدخل الـ `Array` الجديدة. استخدام الـ `filter` هنا في عمليات حسابية يعتبر استخدام خاطئ.

---

## 2. Practical Examples

### Example 1: Filtering Strings (فلترة النصوص)
لو عايزين نطلع أسماء الأصدقاء اللي بتبدأ بحرف معين بس:

```javascript
let friends = ["Ahmed", "Sameh", "Sayed", "Asmaa", "Amgad", "Israa"];

let filteredFriends = friends.filter(function (ele) {
  return ele.startsWith("A"); // OR ele[0] === "A"
});

console.log(filteredFriends); // ["Ahmed", "Asmaa", "Amgad"]
```

### Example 2: Filtering Even Numbers (الأرقام الزوجية)
تطبيق لشرط رياضي عشان نرجع الأرقام اللي بتقبل القسمة على 2 بس:

```javascript
let numbers = [11, 20, 2, 5, 17, 10];

let evenNums = numbers.filter(function (ele) {
  return ele % 2 === 0; // شرط هيطلع True أو False
});

console.log(evenNums); // [20, 2, 10]
```

## 3. Filter Method - Practice

تطبيقات إضافية ومتقدمة على استخدام الـ `filter` للتدريب على أفكار مختلفة.

### 1. Filter Words by Length (فلترة الكلمات حسب الطول)
هنا بنستخدم `split(" ")` (بمسافة) عشان نحول الجملة لـ `Array` من الكلمات، وبعدين نفلتر الكلمات اللي حروفها 4 أو أقل، ونرجع نجمعهم بـ `join(" ")` .

```javascript
// Filter Words More Than 4 Characters
let sentence = "I Love Foood Code Too Playing Much";

let smallWords = sentence
  .split(" ")
  .filter(function (ele) {
    return ele.length <= 4;
  })
  .join(" ");

console.log(smallWords); // "I Love Code Too Much"
```

### 2. Ignore Numbers (تجاهل الأرقام من النص)
نفس فكرة تجاهل الأرقام اللي عملناها بالـ `map` ، بس المرة دي بالـ `filter` وهي الطريقة الأدق والأنظف. بنستخدم `parseInt` عشان نحاول نحول العنصر لرقم، لو العنصر حرف هيرجع `NaN` ، وبالتالي `isNaN` هتطلع `True` فالحرف هيعدي.

```javascript
let ignoreNumbers = "Elz123er4o";

let ign = ignoreNumbers
  .split("")
  .filter(function (ele) {
    return isNaN(parseInt(ele)); // لو النتيجة True (يعني حرف مش رقم) هيعديه
  })
  .join("");

console.log(ign); // "Elzero"
```

### 3. Method Chaining (دمج Filter مع Map)
ده من أهم التطبيقات. عندنا نص فيه حروف وأرقام، عايزين نطلع الأرقام بس، وبعدين نضرب كل رقم في نفسه، وفي الآخر ندمجهم كنص واحد. 

- **الخطوة الأولى ( `filter` ):** بنعكس الشرط `!isNaN` عشان نعدي الأرقام بس ونطرد الحروف.
- **الخطوة التانية ( `map` ):** بناخد الأرقام اللي عدت ونضرب كل رقم في نفسه.
- **الخطوة التالتة ( `join` ):** بنلزقهم في بعض.

```javascript
// Filter Strings + Multiply
let mix = "A13BS2ZX";

let mixedContent = mix
  .split("")
  .filter(function (ele) {
    return !isNaN(parseInt(ele)); // نعدي الأرقام بس
  })
  .map(function (ele) {
    return ele * ele; // نضرب كل رقم في نفسه
  })
  .join(""); // نرجعهم String تاني

console.log(mixedContent); // "194" (لأن 1*1=1, 3*3=9, 2*2=4)
```
---
## 6. The reduce Method

الـ `reduce` بتنفذ وظيفة معينة ( `Reducer function` ) على كل عنصر في الـ `Array` ، والهدف النهائي إنها تضغط الـ `Array` دي وتطلع **بقيمة واحدة بس** ( `Single output value` ) في الآخر (زي مثلاً مجموع الأرقام، أكبر رقم، إلخ).

### Syntax
```javascript
reduce(callBackFunc(Accumulator, Current Val, Current Index, Source Array) { }, initialValue)
```

### Parameters (Callback معاملات الـ)

1.  `Accumulator`  
    ده الوعاء اللي بتتجمع فيه النتيجة من الـ `return` .  
    قيمته بتكون نتيجة الـ `Iteration` اللي قبله.
    
2.  `Current Val`   
    العنصر الحالي في الـ `Array` اللي بيتم معالجته جوه الـ `reduce` .
    
3.  `Current Index`  
    رقم الـ `Index` بتاع العنصر الحالي.
    
    **ملاحظة مهمة:**
    
    - لو حاطط `initialValue` → الـ `Index` يبدأ من `0` .
        
    - لو مش حاطط `initialValue` → الـ `Index` يبدأ من `1` ، لأن أول عنصر في الـ `Array` بيكون هو الـ `Accumulator` .
        
1.  `Source Array`   
    الـ `Array` الأصلية.
    
2. `initialValue`  
    القيمة الابتدائية اللي بيبدأ بيها الـ `Accumulator` .

---

### Code Examples (بدون ومع القيمة الابتدائية)

#### Example 1: Without initialValue
هنا مفيش قيمة ابتدائية، فالجافاسكريبت هتاخد أول عنصر في الـ `Array` وتعتبره هو الـ `Accumulator` ، وتبدأ اللوب من العنصر التاني ( `Index 1` ).

```javascript
let nums = [10, 20, 15, 30];

let add1 = nums.reduce(function (acc, current, index, arr) {
  // console.log(`Acc: ${acc}, Current: ${current}, Index: ${index}`);
  return acc + current;
});

console.log(add1); // 75
```
> **إيه اللي بيحصل في الكواليس؟**
> - اللفة الأولى: `Acc = 10` | `Current = 20` | `Index = 1` | النتيجة = `30`
> - اللفة التانية: `Acc = 30` | `Current = 15` | `Index = 2` | النتيجة = `45`
> - اللفة التالتة: `Acc = 45` | `Current = 30` | `Index = 3` | النتيجة النهائية = `75`

#### Example 2: With initialValue
 لما بنحط `initialValue` بـ `5` ، الـ `Accumulator` بيبدأ بـ `5` ، والـ `Current` بيبدأ بأول عنصر عادي ( `10` ) والـ `Index` بيكون `0` . كأنك بالظبط حطيت عنصر جديد في أول الـ `Array` وبدأت تجمع من عنده.

```javascript
let nums = [10, 20, 15, 30];

let add2 = nums.reduce(function (acc, current, index, arr) {
  // console.log(`Acc: ${acc}, Current: ${current}, Index: ${index}`);
  return acc + current;
}, 5); // 5 is the initialValue

console.log(add2); // 80
```

 **إيه اللي بيحصل في الكواليس؟**
- اللفة الأولى: `Acc = 5` | `Current = 10` | `Index = 0` | النتيجة = `15`
-  اللفة التانية: `Acc = 15` | `Current = 20` | `Index = 1` | النتيجة = `35`
-  وهكذا لحد ما النتيجة النهائية تطلع `80` 
## 7. Reduce Method - Practice

تطبيقات متقدمة على الـ `reduce` للتدريب على أفكار مختلفة بره الصندوق.

### 1. Longest Word (استخراج أطول كلمة)
الفكرة هنا إن الـ `Accumulator` بيحتفظ دايماً بأطول كلمة لقاها لحد دلوقتي. في كل لفة بيقارن طوله بطول الـ `Current` ، والكبير فيهم هو اللي بيكمل كـ `Accumulator` للفة اللي بعدها، لحد ما نخلص الـ `Array` كلها.

```javascript
let theBiggest = [
  "Bla",
  "Propaganda",
  "Other",
  "AAA",
  "Battery",
  "Test",
  "Propaganda_Two",
];

let check = theBiggest.reduce(function (acc, current) {
  // Condition ? True : False
  return acc.length > current.length ? acc : current;
});

console.log(check); // "Propaganda_Two"
```

---

### 2. Remove Characters (إزالة رموز معينة ودمج النص)
هنا عندنا `Array` فيها حروف ورموز ( `@` )، وعايزين نشيل الرموز ونجمع الحروف عشان نكون الكلمة.

**الطريقة الأولى (باستخدام `filter` و `join` ):**
دي الطريقة اللي إنت كتبتها، وهي مباشرة وممتازة. بنفلتر الرموز الأول، وبعدين ندمج الحروف بالـ `join` .

```javascript
let removeChars = ["E", "@", "@", "L", "Z", "@", "@", "E", "R", "@", "O"];

let finalString = removeChars.filter(function (ele) {
  return ele !== "@";
}).join(""); // الطريقه الاسهل

console.log(finalString); // "ELZERO"
```

**الطريقة التانية (باستخدام `reduce` للدمج):**
عشان نطبق فكرة دمج الـ `reduce` زي ما العنوان طالب، بنستخدم `filter` عشان نطرد الـ `@` ، وبعدين نستخدم `reduce` عشان نجمع (نلزق) الحروف اللي باقية في بعض كبديل لدالة `join` .

```javascript
let removeChars = ["E", "@", "@", "L", "Z", "@", "@", "E", "R", "@", "O"];

let finalStringReduce = removeChars
  .filter(function (ele) {
    return ele !== "@";
  })
  .reduce(function (acc, current) {
    return acc + current; // هنا بيلزق كل حرف في اللي قبله
  });

console.log(finalStringReduce); // "ELZERO"
```
---
## 8. The forEach Method

الـ `forEach` بتنفذ وظيفة معينة ( `Callback Function` ) مرة واحدة على كل عنصر من عناصر الـ `Array` . هي مجرد طريقة أسهل وأنظف عشان تعمل `Loop` على العناصر بدل ما تستخدم الـ `for` العادية.

### Syntax

```javascript
forEach(callBackFunction(Element, Index, Array) { }, thisArg)
```

### Parameters (  Callback معاملات)

- `Element`  العنصر الحالي اللي بيتم معالجته جوه الـ `Array` .
- `Index` رقم الـ `Index` بتاع العنصر الحالي.
-  `Array`  الـ `Array` الأصلية.
-  `thisArg`  (اختياري) القيمة اللي هتستخدم كـ `this` جوه الـ `Callback Function` .

> [!warning] ملاحظات هامة جداً 
> - **لا تعود بقيمة ( `Returns Undefined` ):** الـ `forEach` مش بتطلع `Array` جديدة زي الـ `map` ، ولا بترجع أي قيمة. بتنفذ الأكشن وتمشي.
> - **مفيش فرامل ( `No Break/Continue` ):** مينفعش تستخدم معاها كلمات زي `break` عشان توقف اللوب في النص، أو `continue` عشان تتخطى عنصر. اللوب هتفضل شغالة لحد ما تخلص كل عناصر الـ `Array` إجباري.

---

### Practical Example (DOM)

ده تطبيق مشهور جداً لعمل نظام تبويبات ( `Tabs` ). الفكرة إننا بنعمل لوب على كل عناصر الـ `li` ، ولما ندوس على واحد فيهم، بنمسح كلاس `active` من كل العناصر التانية، ونضيفه على العنصر اللي دسنا عليه بس، مع إخفاء كل الـ `divs` التانية.

#### 1. HTML Code

```html
<ul>
  <li class="active">One</li>
  <li>Two</li>
  <li>Three</li>
</ul>
<div class="content">
  <div>Div One</div>
  <div>Div Two</div>
  <div>Div Three</div>
</div>
```

#### 2. JavaScript Code

```javascript
let allLis = document.querySelectorAll("ul li");
let allDivs = document.querySelectorAll(".content div");

allLis.forEach(function (ele) {
  ele.onclick = function () {
    
    // 1. Remove Active Class From All Elements
    allLis.forEach(function (ele) {
      ele.classList.remove("active");
    });
    
    // 2. Add Active Class To This Element (العنصر اللي اتعمل عليه كليك)
    this.classList.add("active");
    
    // 3. Hide All Divs
    allDivs.forEach(function (ele) {
      ele.style.display = "none";
    });
    
  };
});
```
