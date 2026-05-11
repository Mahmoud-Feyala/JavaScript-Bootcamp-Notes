---
tags:
  - JavaScript
  - Loops
  - Web-Development
date: 2026-02-20
icon: FabSquareJs
share_link: https://share.note.sx/njfvrl0x#Sx9KzDX9vIwhzspeld6UshifUJQMircC0Mg8cNgU3ng
share_updated: 2026-03-07T17:00:40+02:00
---
- [[#1. The for Loop|1. The for Loop]]
	- [[#1. The for Loop#Syntax|Syntax]]
	- [[#1. The for Loop#Basic Example|Basic Example]]
	- [[#1. The for Loop#Loop On Sequences (Arrays)|Loop On Sequences (Arrays)]]
	- [[#1. The for Loop#Nested Loops|Nested Loops]]
	- [[#1. The for Loop#Control On Loops (Break, Continue, Labels)|Control On Loops (Break, Continue, Labels)]]
- [[#2. The while Loop|2. The while Loop]]
	- [[#2. The while Loop#Syntax|Syntax]]
	- [[#2. The while Loop#Example|Example]]
- [[#3. The do while Loop|3. The do while Loop]]
	- [[#3. The do while Loop#Syntax|Syntax]]
	- [[#3. The do while Loop#Example|Example]]
- [[#Resources|Resources]]

# JavaScript Loops

## 1. The for Loop
بنستخدم الـ `for` loop عشان نكرر كود معين عدد محدد من المرات.

### Syntax
```javascript
for (Initialization; Condition; Action) {
  // Block Of Code
}
```
- **Initialization:** البداية (هبدأ التكرار منين).
- **Condition:** الشرط (طول ما الشرط ده بيتحقق، التكرار شغال).
- **Action:** الخطوة أو العملية اللي هعملها مع كل تكرار (زي زيادة العداد `i++`).

### Basic Example
```javascript
for (let i = 0; i < 10; i++) {
  console.log(i); // هيعد من 0 إلى 9
}
```

---

### Loop On Sequences (Arrays)
عشان نلوب على عناصر `Array` بطريقة ديناميكية بنستخدم الـ `length`.

```javascript
let myFriends = ["Mahmoud", "Hany", "Feyala", "Ahmed"];

for (let i = 0; i < myFriends.length; i++) {
  console.log(myFriends[i]); // "Mahmoud", "Hany", "Feyala", "Ahmed"
}
```

**مثال متقدم (فلترة الـ Strings بس):**
```javascript
let mixedArray = [1, 2, "Osama", 2, "Ahmed", 3, 4, "Sayed", 6, "Ali"];
let onlyNames = [];

for (let i = 0; i < mixedArray.length; i++) {
  if (typeof mixedArray[i] === "string") {
    onlyNames.push(mixedArray[i]); // إضافة النصوص فقط في الـ Array الجديدة
  }
}

console.log(onlyNames); // ['Osama', 'Ahmed', 'Sayed', 'Ali']
```

---

### Nested Loops
لوب جوه لوب. اللوب الخارجية بتشتغل مرة، وتستنى اللوب الداخلية تخلص كل لفتها، وبعدين اللوب الخارجية تشتغل تاني.

```javascript
let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor"];
let colors = ["Red", "Green", "Black"];
let models = [2020, 2021];

for (let i = 0; i < products.length; i++) {
  console.log("#".repeat(15));
  console.log(`# ${products[i]}`);
  console.log("#".repeat(15));
  
  console.log("Colors: ");
  for (let j = 0; j < colors.length; j++) {
    console.log(`- ${colors[j]}`);
  }
  
  console.log("Models: ");
  for (let k = 0; k < models.length; k++) {
    console.log(`- ${models[k]}`);
  }
}
```

---

### Control On Loops (Break, Continue, Labels)

- **`break`**: بتوقف اللوب خالص وتخرج براها.
```javascript
let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor"];

for (let i = 0; i < products.length; i++) {
  if (products[i] === "Pad") {
    break; // هيطبع لحد Pen ويقف
  }
  console.log(products[i]); // "Keyboard", "Mouse", "Pen"
}
```

- **`continue`**: بتعمل تخطي (Skip) للفة الحالية وتكمل اللفة اللي بعدها.
```javascript
let mixedProducts = ["Keyboard", 10, 30, "Mouse", 70, "Pen", "Pad", 80, "Monitor"];

for (let i = 0; i < mixedProducts.length; i++) {
  if (typeof mixedProducts[i] === "number") {
    continue; // هيعمل تخطي للأرقام ويطبع الكلمات بس
  }
  console.log(mixedProducts[i]);
}
```

- **`Label`**: بنستخدمه عشان ندي اسم للوب، وده بيخلينا نقدر نتحكم (مثلاً نعمل break) للوب معينة لو عندنا Nested Loops.
```javascript
let items = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor"];
let itemColors = ["Red", "Green", "Black"];

mainLoop: for (let i = 0; i < items.length; i++) {
  console.log(items[i]);
  
  nestedLoop: for (let j = 0; j < itemColors.length; j++) {
    console.log(`- ${itemColors[j]}`);
    
    if (itemColors[j] === "Green") {
      break mainLoop; // هيوقف اللوب الرئيسية كلها مش بس الداخلية
    }
  }
}
```

---

## 2. The while Loop
بتكرر بلوك من الكود طول ما الشرط (Condition) بيتحقق ومظبوط (`true`).

### Syntax
```javascript
while (condition) {  
  // code block to be executed  
}
```

### Example
```javascript
let i = 0;
while (i < 10) {
  console.log(`The number is ${i}`);
  i++;
}
/* Output:
The number is 0
The number is 1
...
The number is 9
*/
```

> [!danger] ملاحظة هامة
> لو نسيت تزود المتغير اللي بتستخدمه في الشرط (زي إنك تنسى `i++`)، اللوب مش هتقف أبداً (Infinite Loop) وهتعمل Crash للبراوزر.

---

## 3. The do while Loop
ده نوع تاني من الـ `while` loop. الفرق إنه **بينفذ الكود مرة واحدة على الأقل** قبل ما يختبر الشرط، وبعدين يكمل تكرار طول ما الشرط `true`.

### Syntax
```javascript
do {  
  // code block to be executed
} while (condition);
```

### Example
```javascript
let index = 0;
do {
  console.log(`The number is ${index}`);
  index++;
} while (index < 10);
```

---

## Resources
- **Videos From 48 To 56**: [PlayList (Elzero Web School)](https://youtu.be/MLVJhya1CV0?si=eZhvzCHUZ00WkwcV)