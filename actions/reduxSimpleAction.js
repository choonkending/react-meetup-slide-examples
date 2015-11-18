export function typing(text) {
  return {
    type: 'TYPING',
    newTopic: text
  };
}