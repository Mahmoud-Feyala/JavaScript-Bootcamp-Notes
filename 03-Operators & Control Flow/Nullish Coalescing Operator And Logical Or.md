---
tags:
  - JavaScript
  - Logical-Operators
  - Web-Development
date: 2026-02-20
icon: FabSquareJs
---
- [[#What does it mean and why do we need it?|What does it mean and why do we need it?]]
- [[#1. Logical OR ( || )|1. Logical OR ( || )]]
- [[#2. Nullish Coalescing (  ??  )|2. Nullish Coalescing (  ??  )]]
- [[#Code Example|Code Example]]

# JavaScript Default Values ( ||  vs  ?? )

بنستخدم العلامات دي (`||` و `??`) عشان نحط **قيمة افتراضية (Default Value)** للمتغيرات.

## What does it mean and why do we need it?
تخيل إنك بتعمل موقع، وعندك مكان لاسم المستخدم. لو المستخدم نسي يكتب اسمه، مش عايز الموقع يبوظ أو يكتب كلمة غريبة زي `undefined`. عايز الموقع يكتب تلقائياً كلمة "زائر" أو "Guest".

هنا بيجي دور العلامات دي، بتقول للكود:
> "يا كود، خد القيمة دي من المستخدم.. **لو مالقيتهاش**، استخدم القيمة الاحتياطية (البديل) دي."

---

## 1. Logical OR ( || )

**القاعدة:** أي حاجة شكلها فاضي أو بصفر، ارميها وهات البديل!
الـ `||` بتعتبر الـ **Falsy Values** كأنها لا شيء، وتتجاهلها وتجيب القيمة البديلة.

**الـ Falsy Values في الجافاسكريبت هي:**
- `0`
- `""` (String فاضي)
- `NaN`
- `undefined`
- `null`
- `false`

---

## 2. Nullish Coalescing (  ??  )

**القاعدة:** أنا مش هستخدم البديل إلا لو القيمة فعلاً مش موجودة. لكن الصفر ده رقم، والنص الفاضي ده نص، هحترمهم وأسيبهم زي ما هما.
الـ `??` دقيقة جداً، ومش بتجيب البديل إلا لو كانت القيمة واحدة من الـ **Nullish Values** بس.

**الـ Nullish Values هي:**
- `null`
- `undefined`



---

## Code Example

المثال ده بيوضح الفرق الجوهري بينهم لما تكون القيمة بصفر:

```javascript
let salary = 0;

// باستخدام Logical OR
console.log(salary || 1000); 
// النتيجة: 1000
// السبب: الـ || شافت الـ 0 واعتبرته قيمة Falsy (كاذبة/غير صالحة)، فتجاهلته وجابت البديل اللي هو 1000.

// باستخدام Nullish Coalescing
console.log(salary ?? 1000); 
// النتيجة: 0
// السبب: الـ ?? شافت الـ 0 واعتبرته قيمة حقيقية موجودة (لأنه مش null ولا undefined)، فاحترمته وطبعته زي ما هو ومراحتش للبديل.
```
---
