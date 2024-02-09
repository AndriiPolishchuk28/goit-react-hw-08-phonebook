export const selectIsLoggenIn = state => state.auth.isLoggedIn;
export const selectName = state => state.auth.user.name;
export const selectFetchingCurrentUser = state => state.auth.isRefreshingUser;
