import React from "react";
import "./CollectionItem.scss";
import { withRouter } from "react-router";
// import { FixString } from "../../Utils/FixString";

const CollectionItem = ({ product }) => {
  // const { title, overview, backdrop_path, name } = item;
  // const para = Truncate(overview, 155, " ..read more");
  // var titlePath = movies ? FixString(title) : null;
  // var namePath = tvshow ? FixString(name) : null;
  console.log(product);
  return (
    <div className="collection-item">
      <div
      // onClick={() => {
      //   return movies
      //     ? history.push(`/movies/${titlePath}`)
      //     : history.push(`/tvshows/${namePath}`);
      // }}
      >
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKDlR7xrrZ2lnd9iGMcZull3uk1hhEyA4oKg&usqp=CAU"
          alt="movie"
          className="collection-item__movie-image"
        />
        <div className="collection-item__text">
          <h1 className="collection-item__title">asasdsa</h1>
          <h1 className="collection-item__title">naa</h1>
          {/* <span className="collection-item__overview">{para}</span> */}
        </div>
      </div>
    </div>
  );
};

export default withRouter(CollectionItem);
