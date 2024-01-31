import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ItemsSliceActions } from "../store/itemSlice";
import { FetchStatusActions } from "../store/FetchStatusSlice";

function FetchingItems() {
  const fetchstatus = useSelector((store) => store.fetchstatus);

  const dispatch = useDispatch();
  useEffect(() => {
    if (fetchstatus.fetchDone) return;
    const controller = new AbortController();
    const signal = controller.signal;
    dispatch(FetchStatusActions.markFetchStarted());
    const handleonFetch = async () => {
      const response = await fetch("http://localhost:8080/items", signal);
      const data = await response.json();
      dispatch(ItemsSliceActions.addInitialItems(data.items));
      dispatch(FetchStatusActions.markFetchDone());
      dispatch(FetchStatusActions.markFetching());
    };
    handleonFetch();
    return () => {
      controller.abort();
    };
  }, [fetchstatus]);
  return <></>;
}

export default FetchingItems;
