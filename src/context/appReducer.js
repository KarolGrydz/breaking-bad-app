export const appReducer = (draft, action) => {
  switch (action.type) {
    case 'changeName': {
      draft.name = action.payload;
      return;
    }
    case 'changeAge': {
      draft.age = action.payload;
    }
    default:
      return;
  }
};
