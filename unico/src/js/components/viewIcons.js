/**
 * Created by pratikgarala on 13/5/17.
 */
import React from 'react';


class ViewIcons extends React.Component {

    handleClick(iconType){
        if(iconType.localeCompare("grid") == 0) {
            document.querySelector("#gridIcon").classList.add("active");
            document.querySelector("#listIcon").classList.remove("active");
            document.querySelector("#productSection").classList.remove("hideElement");
            document.querySelector("#listView").classList.add("hideElement");

        }else{
            document.querySelector("#gridIcon").classList.remove("active");
            document.querySelector("#listIcon").classList.add("active");
            document.querySelector("#productSection").classList.add("hideElement");
            document.querySelector("#listView").classList.remove("hideElement");
        }
    }

    render() {
        return (
            <section className="iconView">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-right">
                            <span id="gridIcon" className="icon fa fa-2x fa-th active" onClick={() => {this.handleClick("grid")}}/>
                            <span id="listIcon" className="icon fa fa-2x fa-th-list" onClick={() => {this.handleClick("list")}}/>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}


export default ViewIcons;