import Card from "../Card";
import InputText from "../InputText";
import LinkButton from "../LinkButton";
import BotListI from "../interfaces/BotListI";
import { useEffect, useState } from "react";
import { useGetBotsPageQuery } from "../redux/botAPI";

function filterBotsListByWord(filterString: string, allBots: Array<BotListI>): Array<BotListI> {
  let filteredBots = allBots.filter((bot) => {
    return `${bot.first_name} ${bot.last_name}`.includes(filterString) || bot.profession.includes(filterString);
  });
  return filteredBots;
}

export default function ListWorkersPage(props: {page: number, setPage:Function}) {

  const [botsFilteredList, setBotsFilteredList] = useState([]);
  const [valueToFilter, setValueToFilter] = useState("");
  const { data = [] } = useGetBotsPageQuery(props.page);

  useEffect(() => {
    if (data.length) {
      setBotsFilteredList(filterBotsListByWord(valueToFilter, data));
    }
  }, [data]);

  function filterList(newValue: string) {
    setValueToFilter(newValue);
    setBotsFilteredList(filterBotsListByWord(newValue, data));
  }

  return <>
    <p className="text-black text-center text-3xl">Find your Oompa loompa</p>
    <p className="text-gray-600 text-center text-lg mb-4">there are more than 100k!</p>

    <InputText onChangeFun={filterList} inputValue={valueToFilter} />

    <br />

    <div>
      {botsFilteredList && botsFilteredList.map((value, index) => {
        return <div className="inline-block m-2" key={index}>
          <Card image={value.image} title={`${value.first_name} ${value.last_name}`} text={value.profession} link={<LinkButton text="Edit" to={`/${value.id}`} />} />
        </div>
      })}
    </div>

    <button onClick={() => props.setPage(props.page + 1)} className="cursor-pointer mt-3 py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
      Load more
    </button>

    <br />
  </>
}