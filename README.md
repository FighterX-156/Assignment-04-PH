# Assignment-04-PH
01.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Answer:
getElementById finds one element by its id.
getElementsByClassName finds all elements with a specific class & returns a  list.
querySelector finds the first element that matches a CSS selector.
querySelectorAll finds all elements that match a CSS selector & returns a list.

2. How do you create and insert a new element into the DOM?
Answer:
Create: let newElement = document.createElement('div')
Insert: parent.appendChild(newElement) 

3. What is Event Bubbling? And how does it work?
Answer:
Event Bubbling: When we click a child element, the event "bubbles up" and  triggers click handlers on its parent, grandparent, and  all the way to the top.

4. What is Event Delegation? Why is it useful?
Answer:
Event Delegation: Instead of adding a click handler to many child elements, add one to a parent and use event.target to figure out which child was clicked. Useful because it works for future elements and uses less memory.

5. What is the difference between preventDefault() and stopPropagation()?
Answer:
preventDefault() stops the browser's default action.
stopPropagation() stops the event from bubbling up to parent elements.