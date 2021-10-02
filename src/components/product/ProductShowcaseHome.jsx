import { FeaturedProduct } from "components/product";
import PropType from "prop-types";
import React from "react";

import CollectionItem from "./CollectionItem";

const scroll = (scrollOffset) => {
  ref.current.scrollLeft += scrollOffset;
};
const ProductShowcaseHome = ({ products, skeletonCount }) => (
  <div className="product-display-grid-home">

    {products.length === 0
      ? new Array(skeletonCount).fill({}).map((product, index) => (
          <FeaturedProduct
            // eslint-disable-next-line react/no-array-index-key
            key={`product-skeleton ${index}`}
            product={product}
          />
        ))
      :
      products.map((product) => (
          <FeaturedProduct key={product.id} product={product} />
        ))}

  </div>
);

ProductShowcaseHome.defaultProps = {
  skeletonCount: 10,
};

ProductShowcaseHome.propTypes = {
  products: PropType.array.isRequired,
  skeletonCount: PropType.number,
};

export default ProductShowcaseHome;
