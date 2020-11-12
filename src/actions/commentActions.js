export const getComments = id => {
  return async dispatch => {
    try {
      const res = await fetch(`http://localhost:3000/entries/${id}`)
      const data = await res.json()
      const comments = data.comments
      const number = 1
      // debugger
      dispatch({type: 'LOAD_COMMENT', allComments: comments, numberComments: number})
    } catch (err) {
      console.log('Error retrieving comments:', err)
    }
  }
}

export const editComment = id => {
  return async dispatch => {
    try {
      const res = await fetch(`http://localhost:3000/comments/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
      })
      const comment = await res.json()

      dispatch({type: 'PATCH_COMMENT', comment: comment})
    } catch (err) {
      console.log('Error editing comments:', err)
    }
  }
}

export const deleteComment = id => {
  return async dispatch => {
    try {
      const res = await fetch(`http://localhost:3000/comments/${id}`, {
        method: 'DELETE',
      })

      dispatch({type: 'DELETE_COMMENT'})
    } catch (err) {
      console.log('Error deleting comment:', err)
    }
  }
}
