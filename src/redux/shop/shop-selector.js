import memoize from "lodash.memoize";
import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
  selectShop,
  (selectShopCollection) => {
    return selectShopCollection.sections;
  }
);

// First Create Array of Keys of Collections and then one by one replace the keys with object values.

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  (collections) => {
    return collections
      ? Object.keys(collections).map((key) => {
          return collections[key];
        })
      : [];
  }
);

export const selectCollection = memoize((collectionUrlParam) =>
  createSelector(selectCollections, (selectCollectionsItems) => {
    return selectCollectionsItems[collectionUrlParam];
  })
);

export const isSelectCollectionFetching = createSelector(selectShop, (data) => {
  return data.isFetching;
});
