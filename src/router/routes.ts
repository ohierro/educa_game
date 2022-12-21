import EndGame from "../views/EndGame.vue"
import Game from "../views/Game.vue"
import Home from "../views/Home.vue"
import Level from "../views/Level.vue"

const routes = [
  { path: '/', component: Home },
  { path: '/level', component: Level },
  { path: '/game', component: Game },
  { path: '/end', component: EndGame }
]

export { routes }