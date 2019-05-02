type IAction = {
    type: string;
    isOpen: boolean;
    title: string;
    message: string;
};

type MyState = {
    isOpen: boolean;
    title: string;
    message: string;
};

const modalManager = (
    state: MyState = { isOpen: false, title: "", message: "" },
    action: IAction
) => {
    let nexState: MyState = state;

    switch (action.type) {
        case "OPEN_MODAL_INFO":
            nexState = {
                isOpen: action.isOpen,
                title: action.title,
                message: action.message
            };
            console.log("open modal info:",nexState);
            return nexState;
        case "CLOSE_MODAL_INFO":
            nexState = {
                isOpen: false,
                title: "",
                message: ""
            };
            console.log("close modal info:",nexState);
            return nexState;
        default:
            return nexState;
    }
};

export default modalManager;
