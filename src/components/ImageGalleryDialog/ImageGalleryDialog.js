import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import PropTypes from 'prop-types';
import CloseButton from '../CloseButton/CloseButton';
import BackDrop from '../BackDrop/BackDrop';

const ImageGalleryDialog = ({ open, onClose, product }) => open && <BackDrop>
    <div
        data-testid="imageGalleryDialog"
        className="bg-gray-100 shadow-md rounded-md w-4/5 lg:w-2/5 xl:w-2/5 md:w-4/5 sm:w-4/5 xs:w-2/5 z-20 p-2 outline-none"
        tabIndex="-1"
        role="dialog"
    >
        <div className="relative">
            <CloseButton onClick={onClose} />
            <div className="py-12">
                <AwesomeSlider>
                    {product && product.images.length > 0 ?
                        product.images.map(image => <div key={image.href}><img alt="" src={image.href} /></div>)
                        :
                        <div><img alt="" src={product?.hero.href} /></div>
                    }
                </AwesomeSlider>
            </div>
        </div>
    </div>
</BackDrop>


ImageGalleryDialog.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func,
    product: PropTypes.object
}

export default ImageGalleryDialog;