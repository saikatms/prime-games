import { MessageDisplay } from "components/common";
import { ProductShowcaseGrid } from "components/product";
import { useDocumentTitle, useFeaturedProducts, useScrollTop } from "hooks";
import useCategory8Products from "hooks/useCategory8Products";
import bannerImg from "images/Banner2.png";
import React from "react";

const Category8 = () => {
  useDocumentTitle("Category 8 | Prime Games");
  useScrollTop();

  const { category8Products, fetchcategory8Products, isLoading, error } =
    useCategory8Products();

  return (
    <main className="content">
      <div className="featured">
        <div className="banner">
          {/* <div className="banner-desc">
            <h1>Featured Products</h1>
          </div> */}
          <div className="banner-img">
            <img
              src="https://image.freepik.com/free-vector/hexagonal-shape-neon-light-banner_1017-19904.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="display">
          <div className="product-display-grid">
            {error && !isLoading ? (
              <MessageDisplay
                message={error}
                action={fetchcategory8Products}
                buttonLabel="Try Again"
              />
            ) : (
              <ProductShowcaseGrid
                products={category8Products}
                skeletonCount={6}
              />
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Category8;
