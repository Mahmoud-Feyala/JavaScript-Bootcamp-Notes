---
tags:
  - JavaScript
  - OOP
  - Classes
  - Encapsulation
  - Private-Fields
  - Web-Development
date: 2026-04-26
subject: Class Encapsulation & Private Properties
---
# JavaScript - Class Encapsulation 

التغليف (`Encapsulation`) هو مفهوم أساسي في البرمجة كائنية التوجه هدفه حماية البيانات من الوصول أو التعديل العشوائي من خارج الكلاس، وإخفاء التفاصيل المعقدة للبرنامج وراء واجهة استخدام بسيطة (دوال).

---

## 1. Public vs Private (العام والخاص)

- ** `Public Fields`:** الافتراضي في جافاسكريبت إن أي خاصية بتكتبها بتكون عامة (`Public`)، يعني أي حد يقدر يوصلها ويعدل عليها من بره الكلاس (زي `userOne.u = "New Name"`).
- ** `Private Fields`:** لو عندنا بيانات حساسة (زي المرتب أو الباسورد)، بنخليها خاصة (`Private`) عشان نمنع الوصول المباشر ليها تماماً.

---

## 2. Syntax & Implementation (طريقة التنفيذ)

عشان تعمل خاصية خاصة (`Private Property`) في الـ ES 6، بتستخدم علامة الهاشتاج `#` قبل اسم الخاصية. 

> [!danger] The Declaration Rule (قاعدة التعريف)
> على عكس الخصائص العامة، الخصائص الخاصة **لازم** تُعرَّف الأول بره دالة الـ `constructor` (في جسم الكلاس نفسه) قبل ما تبدأ تستخدمها.

```javascript
class User {
  // 1. تعريف الخاصية كـ Private (خطوة إجبارية)
  #e;

  constructor(id, username, eSalary) {
    this.i = id;
    this.u = username;
    
    // 2. تعيين القيمة للخاصية الخاصة
    this.#e = eSalary; 
  }
  
  // 3. دالة للوصول للبيانات (Getter Method)
  getSalary() {
    // نقدر هنا نعمل لوجيك معقد لتنظيف البيانات قبل ما نرجعها لليوزر
    return parseInt(this.#e); 
  }
}
```

---

## 3. Testing Access 

لو حاولنا نوصل للخاصية اللي فيها `#` من بره الكلاس، المتصفح هيضرب `SyntaxError` فوراً ويرفض ينفذ الكود. الطريقة الوحيدة للوصول ليها هي عن طريق الدالة اللي إحنا صممناها (`getSalary`).

```javascript
let userOne = new User(100, "Elzero", "5000 Gneh");

// الوصول للخصائص العامة (مسموح)
console.log(userOne.u); // "Elzero"

// الوصول المباشر للخاصية الخاصة (ممنوع - هيضرب إيرور)
// console.log(userOne.#e); // SyntaxError: Private field '#e' must be declared in an enclosing class

// الوصول الآمن عن طريق دالة الـ Getter
console.log(userOne.getSalary()); // 5000 (الدالة شالت كلمة Gneh ورجعت الرقم بس)

// دلوقتي نقدر نعمل عمليات حسابية عليها بأمان
console.log(userOne.getSalary() * 0.3); // 1500
```

---

