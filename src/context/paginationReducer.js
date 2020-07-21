export const paginationReducer = (draft, action) => {
  switch (action.type) {
    case 'changeName': {
      draft.name = action.payload;
      return;
    }
    default:
      return;
  }
};
