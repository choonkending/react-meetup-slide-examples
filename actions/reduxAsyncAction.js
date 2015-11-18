function create(data) {
  return {
    type: 'CREATE_TOPIC',
    count: data.count,
    text: data.text
  };
}

export function createTopic(text) {
  return dispatch => {
    const data = {
      count: 1,
      text: text
    };

    dispatch(create(data));

    return fetch('/topic', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => {});
  };
  
}