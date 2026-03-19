## 📅 Day 3 - Type Coercion

### 🔹 Topics Covered
- Implicit Type Coercion
- Equality (== vs ===)
- Truthy & Falsy Values
- NaN (Not a Number)
- Type Conversion (Number, String, Boolean)

---

## 🧠 What is Type Coercion?
JavaScript automatically converts one data type into another during operations.

---

## ⚡ Basic Coercion

```javascript
console.log("5" + 2); // "52"
console.log("5" - 2); // 3
console.log("5" * 2); // 10
console.log("10" / 2); // 5

---

## ❗ NaN (Not a Number)

NaN ek special value hai jo tab aata hai jab JavaScript valid number nahi bana paata.

---

### 🔹 Examples

```javascript
console.log(Number("abc"));    // NaN
console.log("hello" - 2);      // NaN
console.log(undefined + 1);    // NaN