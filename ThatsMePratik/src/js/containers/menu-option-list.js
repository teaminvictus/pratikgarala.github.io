import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class MenuOptionList extends Component{

	renderOptions() {
        return this.props.menuOptions.map((option) => {
            return (
                <li key={option.id} className="page-scroll">
					<a href={"#" + option.name}>{option.name}</a>
                </li>
            );
        });
    }

	render(){
		return(
			<div className="container">

				<div className="navbar-header page-scroll">
					<button type="button" className= "navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
						<span className="sr-only">Toggle navigation</span> Menu
						<i className="fa fa-bars"> </i>
					</button>
					<a className="navbar-brand" href="#page-top">Thats Me Pratik</a>
				</div>

				<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
					<ul className="nav navbar-nav navbar-right">
						<li className="hidden">
							<a href="#page-top"></a>
						</li>
						{this.renderOptions()}

					</ul>
				</div>

			</div>
		);
	}
}

function mapStateToProps(state){
	return {
		menuOptions : state.menuOptions
	}
}

export default connect(mapStateToProps)(MenuOptionList);