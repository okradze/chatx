import { createSelector } from 'reselect'

const user = state => state.user

export const selectUser = createSelector(
    [user],
    user => user,
)
export const selectUserId = createSelector(
    [user],
    user => user._id,
)
