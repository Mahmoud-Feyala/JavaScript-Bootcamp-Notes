---
tags:
  - JavaScript
  - DOM
  - Selectors
  - Web-Development
date: 2026-04-13
icon: FiCode
---
---
- [[#1. What Is The DOM ?|1. What Is The DOM ?]]
- [[#2. DOM Selectors|2. DOM Selectors]]
	- [[#2. DOM Selectors#Direct Selection (تحديد مباشر)|Direct Selection (تحديد مباشر)]]
	- [[#2. DOM Selectors#Collection Selection (تحديد مجموعات)|Collection Selection (تحديد مجموعات)]]
	- [[#2. DOM Selectors#Modern CSS Selectors (محددات الـ CSS الحديثة)|Modern CSS Selectors (محددات الـ CSS الحديثة)]]
	- [[#2. DOM Selectors#Built-in DOM Collections (المجموعات الجاهزة)|Built-in DOM Collections (المجموعات الجاهزة)]]
- [[#3. Element Content (محتوى العنصر)|3. Element Content (محتوى العنصر)]]
- [[#4. Change Attributes (تعديل الخصائص)|4. Change Attributes (تعديل الخصائص)]]
	- [[#4. Change Attributes (تعديل الخصائص)#Change Directly (التعديل المباشر)|Change Directly (التعديل المباشر)]]
	- [[#4. Change Attributes (تعديل الخصائص)#Change With Methods (التعديل بالدوال)|Change With Methods (التعديل بالدوال)]]
- [[#5. Check and Remove Attributes (فحص وإزالة الخصائص)|5. Check and Remove Attributes (فحص وإزالة الخصائص)]]
- [[#6. Create Elements (صناعة العناصر)|6. Create Elements (صناعة العناصر)]]
- [[#7. Deal With Children (التعامل مع الأبناء)|7. Deal With Children (التعامل مع الأبناء)]]
- [[#8. Events (الأحداث)|8. Events (الأحداث)]]
- [[#9. Prevent Default & Form Validation (منع السلوك والتحقق)|9. Prevent Default & Form Validation (منع السلوك والتحقق)]]
- [[#10. Class List (قائمة الكلاسات)|10. Class List (قائمة الكلاسات)]]
- [[#11. CSS Manipulation (التحكم في التصميم)|11. CSS Manipulation (التحكم في التصميم)]]
- [[#12. Insert and Remove Elements (إضافة وحذف العناصر)|12. Insert and Remove Elements (إضافة وحذف العناصر)]]
- [[#13. Traversing (التنقل بين العناصر)|13. Traversing (التنقل بين العناصر)]]
- [[#14. Cloning (استنساخ العناصر)|14. Cloning (استنساخ العناصر)]]
- [[#15. Add Event Listener & Event Delegation (مستمع الأحداث وتفويضها)|15. Add Event Listener & Event Delegation (مستمع الأحداث وتفويضها)]]

# DOM - Document Object Model 

## 1. What Is The DOM ? 
الـ DOM هو ببساطة عبارة عن إن المتصفح بياخد كود الـ `HTML` بتاعك، ويحوله لشجرة كائنات (`Tree of Objects`). الجافاسكريبت بتقدر تمسك أي فرع في الشجرة دي (عنصر، نص، أو حتى خاصية) وتعدل فيه براحتها.



---

## 2. DOM Selectors

عشان تعدل على أي عنصر في الصفحة، لازم "تمسكه" الأول.

### Direct Selection (تحديد مباشر)

لو العنصر ليه `ID` ، دي أسرع وأضمن طريقة لأن الـ `ID` مستحيل يتكرر.

```javascript
let myIdElement = document.getElementById("my-div");
```

### Collection Selection (تحديد مجموعات)

لو بتدور بـ `Tag` أو بـ `Class` ، الجافاسكريبت بترجعلك مجموعة عناصر `HTMLCollection`.

> [!danger] HTMLCollection Trap (فخ الـ HTMLCollection)
> المجموعات دي شبه الـ `Array` بس هي مش `Array` حقيقية. عشان تمسك عنصر محدد جواها، **لازم** تستخدم الـ `Index` بتاعه، وإلا الكود هيضرب.

```javascript
let myTagElements = document.getElementsByTagName("p");
console.log(myTagElements[1]); // لازم نستخدم الـ Index
```

### Modern CSS Selectors (محددات الـ CSS الحديثة)

- **أول عنصر (`querySelector`):** بترجع أول عنصر يطابق الشرط، وبتقف.
- **كل العناصر (`querySelectorAll`):** بترجع كل العناصر اللي بتطابق الشرط في شكل `NodeList`.

```javascript
let myQueryElement = document.querySelector(".my-span"); 
let myQueryAllElement = document.querySelectorAll(".my-span");
```

### Built-in DOM Collections (المجموعات الجاهزة)

```javascript
console.log(document.title); 
console.log(document.body);  
console.log(document.forms[0].one.value); 
```

---

## 3. Element Content (محتوى العنصر)



- **دالة (`innerHTML`):** بتقرأ وتكتب كود `HTML` حقيقي وبتترجم الـ Tags.
- **دالة (`textContent`):** بتجيب كل النص زي ما هو، ولو حطيت `Tags` هتطبعها كنص عادي.
- **دالة (`innerText`):** بتجيب النص "المرئي" بس، وبتحترم الـ `CSS` (زي `display: none`).

```javascript
let myElement = document.querySelector(".js");
myElement.innerHTML = "Text From <span>Main.js</span> File"; // هيترجم الـ span
```

---

## 4. Change Attributes (تعديل الخصائص)

### Change Directly (التعديل المباشر)

> [!warning] Class Attribute Trap 
> كلمة `class` محجوزة، فعشان تعدل الكلاس بالطريقة المباشرة، لازم تستخدم كلمة `className`.

```javascript
document.images[0].src = "[https://google.com](https://google.com)";
document.images[0].className = "img"; 
```

### Change With Methods (التعديل بالدوال)
الطريقة الأقوى، بتتعامل مع الاسم زي الـ `HTML` وتقدر تضيف خصائص جديدة.
```javascript
let myLink = document.querySelector("a"); 
myLink.setAttribute("href", "[https://twitter.com](https://twitter.com)"); 
```

---

## 5. Check and Remove Attributes (فحص وإزالة الخصائص)

- **جلب الخصائص (`Element.attributes`):** بترجع مجموعة بكل الخصائص المكتوبة.
- **التحقق (`hasAttribute`):** بتختبر خاصية معينة (بترجع `True` أو `False`).
- **الإزالة (`removeAttribute`):** بتمسح الخاصية بالكامل.
- **فحص عام (`hasAttributes`):** بتسأل هل فيه أي خصائص عموماً؟

```javascript
let myP = document.getElementsByTagName("p")[0];
if (myP.hasAttribute("data-src")) { 
  myP.removeAttribute("data-src");
}
```

---

## 6. Create Elements (صناعة العناصر)

- **إنشاء عنصر (`createElement`):** بتعمل الـ HTML Tag.
- **إنشاء نص (`createTextNode`):** بتعمل النص.
- **تجميع (`appendChild`):** بتضيف الـ Node كأخر ابن جوه العنصر الأب.

> [!danger] Memory vs DOM (فخ الـ Memory مقابل الـ DOM)
> العنصر المخلوق بيفضل في الـ `Memory` ومبيظهرش لليوزر غير لما تعمله `appendChild` جوه الـ `document.body` أو جوه أي عنصر معروض.

```javascript
let myElement = document.createElement("div");
let myText = document.createTextNode("Product One");
myElement.appendChild(myText);
document.body.appendChild(myElement);
```

---

## 7. Deal With Children (التعامل مع الأبناء)



- **العقد (`Nodes`):** أي حاجة (عنصر، نص عادي، تعليق، مسافة).
- **العناصر (`Elements`):** الـ HTML Tags الحقيقية بس.

> [!danger] Whitespace Trap (فخ المسافات)
> النزول لسطر جديد (Enter) في كود الـ HTML بيعتبره المتصفح `Text Node` ، فبيظهر لك عناصر فاضية لما تستخدم `childNodes`.

- **كل الأبناء:** `children` (للعناصر بس) vs `childNodes` (لكل العقد).
- **أول/آخر ابن:** `firstElementChild` (للعنصر الحقيقي) vs `firstChild` (لأي عقدة).

---

## 8. Events (الأحداث)

الأفعال اللي بتحصل في الصفحة. الأفضل نربطها في كود الـ `JS` (فصل الهيكل عن التفاعل).

- **أحداث الماوس (`Mouse Events`):** `onclick`, `oncontextmenu`, `onmouseenter`, `onmouseleave`.
- **أحداث النافذة (`Window Events`):** `onload`, `onscroll`, `onresize`.
- **أحداث النماذج (`Form Events`):** `onfocus`, `onblur`, `onsubmit`.

> [!info] Important Note (ملاحظة هامة)
> حدث الإرسال `onsubmit` بيتم تطبيقه على عنصر الـ `<form>` نفسه، مش على زرار الإرسال.

---

## 9. Prevent Default & Form Validation (منع السلوك والتحقق)

دالة `preventDefault()` بتوقف الوظيفة الافتراضية لأي عنصر (زي انتقال اللينك أو الـ Refresh بتاع الفورم).

```javascript
document.forms[0].onsubmit = function (e) {
  let userValid = false;
  if (userInput.value !== "") userValid = true;
  
  if (userValid === false) {
    e.preventDefault(); // منع الإرسال لو البيانات ناقصة
  }
};
```

---

## 10. Class List (قائمة الكلاسات)

خاصية `classList` بترجع كائن بيحتوي على الكلاسات اللي واخدها العنصر، وفيها دوال قوية:
- `length`, `item(index)`, `contains("class")`
- `add("class")`, `remove("class")`

> [!info] The Interactive UI Secret (سر الـ UI التفاعلي)
> دالة `toggle("class")` بتشتغل زي المفتاح: لو الكلاس موجود بتمسحه، ولو مش موجود بتضيفه. (ممتازة للـ Dark Mode).

---

## 11. CSS Manipulation (التحكم في التصميم)

> [!danger] cssText Trap (فخ الـ cssText)
> خاصية `cssText` بتمسح أي تنسيقات `Inline` كانت مكتوبة قبل كده، وبتحط النص الجديد مكانها بالكامل (Overwrite).

- **التعديل المباشر (`style`):** بنكتب بـ CamelCase (زي `fontWeight`).
- **التحكم المتقدم (`setProperty` / `removeProperty`):** بتسمح نكتب الخاصية عادي ونضيف `!important`.

> [!info] Rules Path (مسار الوصول لقواعد ملفات الـ CSS)
> `document.styleSheets[0].rules[0].style.setProperty("color", "red");`

---

## 12. Insert and Remove Elements (إضافة وحذف العناصر)



- **خارج العنصر:** `before` (قبله) و `after` (بعده).
- **داخل العنصر:** `prepend` (في البداية) و `append` (في النهاية).
- **الحذف:** `remove()`.

> [!info] append vs appendChild
> دالة `append` أحدث، بتقبل نصوص عادية (`Strings`) وممكن تاخد أكتر من عنصر مع بعض، عكس `appendChild`.

---

## 13. Traversing (التنقل بين العناصر)

نتحرك في شجرة الـ DOM بناءً على العلاقات (بدون Selectors).

- **الإخوة (`Siblings`):** `nextElementSibling` و `previousElementSibling`.
- **الأب (`parentElement`):** بتمسك العنصر الأب المباشر.

> [!info] Practical Application (تطبيق عملي: زرار الإغلاق)
> استخدام `span.parentElement.remove()` هو الطريقة القياسية لعمل أزرار إغلاق الإعلانات.

---

## 14. Cloning (استنساخ العناصر)

دالة `cloneNode(true)` بتاخد نسخة عميقة بكل المحتوى، و `cloneNode(false)` بتاخد نسخة سطحية للعنصر فقط.

> [!danger] ID Duplication (فخ تكرار المعرفات)
> لازم تغير الـ `ID` بتاع النسخة المنسوخة قبل ما تحطها في الصفحة عشان ميتعارضش مع العنصر الأصلي.

---

## 15. Add Event Listener & Event Delegation (مستمع الأحداث وتفويضها)

دالة `addEventListener` أفضل من `onclick` لأنها بتسمح بتركيب كذا دالة لنفس الحدث بدون ما يلغوا بعض.

> [!danger] Dynamic Elements Trap (فخ العناصر المنسوخة)
> لو عملت عنصر جديد بالـ JS، مش هتعرف تمسكه بحدث مباشر. الحل هو "التفويض" (`Event Delegation`): نطبق الحدث على `document` ونسأل `e.target` إنت مين.

```javascript
document.addEventListener("click", function (e) {
  if (e.target.className === "clone") {
    console.log("I am Cloned");
  }
});
```
