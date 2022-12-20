import EditWorkerPage from "./EditWorkerPage";
import { useParams } from "react-router-dom";
import ErrorPage from "../ErrorPage";

/**
 * Validates whether url is valid and whether the state contains the correct values
 */
export default function UrlValidatorWrap() {

  let { uid } = useParams();
  uid = parseInt(uid);

  if (Number.isNaN(uid) || (typeof uid === "number" && (uid < 0 || uid > 1000000))) {
    return <ErrorPage />
  } else {
    return <EditWorkerPage botId={uid} />
  }
}
