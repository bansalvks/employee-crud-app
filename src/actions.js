export const EMPLOYEE_ACTIONS = {
    CREATE_EMPLOYEE: 'CREATE_EMPLOYEE',
    UPDATE_EMPLOYEE: 'UPDATE_EMPLOYEE',
    REMOVE_EMPLOYEE: 'REMOVE_EMPLOYEE',
    FIND_EMPLOYEE: 'FIND_EMPLOYEE',
}

export const createEmployee = (payload) => ({
    type: EMPLOYEE_ACTIONS.ADD_BUCKET,
    ...payload,
})

export const updateEmployee = (payload) => ({
    type: EMPLOYEE_ACTIONS.ADD_TASK,
    ...payload,
})

export const removeEmployee = (payload) => ({
    type: EMPLOYEE_ACTIONS.DONE_TASK,
    ...payload,
})

export const findEmployee = (payload) => ({
    type: EMPLOYEE_ACTIONS.REMOVE_TASK,
    ...payload,
})

export default {
    EMPLOYEE_ACTIONS,
    createEmployee,
    updateEmployee,
    removeEmployee,
    findEmployee,
}