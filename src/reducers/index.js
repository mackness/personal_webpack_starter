
const count = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT_COUNT':
      state++
      return state
    default:
      return state
  }
}

export default count
