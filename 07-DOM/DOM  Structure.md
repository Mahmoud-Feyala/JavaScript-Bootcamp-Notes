---
tags:
  - JavaScript
  - DOM
  - Interfaces
  - Web-Development
date: 2026-04-15
subject: DOM Core Concepts & Interfaces
share_link: https://share.note.sx/d4bd8266#O5HMEYwNRQy3OpFOeNE5Gmiadsi2pNpGTLczl+qHx+Y
share_updated: 2026-04-15T13:30:54+02:00
icon: FiCode
---
- [[#1. What Is The DOM? ( DOM مفهوم الـ)|1. What Is The DOM? ( DOM مفهوم الـ)]]
- [[#2. Types of Nodes (أنواع العقد)|2. Types of Nodes (أنواع العقد)]]
- [[#3. Core Interfaces (الواجهات الأساسية)|3. Core Interfaces (الواجهات الأساسية)]]

# JavaScript DOM - Core Concepts & Interfaces

![[image-2.png]]

## 1. What Is The DOM? ( DOM مفهوم الـ)

الـ `DOM` (اختصار لـ Document Object Model) هو ببساطة إن المتصفح مش بيشوف كود الـ `HTML` كنص جامد، لكن بياخده ويحوله لشجرة كائنات ( `Tree of Objects` )، كل كائن فيها بنسميه عقدة ( `Node` ). الشجرة دي نقدر نتحكم فيها (تعديل، إضافة، حذف) بالـ JavaScript.

![[Backend Principles/HTTP Backend/pics/image.png]]

```html
<p>Hello</p>
```

```javascript
// المتصفح بيترجمه في الذاكرة للشكل ده:
// 1. document (الأساس)
// 2. p (Element Node) - عنصر
// 3. "Hello" (Text Node) - نص جوه العنصر
```

---

## 2. Types of Nodes (أنواع العقد)

أهم قاعدة في الـ DOM إن **كل حاجة في الصفحة عبارة عن عقدة (`Node`)**. الجافاسكريبت فيها أنواع كتير للـ Nodes، دول أهم 4 أنواع:

- **عنصر (`ELEMENT_NODE`):** أي HTML Tag زي `div` أو `p`.
- **نص (`TEXT_NODE`):** النصوص المكتوبة جوه العناصر أو حتى المسافات.
- **تعليق (`COMMENT_NODE`):** التعليقات المخفية في الكود.
- **مستند (`DOCUMENT_NODE`):** الصفحة بالكامل (`document`).

---

## 3. Core Interfaces (الواجهات الأساسية)

![[Backend Principles/HTTP Backend/pics/image-1.png]]

الـ DOM بيشتغل بنظام وراثة متدرج. كل حاجة بتورث خصائص من اللي قبلها:

1. **واجهة الأحداث (`EventTarget`):** دي الأساس اللي بيدينا القدرة إننا نتفاعل مع العناصر (زي دالة `addEventListener`).
2. **العقدة (`Node`):** دي الواجهة الأساسية لكل الكائنات في شجرة الـ DOM.
3. **العنصر (`Element`):** دي واجهة مخصصة لعناصر الـ HTML بس، وبتدينا دوال زي `querySelector`.

---
![[image-3.png]]


<center>END</center>
