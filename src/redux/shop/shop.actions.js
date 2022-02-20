import ShopActionTypes from "./shop-action-types";
import { collection, getDocs } from "firebase/firestore";
import {
  db,
  convertCollectionSnapshotToMap,
} from "../../firebase/firebase.utils";

export const fetchCollectionStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTION_START,
});

export const fetchCollectionSuccess = (collectionMap) => ({
  type: ShopActionTypes.FETCH_COLLECTION_SUCCESS,
  payload: collectionMap,
});

export const fetchCollectionError = (message) => ({
  type: ShopActionTypes.FETCH_COLLECTION_ERROR,
  payload: message,
});

export const fetchCollectionStartFromAsync = () => {
  return async (dispatch) => {
    try {
      const collectionRef = collection(db, "collections");
      dispatch(fetchCollectionStart());
      const snapShot = await getDocs(collectionRef);
      const collectionMap = await convertCollectionSnapshotToMap(snapShot);
      dispatch(fetchCollectionSuccess(collectionMap));
    } catch (err) {
      dispatch(fetchCollectionError(err.message));
    }
  };
};
