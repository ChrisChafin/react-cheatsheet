/* Why would you use React.Children.map(props.children, () => ) 
   instead of props.children.map(() => ) 
*/

// It’s not guaranteed that props.children will be an array

<Parent>
  <h1>Welcome!</h1>
</Parent>

// Right now, props.children is an Object, not an array
// React only makes props.children an array if there are more than one child elements, like this

<Parent>
  <h1>Welcome</h1>
  <h2>props.children will now be an array</h2>
</Parent>