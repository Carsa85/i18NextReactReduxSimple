export const openModalInfo = (
    isOpen: boolean,
    title: string,
    message: string
) => ({
    type: "OPEN_MODAL_INFO",
    isOpen,
    title,
    message
});

export const closeModalInfo = (isOpen: boolean) => ({
    type: "CLOSE_MODAL_INFO",
    isOpen
});
