import { ArrowRightOutlined } from "@ant-design/icons";
import { MessageDisplay } from "components/common";
import { ProductShowcaseGrid } from "components/product";
import {
  FEATURED_PRODUCTS,
  RECOMMENDED_PRODUCTS,
  SHOP,
} from "constants/routes";
import {
  useDocumentTitle,
  useFeaturedProducts,
  useRecommendedProducts,
  useScrollTop,
} from "hooks";
import useCOVIDEssentialProducts from "hooks/useCOVIDEssentialProducts";
import bannerImg from "images/Banner1.png";
import React from "react";
import { Link } from "react-router-dom";
import CollectionGrid from "./CollectionGrid.jsx";

const Home = () => {
  useDocumentTitle("Prime Games | Home");
  useScrollTop();

  const {
    featuredProducts,
    fetchFeaturedProducts,
    isLoading: isLoadingFeatured,
    error: errorFeatured,
  } = useFeaturedProducts(10);
  const {
    recommendedProducts,
    fetchRecommendedProducts,
    isLoading: isLoadingRecommended,
    error: errorRecommended,
  } = useRecommendedProducts(10);
  // const {
  //   COVIDEssentialProducts,
  //   fetchCovidEssentialProducts,
  //   isLoading: isLoadingCovidEssestial,
  //   error: errorCovidEssential,
  // } = useCOVIDEssentialProducts(4);
  return (
    <main className="content">
      <div className="home">
        <div className="banner">
          <div className="banner-img">
            <img
              src="https://image.freepik.com/free-vector/hexagonal-shape-neon-light-banner_1017-19904.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="display">
          <div className="display-header">
            <h1>Category 1</h1>
            <Link to={FEATURED_PRODUCTS}>See All</Link>
          </div>
          {errorFeatured && !isLoadingFeatured ? (
            <MessageDisplay
              message={errorFeatured}
              action={fetchFeaturedProducts}
              buttonLabel="Try Again"
            />
          ) : (
            <ProductShowcaseGrid
              products={featuredProducts}
              skeletonCount={5}
            />
          )}
        </div>
        <div className="display">
          <div className="display-header">
            <h1>Category 2</h1>
            <Link to={RECOMMENDED_PRODUCTS}>See All</Link>
          </div>
          {errorRecommended && !isLoadingRecommended ? (
            <MessageDisplay
              message={errorRecommended}
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

        {/* <div className="display">
          <div className="display-header">
            <h1>COVID Essentials</h1>
            <Link to={RECOMMENDED_PRODUCTS}>See All</Link>
          </div>
          {errorRecommended && !isLoadingRecommended ? (
            <MessageDisplay
              message={errorRecommended}
              action={fetchRecommendedProducts}
              buttonLabel="Try Again"
            />
          ) : (
            <ProductShowcaseGrid
              products={recommendedProducts}
              skeletonCount={6}
            />
          )}
        </div> */}
      </div>
    </main>
  );
};

export default Home;
