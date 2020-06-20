import {
    take,
    put,
    select
} from 'redux-saga/effects';
import uuid from 'uuid';
import axios from 'axios';
import * as mutations from './mutations';

const URL = 'http://localhost:3000';

export function* taskCreationSaga() {
    while (true) {
        const { groupId } = yield take(mutations.REQUEST_TASK_CREATION);
        const taskId = uuid();
        const ownerId = 'U1'
        yield put(mutations.createTask(taskId, groupId, ownerId));
        const { res } = yield axios.post(URL + '/task/new', {
            task: {
                id: taskId,
                group: groupId,
                owner: ownerId,
                name: 'New Task',
                isComplete: false
            }
        });
        console.log(res);
    }
}

export function* taskModificationSaga() {
    while (true) {
        const task = yield take([
            mutations.SET_TASK_COMPLETION,
            mutations.SET_TASK_GROUP,
            mutations.SET_TASK_NAME
         ]);

        const { res } = yield axios.post(URL + '/task/update', {
            task: {
                id: task.taskId,
                group: task.groupId,
                owner: task.ownerId,
                name: task.name,
                isComplete: task.isComplete
            }
        });
        console.log(res);
    }
}