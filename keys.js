/* Keys are what help React keep track of what items 
   have changed, been added, or been removed from a 
   list. 
*/

class keys extends Component {
  //It’s important that each key be unique among siblings
  render() {
    return (
      <ul>
        {this.state.todoItems.map(({task, uid}) => {
          return <li key={uid}>{task}</li>
        })}
      </ul>
    )
  } 
}
