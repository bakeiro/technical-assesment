export default function Card(props: { image: string, title: string, text: string, link: JSX.Element }) {

  return <div className="w-48 flex flex-col bg-white border shadow-sm rounded-xl border-gray-400 shadow-sm">
    <img className="w-48 h-auto rounded-t-xl" src={props.image} />
    <div className="p-4 md:p-5">
      <h3 className="text-lg font-bold text-gray-700">
        {props.title}
      </h3>
      <p className="mt-1 text-gray-700">
        {props.text}
      </p>

      {props.link &&
        props.link
      }

    </div>
  </div>
}