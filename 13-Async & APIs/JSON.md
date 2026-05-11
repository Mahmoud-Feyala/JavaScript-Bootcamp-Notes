---
tags:
  - JavaScript
  - JSON
  - API
  - Web-Development
date: 2026-04-28
subject: Introduction to JSON
---
# JavaScript - Introduction to JSON 

الـ `JSON` هو أشهر صيغة على مستوى العالم لنقل البيانات ومشاركتها بين الـ `Client` (زي المتصفح بتاعك) والـ `Server` (الخادم). هو البديل الأحدث والأخف والأسرع للـ `XML`.


---

## 1. What Is JSON 

- **الاختصار** (`JavaScript Object Notation`): يعني طريقة كتابة الكائنات في الجافاسكريبت.
- **الاستخدام** (`Usage`): صيغة خفيفة جداً لتخزين ونقل البيانات.
- **الامتداد** (`Extension`): الملفات دي بتنتهي بامتداد `.json`.
- **الأصل** (`Origin`): مشتقة أساساً من الجافاسكريبت، لكنها دلوقتي بقت مستقلة وكل لغات البرمجة بتفهمها.

---

## 2. Why JSON 

- **سهل القراءة** (`Easy To Read`): تركيبه بسيط جداً ومريح للعين مقارنة باللغات التانية.
- **مدعوم عالمياً** (`Universally Supported`): كل لغات البرمجة (زي `PHP`, `Python`, `Java`) والـ `Frameworks` بتفهمه وتتعامل معاه بسهولة.
- **سهل التحويل** (`Easy Conversion`): في الجافاسكريبت، تقدر تحول ملف الـ `JSON` لـ `Object` عادي جداً والعكس، بخطوة واحدة وبدون تعقيد.

---

## 3. JSON vs XML 

زمان كان الـ `XML` هو المسيطر، بس الـ `JSON` اكتسح لعدة أسباب واضحة في الجدول ده:

| الميزة                      | <center>(`JSON`)</center>                  | <center>(`XML`)</center>                    |
| :-------------------------- | :----------------------------------------- | :------------------------------------------ |
| **التنسيق** (`Format`)      | مبني على النصوص (`Text Based`)             | لغة ترميز (`Markup Language`)               |
| **الحجم والوزن** (`Weight`) | خفيف جداً ومختصر (`Lightweight & Shorter`) | أثقل وأطول (`Heavier & Not Short`)          |
| **الوسوم** (`Tags`)         | لا يستخدم وسوم (`Does Not Use Tags`)       | يعتمد على الوسوم زي الـ HTML (`Using Tags`) |
| **المصفوفات** (`Arrays`)    | يدعم المصفوفات (`Can Use Arrays`)          | لا يدعم المصفوفات (`Cannot Use Arrays`)     |
| **التعليقات** (`Comments`)  | لا يدعم التعليقات (`Not Support Comments`) | يدعم التعليقات (`Support Comments`)         |

---

## 4. Syntax Comparison (مقارنة في طريقة الكتابة)

عشان تحس بالفرق في "خفة" الكود وسهولة قراءته، بص على نفس البيانات مكتوبة بالصيغتين:

<center>JSON</center>


```json
{
  "widget": {
    "debug": "on",
    "window": {
      "title": "Sample Konfabulator Widget",
      "name": "main_window",
      "width": 500,
      "height": 500
    },
    "text": {
      "data": "Click Here",
      "size": 36,
      "style": "bold"
    }
  }
}
```

<center>XML</center>

```xml
<widget>
  <debug>on</debug>
  <window title="Sample Konfabulator Widget">
    <name>main_window</name>
    <width>500</width>
    <height>500</height>
  </window>
  <text data="Click Here" size="36" style="bold">
  </text>
</widget>
```

*(لاحظ إزاي الـ XML مليان وسوم فتح وقفل بتكرر نفس الكلمة مرتين، وده بيكبر حجم الملف على الفاضي).*


---
# JavaScript - JSON Syntax And Data Types

كتابة الـ `JSON` بتشبه كتابة الـ `Object` في الجافاسكريبت، لكن بقواعد صارمة جداً لا تقبل أي أخطاء إملائية أو علامات ناقصة، عشان تضمن إن أي لغة برمجة تانية تقدر تقرأ الملف ده بدون مشاكل.


---

## 1. Syntax Rules 

- **الأقواس الرئيسية** (`Curly Braces`): البيانات كلها لازم تتكتب جوه أقواس مجموعة `{}`.
- **نظام المفتاح والقيمة** (`Key and Value`): كل بيان بيتكون من اسم المفتاح والقيمة بتاعته، وبينهم نقطتين فوق بعض `:`.
- **علامات التنصيص المزدوجة** (`Double Quotes`): دي أهم قاعدة! الـ `Key` **إجباري** يتكتب جوه علامات تنصيص مزدوجة `""`. (علامات التنصيص المفردة `''` ممنوعة تماماً وهتبوظ الملف).
- **الفواصل** (`Commas`): بنفصل بين كل بيان والتاني بفاصلة `,` (ممنوع تحط فاصلة بعد آخر عنصر في الملف).
- **المصفوفات والكائنات** (`Arrays & Objects`): بنستخدم الأقواس المربعة `[]` للمصفوفات، وأقواس المجموعة `{}` لو هنعمل كائن متفرع جوه الجيسون.

---

## 2. Available Data Types 

الـ `JSON` مش بيقبل كل أنواع البيانات اللي موجودة في الجافاسكريبت. الأنواع المدعومة فقط هي:

- **النصوص** (`String`): ولازم تكون بين `Double Quotes`.
- **الأرقام** (`Number`): بتتكتب عادي بدون علامات تنصيص.
- **الكائنات** (`Object`): كائن متداخل.
- **المصفوفات** (`Array`): قائمة من العناصر.
- **القيم المنطقية** (`Boolean`): اللي هي `true` أو `false` (بتتكتب سمول وبدون علامات تنصيص).
- **القيمة الفارغة** (`null`): بتتكتب سمول.

> [!danger] JSON الممنوعات في  
> ممنوع تماماً تستخدم الدوال (`Functions`)، أو قيمة (`undefined`)، أو تستخدم كائن التاريخ (`Date`) بشكل مباشر (لازم تحوله لـ `String` الأول).

---

## 3. Practical Example 

ده شكل ملف `test.json` سليم بنسبة 100% ومطبق كل القواعد والأنواع المسموحة:

```json
{
  "string": "Elzero",
  "number": 100,
  "object": { 
    "EG": "Giza", 
    "KSA": "Riyadh" 
  },
  "array": ["HTML", "CSS", "JS"],
  "boolean": true,
  "null": null
}
```

---
**🔗 Cross-Links:**
- Related to: [[Serialization and Deserialization]], [[Validations and transformations]]