import Game from "../views/game.vue"
import Home from "../views/home.vue"
import Level from "../views/level.vue"

const routes = [
  { path: '/', component: Home },
  { path: '/course', component: Level },
  { path: '/game', component: Game }
]

export { routes }