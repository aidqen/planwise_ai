export const LOADING_START = 'LOADING_START'
export const LOADING_DONE = 'LOADING_DONE'
export const TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR'
export const SET_YEAR = 'SET_YEAR'

const initialState = {
  isLoading: false,
  isSidebarOpen: false,
  year: null
}

export function systemReducer (state = initialState, action = {}) {
  switch (action.type) {
    case LOADING_START:
      return { ...state, isLoading: true }
    case LOADING_DONE:
      return { ...state, isLoading: false }
    case TOGGLE_SIDEBAR:
      return { ...state, isSidebarOpen: !state.isSidebarOpen }
    case SET_YEAR:
      return { ...state, year: action.year }
    default: return state
  }
}
