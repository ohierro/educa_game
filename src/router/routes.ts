import EndGame from "../views/EndGame.vue"
import Game from "../views/Game.vue"
import Home from "../views/home.vue"
import Level from "../views/level.vue"

const routes = [
  { path: '/', component: Home },
  { path: '/course', component: Level },
  { path: '/game', component: Game },
  { path: '/end', component: EndGame }
]

export { routes }