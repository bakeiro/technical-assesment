import { useRouteError } from "react-router-dom";

export default function ErrorPage() {

  const error: any = useRouteError();

  return <>
    <div className="relative bg-white shadow-sm rounded-xl">
      <div className="absolute top-0 left-0 right-0 text-center">
        <div className="p-4 md:p-5">
          <h1 className="text-lg font-bold text-gray-800">Oops!</h1>
          <div className="mt-1 text-gray-800">
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
              {error &&
                <i>{error.statusText || error.message}</i>
              }
            </p>
          </div>
          <p className="mt-5 text-xs text-gray-500">
            Last updated 5 mins ago
          </p>
        </div>
      </div>
    </div>
  </>
}