1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
The difference between getElementById, getElementsByClassName, querySelector and querySelectorAll is mainly how they select elements and what they return. getElementById selects only one element using its id, and id must be unique in a page. getElementsByClassName selects elements using a class name and it can return many elements. querySelector works like CSS selector and it returns only the first matching element. querySelectorAll also uses CSS selector but it returns all matching elements as a list.

In Summary: 
getElementById(): Selects one element by id.
getElementsByClassName(): Selects elements by class (returns collection).
querySelector(): Selects first element using CSS selector.
querySelectorAll(): Selects all elements using CSS selector.


2. How do you create and insert a new element into the DOM?
To create and insert a new element into the DOM, first i create the element using document.createElement(). Then i add text or content inside it using textContent or innerHTML. After that, i insert it into the page using appendChild() or append(). 

Example Code:
let p = document.createElement("p");
p.textContent = "Hello";
document.body.appendChild(p);

3. What is Event Bubbling? And how does it work?
Event bubbling means when an event happens on a child element, it also moves up to its parent element. For example, if a button is inside a div and you click the button, first the button event runs, then the div event runs. The event moves from child to parent. This upward movement is called event bubbling. When i click a child element, the event goes from child then parent then body.

4. What is Event Delegation in JavaScript? Why is it useful?
Event delegation means adding an event listener to a parent element instead of adding it to many child elements. When a child is clicked, the parent handles the event because of event bubbling. It is useful because it saves memory, reduces code, and also works for new elements that are added later.

5. What is the difference between preventDefault() and stopPropagation() methods?
preventDefault() stops the default browser action. For example, it can stop a form from submitting or stop a link from opening. stopPropagation() stops the event from moving to parent elements. In simple words, preventDefault stops the browser action, and stopPropagation stops the event from bubbling up.

In Summary:
preventDefault(): Stops browser default action.
stopPropagation(): Stops event going to parent.