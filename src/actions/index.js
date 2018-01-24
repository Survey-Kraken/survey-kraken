export const ADD_QUESTION = 'ADD_QUESTION'

export function addQuestion(type) {
  console.log(type)
  return {
    type: ADD_QUESTION,
    payload: type
  }
}
