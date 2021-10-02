import { MessageDisplay } from "components/common";
import { ProductShowcaseGrid } from "components/product";
import { useDocumentTitle, useFeaturedProducts, useScrollTop } from "hooks";
import useCategory9Products from "hooks/useCategory9Products";
import bannerImg from "images/Banner2.png";
import React from "react";

const Category9 = () => {
  useDocumentTitle("Category 1 | Prime Games");
  useScrollTop();

  const { category9Products, fetchcategory9Products, isLoading, error } =
    useCategory9Products();

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
                action={fetchcategory9Products}
                buttonLabel="Try Again"
              />
            ) : (
              <ProductShowcaseGrid
                products={category9Products}
                skeletonCount={6}
              />
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Category9;
