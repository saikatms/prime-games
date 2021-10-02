import { MessageDisplay } from "components/common";
import { ProductShowcaseGrid } from "components/product";
import { useCategory3Products, useDocumentTitle, useFeaturedProducts, useScrollTop } from "hooks";
import bannerImg from "images/Banner2.png";
import React from "react";

const Category3 = () => {
  useDocumentTitle("Category 3 | Prime Games");
  useScrollTop();

  const { category3Products,fetchcategory3Products, isLoading, error } =
    useCategory3Products();

    console.log("category 3");
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
                action={fetchcategory3Products}
                buttonLabel="Try Again"
              />
            ) : (
              <ProductShowcaseGrid
                products={category3Products}
                skeletonCount={6}
              />
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Category3;
