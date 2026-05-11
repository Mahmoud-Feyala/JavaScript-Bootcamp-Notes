---
tags:
  - JavaScript
  - OOP
  - Classes
  - Methods
  - Web-Development
date: 2026-04-26
subject: Class Properties & Methods
---
- [[#1. Smart Properties|1. Smart Properties]]
- [[#2. Adding Methods|2. Adding Methods]]
- [[#1. Static Properties|1. Static Properties]]
- [[#2. Static Methods (الدوال الثابتة)|2. Static Methods (الدوال الثابتة)]]
- [[#3. The Access Trap|3. The Access Trap]]

# JavaScript - Class Properties & Methods 

في الـ `Classes` ، إحنا مش مجرد بناخد البيانات ونرميها جوه الخصائص وخلاص. إحنا نقدر نستخدم اللوجيك (زي الشروط المختصرة) عشان نتحكم في البيانات دي، ونقدر كمان نضيف دوال (`Methods`) تعبر عن سلوك الكائن ده.

---

## 1. Smart Properties 

جوه دالة الـ `constructor` ، إنت بتكتب جافاسكريبت عادية جداً، فتقدر تستخدم الـ `Logical Operators` والـ `Ternary Operator` عشان تحط قيم افتراضية (`Default Values`) أو تعمل شروط على البيانات.

```javascript
class User {
  constructor(id, username, salary) {
    // 1. خاصية عادية
    this.i = id;
    
    // 2. قيمة افتراضية: لو اليوزر مدخلش اسمه (أو بعت String فاضي)، حط "Unknown"
    this.u = username || "Unknown";
    
    // 3. شرط مختصر: لو المرتب أقل من 6000، زود عليه 500 كدعم، غير كده نزله زي ما هو
    this.s = salary < 6000 ? salary + 500 : salary;
  }
}
```

---

## 2. Adding Methods 

الدوال هي "الأفعال" اللي الكائن بيقدر يعملها. عندنا طريقتين عشان نكتب بيهم الدالة جوه الكلاس:

- **الطريقة الأولى (Inside Constructor):** بنعرفها كخاصية عادية باستخدام كلمة `this` ونربطها بـ `function`.
- **الطريقة التانية (Class Method):** بنكتبها برا الـ `constructor` مباشرة (جوه جسم الكلاس)، ودي **الطريقة الأفضل والأكثر احترافية** في الـ ES 6.

```javascript
class User {
  constructor(id, username, salary) {
    this.u = username;
    this.s = salary;
    
    // الطريقة الأولى: دالة داخل الـ Constructor
    this.msg = function () {
      return `Hello ${this.u} Your Salary Is ${this.s}`;
    };
  }
  
  // الطريقة الثانية: دالة داخل الـ Class مباشرة (الطريقة الحديثة)
  writeMsg() {
    return `Hello ${this.u} Your Salary Is ${this.s}`;
  }
}
```

> [!info] Pro Tip 
> الطريقة اللي برا الـ `constructor` بتتحط في مكان اسمه `Prototype` ، وده معناه إنها بتتكريت "مرة واحدة بس" في الميموري وكل النسخ بتشاور عليها. لكن الطريقة الأولى بتنسخ الدالة بالكامل في الميموري مع كل `new User` بتعمله، وده بيسحب من أداء المتصفح لو عندك آلاف الكائنات.

---
---
tags:
  - JavaScript
  - OOP
  - Classes
  - Static
  - Web-Development
date: 2026-04-26
subject: Class Static Properties & Methods
---
# JavaScript - Class Static Properties & Methods (الخصائص والدوال الثابتة)

كلمة `static` بتخلي الخاصية أو الدالة تابعة للـ `Class` نفسه (كـ مصنع)، ومبتتنسخش جوه الكائنات (`Instances`) اللي بنكريتها منه. الكائنات دي متعرفش أصلاً إن الخصائص دي موجودة!



---

## 1. Static Properties 

أشهر استخدام للخصائص الثابتة هو عمل "عداد" (`Counter`) يتتبع إحنا كريتنا كام نسخة من الكلاس ده.

```javascript
class User {
  // خاصية ثابتة (تابعة للكلاس نفسه بس)
  static count = 0;

  constructor(id, username, salary) {
    this.i = id;
    this.u = username;
    this.s = salary;
    
    // كل ما نكريت نسخة جديدة، بنزود عداد الكلاس بمقدار 1
    User.count++; 
  }
}
```

---

## 2. Static Methods (الدوال الثابتة)

الدوال الثابتة بنستخدمها غالباً كـ `Utility Functions` (دوال مساعدة) مش محتاجة بيانات من كائن معين عشان تشتغل.

```javascript
class User {
  // ... (نفس الكود السابق)

  // دالة ثابتة تطبع رسالة عامة
  static sayHello() {
    return `Hello From Class`;
  }
  
  // دالة ثابتة تطبع عدد الأعضاء
  static countMembers() {
    // this هنا تعود على الكلاس (User) مش على الكائن!
    return `${this.count} Members Created`; 
  }
}
```

---

## 3. The Access Trap 

بما إن الخصائص والدوال دي `static` ، يبقى مستحيل توصلها عن طريق الكائن اللي إنت كريته. لازم تنادي على الكلاس نفسه باسمه.

```javascript
let userOne = new User(100, "Elzero", 5000);
let userTwo = new User(101, "Ahmed", 5000);
let userThree = new User(102, "Sayed", 5000);

// 1. محاولة الوصول عن طريق الكائن (خطأ شائع)
console.log(userOne.count); // undefined (الكائن ميعرفش حاجة عن الـ Static)

// 2. الوصول الصحيح عن طريق الكلاس نفسه
console.log(User.count); // 3 (لأننا عملنا 3 كائنات)

// 3. استدعاء الدوال الثابتة
console.log(User.sayHello()); // "Hello From Class"
console.log(User.countMembers()); // "3 Members Created"
```

> [!danger] The `this` Keyword Context
> لو استخدمت كلمة `this` جوه دالة عادية، بتبص على الكائن اللي نادى عليها. لكن لو استخدمت `this` جوه دالة `static` (زي في دالة `countMembers`)، فهي بتبص على الكلاس نفسه (`User`).