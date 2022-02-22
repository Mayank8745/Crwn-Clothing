import { compose } from "redux";
import { connect } from "react-redux";
import { isSelectCollectionFetching } from "../../redux/shop/shop-selector";
import WithSpinner from "../with-spinner/with-spinner.component";
import CollectionOverview from "./collection-overview.component";
import { createStructuredSelector } from "reselect";

const mapStateToProps = createStructuredSelector({
  isLoading: isSelectCollectionFetching,
});

const CollectionOverviewContainer = compose(
  connect(mapStateToProps)(WithSpinner(CollectionOverview))
);

export default CollectionOverviewContainer;
