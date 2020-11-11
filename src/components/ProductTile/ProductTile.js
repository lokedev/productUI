import React from 'react';
import PropTypes from 'prop-types';

const ProductTile = ({ thumbnail, name, price, onClick }) => (
    <div className="my-4 w-full sm:my-4 sm:px-4 sm:w-full md:my-4 md:px-4 md:w-1/2 lg:my-1 lg:px-4 lg:w-1/2 xl:my-4 xl:px-4 xl:w-1/3 overflow-visible">
        <div data-testid="tile" className="relative overflow-hidden shadow-md rounded-md cursor-pointer hover:shadow-xl transition ease duration-500" onClick={onClick}>
            <h3 className="absolute top-0 p-2 bg-yellow-600 bg-opacity-75 font-bold w-full rounded-md" aria-label="Product Name">{name}</h3>
            <img data-testid="itemThumb" src={thumbnail} alt={name} className="w-full rounded-md" />
            <span className="absolute bg-gray-900 bg-opacity-75 p-2 font-bold text-white rounded-md" aria-label="Product Price" style={{ left: 30, bottom: 30 }}>
                {price?.low ? `From $ ${price.low}` : `$ ${price}`}
            </span>
        </div>
    </div>
)


ProductTile.propTypes = {
    thumbnail: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
    onClick: PropTypes.func
}

export default ProductTile;