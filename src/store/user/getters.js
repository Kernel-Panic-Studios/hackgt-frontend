export function getUserType(state) {
  //   this.$axios
  //     .get("https://hackgt.azurewebsites.net/child/0")
  //     .then(response => {
  //       this.data = response.data;
  //       return this.data.type
  //     })
  //     .catch(() => {
  //         return null
  //     });
  return state.type;
}

export function getUserEmail(state) {
  // if(state.type != 'child') {
  return state.email;
  // }
}
export function getUserName(state) {
  // if(state.type != 'child') {
  return state.name;
  // }
}
