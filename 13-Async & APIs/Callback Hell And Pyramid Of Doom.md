---
tags:
  - JavaScript
  - Callbacks
  - Callback-Hell
  - Asynchronous
  - Web-Development
date: 2026-04-30
subject: Callback Hell And Pyramid Of Doom
---
# JavaScript - Callback Hell 

عشان نتعامل مع العمليات اللامتزامنة (`Asynchronous`) اللي بتاخد وقت، بنعتمد على دوال بنسميها `Callbacks`. لكن لما العمليات دي بتكتر وتعتمد على بعضها، الكود بيتحول لكابوس مرعب اسمه (`Pyramid Of Doom`).


![[image.png]]

---

## 1. What Is Callback? 

الـ `Callback` ببساطة هو دالة إنت بتبعتها كـ "مُعامل" (`Argument`) لدالة تانية، عشان الدالة التانية دي تنفذها في وقت لاحق (لما تخلص شغلها أو لما يحصل حدث معين).

**أمثلة بنستخدمها كل يوم:**
- **في الأحداث (`Events`)**: إحنا بنمرر دالة `makeItRed` لـ `addEventListener` ، وهي مش هتتنفذ غير لما اليوزر يعمل كليك.
- **في التايمر (`setTimeout`)**: بنمرر دالة `iamACallback` عشان تتنفذ بعد ثانيتين.
```javascript
// 1. مثال الكول باك مع الأحداث
function makeItRed(e) {
  e.target.style.color = "red";
}
let p = document.querySelector(".test");
p.addEventListener("click", makeItRed); // الدالة هنا هي كول باك

// 2. مثال الكول باك مع التايمر
function iamACallback() {
  console.log("Iam A Callback Function");
}
setTimeout(iamACallback, 2000); // الدالة هنا هتتنفذ بعد ثانيتين
```

---

## 2. The Pyramid Of Doom 

تخيل إن عندنا تطبيق بيعالج الصور، ومحتاجين نعمل 4 خطوات ورا بعض بالترتيب (كل خطوة بتاخد وقت، ولازم الخطوة اللي بعدها تستناها تخلص):
1. تحميل الصورة من الرابط.
2. تعديل حجم الصورة.
3. إضافة لوجو على الصورة.
4. عرض الصورة في الموقع.

عشان ننفذ ده بالـ `Callbacks` ، هنضطر نكتب كل دالة **جوه** الكول باك بتاع الدالة اللي قبلها! النتيجة هتكون كود متداخل جداً واخد شكل هرم مائل:
```javascript
// جحيم الكول باك (Callback Hell)
setTimeout(() => {
  console.log("1. Download Photo From URL");
  
  setTimeout(() => {
    console.log("2. Resize Photo");
    
    setTimeout(() => {
      console.log("3. Add Logo To The Photo");
      
      setTimeout(() => {
        console.log("4. Show The Photo In Website");
      }, 1000); // نهاية الخطوة الرابعة
      
    }, 1000); // نهاية الخطوة الثالثة
    
  }, 1000); // نهاية الخطوة الثانية
  
}, 1000); // نهاية الخطوة الأولى
```

> [!danger] ليه الشكل ده سيء جداً؟
> 1. **صعب القراءة**: الكود بيدخل لجوه بشكل مستفز ومبيبقاش واضح إيه بيبدأ فين وبيخلص فين.
> 2. **صعب التعديل**: لو حبيت تضيف خطوة في النص، هتضطر تعيد هيكلة الأقواس دي كلها.
> 3. **صعب في اكتشاف الأخطاء**: لو حصل خطأ (`Error`) في خطوة معينة، تتبعه ومعالجته بيبقى شبه مستحيل في الشكل ده.