/**
 * Created by pratikgarala on 7/1/17.
 */

// import React from 'react';
//
// const getPercent = (props) => (
//     parseInt(props.percent)
// );
//
// const classSet = ( classes ) => (
//     typeof classes !== 'object' ?
//         Array.prototype.join.call(arguments, ' ') :
//         Object.keys(classes).filter(function(className){
//             return classes[className];
//         }).join(' ')
// );
//
// const getClasses = (props) => classSet({
//     "progress-pie-chart": true,
//     "gt-50": getPercent(props) > 50
// });
//
// const Progress = (props) => (
//     <div>
//         <div className={getClasses(props)}>
//             <div className="ppc-progress">
//                 <div className="ppc-progress-fill" ref="progress "></div>
//             </div>
//             <div className="ppc-percents">
//                 <div className="pcc-percents-wrapper">
//                     <span>{getPercent(props) + '%'}</span>
//                 </div>
//             </div>
//         </div>
//     </div>
// );


export default Progress;

function classSet ( classes ) {
    return typeof classes !== 'object' ?
        Array.prototype.join.call(arguments, ' ') :
        Object.keys(classes).filter(function(className){
            return classes[className];
        }).join(' ');
}

module.exports = classSet;

var React    = require('react');

var Progress = React.createClass({
    componentDidUpdate: function() {
        var percent = parseInt(this.props.percent);
        var deg = 360*percent/100 ;
        var element = this.refs.progress.getDOMNode();
        element.style.transform = 'rotate(-'+ deg +'deg)';
    },
    render: function() {
        var percent = Math.floor(this.props.percent);
        var classes = classSet({
            "progress-pie-chart": true,
            "gt-50": percent > 50
        });
        return (
            <div className="">
                <div className={classes}>
                    <div className="ppc-progress">
                        <div className="ppc-progress-fill" ref="progress"></div>
                    </div>
                    <div className="ppc-percents">
                        <div className="pcc-percents-wrapper">
                            <span>{percent + '%'}</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Progress;