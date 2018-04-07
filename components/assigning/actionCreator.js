import { Router, Scene, Actions, Modal } from 'react-native-router-flux'

export const nextPlayer = () => (dispatch, getState) => {
  const { players, current } = getState().assigning;
  console.log(current);
  if (players.length > (current + 1)) {
    dispatch({
      type: 'NEXT_PLAYER',
      payload: current + 1
    })
  } else {
    const firstDay = {
          day: 1,
          shift: 0,
          survivorsAmount: players.length,
          survivors: players.map((player) => {
            return {...player, status: []}
          })
        }
    dispatch({
      type: 'INIT_FIRST_DAY',
      payload: [firstDay]
    })
    Actions.push('game')
  }
}
