const INITIAL_STATE = {
  sections: [
    {
      title: "Beanies",
      imageUrl:
        "https://images.unsplash.com/photo-1598539961898-eaf3eab30294?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
      id: 1,
      linkUrl: "beanies",
    },
    {
      title: "Jackets",
      imageUrl:
        "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1950&q=80",
      id: 2,
      linkUrl: "",
    },
    {
      title: "Sneakers",
      imageUrl:
        "https://images.unsplash.com/photo-1612821745127-53855be9cbd1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
      id: 3,
      linkUrl: "",
    },
    {
      title: "Womens",
      imageUrl:
        "https://images.unsplash.com/photo-1608915812295-417351ccf39b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
      size: "large",
      id: 4,
      linkUrl: "",
    },
    {
      title: "Mens",
      imageUrl:
        "https://images.unsplash.com/photo-1486645725491-57c86b563b91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      size: "large",
      id: 5,
      linkUrl: "",
    },
  ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
