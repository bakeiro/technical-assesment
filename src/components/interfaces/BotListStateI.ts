import BotListI from "./BotListI";

export default interface BotListStateI {
  valueToFilter: string,
  setValueToFilter: (newValue: string) => void,
  filteredListRobots: BotListI[],
  currentPage: number,
  setPageNumber: (page: number) => void,
  loadedBots: BotListI[],
  addBots: (newBots: BotListI[]) => void
}
