---
tags:
  - JavaScript
  - ES 6
  - Set
  - Data-Structures
  - Web-Development
date: 2026-04-22
subject: ES 6 Set Data Type
---
- [[#1. Syntax & Creation (طريقة الكتابة والإنشاء)|1. Syntax & Creation (طريقة الكتابة والإنشاء)]]
- [[#2. Set vs Array|2. Set vs Array]]
- [[#3. Set Methods|3. Set Methods]]
- [[#1. Core Differences (الفروق الجوهرية)|1. Core Differences (الفروق الجوهرية)]]
- [[#2. The "Weak" Concept (مفهوم المرجعية الضعيفة وإدارة الذاكرة)|2. The "Weak" Concept (مفهوم المرجعية الضعيفة وإدارة الذاكرة)]]
- [[#3. Set Iterators|3. Set Iterators]]
- [[#4. WeakSet Usage|4. WeakSet Usage]]

# ES 6 - Set Data Type (بنية بيانات الـ Set)

الـ `Set` هو كائن (`Object`) بيسمحلك بتخزين قيم فريدة (`Unique Values`) من أي نوع، سواء كانت أنواع بسيطة (`Primitive Values`) زي الأرقام والنصوص، أو كائنات (`Objects`). القاعدة الذهبية للـ `Set`: **ممنوع التكرار**.

---

## 1. Syntax & Creation (طريقة الكتابة والإنشاء)

عشان ننشئ `Set` جديد، بنستخدم الكلمة المحجوزة `new` مع `Set()` ، وبنمرر جواها أي حاجة قابلة للتكرار (`Iterable`) زي المصفوفات.

```javascript
// مصفوفة عادية فيها أرقام متكررة
let myData = [1, 1, 1, 2, 3, "A"];

// 1. تمرير المصفوفة مباشرة للـ Set (سيتم حذف التكرار تلقائياً)
// let myUniqueData = new Set(myData);

// 2. إنشاء Set فارغ وإضافة العناصر لاحقاً
let myUniqueData = new Set();

// ميزة الـ Chaining (ربط الدوال ببعضها في نفس السطر)
myUniqueData.add(1).add(1).add(1);
myUniqueData.add(2).add(3).add("A");

console.log(myData);       // [1, 1, 1, 2, 3, 'A']
console.log(myUniqueData); // Set(4) {1, 2, 3, 'A'}
```

---

## 2. Set vs Array 

رغم إنهم شبه بعض، لكن في فروق جوهرية :

> [!danger] Indexing Trap (فخ الوصول بالترتيب)
> المصفوفات بتعتمد على الـ `Index` اللي بيبدأ من صفر، لكن الـ `Set` **ليس لها Index**. يعني لو حاولت توصل لأول عنصر بـ `myUniqueData[0]` هيرجعلك `undefined`.

- **التكرار:** المصفوفة تقبل التكرار، الـ `Set` تمسح التكرار فوراً.
- **الوصول للعناصر:** المصفوفة بـ `Index` ، الـ `Set` ليس لها ترتيب رقمي للوصول المباشر.
- **حساب العدد:** في المصفوفة بنستخدم خاصية `length` ، في الـ `Set` بنستخدم خاصية `size`.

```javascript
console.log(myData[0]);       // 1
console.log(myUniqueData[0]); // undefined

// معرفة عدد العناصر
console.log(myUniqueData.size); // 4 (تم تجاهل الأرقام المكررة)
```

---

## 3. Set Methods 

الـ `Set` بيوفرلنا دوال جاهزة للتعامل مع البيانات اللي جواه بسهولة.

- **الإضافة (`add`):** بتضيف عنصر جديد.
- **الفحص (`has`):** بتسأل هل العنصر ده موجود؟ وبترجع قيمة منطقية (`Boolean`). ممتازة جداً في الشروط.
- **الحذف (`delete`):** بتمسح عنصر معين. (تريكة: الدالة دي بترجع `true` لو مسحته بنجاح، و `false` لو العنصر أصلاً مش موجود).
- **التنظيف (`clear`):** بتمسح كل محتويات الـ `Set` مرة واحدة.

```javascript
// 1. الفحص (هل حرف الـ A موجود؟)
console.log(`Is Set Has => A? ${myUniqueData.has("a".toUpperCase())}`); // true

// 2. الحذف
console.log(myUniqueData.delete(2)); // true (تم الحذف بنجاح)
console.log(myUniqueData.size);      // 3

// 3. التنظيف الشامل
myUniqueData.clear();
console.log(myUniqueData.size);      // 0
```

---
# ES 6 - Set vs WeakSet 

البنيتين بيستخدموا لتخزين قيم فريدة (`Unique Values`)، لكن الفرق الجوهري بينهم بيكمن في نوع البيانات المسموح بتخزينها، وطريقة تعامل محرك الجافاسكريبت مع الذاكرة (`Memory Management`).


---

## 1. Core Differences (الفروق الجوهرية)

- **نوع البيانات (`Data Types`):**
  - `Set`: بيقبل أي نوع بيانات (نصوص، أرقام، مصفوفات، كائنات).
  - `WeakSet`:  (`Objects Only`)**. لو حاولت تمرر رقم أو نص، الكود هيضرب `Error`.

- **الخصائص والدوال (`Properties & Methods`):**
  - `Set`: يمتلك خاصية `size` لمعرفة العدد، ويمتلك دوال زي `clear`, `keys`, `values`, `entries`.
  - `WeakSet`: **لا يمتلك** خاصية `size` ، ولا يمتلك الدوال المذكورة. (عنده `add`, `delete`, `has` فقط).

- **التكرار (`Iteration`):**
  - `Set`: قابل للتكرار (`Iterable`)، يعني نقدر نستخدم معاه `forEach` أو `for...of`.
  - `WeakSet`: **غير قابل للتكرار** (`Not Iterable`). مينفعش تعمل `Loop` على العناصر اللي جواه.

---

## 2. The "Weak" Concept (مفهوم المرجعية الضعيفة وإدارة الذاكرة)

> [!info] Garbage Collection (التنظيف التلقائي للذاكرة)
> كلمة `Weak` معناها إن الـ `WeakSet` بيمسك الكائنات بشكل "ضعيف". لو عندك كائن متخزن في `WeakSet` ، ومسحت الكائن ده من الكود بتاعك (أو مبقاش فيه أي متغير تاني بيشاور عليه)، الجافاسكريبت هتمسحه فوراً من الذاكرة ومن الـ `WeakSet` تلقائياً عشان تفضي مساحة (`Garbage Collected`). الـ `Set` العادي بيحتفظ بالبيانات حتى لو اتمسحت من باقي الكود.

---

## 3. Set Iterators 

بما إن الـ `Set` قابل للتكرار، بيوفرلنا كائن `Iterator` بيسمح لنا نمشي على العناصر خطوة بخطوة باستخدام دالة `next()`.

```javascript
let mySet = new Set([1, 1, 1, 2, 3, "A", "A"]);

console.log(`Size Of Elements Inside Set Is: ${mySet.size}`); // 4

// 1. استخدام الـ Iterator المباشر
// دالة keys هنا بتعمل نفس وظيفة values بالظبط لأن الـ Set ملوش مفاتيح أصلية
let iterator = mySet.keys();

console.log(iterator.next().value); // 1
console.log(iterator.next().value); // 2
console.log(iterator.next().value); // 3
console.log(iterator.next().value); // "A"
console.log(iterator.next());       // {value: undefined, done: true} (يعني العناصر خلصت)

// 2. استخدام forEach (للمرور على كل العناصر دفعة واحدة)
mySet.forEach((el) => console.log(el));
```

---

## 4. WeakSet Usage 

الاستخدام الأساسي ليه هو تخزين الكائنات المؤقتة، زي إنك تتتبع عناصر الـ `DOM` (مثلاً: هل اليوزر ضغط على الزرار ده قبل كده ولا لأ؟). لو الزرار اتشال من الصفحة، هيتشال من الـ `WeakSet` تلقائياً ومفيش ذاكرة هتضيع.

```javascript
// WeakSet يقبل كائنات فقط
let myws = new WeakSet([{ A: 1, B: 2 }]);

console.log(myws);
```

---
