<template>
  <section>
    <el-container>
      <el-header>
        <el-col class="logo">MrParker</el-col>
        <el-col class="switch">
          <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
            <el-radio-button :label="false">展开</el-radio-button>
            <el-radio-button :label="true">收起</el-radio-button>
          </el-radio-group>
        </el-col>
        <el-col class="setting">


          <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" text-color="#fff"
            active-text-color="#ffd04b" background-color="#20a0ff">
            <el-menu-item index="1">处理中心</el-menu-item>
            <el-submenu index="2">
              <template slot="title">我的工作台</template>
              <el-menu-item index="2-1">选项1</el-menu-item>
              <el-menu-item index="2-2">选项2</el-menu-item>
              <el-menu-item index="2-3">选项3</el-menu-item>
              <el-submenu index="2-4">
                <template slot="title">选项4</template>
                <el-menu-item index="2-4-1">选项1</el-menu-item>
                <el-menu-item index="2-4-2">选项2</el-menu-item>
                <el-menu-item index="2-4-3">选项3</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-menu-item index="3" disabled>消息中心</el-menu-item>
            <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
          </el-menu>

          <!-- <el-dropdown @command="handleCommand">
            <span class="el-dropdown-link">
              MrParker<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="a">黄金糕</el-dropdown-item>
              <el-dropdown-item command="b">狮子头</el-dropdown-item>
              <el-dropdown-item command="c">螺蛳粉</el-dropdown-item>
              <el-dropdown-item command="d" disabled>双皮奶</el-dropdown-item>
              <el-dropdown-item command="e" divided>蚵仔煎</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown> -->


        </el-col>
      </el-header>
      <el-container>
        <el-aside width="250px">
          <el-row class="tac">
            <el-col :span="24">
              


              <!-- <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose">
                <el-submenu index="1">
                  <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>导航一</span>
                  </template>
                  <el-menu-item-group>
                    <template slot="title">分组一</template>
                    <el-menu-item index="1-1" :to="{ path: '/users' }">Users</el-menu-item>
                    <el-menu-item index="1-2" :to="{ path: '/news' }">News</el-menu-item>
                  </el-menu-item-group>
                  <el-menu-item-group title="分组2">
                    <el-menu-item index="1-3">选项3</el-menu-item>
                  </el-menu-item-group>
                  <el-submenu index="1-4">
                    <template slot="title">选项4</template>
                    <el-menu-item index="1-4-1">选项1</el-menu-item>
                  </el-submenu>
                </el-submenu>
                <el-menu-item index="2">
                  <i class="el-icon-menu"></i>
                  <span slot="title">导航二</span>
                </el-menu-item>
                <el-menu-item index="3" disabled>
                  <i class="el-icon-document"></i>
                  <span slot="title">导航三</span>
                </el-menu-item>
                <el-menu-item index="4">
                  <i class="el-icon-setting"></i>
                  <span slot="title">导航四</span>
                </el-menu-item>
              </el-menu> -->

              <el-menu default-active="1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse" router :default-openeds="[1]">

                <template v-for="(item,index) in navMenus" v-if="item.entity.state == 'ENABLE'">
                  <el-submenu :index="item.entity.id" :key="item.entity.id" v-if="item.entity.state == 'ENABLE'">
                    <template slot="title">
                      <i :class="item.entity.icon"></i>
                      <span slot="title">{{item.entity.alias}}</span>
                    </template>
                    <el-menu-item v-for="(child,i) in item.childs" :key="child.entity.id" :index="child.entity.value">{{child.entity.alias}}</el-menu-item>
                    <!-- <el-menu-item v-if="child.childs" v-for="(_child,_i) in child.childs" :index="_child.entity.value">{{_child.entity.alias}}</el-menu-item> -->
                  </el-submenu>

                </template>

              </el-menu>


              

            </el-col>
          </el-row>
        </el-aside>
        <el-main>
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>活动管理</el-breadcrumb-item>
            <el-breadcrumb-item>活动列表</el-breadcrumb-item>
            <el-breadcrumb-item>活动详情</el-breadcrumb-item>
          </el-breadcrumb>
          <!--工具条-->
          <el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
            <el-form :inline="true" :model="filters">
              <el-form-item>
                <el-input v-model="filters.name" placeholder="姓名"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" v-on:click="getUsers">查询</el-button>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="handleAdd">新增</el-button>
              </el-form-item>
            </el-form>
          </el-col>
          <transition name="fade" mode="out-in">

            <router-view></router-view>
          </transition>
        </el-main>
      </el-container>
    </el-container>
  </section>
