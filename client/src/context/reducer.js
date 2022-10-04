
const reducer = (state, action) => {
  throw Error(`no such action : ${action.type}` )
}

export default reducer
