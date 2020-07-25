export const appReducer = (draft, action) => {
  switch (action.type) {
    case 'updateCharList':
      {
        draft.allItems = action.payload;
      }
      break;
    case 'updatePaginationSites':
      {
        try {
          draft.paginationSites = Math.ceil(
            action.payload.length / draft.ITEM_PER_PAGE
          );
        } catch (error) {
          console.log(error);
        }
      }
      break;
    case 'updateItemsOnPage':
      {
        draft.itemOnPage = draft.allItems.slice(
          action.payload * draft.ITEM_PER_PAGE - draft.ITEM_PER_PAGE,
          action.payload * draft.ITEM_PER_PAGE
        );
      }
      break;
    default:
      return;
  }
};
