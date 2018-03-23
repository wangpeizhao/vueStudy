// state
const state = {
	roleSelected: [],
	roleParentId: [],
	roleNode : []
}

// mutations
const mutations = {
	roleSelectedAdd (state,id) {
    	if(state.roleSelected.length==0 && typeof(id) == 'object'){
    		state.roleSelected = id;
    		return true;
    	}
      state.roleSelected.push(id);
    },
    roleSelectedDel (state,id) {
  		let index = state.roleSelected.indexOf(id);
  		if(index > -1){
  			state.roleSelected.splice(index, 1);
  		}
    },
    roleParentId (state,pIds){
    	state.roleParentId = pIds;
    },
    roleNodeAdd (state,id) {
      if(state.roleNode.length==0 && typeof(id) == 'object'){
        state.roleNode = id;
        return true;
      }
      state.roleNode.push(id);
    },
    roleNodeDel (state,id) {
      let index = state.roleNode.indexOf(id);
      if(index > -1){
        state.roleNode.splice(index, 1);
      }
    },
    roleNodeEmpty(state){
      state.roleNode = [];
    }
}

//actions
const actions = {
	roleSelectedAdd (context,id) {
      context.commit('roleSelectedAdd',id)
    },
    roleSelectedDel (context,id) {
      context.commit('roleSelectedDel',id)
    },
    roleParentId (context,id) {
      context.commit('roleParentId',id)
    },
    roleNodeAdd (context,id) {
      context.commit('roleNodeAdd',id)
    },
    roleNodeDel (context,id) {
      context.commit('roleNodeDel',id)
    },
    roleNodeEmpty (context) {
      context.commit('roleNodeEmpty')
    },
}

export {
	state,
	mutations,
	actions
}
