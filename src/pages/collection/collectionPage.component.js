import React from "react";
import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/shop-selector";
import CollectionItem from "../../components/collection-item/collection-item.component";
import "./collectionPage.css";

const CollectionPage = (props) => {
  const { title, items } = props.collections;
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item}></CollectionItem>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownsProps) => ({
  collections: selectCollection(ownsProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
