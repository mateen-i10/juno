export const handle401Error = (error: any, logout: any) => {
  if (error && error.response && error.response.status === 401) {
    if (logout)
      logout()
  }
}
