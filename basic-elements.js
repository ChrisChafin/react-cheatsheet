const element = (
  <h1 className="greeting">
    Hello, World!
  </h1>
);

const element2 = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, World!'
);

/*These both do the exat same thing
  Unlike browser DOM elements, React elements are plain objects.
  React elements are immutable. Once you create an element, you
  can’t change its children or attributes
*/