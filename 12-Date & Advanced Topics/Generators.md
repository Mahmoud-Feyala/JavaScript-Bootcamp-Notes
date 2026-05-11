---
tags:
  - JavaScript
  - Generators
  - Yield
  - Web-Development
date: 2026-04-28
subject: Generators Introduction
---
- [[#1. Generator Function|1. Generator Function]]
- [[#2. The Generator Object|2. The Generator Object]]
- [[#3. Iterability (قابلية التكرار)|3. Iterability (قابلية التكرار)]]
- [[#1. The Yield Asterisk|1. The Yield Asterisk]]
- [[#2. Early Return|2. Early Return]]
- [[#1. Infinite Generators|1. Infinite Generators]]
- [[#2. Use Return Inside Generators|2. Use Return Inside Generators]]

# JavaScript - Generators Introduction 

الدالة العادية في الجافاسكريبت لما بتستدعيها، بتنفذ كل الكود اللي جواها مرة واحدة. لكن الـ `Generators` (المولدات) دي دوال سحرية تقدر "توقف" تنفيذها مؤقتاً في النص، وترجعلك قيمة، وتستنى لحد ما تطلب منها تكمل شغل من مكان ما وقفت!

---

## 1. Generator Function 

عشان نكريت دالة مولد، بنحط علامة النجمة `*` بعد كلمة `function`. وجوه الدالة بنستخدم الكلمة المفتاحية `yield` (بمعنى يُنتج أو يُخرج) بدل `return` عشان نوقف التنفيذ مؤقتاً ونرجع القيمة اللي جنبها.

```javascript
function* generateNumbers() {
  yield 1; // الدالة هترجع 1 وتقف هنا وتستنى الأمر اللي بعده
  
  console.log("Hello After Yield 1"); // السطر ده مش هيتنفذ غير لما نطلب منها تكمل
  
  yield 2;
  yield 3;
  yield 4;
}
```

---

## 2. The Generator Object 

لما بتستدعي دالة المولد، هي **مش بتنفذ الكود اللي جواها فوراً**! هي بترجعلك كائن خاص اسمه `Generator Object`. عشان تشغل الدالة خطوة بخطوة، لازم تستخدم دالة `next()` على الكائن ده.

دالة `next()` بترجع كائن جواه حاجتين:
- `value`: القيمة اللي رجعت من الـ `yield`.
- `done`: قيمة منطقية (`true` لو الدالة خلصت كل حاجة، و `false` لو لسه فيها `yield` تاني).

```javascript
// هنا إحنا كريتنا المولد، بس الكود اللي جواه لسه مشتغلش
let generator = generateNumbers();

console.log(generator.next()); // {value: 1, done: false}
console.log(generator.next()); // هيطبع "Hello" الأول في الكونسول، وبعدين يرجع {value: 2, done: false}
console.log(generator.next()); // {value: 3, done: false}
console.log(generator.next()); // {value: 4, done: false}
console.log(generator.next()); // {value: undefined, done: true} (المولد خلص)
```

---

## 3. Iterability (قابلية التكرار)

بما إن الـ `Generators` قابلة للتكرار (`Iterable`)، نقدر نستخدم معاها الـ `for...of loop` عشان تسحب القيم بتاعتها كلها ورا بعض أوتوماتيك من غير ما نكتب `next()` بإيدينا. اللوب بيقف لوحده أول ما الـ `done` تبقى `true`.

> [!danger] The Exhausted Generator Trap (فخ المولد المستهلك)
> المولد بيطلع قيمه **مرة واحدة بس**. لو عملت `loop` على مولد أو استخدمت `next()` لحد ما خلصت كل قيمه، المولد بيبقى فاضي. لو حاولت تعمل عليه `loop` تاني، مش هيطبع أي حاجة!

```javascript
// 1. تكرار على مولد جديد (هيطبع 1, 2, 3, 4 لأننا استدعينا الدالة من جديد)
for (let value of generateNumbers()) {
  console.log(value);
}

// 2. تكرار على المولد القديم اللي إحنا استهلكناه بـ next() خمس مرات فوق!
// مش هيطبع أي حاجة خالص لأن الـ done بتاعته بقت true ومبقاش جواه قيم.
for (let value of generator) {
  console.log(value);
}
```

---
# JavaScript - Delegate Generator (تفويض المولدات)

أحياناً بيبقى عندنا أكتر من دالة مولد (`Generator`)، وبنحتاج ندمجهم كلهم في مولد واحد كبير. عشان نعمل كده، بنستخدم تقنية اسمها التفويض (`Delegation`)، واللي بتخلي المولد الكبير يدي الأوامر للمولدات الصغيرة (أو أي شيء قابل للتكرار زي المصفوفات) إنها تطلع القيم بتاعتها واحدة ورا التانية.


---

## 1. The Yield Asterisk 

عشان نفوض أمر الإخراج لمولد تاني أو مصفوفة، لازم نحط نجمة جنب كلمة `yield` عشان تبقى `yield*`. 
- لو كتبنا `yield [4, 5, 6]` من غير النجمة، المولد هيطلع المصفوفة كلها حتة واحدة كقيمة واحدة في خطوة واحدة.
- لكن لو كتبنا `yield* [4, 5, 6]` بالنجمة، المولد هيدخل جوه المصفوفة ويطلع الأرقام رقم رقم مع كل استدعاء لـ `next()`.

```javascript
function* generateNums() {
  yield 1; yield 2; yield 3;
}

function* generateLetters() {
  yield "A"; yield "B"; yield "C";
}

// المولد المدير اللي هيفوض الشغل للباقي
function* generateAll() {
  yield* generateNums();    // طلع الأرقام بالدور
  yield* generateLetters(); // لما تخلص الأرقام، طلع الحروف بالدور
  yield* [4, 5, 6];         // لما تخلص، طلع عناصر المصفوفة بالدور
}

let generator = generateAll();
```

---

## 2. Early Return 

دالة `return(value)` دي بتعمل إيقاف إجباري للمولد (زي فرامل الطوارئ). أول ما بتستدعيها، بتخلي حالة الـ `done` تبقى `true` فوراً، وترجع القيمة اللي إنت باعتها (لو مبعتتش حاجة هترجع `undefined`). أي استدعاء لـ `next()` بعد كده مش هيعمل أي حاجة وهيرجع `undefined`.

```javascript
// 1. هيطلع أرقام من generateNums
console.log(generator.next()); // {value: 1, done: false}
console.log(generator.next()); // {value: 2, done: false}
console.log(generator.next()); // {value: 3, done: false}

// 2. هيدخل على generateLetters
console.log(generator.next()); // {value: "A", done: false}
console.log(generator.next()); // {value: "B", done: false}
console.log(generator.next()); // {value: "C", done: false}

// 3. الإيقاف الإجباري!
// هنا إحنا قتلنا المولد ورجعنا قيمة "Z" بدل ما يدخل على المصفوفة
console.log(generator.return("Z")); // {value: "Z", done: true}

// 4. محاولات الاستدعاء بعد الموت
// المولد خلاص خلص، مش هيطلع أي أرقام من المصفوفة [4, 5, 6]
console.log(generator.next()); // {value: undefined, done: true}
console.log(generator.next()); // {value: undefined, done: true}
console.log(generator.next()); // {value: undefined, done: true}
```
---

# JavaScript - Generate Infinite Numbers & Return 

من أقوى استخدامات المولدات إننا نقدر نعمل جواها لوب لانهائي (`Infinite Loop`) من غير ما نهنج المتصفح. السر كله في إن دالة المولد بتوقف تنفيذ الكود تماماً عند كل `yield` ومبتكملش غير لما نطلب منها.

---

## 1. Infinite Generators 

لو استخدمنا `while (true)` جوه دالة عادية، المتصفح هيدخل في دوامة ومش هيستجيب. لكن جوه المولد، الكود بيقف عند `yield index++` وبيستنى استدعاء `next()` الجديد عشان يلف اللفة اللي بعدها.

```javascript
function* generateNumbers() {
  let index = 0;

  // لوب لانهائي مش هيعمل مشكلة بسبب الفرامل بتاعت yield
  while (true) {
    yield index++;
  }
}

let generator = generateNumbers();

// نقدر نولد أرقام للما لا نهاية، كل استدعاء هيجيب الرقم اللي عليه الدور
console.log(generator.next()); // {value: 0, done: false}
console.log(generator.next()); // {value: 1, done: false}
console.log(generator.next()); // {value: 2, done: false}
console.log(generator.next()); // {value: 3, done: false}
// ... وهكذا للما لا نهاية
```

> [!info] Use Cases (استخدامات عملية)
> الفكرة دي ممتازة جداً لو بتعمل تطبيق محتاج يولد أرقام تعريفية (`IDs`) متسلسلة ومش متكررة لكل مستخدم أو عنصر جديد بيتكريت في الـ Database.

---

## 2. Use Return Inside Generators
إيه اللي يحصل لو استخدمنا الكلمة المفتاحية `return` جوه المولد بدل `yield` ؟ 
الـ `return` بتعتبر "النهاية الحتمية" للمولد. أول ما الكود بيخبط فيها، المولد بيقفل فوراً (قيمة `done` بتبقى `true`)، وأي كود أو `yield` مكتوب بعدها مش هيتنفذ أبداً.

```javascript
function* generateWithReturn() {
  yield 1;
  yield 2;
  return "A"; // المولد هيموت هنا!
  yield 3;    // الكود ده عمره ما هيتنفذ (Unreachable Code)
  yield 4;
}

let gen = generateWithReturn();

console.log(gen.next()); // {value: 1, done: false}
console.log(gen.next()); // {value: 2, done: false}
console.log(gen.next()); // {value: "A", done: true}  <-- المولد انتهى
console.log(gen.next()); // {value: undefined, done: true}
```