import React from "react";
import CollectionPreview from "../../components/preview-collection/preview-collection.component.js";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { selectCollectionsForPreview } from "../../redux/shop/shop-selector";
import "./collection-overview.styles.css";

const CollectionOverview = (props) => {
  return (
    <div className="collections-overview">
      {props.collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview
          key={id}
          {...otherCollectionProps}
        ></CollectionPreview>
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionOverview);
