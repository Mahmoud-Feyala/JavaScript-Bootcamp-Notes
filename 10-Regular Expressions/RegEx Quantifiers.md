---
tags:
  - JavaScript
  - RegEx
  - Quantifiers
date: 2026-04-25
subject: RegEx Quantifiers
---


# JavaScript - RegEx Quantifiers (+, *, ?)

المحددات الكمية (`Quantifiers`) بتتحكم في "عدد مرات ظهور" الحرف أو النمط اللي قبلها.

---

- **One Or More (`+`):** العنصر اللي قبلها لازم يكون موجود مرة واحدة على الأقل.
- **Zero Or More (`*`):** العنصر اللي قبلها ممكن ميكونش موجود أصلاً، أو يتكرر براحته.
- **Zero Or One (`?`):** العنصر اللي قبلها اختياري (`Optional`). يا يظهر مرة، يا ميظهرش خالص.

```javascript
// تطبيق على الإيميل (+)
let mails = "o@nn.sa osama@gmail.com"; 
let mailsRe = /\w+@\w+\.\w+/ig;

// تطبيق على الأرقام (*)
let nums = "0110 10 150 05120 0560 350 00"; 
let numsRe = /0\d*0/ig; // يبدأ بـ 0، يليه أرقام (أو لا شيء)، ينتهي بـ 0

// تطبيق على الروابط (?)
let urls = "[https://google.com](https://google.com) [http://www.website.net](http://www.website.net) web.com"; 
let urlsRe = /(https?:\/\/)?(www\.)?\w+\.\w+/ig; 
```
---
#  RegEx Quantifiers

---

- **Exact Number `{x}`:** بيشترط إن العنصر يتكرر العدد `x` من المرات بالظبط.
- **Range `{x,y}`:** بيشترط إن التكرار محصور بين `x` (حد أدنى) و `y` (حد أقصى).
- **At Least `{x,}`:** بيحدد "الحد الأدنى" للتكرار، ومفيش حد أقصى.

```javascript
let serials = "S100S S3000S S50000S S950000S";

// 3 أرقام بالظبط
console.log(serials.match(/s\d{3}s/ig)); // ['S100S']

// من 4 إلى 5 أرقام
console.log(serials.match(/s\d{4,5}s/ig)); // ['S3000S', 'S50000S']

// 4 أرقام على الأقل
console.log(serials.match(/s\d{4,}s/ig)); // ['S3000S', 'S50000S', 'S950000S']
```

> [!info] Tip
> - `?` تكافئ `{0,1}`
> - `+` تكافئ `{1,}`
> - `*` تكافئ `{0,}`

# JavaScript - RegEx Anchors & Lookahead 

الأدوات دي بتدي للـ `Pattern` بتاعك ذكاء إضافي. بدل ما يبحث عن الكلمة في أي حتة، بيشترط موقعها في الجملة، أو بيشترط الحروف اللي هتيجي بعدها.

---
## 1. Anchors (المراسي: بداية ونهاية النص)

الـ `Anchors` مابتطابقش حروف، دي بتطابق "مواقع" (`Positions`) زي بداية ونهاية الـ String.

- ** `^` (Caret / Start With):** بتشترط إن النص **لازم يبدأ** بالنمط ده. (لاحظ إن علامة `^` لو جت جوه أقواس مربعة `[^]` بيبقى معناها النفي `NOT` ، لكن برا الأقواس معناها "بداية السطر").
- ** `$` (Dollar Sign / End With):** بتشترط إن النص **لازم ينتهي** بالنمط ده.

```javascript
let myString = "We Love Programming";

// هل النص ينتهي بـ ing ؟
console.log(/ing$/ig.test(myString)); // true

// هل النص يبدأ بـ we ؟
console.log(/^we/ig.test(myString)); // true

let names = "1OsamaZ 2AhmedZ 3Mohammed 4MoustafaZ 5GamalZ";

// هل النص ينتهي بـ lz ؟ (النص كله مش الكلمة)
console.log(/lz$/ig.test(names)); // false (لأنه بينتهي بـ GamalZ)

// هل النص يبدأ برقم؟
console.log(/^\d/ig.test(names)); // true (لأنه بيبدأ برقم 1)
```

---

## 2. Lookaround (النظرة المستقبلية)

الـ `Lookahead` من أقوى حيل الـ RegEx. فكرته إنك بتقوله: "دورلي على الكلمة دي، بس بشرط يكون وراها كذا... بس متطبعش الكذا ده في النتيجة!".

- ** `(?=)` (Positive Lookahead - Followed By):** يطابق النمط فقط إذا كان **متبوعاً بـ** القيمة المحددة.
- ** `(?!)` (Negative Lookahead - Not Followed By):** يطابق النمط فقط إذا كان **غير متبوع بـ** القيمة المحددة.

```javascript
let names = "1OsamaZ 2AhmedZ 3Mohammed 4MoustafaZ 5GamalZ";

// 1. Positive Lookahead (?=Z)
// النمط: رقم + 5 حروف + (بشرط يكون وراهم حرف Z)
console.log(names.match(/\d\w{5}(?=Z)/ig)); 
// النتيجة: ['1Osama', '5Gamal']
// لاحظ: طبع الاسم بس ومطبعش حرف الـ Z معاه في النتيجة!

// 2. Negative Lookahead (?!Z)
// النمط: رقم + 8 حروف + (بشرط ميكونش وراهم حرف Z)
console.log(names.match(/\d\w{8}(?!Z)/ig)); 
// النتيجة: ['3Mohammed']
```

> [!danger] Word Length Trap (فخ طول الكلمة)
> في المثال الأول إحنا حددنا `\w{5}` عشان كده جاب `1Osama` و `5Gamal` (رقم + 5 حروف). وتجاهل `2Ahmed` لأنها 4 حروف بس، وتجاهل `4Moustafa` لأنها 8 حروف، رغم إنهم بينتهوا بـ Z.