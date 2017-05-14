/**
 * Created by pratikgarala on 14/5/17.
 */

import React from 'react';


class ProductInCategory extends React.Component {

    componentDidMount() {
        console.log("did mount");
        this.updateTotals();
    }

    handleValueChange(id){
        if (document.querySelector("#noOfCartons" + id).value < 0 || document.querySelector("#noOfCartons" + id).value > 100) {
            document.querySelector("#noOfCartons" + id).value = 1;
        }
        document.querySelector("#subValue" + id).textContent = (parseFloat(document.querySelector("#noOfCartons" + id).value * this.props.productItem.unitCost * this.props.productItem.unitsInCartons).toFixed(2));

        this.updateTotals();
    }

    handleBlur(id){
        if (document.querySelector("#noOfCartons" + id).value == "" ) {
            document.querySelector("#noOfCartons" + id).value = 1;
        }
    }

    updateTotals(){
        const noOfCartons = document.querySelectorAll(".noOfCartons");
        var totalProducts = 0;
        noOfCartons.forEach( noOfCarton => {
            totalProducts = totalProducts + parseInt(noOfCarton.value);
        });
        const subValues = document.querySelectorAll(".subValue");
        var totalCost = "0.00";
        subValues.forEach( subValue => {
            console.log(parseFloat(subValue.textContent).toFixed(2) * 1);
            totalCost = (parseFloat(totalCost).toFixed(2) * 1) + (parseFloat(subValue.textContent).toFixed(2) * 1);
        });
        this.props.onSetTotalProducts(totalProducts);
        this.props.onSetTotalCost(parseFloat(totalCost).toFixed(2));
    }


    render() {
        return (
            <tbody id={"item" +this.props.productItem.id}>
                <tr>
                    <td><img src={this.props.productItem.imageUrl} width="50" height="50"/></td>
                    <td>{this.props.productItem.title}</td>
                    <td>{this.props.productItem.unitCost}</td>
                    <td>{this.props.productItem.packSize}</td>
                    <td>{this.props.productItem.unitsInCartons}</td>
                    <td>
                        <form>
                            <input type="number" className="noOfCartons" defaultValue="1" id={"noOfCartons" + this.props.productItem.id} onChange={() => {this.handleValueChange(this.props.productItem.id)}} onBlur={() => {this.handleBlur(this.props.productItem.id)}}/>
                        </form>
                    </td>
                    <td>
                        $
                        <span id={"subValue" + this.props.productItem.id} className="subValue">
                        {parseFloat(this.props.productItem.unitCost * this.props.productItem.unitsInCartons).toFixed(2)}
                    </span>
                    </td>
                    <td><span className="fa fa-2x fa-close" onClick={() => this.props.onRemoveProductFromCart(this.props.productItem)}/></td>
                </tr>
            </tbody>
        );
    }
}

export default ProductInCategory;