import React from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import CollectionOverviewContainer from "../../components/collection-overview/collection-overview.container";
import { fetchCollectionStartFromAsync } from "../../redux/shop/shop.actions";
import CollectionPageContainer from "../collection/collectionPage.container";

class shopPage extends React.Component {
  componentDidMount() {
    const { fetchCollectionStartFromAsync } = this.props;
    fetchCollectionStartFromAsync();
  }

  render() {
    const { match } = this.props;

    return (
      <div className="shop-page">
        <Switch>
          <Route
            exact
            path={match.path}
            component={CollectionOverviewContainer}
          />
          <Route
            path={`${match.path}/:collectionId`}
            component={CollectionPageContainer}
          />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionStartFromAsync: () =>
    dispatch(fetchCollectionStartFromAsync()),
});

export default connect(null, mapDispatchToProps)(shopPage);
