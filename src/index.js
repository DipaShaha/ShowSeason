import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";



class App extends React.Component{

	// constructor(props){
	// 	super(props);
	// 	this.state={lat:null, errMessage:''};

		
	// }
	state={lat:null, errMessage:''};
	componentDidMount(){
		window.navigator.geolocation.getCurrentPosition(
			(position)=>{ 
				this.setState({lat:position.coords.latitude });
			},
			(err)=>{
				this.setState({errMessage:err.smessage});
			}
		);
	}


	//must define
	render(){
		if(this.state.errMessage && !this.state.lat)
		{ 
			return <div>Error Msg: {this.state.errMessage}</div>
		}
		if(!this.state.errMessage && this.state.lat)
		{ 
			return <SeasonDisplay lat={this.state.lat}/>
		}

		return <Spinner message="Please accept location request!"/>
	}
}


ReactDOM.render(
<App/>,
document.querySelector("#root")

);