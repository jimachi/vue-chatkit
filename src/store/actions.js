import chatkit from "../chatkit"

// Helper function for displaying error messages
function handleError(commit, error) {
  const message = error.message || error.info.error_description;
  commit("setError", message);
}


export default {
  async login({ commit, state }, userId) {
    try {
      commit("setError", "");
      commit("setLoading", true);
      // Connect user to Chatkit service
      const currentUser = await chatkit.connectUser(userId);
      commit("setUser", {
        username: currentUser.id,
        name: currentUser.name
      });
      

      const rooms = currentUser.rooms.map(room => ({
        id: room.id,
        name: room.name
      }));
      commit("setRooms", rooms);

      const activeRoom = state.ActiveRoom || rooms[0];
      console.log("acR", activeRoom)
      commit("setActiveRoom", {
        id: activeRoom.id,
        name: activeRoom.name
      });
      await chatkit.subscribeToRoom(activeRoom.id);
      commit("setReconnect", false);

      return true;
    } catch(error) {
      handleError(commit, error)
    } finally {
      commit("setLoading", false);
    }
  },
  async changeRoom({ commit }, roomId) {
    try {
      const { id, name } = await chatkit.subscribeToRoom(roomId);
      commit("setActiveRoom", { id, name });
    } catch(error) {
      handleError(commit, error);
    }
  }
}