---
tags:
  - JavaScript
  - Control-Flow
  - If-Condition
  - Switch
  - Ternary-Operator
  - Web-Development
date: 2026-04-23
subject: Control Flow Statements
---
- [[#1. If / Else If / Else|1. If / Else If / Else]]
- [[#2. Nested If|2. Nested If]]
- [[#3. Switch Statement|3. Switch Statement]]
- [[#4. Conditional (Ternary) Operator|4. Conditional (Ternary) Operator]]

# JavaScript - Control Flow 

التحكم في المسار بيسمح للكود إنه ياخد قرارات بناءً على شروط معينة (`Conditions`). الجافاسكريبت بتوفر أكتر من طريقة لكتابة الشروط دي على حسب تعقيد اللوجيك اللي محتاجينه.



---

## 1. If / Else If / Else 
دي الطريقة القياسية لكتابة أي شرط. الكود بيمشي من فوق لتحت، أول ما يلاقي شرط بيتحقق (`true`)، بينفذ البلوك بتاعه وبيعمل `Ignore` لباقي الشروط اللي تحته.

```javascript
let price = 100;
let discount = true;
let discountAmount = 30;
let country = "KSA";

// 1. هل في خصم؟
if (discount === true) {
  price -= discountAmount; 
} 
// 2. لو مفيش خصم، هل البلد مصر؟
else if (country === "Egypt") {
  price -= 40;
} 
// 3. لو مش مصر، هل البلد سوريا؟
else if (country === "Syria") {
  price -= 50;
} 
// 4. لو كل الشروط اللي فوق متححقتش، نفذ ده
else {
  price -= 10;
}

console.log(price); // 70 (لأن أول شرط تحقق فتجاهل الباقي)
```

---

## 2. Nested If 

أحياناً بنحتاج نسأل سؤال تاني جوه السؤال الأولاني. يعني لو الشرط الأول تحقق، ادخل جواه واسأل شرط كمان. دي اسمها الشروط المتداخلة (`Nested Conditions`).

```javascript
let price = 100;
let discount = false;
let discountAmount = 30;
let country = "Egypt";
let student = true;

if (discount === true) {
  price -= discountAmount;
} else if (country === "Egypt") {
  
  // شرط متداخل: إحنا جوه مصر دلوقتي، هل هو طالب؟
  if (student === true) {
    price -= discountAmount + 30; // خصم إضافي للطلاب
  } else {
    price -= discountAmount + 10; // خصم عادي للمصريين غير الطلاب
  }

} else {
  price -= 10;
}

console.log(price); // 40
```

---

## 3. Switch Statement 

الـ `Switch` ممتازة جداً وبأدائها أسرع لو إنت بتقارن "قيمة واحدة" بمجموعة قيم محددة. 

> [!danger] Switch Identity (فخ التطابق)
> الـ `Switch` بتقارن دايماً باستخدام التطابق التام `===` (نفس القيمة ونفس نوع البيانات). 
> ولازم تستخدم كلمة `break;` بعد كل حالة، وإلا الكود هينفذ كل الحالات اللي تحتها حتى لو مش مطابقة!

```javascript
let day = "A";

switch (day) {
  // ممكن نكتب الـ default في الأول أو في الآخر، بس لازم نحط معاها break لو في الأول
  default:
    console.log("Unknown Day");
    break;
  case 0:
    console.log("Saturday");
    break;
  case 1:
    console.log("Sunday");
    break;
  // Multiple Match: لو القيمة 2 أو 3 نفذ نفس الكود ده
  case 2:
  case 3:
    console.log("Monday");
    break;
}
```

---

## 4. Conditional (Ternary) Operator 

دي الطريقة المفضلة للمحترفين، وحرفياً هي الطريقة اللي هتستخدمها بنسبة 90% جوه `React` عشان تعمل شروط. بتختصر الـ `If / Else` كلها في سطر واحد.
- **الهيكل:** `Condition ? If True : If False`

```javascript
let theGender = "Male";
let theName = "Mona";

// 1. اختصار طباعة مباشرة
theGender === "Male" ? console.log("Mr") : console.log("Mrs");

// 2. تخزين النتيجة في متغير (الأكثر استخداماً)
let result = theGender === "Male" ? "Mr" : "Mrs";

// 3. استخدامها داخل الـ Template Literals
console.log(`Hello ${theGender === "Male" ? "Mr" : "Mrs"} ${theName}`);
```

> [!info] Nested Ternary (الشروط المختصرة المتداخلة)
> نقدر نعمل كذا شرط ورا بعض بالطريقة المختصرة (زي الـ else if)، رغم إن شكلها ممكن يكون معقد في الأول، بس بتوفر سطور كتير جداً.

```javascript
let theAge = 30;

theAge < 20
  ? console.log(20)                             // لو أقل من 20
  : theAge > 20 && theAge < 60
  ? console.log("20 To 60")                     // لو بين 20 و 60
  : theAge > 60
  ? console.log("Larger Than 60")               // لو أكبر من 60
  : console.log("Unknown");                     // لو مفيش ولا حاجة من دول (الـ else)
```