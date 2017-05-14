/**
 * Created by pratikgarala on 14/5/17.
 */

import React from 'react';
import ProductInCategoryContainer from '../containers/productsInCategoryContainer';

const ProductCategory = (props) => (
    <div>
    {props.productCategory.length > 0 ? (
    <div>
        <div className="col-lg-12 text-left categoryStrip">
            {console.log(props.productCategory.length)}
            {props.productCategory[0].category} ({props.productCategory.length})
        </div>
        <div className="col-lg-12 productTable">
            <table id={"table" + props.index}>
                <thead>
                <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Unit Cost</th>
                    <th>Pack Size <br /> <span className="subText">No of Units</span></th>
                    <th>Units in carton</th>
                    <th>No. of Cartons</th>
                    <th>value</th>
                    <th>Actions</th>
                </tr>
                </thead>
                {props.productCategory.map((item, index) => {
                    return (
                        <ProductInCategoryContainer key={index} productItem={item} itemIndex={index} categoryIndex={props.index}/>
                    );
                })}
            </table>
        </div>
    </div>
    ): null}
    </div>

);

export default ProductCategory;