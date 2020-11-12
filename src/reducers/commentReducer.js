export default function commentReducer(state = {}, action) {
  switch (action.type){
      case 'LOAD_COMMENT':
          return {comments: action.allComments}
      case 'PATCH_COMMENT':
          return {comment: action.comment}
      case 'DELETE_COMMENT':
          return {}
      default:
          return state
  }
}