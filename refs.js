/* Refs are an escape hatch which allow you to get direct access 
   to a DOM element or an instance of a component. In order to use 
   them you add a ref attribute to your component whose value is a 
   callback function which will receive the underlying DOM element 
   or the mounted instance of the component as its first argument. */

class UnControlledForm extends Component {
  handleSubmit = () => {
    console.log("Input Value: ", this.input.value)
  } 
  render (){
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type='text'
          //Here's the ref
          ref={(input) => this.input = input}/>
        <button type='submit'>Submit</button>
      </form>
    )
  }
}

/* Above notice that our input field has a ref attribute whose 
   value is a function. That function receives the actual DOM 
   element of input which we then put on the instance in order 
   to have access to it inside of the handleSubmit function.

   It’s often misconstrued that you need to use a class component 
   in order to use refs, but refs can also be used with functional 
   components by leveraging closures in JavaScript. 
*/

function CustomForm ({handleSubmit}) {
  let inputElement
  return (
    <form onSubmit={() => handleSubmit(inputElement.value)}>
      <input 
        type='text'
        ref= {(input) => inputElement = input} />
      <button type='submit'>Submit</button>
    </form>
  )
}