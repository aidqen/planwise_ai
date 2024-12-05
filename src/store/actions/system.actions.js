import { TOGGLE_SIDEBAR} from '../reducers/system.reducer'
import { store } from '../store'

export function toggleSidebar() {
    store.dispatch({ type: TOGGLE_SIDEBAR })
}