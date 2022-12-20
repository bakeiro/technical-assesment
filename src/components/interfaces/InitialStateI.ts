import BotListI from "./BotListI";

export default interface InitialStateI {
  valueToFilterCompleteList: string,
  pageNum: number,
  botsCompleteList: BotListI[],
  botsFilteredList: BotListI[],
  botsEditList: BotListI[]
}