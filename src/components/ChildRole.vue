<template>
	<div v-if="roles" :class="roles.deepClass + `_level clearfix`">
		<div :class="roles.deepClass + `_left`">
			<div class="role-name">
				<div class="selected">
					<input type="checkbox" :name="`permissions[` + roles.pid + `][` + roles.id + `]`" 
						:value="roles.id" :cid="roles.id" :pid="roles.pid" class="dn" :checked="roles.checked" :param="roles.parameter">
				    <el-tooltip class="item" effect="dark" :disabled="roles.title.length>5?false:true" :content="roles.title" placement="top">
				      <el-button size="small" @click="doSelected(roles.id,roles.childs.hasOwnProperty(0)?true:false)">{{roles.title}}</el-button>
				    </el-tooltip>
				    <i class="iconfont-add" v-show="this.$store.state.roleSelected.includes(roles.id)">&#xe67e;</i>
				</div>
				<a v-if="roles.childs.hasOwnProperty(0)" class="toggle" @click="doNode(roles.id)">
          <i class="iconfont-add">{{this.$store.state.roleNode.includes(roles.id)?'&#xe71b;':'&#xe659;'}}</i>
        </a><!-- &#xe659; -->
			</div>
		</div>
		<div :class="roles.deepClass + `_right js-content`" v-show="this.$store.state.roleNode.includes(roles.id)">
			<template v-for="(role,i) in roles.childs">
				<childrole :roles="role"></childrole>
			</template>
		</div>
	</div>
	
</template>
<style scoped>
  .selected button{
    width: 90px!important;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding: 9px 10px!important;
  }
  .role-name{
  	width: 120px;
  	text-align: left;
  	padding-left: 15px;
  	margin-top: 5px;
  }
</style>

<script>
  export default {
  	name: 'childrole',
  	props: ['roles','selected'], 
    data() {
      return {
        dn : false
      }
    },
    methods: {
      doSelected(id,hasChilds){//add or remove the `√`.
      	if(this.$store.state.roleSelected.includes(id)){
      		this.$store.dispatch('roleSelectedDel',id);
      		this.doParentSelectedDel(id);
      		this.doChildSelectedDel(id,hasChilds);
      	}else{
      		this.$store.dispatch('roleSelectedAdd',id);
      		this.doParentSelectedAdd(id);
          this.doChildSelectedAdd(id,hasChilds);
      	}
      },
      doParentSelectedAdd(id){//add the `√` to parents.
      	let roleParentId = this.$store.state.roleParentId;
      	if(typeof(roleParentId[id]) == 'undefined'){
      		return false;
      	}
      	let _id = roleParentId[id];
      	if(!this.$store.state.roleSelected.includes(_id)){
      		this.$store.dispatch('roleSelectedAdd',_id);
      	}
      	this.doParentSelectedAdd(_id);
      },
      doChildSelectedAdd(id,hasChilds){//add the `√` to childs.
        if(!hasChilds){
          return false;
        }
        let roleParentId = this.$store.state.roleParentId;
        for(let i in roleParentId){
          if(roleParentId[i] == id){
            this.$store.dispatch('roleSelectedAdd',i);
            this.doChildSelectedAdd(i,hasChilds);
          }
        }
      },
      doParentSelectedDel(id){//remove the `√` from parents.
      	let roleParentId = this.$store.state.roleParentId;
      	if(typeof(roleParentId[id]) == 'undefined' || roleParentId[id] == 0){
      		return false;
      	}
      	let _id = roleParentId[id];
      	if(!this.checkInRoleParentId(roleParentId,_id)){
      		this.$store.dispatch('roleSelectedDel',_id);
      	}
      	this.doParentSelectedDel(_id);
      },
      doChildSelectedDel(id,hasChilds){////remove the `√` from childs.
      	if(!hasChilds){
      		return false;
      	}
      	let roleParentId = this.$store.state.roleParentId;
      	for(let i in roleParentId){
      		if(roleParentId[i] == id){
      			this.$store.dispatch('roleSelectedDel',i);
      			this.doChildSelectedDel(i,hasChilds);
      		}
      	}
      },
      checkInRoleParentId(roleParentId,id){//check if exists siblings.
      	for(let i in roleParentId){
      		if(roleParentId[i] == id){
      			// console.log(i);
      			if(this.$store.state.roleSelected.includes(i)){
      				return true;
      			}
      		}
      	}
      	return false;
      },
      doNode(id){//close or open.
        if(this.$store.state.roleNode.includes(id)){
          this.$store.dispatch('roleNodeDel',id);
          this.doNodeDel(id);
        }else{
          this.$store.dispatch('roleNodeAdd',id);
        }
      },
      doNodeDel(id){//close
        let roleParentId = this.$store.state.roleParentId;
        for(let i in roleParentId){
          if(roleParentId[i] == id){
            this.$store.dispatch('roleNodeDel',id);
            this.doNodeDel(i);
          }
        }
      }
    },
    mounted(){
    	// console.log(this.$store.state.roleSelected);
    }
  }
</script>