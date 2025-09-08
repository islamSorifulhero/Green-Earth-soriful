(7) The answer to the question is:

1) What is the difference between var, let, and const?

Ans: 
    i. var is the oldest keyword: We are  Avoid using var in modern JavaScript (ES6+). Its function-scoping and hoisting behavior can lead to unexpected bugs that let and const were designed to solve.
    ii. let when our need reassignment: We are use it for loop counters or variables that need to change value.
    iii. By default, const: We use this for every variable declaration. If we later find out that we need to reassign it, we change it to let.


2) What is the difference between map(), forEach(), and filter?

Ans: 
    i. forEach() is used to iterate over the elements of an array. It executes a provided function once for each array element.
    ii. map() is used to transform the elements of an array. It creates a new array by calling a provided function on every element in the original array.
    iii. filter() is used to select elements from an array that meet a specific condition. It creates a new array with all elements that pass the test implemented by the provided function.
      

3) What are arrow functions in ES6?

Ans:
    Arrow functions are a shorter way to write functions in JavaScript, introduced in ES6. They use the => (arrow) syntax instead of the traditional function keyword.


4) How does destructuring assignment work in ES6?

Ans: 
    Destructuring assignment in ES6 is a powerful feature that allows you to extract values from arrays or properties from objects and assign them to variables in a concise and intuitive way. It simplifies the process of unpacking data from arrays and objects.

5) Explain template literals in ES6. How are they different from string concatenation?

Ans:
    Template literals are one of the most loved and widely used features of ES6. They provide a much more powerful and readable way to work with strings compared to traditional string concatenation.

# Green Earth


## Private Repository: https://classroom.github.com/a/nVZrg5R9 

## Alternative Private Repository: https://classroom.github.com/a/KCGI14ST 

## Alternative Private Repository: https://classroom.github.com/a/JMuIYqgK 


---
🌴 API Endpoints
---
1. Get 🌴All Plants
```bash
https://openapi.programming-hero.com/api/plants
```

2. Get 🌴All categories <br/>
```bash
https://openapi.programming-hero.com/api/categories
```


3. Get 🌴plants by categories <br/>
```bash
https://openapi.programming-hero.com/api/category/${id}
```

```bash
https://openapi.programming-hero.com/api/category/1
```

4. Get 🌴Plants Detail <br/>

```bash
https://openapi.programming-hero.com/api/plant/${id}
```

```bash
https://openapi.programming-hero.com/api/plant/1
```
---

## ✅ Main Requirements 

#### 1) Navbar

- Website **logo/name** on the **left**  
- **Menu items** in the **center** 
- **Plant a Tree button** on the **right** 

#### 2) Banner 
- A **background image**  
- A **title** and **subtitle**  
- A **centered button**  

#### 3) About Campaign
- **Section heading**  
- **Image on the left**, **text on the right**  

#### 4) Our Impact Section 
- Show **3 cards** with campaign **statistics**  

#### 5) Plant a Tree Today Section & Footer
- **Form**: Name, Email, Number of Trees  
- **Footer** with copyright info 

#### 6) Responsiveness 
- Website must be **mobile responsive**  

---

## ⚙️ Functionalities 

1) Category Loading 
Load Tree Categories dynamically on the left side.

2) Category Click → Tree Data 
On clicking a category: load trees of that category.

Display in a 3-column card layout.

3) Card Contents 
 Each card includes:

        - Image

        -  Name

        - Short description

        - Category

        - Price

        - Add to Cart button

4) Modal on Card Click 
Clicking a tree name on a card opens a modal with full tree details.


##  🧪 Challenges 


    1) Add to Cart 
    Clicking Add to Cart: - Adds the tree to Cart List
                          - Shows tree name 

    2) Total Calculation 
    Calculate total price of trees in cart.

    3) Remove from Cart 
    Clicking ❌ removes tree and deducts price from total.

    4) Loading Spinner
    Show spinner while data is loading.

    5) Active Button State 
    Highlight active category button when selected.