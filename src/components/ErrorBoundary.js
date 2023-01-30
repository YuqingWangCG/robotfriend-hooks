import React from 'react';

class ErrorBounday extends React.Component{
   constructor(props){
   	super(props)
   	this.state={
   		hasError:false
   	}
   }
   
   componendDidCatch(error, info) {
   	this.stateSet({hasError:true})
   }



   render(){
   	if (this.state.hasError) {
       return <h1>Oh, no. Something went wrong!</h1>
   	}
   	return this.props.children;
   }
}


export default ErrorBounday;