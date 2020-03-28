- [ ] Why would you use class component over function components (removing hooks from the question)?
- [ ] Name three lifecycle methods and their purposes.
- [ ] What is the purpose of a custom hook?
- [ ] Why is it important to test our apps?

* Why would you use class component over function components (removing hooks from the question)?


Class components are able to have their own state and pass it via this.props. While the Functional component is refered to as a statless components and returns a React Element.  While class require more code they give you the more usability when it come to mananging state.  It is also easy to change small items without effect the rest of the code


*  Name three lifecycle methods and their purposes.
- ComponentDidMount this is only called once in the entire life-cycle of a given component.  It is signalized once all the components and sub-components are rendered properly.  This function is ideal for preforming any side-effect causing operation such as AJAX request

- componentWillUnmount is used to ‘clean up’ after components using timers(setTimeout, setInterval), open sockets or performs any operation we need to close / remove when no longer needed.


- componentWillUpdate (nextProps, nextState) has also deprecated due to its nature of being call multiple times.

Once all the re-rendering cycles have finished componenetDidUpdated(prevProps,prevState,prevContext) is called.  It is called even if no changes have been made due to this behavior it is called multiple times and require a if statement to check if changes have been made.
componentDidUpdate(prevProps) {
if(prevProps.myProps !== this.props.myProp) {
// this.props.myProp has a different value
// we can perform any operations that would 
// need the new value and/or cause side-effects 
// like AJAX calls with the new value - this.props.myProp
}
}



* What is the purpose of a custom hook?
You are able to reuse the logic throughout the app with other component classes


 * Why is it important to test our apps?

To be able to find errors that are not thought of through testing yourself.  As well as simulate condition and enviroment that you cannot implement manually