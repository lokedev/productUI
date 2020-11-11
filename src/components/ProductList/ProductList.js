import React from 'react';
import ProductTile from '../ProductTile/ProductTile';
import PropTypes from 'prop-types';

const ProductList = ({ onSelect, products = [] }) => (
    <div className="flex flex-wrap mx-2 sm:-mx-2 md:-mx-3 lg:-mx-3 xl:-mx-3" data-testid="productList" aria-label="Product List">
        {
            products.map(product => (
                <ProductTile
                    key={product.id}
                    name={product.name}
                    thumbnail={product.hero.href}
                    price={product.price?.selling || product.priceRange?.selling}
                    onClick={() => onSelect(product)}
                />
            ))
        }
    </div>
)

ProductList.propTypes = {
    onSelect: PropTypes.func,
    product: PropTypes.array
}

export default ProductList;