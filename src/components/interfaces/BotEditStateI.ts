import BotEditI from "./BotEditI";

interface botsList {
  [key: number]: BotEditI
}

export default interface BotEditStateI {
  storedBots: botsList,
  addBot: (newBot: BotEditI, botId: number) => void
}
