import { compose } from "redux";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectIsCollectionsLoaded } from "../../redux/shop/shop-selector";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import CollectionPage from "./collectionPage.component";

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectIsCollectionsLoaded(state),
});

const CollectionPageContainer = compose(
  connect(mapStateToProps)(WithSpinner(CollectionPage))
);

export default CollectionPageContainer;
