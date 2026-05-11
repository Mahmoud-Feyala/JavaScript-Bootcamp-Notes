---
tags:
  - JavaScript
  - OOP
  - Classes
  - Inheritance
  - Web-Development
date: 2026-04-26
subject: Class Inheritance
---
# JavaScript - Class Inheritance (الوراثة)

الوراثة (`Inheritance`) بتسمحلك تنشئ كلاس جديد (الابن) يعتمد بالكامل على كلاس تاني موجود بالفعل (الأب). الكلاس الابن بياخد كل الخصائص (`Properties`) والدوال (`Methods`) بتاعت الأب، وتقدر تضيفله خصائصه الحصرية.

---

## 1. Base Class 

ده الكلاس العادي بتاعنا اللي بنبني فيه الخصائص الأساسية اللي هتتشاركها كل الكلاسات اللي هتيجي بعده.

```javascript
// Parent Class (الكلاس الأساسي)
class User {
  constructor(id, username) {
    this.i = id;
    this.u = username;
  }
  
  sayHello() {
    return `Hello ${this.u}`;
  }
}
```

---

## 2. Derived Class (Son)

عشان نخلي كلاس يورث من كلاس تاني، بنستخدم كلمتين أساسيتين:
- ** `extends`:** بنكتبها جنب اسم الكلاس الجديد عشان نحدد هو هيورث من مين.
- ** `super()`:** دي دالة بتنادي على الـ `constructor` بتاع الكلاس الأب، عشان تمررله البيانات اللي هو مستنيها (زي الـ id والـ username).

> [!danger] The super() Trap 
> لو الكلاس بتاعك بيورث من كلاس تاني (`extends`) وقررت تكتب جواه `constructor` ، **إجباري** لازم تنادي على دالة `super()` في أول سطر جوه الـ `constructor` قبل ما تستخدم كلمة `this` خالص. لو مكتبتهاش أو كتبتها متأخر، المتصفح هيضرب Error!

```javascript
// Derived Class (الكلاس الابن)
class Admin extends User {
  constructor(id, username, permissions) {
    // 1. نبعت البيانات الأساسية للأب عشان يعالجها بنفسه
    super(id, username); 
    
    // 2. نضيف الخصائص الحصرية الخاصة بالابن
    this.p = permissions;
  }
}
```

---

## 3. Multi-Level Inheritance 

نقدر نعمل سلسلة من الوراثة. يعني كلاس يورث من كلاس بيورث من كلاس. زي حالة كلاس الـ `Superman` اللي بيورث من الـ `Admin` اللي بدوره بيورث من الـ `User`. الكلاس الأخير ده بيبقى وارث كل حاجة من اللي فوقه!

```javascript
class Superman extends Admin {
  constructor(id, username, permissions, ability) {
    // بيبعت الـ 3 بيانات للأدمن، والأدمن بدوره هيبعت 2 منهم لليوزر!
    super(id, username, permissions); 
    
    this.a = ability;
  }
}
```

---

## 4. Testing the Inheritance 

لما نكريت نسخة من الـ `Admin` ، هنلاحظ إنها قادرة تستخدم دالة `sayHello()` رغم إننا مكتبناهاش جوه كلاس الأدمن، لكنه ورثها من الأب!

```javascript
let userOne = new User(100, "Elzero");
let adminOne = new Admin(110, "Mahmoud", 1); // بيمتلك خصائص الأب + خصائصه

console.log(adminOne.i); // 110 (ورثها)
console.log(adminOne.u); // "Mahmoud" (ورثها)
console.log(adminOne.p); // 1 (خاصيته الحصرية)
console.log(adminOne.sayHello()); // "Hello Mahmoud" (استخدم دالة الأب)
```