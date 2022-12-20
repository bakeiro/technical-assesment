import LinkButton from "../LinkButton";
import { useGetBotByIdQuery } from "../redux/botAPI";

export default function EditWorkerPage(props: {botId: number}) {

  const { data = [], isLoading } = useGetBotByIdQuery(props.botId);

  if (isLoading) {
    return <>Loading...</>
  } else {
    const htmlString = data.quota.substring(0, 500) + "...";

    return <>
      <div className="flex flex-col md:flex-row">
        <img className="w-96" src={data.image} />

        <div className="ml-4 ">
          <p className="text-lg">{data.first_name} {data.last_name}</p>
          <p className="text-gray-500">{data.profession}</p>

          <p className="text-gray-500">{data.gender === "F" ? "Female" : "Male"}</p>
          <div dangerouslySetInnerHTML={{ __html: htmlString }} />

          <LinkButton to="/" text="Back to results" />
        </div>
      </div>
    </>
  }

}
