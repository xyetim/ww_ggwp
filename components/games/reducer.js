
const initialState = {
  currentDay: 1,
  currentShift: 0,
  days: [],
  order: 0,
  callOrder: [],
  clock: {
    minutes: 2,
    seconds: 30
  },
  discussion: 'ready',
  witchUseKill: false,
  witchUseSave: false,
  healedYesterday: '',
}

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INIT_FIRST_DAY':
      return  {...state, days: action.payload}
    case 'INIT_CALL_ORDER':
      return {...state, callOrder: action.payload}
    case 'NEXT_ORDER':
      return {...state, order: action.payload}
    case 'WEREWOLF_KILL':
      return {...state, days: action.payload}
    case 'DOCTOR_HEAL':
      return {...state, days: action.payload}
    case 'MARK_HEAL':
      return {...state, healedYesterday: action.payload}
    case 'WITCH_KILL':
      return {...state, days: action.payload, witchUseKill: true}
    case 'WITCH_SAVE':
      return {...state, days: action.payload, witchUseSave: true}
    case 'PEOPLE_KILL':
        return {...state, days: action.payload}
    case 'CHANGE_SHIFT':
      return {...state, currentShift: action.payload}
    case 'SEER_SEE':
      return {...state, currentShift: action.payload}
    case 'NEXT_DAY':
      return {
        ...state,
        currentDay: action.payload.currentDay,
        currentShift: action.payload.currentShift,
        days: action.payload.days,
        order: action.payload.order,
        discussion: 'ready',
      }
    case 'TOGGLE_DISCUSSION':
      return {
        ...state,
        discussion: action.payload
      }
    case 'RESET_GAME':
      return initialState
    default:
      return state
  }
}

export default gameReducer;
