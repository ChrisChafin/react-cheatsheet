/* The 2nd argument that can be passed to setState is a callback
   Typically it’s best to use another lifecycle method rather than 
   relying on this callback function, but it’s good to know it exists
*/

this.setState(
  { username: 'chrischafin' },
  //here's the callback
  () => console.log('setState has finished and the component has re-rendered')
)