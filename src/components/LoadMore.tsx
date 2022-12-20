import { addBotsCompleteList, setPageNum } from "./redux/botSlice";
import { useSelector, useDispatch } from "react-redux";
import { URL_AWS_FETCH_LIST } from "./const/Constants";

export default function LoadMore(props: {handleClick: Function}) {

  return <>
    <button onClick={() => props.handleClick()} className="cursor-pointer mt-3 py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
      Load more
    </button>
  </>
}
