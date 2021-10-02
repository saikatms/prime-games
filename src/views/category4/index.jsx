import { MessageDisplay } from "components/common";
import { ProductShowcaseGrid } from "components/product";
import {  useDocumentTitle, useFeaturedProducts, useScrollTop } from "hooks";
import useCategory4Products from "hooks/useCategory4Products";
import bannerImg from "images/Banner2.png";
import React from "react";

const Category4 = () => {
  useDocumentTitle("Category 4 | Prime Games");
  useScrollTop();

  const { category4Products,fetchcategory4Products, isLoading, error } =
    useCategory4Products();
  console.log("category 4");
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
                action={fetchcategory4Products}
                buttonLabel="Try Again"
              />
            ) : (
              <ProductShowcaseGrid
                products={category4Products}
                skeletonCount={6}
              />
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Category4;