</template>

<script>
export default {
  name: 'Main',
  data () {
    return {
      title: 'Welcome to Your Vue.js App......MrParker.',
      filters: {
        name: ''
      },
      activeIndex: '1',
      activeIndex2: '1',
      //http://blog.csdn.net/goodsave/article/details/78879842
      _navMenus: [{"entity": null,"childs":[]},{"entity": null,"childs":[]},{"entity": null,"childs":[]}],
      isCollapse: false,
      navMenus: [
            {
                "entity": {
                    "id": 1,
                    "parentMenuId": 0,
                    "name": "systemManage",
                    "icon": "el-icon-menu",
                    "alias": "系统管理",
                    "state": "ENABLE",
                    "sort": 0,
                    "value": null,
                    "type": "NONE",
                    "discription": "用于系统管理的菜单",
                    "createUserId": 1
                },
                "childs": [
                    {
                        "entity": {
                            "id": 3,
                            "parentMenuId": 1,
                            "name": "authManage",
                            "icon": "el-icon-loading",
                            "alias": "权限管理",
                            "state": "ENABLE",
                            "sort": 0,
                            "value": "/system/auth",
                            "type": "LINK",
                            "discription": "用于权限管理的菜单",
                            "createUserId": 1
                        },
                        "childs": null
                    },
                    {
                        "entity": {
                            "id": 4,
                            "parentMenuId": 1,
                            "name": "roleManage",
                            "icon": "el-icon-bell",
                            "alias": "角色管理",
                            "state": "ENABLE",
                            "sort": 1,
                            "value": "/system/role",
                            "type": "LINK",
                            "discription": "用于角色管理的菜单",
                            "createUserId": 1
                        },
                        "childs": null
                    },
                    {
                        "entity": {
                            "id": 2,
                            "parentMenuId": 1,
                            "name": "menuManage",
                            "icon": "el-icon-edit",
                            "alias": "菜单管理",
                            "state": "ENABLE",
                            "sort": 2,
                            "value": "/system/menu",
                            "type": "LINK",
                            "discription": "用于菜单管理的菜单",
                            "createUserId": 1
                        },
                        "childs": null
                    },
                    {
                        "entity": {
                            "id": 5,
                            "parentMenuId": 1,
                            "name": "groupManage",
                            "icon": "el-icon-mobile-phone\r\n",
                            "alias": "分组管理",
                            "state": "ENABLE",
                            "sort": 3,
                            "value": "/system/group",
                            "type": "LINK",
                            "discription": "用于分组管理的菜单",
                            "createUserId": 1
                        },
                        "childs": null
                    }
                ]
            },
            {
                "entity": {
                    "id": 6,
                    "parentMenuId": 0,
                    "name": "userManage",
                    "icon": "el-icon-setting",
                    "alias": "用户管理",
                    "state": "ENABLE",
                    "sort": 1,
                    "value": null,
                    "type": "NONE",
                    "discription": "用于用户管理的菜单",
                    "createUserId": 1
                },
                "childs": [
                    {
                        "entity": {
                            "id": 7,
                            "parentMenuId": 6,
                            "name": "accountManage",
                            "icon": "el-icon-phone-outline\r\n",
                            "alias": "帐号管理",
                            "state": "ENABLE",
                            "sort": 0,
                            "value": "",
                            "type": "NONE",
                            "discription": "用于帐号管理的菜单",
                            "createUserId": 1
                        },
                        "childs": [
                            {
                                "entity": {
                                    "id": 14,
                                    "parentMenuId": 7,
                                    "name": "emailManage",
                                    "icon": "el-icon-sold-out\r\n",
                                    "alias": "邮箱管理",
                                    "state": "ENABLE",
                                    "sort": 0,
                                    "value": "/content/email",
                                    "type": "LINK",
                                    "discription": "用于邮箱管理的菜单",
                                    "createUserId": 1
                                },
                                "childs": null
                            },
                            {
                                "entity": {
                                    "id": 13,
                                    "parentMenuId": 7,
                                    "name": "passManage",
                                    "icon": "el-icon-service\r\n",
                                    "alias": "密码管理",
                                    "state": "ENABLE",
                                    "sort": 1,
                                    "value": "/content/pass",
                                    "type": "LINK",
                                    "discription": "用于密码管理的菜单",
                                    "createUserId": 1
                                },
                                "childs": null
                            }
                        ]
                    },
                    {
                        "entity": {
                            "id": 8,
                            "parentMenuId": 6,
                            "name": "integralManage",
                            "icon": "el-icon-picture",
                            "alias": "积分管理",
                            "state": "ENABLE",
                            "sort": 1,
                            "value": "/user/integral",
                            "type": "LINK",
                            "discription": "用于积分管理的菜单",
                            "createUserId": 1
                        },
                        "childs": null
                    }
                ]
            },
            {
                "entity": {
                    "id": 9,
                    "parentMenuId": 0,
                    "name": "contentManage",
                    "icon": "el-icon-location",
                    "alias": "内容管理",
                    "state": "ENABLE",
                    "sort": 2,
                    "value": null,
                    "type": "NONE",
                    "discription": "用于内容管理的菜单",
                    "createUserId": 1
                },
                "childs": [
                    {
                        "entity": {
                            "id": 10,
                            "parentMenuId": 9,
                            "name": "classifyManage",
                            "icon": "el-icon-printer",
                            "alias": "分类管理",
                            "state": "ENABLE",
                            "sort": 0,
                            "value": "/content/classify",
                            "type": "LINK",
                            "discription": "用于分类管理的菜单",
                            "createUserId": 1
                        },
                        "childs": null
                    },
                    {
                        "entity": {
                            "id": 11,
                            "parentMenuId": 9,
                            "name": "articleManage",
                            "icon": "el-icon-star-on",
                            "alias": "文章管理",
                            "state": "ENABLE",
                            "sort": 1,
                            "value": "/content/article",
                            "type": "LINK",
                            "discription": "用于文章管理的菜单",
                            "createUserId": 1
                        },
                        "childs": null
                    },
                    {
                        "entity": {
                            "id": 12,
                            "parentMenuId": 9,
                            "name": "commentManage",
                            "icon": "el-icon-share",
                            "alias": "评论管理",
                            "state": "ENABLE",
                            "sort": 2,
                            "value": "/content/comment",
                            "type": "LINK",
                            "discription": "用于评论管理的菜单",
                            "createUserId": 1
                        },
                        "childs": null
                    }
                ]
            }
        ]
    }
  },
  watch: {
    
  },
  methods: {
    handleOpen(key, keyPath) {
// this.navMenus[0]=null;console.log(this.navMenus);
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    getUsers(){},
    handleAdd(){},

  },
  mounted(){
    for(let navMenu in this.navMenus){
      console.log('navMenu.childs');
      console.log(navMenu);
    }
    

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 0 10px;
}
a {
  color: #42b983;
}
.logo{
  width: 250px;
  border-right:1px solid #fff;
  display: inline-block;
}
.switch{
  display: inline-block;
  text-align: left;
  width:150px;
  float: left;
  margin-top: 10px;
}
.switch label{
    display: inline-block;
    font-size: 14px;
}

.setting{
  display: inline-block;
  text-align: right;
  width:600px;
  float: right;
  margin-right: 20px;
}
.el-header {
    height: 60px;
    line-height: 60px;
    background: #20a0ff;
    color: #fff;
    padding: 0!important;
}
.el-menu {
    border-radius: 2px;
    list-style: none;
    position: relative;
    margin: 0;
    padding-left: 0;
    background-color: #eef1f6;
}
.el-dropdown-link {
    cursor: pointer;
    color: #fff;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
</style>



