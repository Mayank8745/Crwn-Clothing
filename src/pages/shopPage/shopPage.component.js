import React from "react";
import { Route, Switch } from "react-router-dom";
import CollectionPreview from "../../components/collection-overview/collection-overview.component";
import CollectionPage from "../collection/collectionPage.component";

const shopPage = ({ match }) => {
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
};

export default shopPage;
