---
tags:
  - JavaScript
  - AJAX
  - XMLHttpRequest
  - API
  - Web-Development
date: 2026-04-30
subject: AJAX Request And Response
---
# JavaScript - AJAX Request And Response 

عشان نقدر نجيب بيانات من أي `API` باستخدام كائن `XMLHttpRequest` ، بنمر بشوية خطوات وحالات. السيرفر مش بيرد في نفس اللحظة، عشان كده لازم نراقب "حالة الطلب" و"حالة الرد" عشان نضمن إن البيانات وصلت سليمة.

---

## 1. Request Setup 

عشان نبعت الطلب للسيرفر، بنستخدم دالتين أساسيتين جوه كائن الطلب:
- **فتح الاتصال** (`open`): بتاخد منك نوع الطلب (زي `GET` لجلب البيانات) والرابط (`URL`) اللي هنكلمه.
- **إرسال الطلب** (`send`): دي اللي بتنفذ العملية فعلياً وتبدأ تبعت الطلب للسيرفر.
```javascript
let myRequest = new XMLHttpRequest();

// 1. تحديد نوع الطلب والرابط
myRequest.open("GET", "[https://api.github.com/users/elzerowebschool/repos](https://api.github.com/users/elzerowebschool/repos)");

// 2. إرسال الطلب الفعلي
myRequest.send();
```

---

## 2. Ready State 

خاصية `readyState` بتعبر عن المرحلة اللي الطلب بتاعك بيمر بيها حالياً، وبتتكون من 5 أرقام (من 0 لـ 4):
- `[0] Request Not Initialized`: الطلب لسه متبدأش (لسه معملناش `open`).
- `[1] Server Connection Established`: تم الاتصال بالسيرفر بنجاح.
- `[2] Request Received`: السيرفر استلم الطلب بتاعك.
- `[3] Processing Request`: السيرفر بيعالج الطلب وبيجهز البيانات.
- `[4] Request Is Finished`: الطلب خلص والرد (البيانات) بقت جاهزة تماماً.

---

## 3. Status Codes 

خاصية `status` بتوضحلك نتيجة الطلب من وجهة نظر السيرفر:
- `[200] Successful`: الطلب نجح والبيانات رجعت سليمة.
- `[404] Not Found`: الرابط غلط أو السيرفر ملقاش البيانات.

---

## 4. Handling The Response (التعامل مع الرد)

عشان نراقب التغير في الحالات دي، بنستخدم حدث اسمه `onreadystatechange`. الحدث ده بيشتغل مع كل تغيير بيحصل في الـ `readyState`. 
عشان نستخدم البيانات بأمان، لازم نتأكد من شرطين: إن الطلب اكتمل للنهاية (`readyState === 4`) وإن السيرفر رد بنجاح (`status === 200`). البيانات نفسها بنلاقيها جوه خاصية `responseText`.
```javascript
myRequest.onreadystatechange = function () {
  // التأكد من اكتمال الطلب ونجاحه
  if (this.readyState === 4 && this.status === 200) {
    // طباعة البيانات اللي رجعت (بتكون على هيئة نص JSON)
    console.log(this.responseText);
  }
};
```

---

# JavaScript - AJAX Loop On Data 

لما السيرفر بيرد علينا بالبيانات، بترجع على هيئة "نص" (`String`). عشان نقدر نستخدم البيانات دي ونعرضها في الصفحة، لازم الأول نحولها لكائن أو مصفوفة باستخدام `JSON.parse` ، وبعدين نقدر نستخدم أي `Loop` عشان نمر عليها عنصر عنصر ونضيفها في الـ `DOM`.

---

## 1. Loop On Data 

في الكود ده، إحنا بنجيب مشاريع جيت هاب، بنحولها لمصفوفة، وبنعمل `div` لكل مشروع ونحطه في الصفحة:
```javascript
let myRequest = new XMLHttpRequest();
myRequest.open("GET", "[https://api.github.com/users/elzerowebschool/repos](https://api.github.com/users/elzerowebschool/repos)");
myRequest.send();

myRequest.onreadystatechange = function () {
  // التأكد من نجاح الطلب
  if (this.readyState === 4 && this.status === 200) {
    
    // 1. تحويل نص الجيسون لمصفوفة جافاسكريبت عشان نقدر نتعامل معاها
    let jsData = JSON.parse(this.responseText);
    
    // 2. لوب للمرور على كل مشروع في المصفوفة
    for (let i = 0; i < jsData.length; i++) {
      // إنشاء عنصر div جديد
      let div = document.createElement("div");
      
      // استخراج اسم المشروع (full_name) من الكائن وإضافته كنص
      let repoName = document.createTextNode(jsData[i].full_name);
      
      // إضافة النص للـ div، ثم إضافة الـ div لصفحة الـ HTML
      div.appendChild(repoName);
      document.body.appendChild(div);
    }
  }
};
```

---

## 2. Cross Origin API - CORS 

دي من أشهر المشاكل اللي هتقابلك (هتلاقي إيرور أحمر في الكونسول اسمه `CORS Error`).
- **الفكرة**: المتصفحات فيها ميزة حماية بتمنع موقع (مثلاً `A.com`) إنه يبعت طلب أجاكس لموقع تاني (مثلاً `B.com`) ويسحب منه بيانات، إلا لو السيرفر بتاع `B.com` سامح بكده صراحةً.
- **الحل**: السيرفر لازم يبعت `Header` معين يقول للمتصفح "أنا موافق إن الموقع الفلاني ياخد مني داتا". لو السيرفر مش بتاعك (زي بتاع طقس مثلاً ومش بيدعم CORS)، مش هتقدر تسحب منه الداتا مباشرة من المتصفح، ولازم تسحبها من خلال الـ `Back-End` بتاعك الأول.
---

## 3. API Authentication 

مش كل الـ `APIs` مفتوحة ومجانية زي بتاع جيت هاب اللي جربناه. معظم السيرفرات بتحتاج "تصريح" أو "مصادقة".
- **Tokens & API Keys**: عشان تقدر تسحب الداتا، الموقع بيديك مفتاح سري (`Key`) بتبعته مع كل طلب.
- **الأسباب**: 
  1. **الحماية**: عشان يضمن إن اللي بيطلب الداتا شخص مسجل ومصرح ليه (زي بيانات بنكية أو رسايل خاصة).
  2. **الحد من الاستخدام (`Rate Limiting`)**: عشان يمنعوك من الضغط على السيرفر بتاعهم، فبيقولولك مثلاً ليك 100 طلب في اليوم بس، والمفتاح بتاعك هو اللي بيعدوا بيه طلباتك.