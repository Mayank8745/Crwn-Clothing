import React from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CollectionPreview from "../../components/collection-overview/collection-overview.component";
import CollectionPage from "../collection/collectionPage.component";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import { fetchCollectionStartFromAsync } from "../../redux/shop/shop.actions";
import { isSelectCollectionFetching } from "../../redux/shop/shop-selector";

const CollectionPreviewWithSpinner = WithSpinner(CollectionPreview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);
class shopPage extends React.Component {
  componentDidMount() {
    const { fetchCollectionStartFromAsync } = this.props;
    fetchCollectionStartFromAsync();
  }

  render() {
    const { match, isFetching } = this.props;
    return (
      <div className="shop-page">
        <Switch>
          <Route
            exact
            path={match.path}
            render={(props) => (
              <CollectionPreviewWithSpinner isLoading={isFetching} {...props} />
            )}
          />
          <Route
            path={`${match.path}/:collectionId`}
            render={(props) => (
              <CollectionPageWithSpinner isLoading={isFetching} {...props} />
            )}
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isFetching: isSelectCollectionFetching,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionStartFromAsync: () =>
    dispatch(fetchCollectionStartFromAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(shopPage);
