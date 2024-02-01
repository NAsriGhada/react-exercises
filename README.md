<!-- In the line setIsVisible(!isVisible);, the ! (logical NOT) operator is used to toggle the value of isVisible. If isVisible is currently true, !true evaluates to false, and if isVisible is false, !false evaluates to true. -->

<!-- So, using ! is a concise way of flipping the boolean value. It's a common pattern for toggling between true and false without explicitly stating the new value. -->

 <!-- If you were to use false directly, you would need to know the current value of isVisible and explicitly set it to false: -->

<!-- Using ! in this context is often preferred for toggling boolean values, as it makes the code more readable and less error-prone, especially when you might not know the current state. It's a common idiom in many programming languages for flipping boolean values. -->


 <!--  The expression {isVisible && <Counter />} is a conditional rendering statement in JSX. It utilizes the logical AND (&&) operator. In React, when you use && in JSX, the second part of the expression is only evaluated and rendered if the first part is true.  -->

 <!-- we need to use the filter function to create a new array of items which does not contain the item which was clicked. Then we have to call the setState() function to update the state. -->