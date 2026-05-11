---
tags:
  - JavaScript
  - OOP
  - Basics
  - Web-Development
date: 2026-02-20
icon: FabSquareJs
banner:
share_link: https://share.note.sx/39ig0hds#Je/2HJOR8vTW4Pjt3vvkE7JTIc75P+BN4QjjcPfyBBU
share_updated: 2026-03-07T17:31:37+02:00
---
- [[#1. Property|1. Property]]
- [[#2. Method (الوظيفة / الفعل)|2. Method (الوظيفة / الفعل)]]
- [[#3. The Golden Rule|3. The Golden Rule]]
	- [[#3. The Golden Rule#Example of an array:|Example of an array:]]

# Property vs Method in JavaScript

## 1. Property
الـ **Property** هي عبارة عن قيمة (Value) أو معلومة مرتبطة بالـ Object. بتوصف حالة المتغير أو بتديك داتا عنه.
* **في الجرامر:** بتعتبر "اسم" (Noun).
* **في الكود:** مش بنحط في آخرها أقواس `()` لأننا مش بنطلب منها تنفذ أكشن، إحنا بس بنقرا قيمتها.

**مثال:** لو عندي نص، وعايز أعرف طوله، بستخدم `length`. أنا هنا بسأل عن "صفة" في النص، مش بطلب منه يعمل حاجة.
```javascript
let myName = "Mahmoud";
console.log(myName.length); // 7 (Property)
```

---

## 2. Method (الوظيفة / الفعل)
الـ **Method** هي عبارة عن وظيفة (Function) أو أكشن (Action) مبني جوه الـ Object بيقدر ينفذه.
* **في الجرامر:** بتعتبر "فعل" (Verb).
* **في الكود:** **لازم** نحط في آخرها أقواس `()` عشان نعملها استدعاء (Call / Invoke) وتتنفذ، وممكن الأقواس دي تاخد Parameters.

**مثال:**
لو عندي نص وعايز أحوله لحروف كبيرة، بستخدم `toUpperCase()`. أنا هنا بطلب من النص "ينفذ أكشن" معين ويغير من شكله.
```javascript
let myName = "Mahmoud";
console.log(myName.toUpperCase()); // "MAHMOUD" (Method)
```

---

## 3. The Golden Rule 

> [!tip] إزاي تفرق بينهم بمجرد النظر؟
> - لقيت أقواس `()` في الآخر؟ دي **Method** (أكشن بيتنفذ).
> - مفيش أقواس `()` وبتقرا قيمة بس؟  دي **Property** (معلومة أو صفة).

### Example of an array:

```javascript
let myFriends = ["Ahmed", "Sayed", "Ali"];

// Property: بسأل عن معلومة (عدد العناصر)
console.log(myFriends.length); // 3

// Method: بطلب منه ينفذ فعل (يضيف عنصر جديد)
myFriends.push("Mahmoud"); 
console.log(myFriends); // ["Ahmed", "Sayed", "Ali", "Mahmoud"]
```
---
