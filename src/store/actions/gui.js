import KeyMirror from "keymirror";
import { CLOSE_MESSAGE_MODAL, OPEN_MESSAGE_MODAL } from "../types";

export const MessageType = KeyMirror({
    SUCCESS: null,
    WARNING: null,
    ERROR: null
});

export const openSuccessMessageModal = (message) => async (dispatch) => {
    dispatch({ type: OPEN_MESSAGE_MODAL, message: message, messageType: MessageType.SUCCESS });
}

export const openErrorMessageModal = (message) => async (dispatch) => {
    dispatch({ type: OPEN_MESSAGE_MODAL, message: message, messageType: MessageType.SUCCESS });
}

export const closeMessageModal = () => async (dispatch) => {
    dispatch({ type: CLOSE_MESSAGE_MODAL });
}