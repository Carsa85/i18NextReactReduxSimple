export const changeLeftMenuState = (newState: boolean) => ({
    type: "CHANGE_LEFT_MENU_STATE",
    newState
});

export const changeRightMenuState = (newState: boolean) => ({
    type: "CHANGE_RIGHT_MENU_STATE",
    newState
});
