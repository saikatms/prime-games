import { ArrowLeftOutlined, LoadingOutlined } from "@ant-design/icons";
import { ColorChooser, ImageLoader, MessageDisplay } from "components/common";
import { ProductShowcaseGrid } from "components/product";
import { RECOMMENDED_PRODUCTS, SHOP } from "constants/routes";
import { displayMoney } from "helpers/utils";
import {
  useBasket,
  useDocumentTitle,
  useProduct,
  useRecommendedProducts,
  useScrollTop,
} from "hooks";
import React, { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Select from "react-select";
import products from "views/admin/products";
import imageDefault from "images/Medicinicon1.png";

const ViewProduct = () => {
  const { id } = useParams();
  const { product, isLoading, error } = useProduct(id);
  console.log(product);
  const { addToBasket, isItemOnBasket } = useBasket(product);
  useScrollTop();
  useDocumentTitle(`View ${product?.gameName || "Game"}`);
  const [selectedImage, setSelectedImage] = useState(
    product?.imageDatas?.[0].downloadPath || imageDefault
  );
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");

  const {
    recommendedProducts,
    fetchRecommendedProducts,
    isLoading: isLoadingFeatured,
    error: errorFeatured,
  } = useRecommendedProducts(6);
  const colorOverlay = useRef(null);

  useEffect(() => {
    setSelectedImage(product?.image);
  }, [product]);

  const onSelectedSizeChange = (newValue) => {
    setSelectedSize(newValue.value);
  };

  const onSelectedColorChange = (color) => {
    setSelectedColor(color);
    if (colorOverlay.current) {
      colorOverlay.current.value = color;
    }
  };

  const handleAddToBasket = () => {
    addToBasket({
      ...product,
      // selectedColor,
      // selectedSize: selectedSize || product.sizes[0],
    });
  };

  return (
    <main className="content">
      {isLoading && (
        <div className="loader">
          <h4>Loading Product...</h4>
          <br />
          <LoadingOutlined style={{ fontSize: "3rem" }} />
        </div>
      )}
      {error && <MessageDisplay message={error} />}
      {product && !isLoading && (
        <div className="product-view">
          <Link to={SHOP}>
            <h3 className="button-link d-inline-flex">
              <ArrowLeftOutlined />
              &nbsp; Back to Home
            </h3>
          </Link>
          <div className="product-modal">
            {/* {product.imageDatas.length !== 0 && (
              <div className="product-modal-image-collection">
                {product.imageDatas.map((image) => (
                  <div
                    className="product-modal-image-collection-wrapper"
                    key={image.id}
                    onClick={() => setSelectedImage(image.url)}
                    role="presentation"
                  >
                    <ImageLoader
                      className="product-modal-image-collection-img"
                      src={image.url}
                    />
                  </div>
                ))}
              </div>
            )} */}
            <div className="product-modal-image-wrapper">
              {/* {selectedColor && (
                <input
                  type="color"
                  disabled
                  ref={colorOverlay}
                  id="color-overlay"
                />
              )} */}
              <h2>Game Name</h2>
              {product?.imageDatas?.[0].downloadPath ? (
                <ImageLoader
                  alt={product.gameName}
                  className="product-modal-image"
                  src={product.imageDatas[0].downloadPath}
                />
              ) : (
                <>
                  <ImageLoader
                    alt={product.gameName}
                    className="product-modal-image-default"
                    src={imageDefault}
                  />
                </>
              )}
              <h2>Description</h2>
              <div className="divider" />

              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
            <div className="product-modal-details">
              <div className="game-details-header">
                <h1>Game Details</h1>
              </div>
              <div className="game-details">
                <h2>Game Details</h2>
                <h2>Google Play</h2>
              </div>
              <div className="divider" />
              <div className="game-details">
                <h2>Game Category</h2>
                <h2>{product.category}</h2>
              </div>
              <div className="divider" />

              <div className="game-details">
                <h2>Downloads</h2>
                <h2>{product.downloads}</h2>
              </div>
              <div className="divider" />
              <div className="game-details">
                <h2>Source File</h2>
              </div>
              <div className="divider" />
              <div className="game-details">
                <h2>Software Use</h2>
                <h2>{product.softwareUsed}</h2>
              </div>
              <div className="divider" />
              <div className="game-details">
                <h2>Plugins</h2>
                <h2>{product.plugins}</h2>
              </div>
              <div className="divider" />
              <div className="game-details">
                <h2>Graphics</h2>
              </div>
              <div className="divider" />
              <div className="game-details">
                <h2>Original</h2>
                <h2>{product.original}</h2>
              </div>
              <div className="divider" />
              <div className="game-details">
                <h2>Can Change</h2>
                <h2>{product.softwareUsed}</h2>
              </div>
              <div className="divider" />
              <div className="game-details">
                <h2>Software Use</h2>
                <h2>{product.softwareUsed}</h2>
              </div>
              <br />
              <div className="divider" />
              <br />

              <h2>License to the Game Source code</h2>
              <div className="game-details">
                <h2>Summery:</h2>
                <h2>$3000</h2>
              </div>
              {/* <h1>{displayMoney(product.price)}</h1> */}
              <div className="product-modal-action">
                <button
                  className={`button button-small
                    ${
                      isItemOnBasket(product.id)
                        ? "button-border button-border-gray"
                        : ""
                    }
                    `}
                  onClick={handleAddToBasket}
                  type="button"
                >
                  {isItemOnBasket(product.id)
                    ? "Remove From Cart"
                    : "Add To Cart"}
                </button>
              </div>
            </div>
          </div>
          <div style={{ marginTop: "10rem" }}>
            <div className="display-header">
              <h1>Recommended</h1>
              <Link to={RECOMMENDED_PRODUCTS}>See All</Link>
            </div>
            {errorFeatured && !isLoadingFeatured ? (
              <MessageDisplay
                message={error}
                action={fetchRecommendedProducts}
                buttonLabel="Try Again"
              />
            ) : (
              <ProductShowcaseGrid
                products={recommendedProducts}
                skeletonCount={3}
              />
            )}
          </div>
        </div>
      )}
    </main>
  );
};

export default ViewProduct;
