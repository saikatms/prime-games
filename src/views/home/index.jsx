import { ArrowRightOutlined } from "@ant-design/icons";
import { MessageDisplay } from "components/common";
import { ProductShowcaseGrid, ProductShowcaseGridHome } from "components/product";
import {
  CATEGORY1,
  CATEGORY10,
  CATEGORY2,
  CATEGORY3,
  CATEGORY4,
  CATEGORY5,
  CATEGORY6,
  CATEGORY7,
  CATEGORY8,
  CATEGORY9,
  FEATURED_PRODUCTS,
  RECOMMENDED_PRODUCTS,
  SHOP,
} from "constants/routes";
import {
  useCategory3Products,
  useDocumentTitle,
  useFeaturedProducts,
  useRecommendedProducts,
  useScrollTop,
} from "hooks";
import useCategory10Products from "hooks/useCategory10Products.js";
import useCategory2Products from "hooks/useCategory2Products.js";
import useCategory4Products from "hooks/useCategory4Products.js";
import useCategory5Products from "hooks/useCategory5Products.js";
import useCategory6Products from "hooks/useCategory6Products.js";
import useCategory7Products from "hooks/useCategory7Products.js";
import useCategory8Products from "hooks/useCategory8Products.js";
import useCategory9Products from "hooks/useCategory9Products.js";
import useCOVIDEssentialProducts from "hooks/useCOVIDEssentialProducts";
import bannerImg from "images/Banner1.png";
import React from "react";
import { Link } from "react-router-dom";
import ContactUs from "views/contactus/index.jsx";
import { AboutUs } from "views/index.js";
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
    category2Products,
    fetchcategory2Products,
    isLoading: isLoadingCategory2,
    error: errorRecommended,
  } = useCategory2Products(10);
  const {
    category3Products,
    fetchcategory3Products,
    isLoading: isLoadingCategory3,
    error: errorCategory3,
  } = useCategory3Products(10);
  const {
    category4Products,
    fetchcategory4Products,
    isLoading: isLoadingCategory4,
    error: errorCategory4,
  } = useCategory4Products(10);
  const {
    category5Products,
    fetchcategory5Products,
    isLoading: isLoadingCategory5,
    error: errorCategory5,
  } = useCategory5Products(10);
  const {
    category6Products,
    fetchcategory6Products,
    isLoading: isLoadingCategory6,
    error: errorCategory6,
  } = useCategory6Products(10);
  const {
    category7Products,
    fetchcategory7Products,
    isLoading: isLoadingCategory7,
    error: errorCategory7,
  } = useCategory7Products(10);
  const {
    category8Products,
    fetchcategory8Products,
    isLoading: isLoadingCategory8,
    error: errorCategory8,
  } = useCategory8Products(10);
  const {
    category9Products,
    fetchcategory9Products,
    isLoading: isLoadingCategory9,
    error: errorCategory9,
  } = useCategory9Products(10);
  const {
    category10Products,
    fetchcategory10Products,
    isLoading: isLoadingCategory10,
    error: errorCategory10,
  } = useCategory10Products(10);
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
            className="home__image"
              src="https://image.freepik.com/free-vector/hexagonal-shape-neon-light-banner_1017-19904.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="display">
          <div className="display-header">
            <h1>Category 1</h1>
            <Link to={CATEGORY1}>See All</Link>
          </div>
          {errorFeatured && !isLoadingFeatured ? (
            <MessageDisplay
              message={errorFeatured}
              action={fetchFeaturedProducts}
              buttonLabel="Try Again"
            />
          ) : (
            <ProductShowcaseGridHome
              products={featuredProducts}
              skeletonCount={5}
            />
          )}
        </div>
        <div className="display">
          <div className="display-header">
            <h1>Category 2</h1>
            <Link to={CATEGORY2}>See All</Link>
          </div>
          {errorRecommended && ! isLoadingCategory2 ? (
            <MessageDisplay
              message={errorRecommended}
              action={fetchcategory2Products}
              buttonLabel="Try Again"
            />
          ) : (
            <ProductShowcaseGrid
              products={category2Products}
              skeletonCount={6}
            />
          )}
        </div>

        <div className="display">
          <div className="display-header">
            <h1>Category3</h1>
            <Link to={CATEGORY3}>See All</Link>
          </div>
          {errorRecommended && !isLoadingCategory3 ? (
            <MessageDisplay
              message={errorRecommended}
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
        <div className="display">
          <div className="display-header">
            <h1>Category4</h1>
            <Link to={CATEGORY4}>See All</Link>
          </div>
          {errorRecommended && !isLoadingCategory4 ? (
            <MessageDisplay
              message={errorRecommended}
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

        <div className="display">
          <div className="display-header">
            <h1>Category5</h1>
            <Link to={CATEGORY5}>See All</Link>
          </div>
          {errorCategory5 && !isLoadingCategory5 ? (
            <MessageDisplay
              message={errorCategory5}
              action={fetchcategory5Products}
              buttonLabel="Try Again"
            />
          ) : (
            <ProductShowcaseGrid
              products={category5Products}
              skeletonCount={6}
            />
          )}
        </div>

        <div className="display">
          <div className="display-header">
            <h1>Category6</h1>
            <Link to={CATEGORY6}>See All</Link>
          </div>
          {errorCategory6 && !isLoadingCategory6 ? (
            <MessageDisplay
              message={errorCategory6}
              action={fetchcategory6Products}
              buttonLabel="Try Again"
            />
          ) : (
            <ProductShowcaseGrid
              products={category6Products}
              skeletonCount={6}
            />
          )}
        </div>

        <div className="display">
          <div className="display-header">
            <h1>Category7</h1>
            <Link to={CATEGORY7}>See All</Link>
          </div>
          {errorRecommended && !isLoadingCategory7 ? (
            <MessageDisplay
              message={errorCategory7}
              action={fetchcategory7Products}
              buttonLabel="Try Again"
            />
          ) : (
            <ProductShowcaseGrid
              products={category7Products}
              skeletonCount={6}
            />
          )}
        </div>

        <div className="display">
          <div className="display-header">
            <h1>Category8</h1>
            <Link to={CATEGORY8}>See All</Link>
          </div>
          {errorCategory8 && !isLoadingCategory8 ? (
            <MessageDisplay
              message={errorCategory8}
              action={fetchcategory8Products}
              buttonLabel="Try Again"
            />
          ) : (
            <ProductShowcaseGrid
              products={category4Products}
              skeletonCount={6}
            />
          )}
        </div>

        <div className="display">
          <div className="display-header">
            <h1>Category9</h1>
            <Link to={CATEGORY9}>See All</Link>
          </div>
          {errorCategory9 && !isLoadingCategory9 ? (
            <MessageDisplay
              message={errorCategory9}
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

        <div className="display">
          <div className="display-header">
            <h1>Category10</h1>
            <Link to={CATEGORY10}>See All</Link>
          </div>
          {errorCategory10 && !isLoadingCategory10 ? (
            <MessageDisplay
              message={errorCategory10}
              action={fetchcategory10Products}
              buttonLabel="Try Again"
            />
          ) : (
            <ProductShowcaseGrid
              products={category10Products}
              skeletonCount={6}
            />
          )}
        </div>
        <AboutUs/>
        <ContactUs/>
     
      </div>
    </main>
  );
};

export default Home;
