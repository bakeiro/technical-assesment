import { Link } from "react-router-dom";

export default function LinkButton(props: {to: string, text: string}) {
  return <Link className="mt-3 py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800" to={props.to}>{props.text}</Link>
}