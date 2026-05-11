---
tags:
  - JavaScript
  - JSON
  - Parse
  - Stringify
  - Web-Development
date: 2026-04-28
status: complete
subject: JSON Parse and Stringify
---
---
# JavaScript - JSON Parse & Stringify 

السيرفر والمتصفح بيتكلموا مع بعض بلغة النصوص (`String`). لما السيرفر يبعتلك `JSON` ، المتصفح بيشوفه كـ "نص عادي". عشان تقدر تستخدمه وتعدل عليه برمجياً، لازم تحوله لـ `Object` ، ولما تخلص تعديل وعايز تبعته للسيرفر تاني، لازم ترجعه لـ `String` من تاني.

---

## 1. Core Methods 

- **فك التشفير** (`JSON.parse`): دي الدالة اللي بتاخد نص الجيسون (`JSON String`) وتحوله لكائن جافاسكريبت (`JS Object`) عشان نقدر نتعامل معاه. العملية دي بتسمى علمياً `Deserialization`.
- **التغليف** (`JSON.stringify`): دي الدالة العكسية. بتاخد كائن الجافاسكريبت (`JS Object`) وتحوله لنص جيسون (`JSON String`) عشان نجهزه للإرسال. العملية دي بتسمى علمياً `Serialization`.

---

## 2. The Complete Flow 

الكود ده بيوضح السيناريو الحقيقي اللي بيحصل في أي تطبيق: استقبال ⬅️ تحويل ⬅️ تعديل ⬅️ إعادة تحويل ⬅️ إرسال.

```javascript
// 1. استقبال البيانات من السيرفر (بتكون على هيئة نص)
const myJsonObjectFromServer = '{"Username": "Osama", "Age": 39}';
console.log(typeof myJsonObjectFromServer); // String
console.log(myJsonObjectFromServer);

// 2. تحويل النص لكائن جافاسكريبت عشان نقدر نتعامل معاه
const myJsObject = JSON.parse(myJsonObjectFromServer);
console.log(typeof myJsObject); // Object
console.log(myJsObject);

// 3. تعديل البيانات جوه الكائن (بسهولة زي أي Object عادي)
myJsObject["Username"] = "Elzero";
myJsObject["Age"] = 40;

// 4. تحويل الكائن لنص تاني عشان نجهزه للإرسال للسيرفر
const myJsonObjectToServer = JSON.stringify(myJsObject);
console.log(typeof myJsonObjectToServer); // String
console.log(myJsonObjectToServer);
```

> [!danger] فخ الأخطاء الإملائية
> دالة `JSON.parse` حساسة جداً. لو حاولت تمررلها نص مش مكتوب بقواعد الـ JSON السليمة (مثلاً الـ `Key` مش محطوط بين `Double Quotes` أو فيه فاصلة زيادة في الآخر)، الدالة هتضرب `SyntaxError` وتوقف الكود بتاعك!

---
**🔗 Cross-Links:**
- Related to: [[Serialization and Deserialization]], [[Validations and transformations]]