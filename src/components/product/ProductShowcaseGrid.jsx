/* eslint-disable react/forbid-prop-types */
import { FeaturedProduct } from "components/product";
import PropType from "prop-types";
import React from "react";
import CollectionItem from "./CollectionItem";

const ProductShowcase = ({ products, skeletonCount }) => (
  <div className="product-display-grid">
    {/* <FontAwesomeIcon
      icon={faChevronLeft}
      className="collection-preview__left-arrow-icon"
      onClick={onLeftClick()}
    /> */}
    {/* <span className="collection-preview__right-arrow">
      <FontAwesomeIcon
        icon={faChevronRight}
        className="collection-preview__right-arrow-icon"
        onClick={this.onRightClick}
      />
    </span> */}
    {products.length === 0
      ? new Array(skeletonCount).fill({}).map((product, index) => (
          <FeaturedProduct
            // eslint-disable-next-line react/no-array-index-key
            key={`product-skeleton ${index}`}
            product={product}
          />
        ))
      : products.map((product) => (
          <FeaturedProduct key={product.id} product={product} />
        ))}
  </div>
);

ProductShowcase.defaultProps = {
  skeletonCount: 6,
};

ProductShowcase.propTypes = {
  products: PropType.array.isRequired,
  skeletonCount: PropType.number,
};

export default ProductShowcase;
