import { MessageDisplay } from "components/common";
import { ProductShowcaseGrid } from "components/product";
import { useDocumentTitle, useRecommendedProducts, useScrollTop } from "hooks";
import bannerImg from "images/Banner2.png";
import React from "react";

const RecommendedProducts = () => {
  useDocumentTitle("Recommended Products | Prime Games");
  useScrollTop();

  const { recommendedProducts, fetchRecommendedProducts, isLoading, error } =
    useRecommendedProducts();

  return (
    <main className="content">
      <div className="featured">
        <div className="banner">
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
                action={fetchRecommendedProducts}
                buttonLabel="Try Again"
              />
            ) : (
              <ProductShowcaseGrid
                products={recommendedProducts}
                skeletonCount={6}
              />
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default RecommendedProducts;
