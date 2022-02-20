import React from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { collection, getDocs } from "firebase/firestore";

import CollectionPreview from "../../components/collection-overview/collection-overview.component";
import CollectionPage from "../collection/collectionPage.component";
import {
  db,
  convertCollectionSnapshotToMap,
} from "../../firebase/firebase.utils";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import { updateCollections } from "../../redux/shop/shop.actions";

const CollectionPreviewWithSpinner = WithSpinner(CollectionPreview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);
class shopPage extends React.Component {
  constructor() {
    super();

    this.state = {
      isLoading: true,
    };
  }

  unsuscribeFromsnapshot = null;

  componentDidMount = async () => {
    const { updateCollections } = this.props;
    const collectionRef = collection(db, "collections");
    const snapShot = await getDocs(collectionRef);
    const collectionMap = await convertCollectionSnapshotToMap(snapShot);
    console.log(collectionMap);
    updateCollections(collectionMap);
    this.setState({ isLoading: false });
  };

  render() {
    const { match } = this.props;
    const { isLoading } = this.state;
    return (
      <div className="shop-page">
        <Switch>
          <Route
            exact
            path={match.path}
            render={(props) => (
              <CollectionPreviewWithSpinner isLoading={isLoading} {...props} />
            )}
          />
          <Route
            path={`${match.path}/:collectionId`}
            render={(props) => (
              <CollectionPageWithSpinner isLoading={isLoading} {...props} />
            )}
          />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionMap) =>
    dispatch(updateCollections(collectionMap)),
});

export default connect(null, mapDispatchToProps)(shopPage);
