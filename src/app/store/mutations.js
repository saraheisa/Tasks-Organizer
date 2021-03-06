export const REQUEST_TASK_CREATION = 'REQUEST_TASK_CREATION';
export const CREATE_TASK = 'CREATE_TASK';
export const SET_TASK_COMPLETION = 'SET_TASK_COMPLETION';
export const SET_TASK_NAME = 'SET_TASK_NAME';
export const SET_TASK_GROUP = 'SET_TASK_GROUP';
export const REQUEST_AUTHENTICATE_USER = 'REQUEST_AUTHENTICATE_USER';
export const PROCESSING_AUTHENTICATE_USER = 'PROCESSING_AUTHENTICATE_USER';
export const AUTHENTICATING = 'AUTHENTICATING';
export const AUTHENTICATED = 'AUTHENTICATED';
export const NOT_AUTHENTICATED = 'NOT_AUTHENTICATED';
export const SET_STATE = 'SET_STATE';
export const REQUEST_COMMENT_CREATION = 'REQUEST_COMMENT_CREATION';
export const CREATE_COMMENT = 'CREATE_COMMENT';
export const REQUEST_USER_CREATION = 'REQUEST_USER_CREATION';
export const PROCESSING_USER_CREATION = 'PROCESSING_USER_CREATION';

export const requestTaskCreation = (groupId, ownerId) => ({
    type: REQUEST_TASK_CREATION,
    groupId,
    ownerId
});

export const createTask = (taskId, groupId, ownerId) => ({
        type: CREATE_TASK,
        taskId,
        groupId,
        ownerId
});

export const setTaskCompletion = (taskId, isComplete) => ({
    type: SET_TASK_COMPLETION,
    taskId,
    isComplete
});

export const setTaskName = (taskId, name) => ({
    type: SET_TASK_NAME,
    taskId,
    name
});

export const setTaskGroup = (taskId, groupId) => ({
    type: SET_TASK_GROUP,
    taskId,
    groupId
});

export const requestAuthenticateUser = (username, password) => ({
    type: REQUEST_AUTHENTICATE_USER,
    username,
    password
});

export const processingAuthenticateUser = (status = AUTHENTICATING, session = null) => ({
    type: PROCESSING_AUTHENTICATE_USER,
    session,
    authenticated: status
});

export const setState = (state) => ({
    type: SET_STATE,
    state
});

export const requestCommentCreation = (owner, task, content) => ({
    type: REQUEST_COMMENT_CREATION,
    owner,
    task,
    content
});

export const createComment = (id, owner, task, content) => ({
    type: CREATE_COMMENT,
    id,
    owner,
    task,
    content
});

export const requestUserCreation = (name, password) => ({
    type: REQUEST_USER_CREATION,
    name,
    password
});
