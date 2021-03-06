import Games from './games'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import * as gameActionCreators from './actionCreators'

const mapStateToProps = (state: Object) => ({
    currentDay: state.game.currentDay,
    currentShift: state.game.currentShift,
    days: state.game.days,
    order: state.game.order,
    clock: state.game.clock,
    discussion: state.game.discussion,
    callOrder: state.game.callOrder,
    witchUseSave: state.game.witchUseSave,
    witchUseKill: state.game.witchUseKill,
    healedYesterday: state.game.healedYesterday,
    players: state.assigning.players
})

const mapDispatchToProps = (dispatch: Function) => bindActionCreators({
  ...gameActionCreators
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Games);
