import React from "react";
import { Route, Switch } from "react-router-dom";
import CollectionPreview from "../../components/collection-overview/collection-overview.component";
import CollectionPage from "../collection/collectionPage.component";
import {
  db,
  convertCollectionSnapshotToMap,
} from "../../firebase/firebase.utils";
import { collection, getDocs } from "firebase/firestore";
import { updateCollections } from "../../redux/shop/shop.actions";
import { connect } from "react-redux";
class shopPage extends React.Component {
  unsuscribeFromsnapshot = null;

  componentDidMount = async () => {
    const { updateCollections } = this.props;
    const collectionRef = collection(db, "collections");
    const snapShot = await getDocs(collectionRef);
    const collectionMap = await convertCollectionSnapshotToMap(snapShot);
    console.log(collectionMap);
    updateCollections(collectionMap);
  };

  render() {
    const { match } = this.props;
    return (
      <div className="shop-page">
        <Switch>
          <Route exact path={match.path} component={CollectionPreview} />
          <Route
            path={`${match.path}/:collectionId`}
            component={CollectionPage}
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
