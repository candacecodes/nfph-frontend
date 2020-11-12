export const getComments = id => {
  return async dispatch => {
    try {
      const res = await fetch(`http://localhost:3000/entries/${id}`)
      const data = await res.json()
      let comments
      let number
      if (data.comments) {
        comments = data.comments
        number = data.comments.length
      } else {
        comments = []
        number = 0
      }
      // debugger
      dispatch({type: 'LOAD_COMMENT', comments: comments, numberComments: number})
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

      dispatch({type: 'PATCH_COMMENT', comment: comment, numberComments: number})
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
