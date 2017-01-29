import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class MenuOptionList extends Component{

	renderOptions() {
        return this.props.menuOptions.map((option) => {
			let className;
			if (option.id == 1) {
				className = "color_animation navactive";
			} else {
				className = "color_animation";
			}
            return (
                <li key={option.id} >
					<a href={"#" + option.href} className={className}>{option.name}</a>
                </li>
            );
        });
    }

	render(){
		return(
			<div className="container">
				<div className="row">
					{/*<!-- Brand and toggle get grouped for better mobile display -->*/}
					<div className="navbar-header page-scroll">
						<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
							<span className="sr-only">Toggle navigation</span> Menu
							<i className="fa fa-bars"> </i>
						</button>
						<a className="navbar-brand" href="#">Falvors Fastfood</a>
					</div>

					{/*<!-- Collect the nav links, forms, and other content for toggling -->*/}
					<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
						<ul className="nav navbar-nav main-nav  clear navbar-right ">
							<li><a className="" href="#top"></a></li>
							{this.renderOptions()}
							{/*<li><a className="color_animation navactive" href="#about">ABOUT</a></li>*/}
							{/*<li><a className="color_animation" href="#pricing">PRICING</a></li>*/}
							{/*<li><a className="color_animation" href="#weeklySpecials">WEEKLY SPECIALS</a></li>*/}
							{/*<li><a className="color_animation" href="#contact">CONTACT</a></li>*/}
						</ul>
					</div>
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