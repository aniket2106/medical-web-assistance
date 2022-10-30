const KeyMirror = require('keymirror');

export const LOGIN_SIGNUP_PANEL_TYPE = KeyMirror({
    LOGIN: null,
    SIGNUP: null
})

export const RequestState = KeyMirror({
    NULL: null,
    FETCHING: null,
    COMPLETED: null,
    ERROR: null
});

export const UserRole = KeyMirror({
    NULL: null,
    PATIENT: null,
    COUNSELOR: null,
    DOCTOR: null
});