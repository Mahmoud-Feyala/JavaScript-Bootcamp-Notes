---
tags:
  - JavaScript
  - RegEx
  - Ranges
  - Web-Development
date: 2026-04-25
subject: RegEx Ranges
---
- [[#1. Alternation|1. Alternation]]
- [[#2. Numeric Ranges|2. Numeric Ranges]]
- [[#3. Alphabetical Ranges|3. Alphabetical Ranges]]
- [[#2. The Special Characters Trick|2. The Special Characters Trick]]
- [[#1. The Dot (النقطة)|1. The Dot (النقطة)]]
- [[#2. Word Characters (فئة الكلمات)|2. Word Characters (فئة الكلمات)]]
- [[#3. Digits & Whitespaces (الأرقام والمسافات)|3. Digits & Whitespaces (الأرقام والمسافات)]]
- [[#4. The Literal Dot Trap (فخ النقطة)|4. The Literal Dot Trap (فخ النقطة)]]

# JavaScript - RegEx Ranges

النطاقات (`Ranges`) بتسمحلك تحدد مجموعة معينة من الحروف أو الأرقام اللي عايز تبحث عنها، بدل ما تكتب كل حرف أو رقم بنفسك. بنستخدم الأقواس المربعة `[]` عشان نحدد النطاق ده.

---
## 1. Alternation 
بنستخدم الأقواس الدائرية `()` ونفصل بين الكلمات بعلامة الـ Pipe `|` اللي بتعبر عن `OR`.

```javascript
let tld = "Com Net Org Info Code Io";
let tldRe = /(info|org|io)/ig; 
console.log(tld.match(tldRe)); // ['Org', 'Info', 'Io']
```

---
## 2. Numeric Ranges 
عشان نبحث عن أرقام محددة. ولو ضفنا علامة `^` (Caret) في البداية، معناها `NOT` (استبعد النطاق ده).
- `[0-9]`: ابحث عن أي رقم من 0 لـ 9.
- `[^0-9]`: ابحث عن أي حاجة ليست رقماً من 0 لـ 9 (هيجيب الحروف والرموز).

```javascript
let nums = "12345678910";
let numsRe = /[0-2]/g;
console.log(nums.match(numsRe)); // ['1', '2', '1', '0']

let specialNums = "1!2@3#4$5%678910";
let specialNumsRe = /[^0-9]/g;
console.log(specialNums.match(specialNumsRe)); // ['!', '@', '#', '$', '%']
```

---
## 3. Alphabetical Ranges 
- `[a-z]`: الحروف الإنجليزية الصغيرة فقط.
- `[A-Z]`: الحروف الإنجليزية الكبيرة فقط.
- `[^a-z]`: أي شيء غير الحروف الصغيرة.
- `[abc]`: الحروف a و b و c فقط.

```javascript
let practice = "Os1 Os1Os Os2 Os8 Os8Os";
let practiceRe = /Os[5-9]Os/g;
console.log(practice.match(practiceRe)); // ['Os8Os']
```

---

# 1. Combined Ranges (النطاقات المدمجة)
تقدر تكتب أكتر من نطاق جنب بعض جوه نفس الأقواس المربعة من غير أي مسافات أو فواصل.
- `[a-zA-Z]`: بيبحث عن كل الحروف الإنجليزية (سواء كبيرة أو صغيرة).
- `[^a-zA-Z]`: النفي بتاعها (بيستبعد الحروف كلها، فبيجيب الأرقام والرموز الخاصة بس).

---

## 2. The Special Characters Trick
لاستخراج الرموز الخاصة بس من أي كلمة مرور عشان تتأكد من قوتها، بندمج نطاق الحروف كلها مع نطاق الأرقام، وننفيهم كلهم بعلامة `^`.
- `[^a-zA-Z0-9]`: النتيجة هتكون الرموز الخاصة فقط!

```javascript
let myString = "AaBbcdefG123!234%^&*";

// كل الحروف كبيرة وصغيرة معاً
console.log(myString.match(/[a-zA-Z]/g)); 

// استخراج الرموز الخاصة فقط (نفي الحروف والأرقام معاً)
console.log(myString.match(/[^a-zA-Z0-9]/g)); 
// ['!', '%', '^', '&', '*']
```
---

# RegEx Character Classes

فئات الرموز (`Character Classes`) عبارة عن اختصارات مدمجة بتغنيك عن كتابة النطاقات الطويلة. الحرف الصغير بيجيب الحاجة، والحرف الكبير (`Capital`) بيجيب العكس بتاعها.



---

## 1. The Dot (النقطة)
- `.`: "الجوكر". بتطابق أي شيء (حرف، رقم، رمز، مسافة)، ما عدا النزول لسطر جديد (`Newline`).

## 2. Word Characters (فئة الكلمات)
- `\w`: بتطابق أي حرف، أو رقم، أو شرطة سفلية (`_`). (اختصار لـ `[a-zA-Z0-9_]`).
- `\W`: بتطابق أي شيء غير الكلمات (المسافات والرموز).

## 3. Digits & Whitespaces (الأرقام والمسافات)
- `\d`: بتطابق الأرقام فقط من 0 لـ 9.
- `\D`: بتطابق أي شيء ليس رقماً.
- `\s`: بتطابق المسافات فقط (`Whitespace`).
- `\S`: بتطابق أي شيء ليس مسافة.

---

## 4. The Literal Dot Trap (فخ النقطة)
عشان تفهم الـ RegEx إنك بتدور على "نقطة حرفية" مش الجوكر، لازم تحط قبلها علامة الهروب `\` كدة: `\.`

```javascript
let email = 'O@@@g...com O@g.com O@g.net A@Y.com O-g.com o@s.org 1@1.com';

let valid = /\w@\w\.(com|net)/g;
console.log(email.match(valid)); 
// ['O@g.com', 'O@g.net', 'A@Y.com', '1@1.com']
```