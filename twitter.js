/* If you created a React element like Twitter below, 
   what would the component definition of Twitter look 
   like? 
*/

<Twitter username='tylermcginnis'>
  {(user) => user === null
    ? <Loading />
    : <Badge info={user} />}
</Twitter>

import React, { Component, PropTypes } from 'react'
import fetchUser from 'twitter'
// fetchUser take in a username returns a promise
// which will resolve with that username's data.

class Twitter extends Component {
  // finish this
}

/* If you’re not familiar with the render callback pattern, 
   this will look a little strange. In this pattern, a component 
   receives a function as its child. 
   
   Take notice of what’s inside 
   the opening and closing <Twitter> tags above. Instead of another 
   component as you’ve probably seen before, the Twitter component’s 
   child is a function. What this means is that in the implementation 
   of the Twitter component, we’ll need to treat props.children as 
   a function. 
*/

//Solving
import React, { Component, PropTypes } from 'react'
import fetchUser from 'twitter'

class Twitter extends Component {
  state = {
    user: null,
  }
  static propTypes = {
    username: PropTypes.string.isRequired,
  }
  componentDidMount () {
    fetchUser(this.props.username)
      .then((user) => this.setState({user}))
  }
  render () {
    return this.props.children(this.state.user)
  }
}

/* Notice that, just as I mentioned above, I treat props.children 
   as a function by invoking it and passing it the user. 
   
   What’s great about this pattern is that we’ve decoupled our parent 
   component from our child component. The parent component manages 
   the state and the consumer of the parent component can decide in 
   which way they’d like to apply the arguments they receive from the 
   parent to their UI.

   To demonstrate this, let’s say in another file we want to render a 
   Profile instead of a Badge, because we’re using the render callback 
   pattern, we can easily swap around the UI without changing our 
   implementation of the parent (Twitter) component.
*/

<Twitter username='tylermcginnis'>
  {(user) => user === null
    ? <Loading />
    : <Profile info={user} />}
</Twitter>