export default function InputText(props: { onChangeFun: Function, inputValue: string }) {

  return <>
    <div className="shadow-sm">

      <div className="flex rounded-md border-gray-300 border">
        <div className="inline-flex flex-shrink-0 justify-center items-center h-[2.875rem] w-[2.875rem] rounded-l-md border border-transparent font-semibold bg-gray-100 text-white text-sm">
          <img src="../www/ic_search.png" height={16} width={16} />
        </div>

        <input onInput={e => props.onChangeFun(e.target.value)} value={props.inputValue} type="text" name="hs-workers-name" id="hs-workers-name" placeholder="Search" className="py-3 bg-gray-200 px-4 block w-full rounded-r-md text-sm focus:border-blue-500 focus:ring-blue-500 focus:border-0 text-gray-700" />
      </div>
    </div>
  </>
}
