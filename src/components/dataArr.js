const newsArr = [
  {
    id: 1,
    title: "News tittle 1"
  },
  {
    id: 2,
    title: "News tittle 2"
  },
  {
    id: 3,
    title: "News tittle 3"
  }
];

const messagesArr = [
  {
    id: 1,
    title: "Message 1"
  },
  {
    id: 2,
    title: "Message 2"
  },
  {
    id: 3,
    title: "Message 3"
  }
];

function changeNew(id) {
  return newsArr.find(item => item.id === Number(id));
}

function changeMessage(id) {
  return messagesArr.find(item => item.id === Number(id));
}

export { newsArr, messagesArr, changeNew, changeMessage };
