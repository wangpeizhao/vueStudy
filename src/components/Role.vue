<template>
  <div class="permissions" >
    <template v-for="(roles,index) in roleData">
      <childrole :roles="roles" :selected="selected"></childrole>
    </template>
  </div>
</template>
<style type="text/css">
/* 第一层 */
.first_level {
  border-bottom: 1px solid #dfdfdf;
  position: relative;
}

.first_level:last-child {
  border-bottom: 0;
}

.first_left {
  width: 12.5%;
  float: left;
  padding-bottom: 5px;
}

.first_right {
  width: 86.5%;
  float: left;
  border-left: 1px solid #dfdfdf;
}

.selected {
  position: relative;
  display: inline-block;
  /*margin-top: 5px;*/
}

.selected i {
  position: absolute;
  bottom: 7px;
  right: 0px;
  font-size: 18px;
  color: #20a3fe;
  cursor: pointer;
}

.btn_perm {
  background: #fff;
  padding: 4px 5px;
  border: 1px solid #ccc;
  outline: none;
  color: #333;
  margin: 10px 0px 5px 10px;
  cursor: pointer;
  width: 80px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.toggle {
  /*display: block !important;*/
  color: #20a3fe;
  text-align: center;
  cursor: pointer;
  vertical-align: middle;
  font-size: 12px;
}

.toggle img {
  display: inline-block;
  width: 20px;
  height: 20px;
}

.dn {
  display: none;
}
.common_box div{
  -webkit-box-sizing: border-box; */
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

.clearfix:before {
  display: table;
  content: " ";
}

.clearfix:after {
  content: '.';
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}

/* 第二级 */
.second_level {
  position: relative;
  width: 100%;
  border-bottom: 1px solid #dfdfdf;
}

.second_level:last-child {
  border-bottom: 0;
}

.second_left {
  width: 14%;
  float: left;
  padding-bottom: 5px;
}

.second_right {
  width: 85%;
  float: left;
  border-left: 1px solid #dfdfdf;
}

/* 第三级 */
.third_level {
  position: relative;
  width: 100%;
  border-bottom: 1px solid #dfdfdf;
}

.third_level:last-child {
  border-bottom: 0;
}

.third_left {
  width: 16%;
  float: left;
  padding-bottom: 5px;
}

.third_right {
  width: 83%;
  float: left;
  border-left: 1px solid #dfdfdf;
}

/* 第四级 */
.fourth_level {
  position: relative;
  width: 100%;
  border-bottom: 1px solid #dfdfdf;
}

.fourth_level:last-child {
  border-bottom: 0;
}

.fourth_left {
  width: 20%;
  float: left;
  padding-bottom: 5px;
}

.fourth_right {
  width: 79%;
  float: left;
  border-left: 1px solid #dfdfdf;
}

/* 第五级 */
.fifth_level {
  position: relative;
  width: 100%;
  border-bottom: 1px solid #dfdfdf;
}

.fifth_level:last-child {
  border-bottom: 0;
}

.fifth_left {
  width: 25%;
  float: left;
  padding-bottom: 5px;
}

.fifth_right {
  width: 74%;
  float: left;
  border-left: 1px solid #dfdfdf;
}

/* 第六级 */
.sixth_level {
  position: relative;
  width: 100%;
  padding-bottom: 0px;
}
.sixth_level:last-child{
  margin-bottom: 5px;
}

.components {
  padding-bottom: 10px;
  list-style: none;
  margin: 0;
}

.components li {
  float: left;
  list-style: none;
}

.components li .btn_perm {
  margin: 10px 0px 0px 10px !important;
  width: 75px !important;
}

.components li i {
  right: 0 !important;
  bottom: -2px !important;
}

.sixth_right {
  width: 77%;
  float: left;
  border-left: 1px solid #dfdfdf;
} 
</style>
<script>
  import childrole from '@/components/ChildRole'
  import '../../static/style/iconfont/iconfont.css'
  export default {
    // props: ['childrole'],
    components:{childrole},
    data() {
      return {
        roleData : [],
        selected : [],
        parentId : [],
      }
    },
    methods: {
      formatter(row, column) {
        return row.address;
      },
      filterTag(value, row) {
        return row.tag === value;
      },
      filterHandler(value, row, column) {
        const property = column['property'];
        return row[property] === value;
      },

      getRoleSelectedIds(data){
        for(let i in data){
          this.parentId[data[i].id] = data[i].pid;
          if(data[i].checked){
            this.selected.push(data[i].id);
          }
          if(data[i].childs.hasOwnProperty(0)){
            this.getRoleSelectedIds(data[i].childs);
          }
        }
      }
    },
    mounted(){
      this.roleData = JSON.parse('[{"id":"356","pid":"0","title":"\u516c\u53f8\u7ba1\u7406","permissions":"\u516c\u53f8\u7ba1\u7406","model":null,"parameter":"","checked":" checked","dn":" dn","deepClass":"first","childs":[{"id":"361","pid":"356","title":"\u516c\u53f8\u7ba1\u7406","permissions":"\u516c\u53f8\u7ba1\u7406","model":null,"parameter":"","checked":" checked","dn":" dn","deepClass":"second","childs":[{"id":"372","pid":"361","title":"\u516c\u53f8\u5217\u8868","permissions":"\u516c\u53f8\u5217\u8868","model":null,"parameter":"","checked":" checked","dn":" dn","deepClass":"third","childs":[{"id":"544","pid":"372","title":"\u67e5\u770b\u5217\u8868","permissions":"\u67e5\u770b\u5217\u8868","model":"","parameter":"_p_=_list_","checked":"","dn":"","deepClass":"fourth","childs":[]},{"id":"373","pid":"372","title":"\u6dfb\u52a0\u516c\u53f8","permissions":"\u6dfb\u52a0\u516c\u53f8","model":null,"parameter":"","checked":" checked","dn":" dn","deepClass":"fourth","childs":[]},{"id":"374","pid":"372","title":"\u7f16\u8f91\u516c\u53f8","permissions":"\u7f16\u8f91\u516c\u53f8","model":null,"parameter":"","checked":" checked","dn":" dn","deepClass":"fourth","childs":[]},{"id":"375","pid":"372","title":"\u5206\u914d\u6743\u9650","permissions":"\u5206\u914d\u6743\u9650","model":null,"parameter":"","checked":" checked","dn":" dn","deepClass":"fourth","childs":[]}]},{"id":"376","pid":"361","title":"\u4e0a\u4f20\u56fe\u7247","permissions":"\u4e0a\u4f20\u56fe\u7247","model":null,"parameter":"","checked":" checked","dn":" dn","deepClass":"third","childs":[]}]},{"id":"820","pid":"356","title":"\u516c\u53f8\u6a21\u677f","permissions":"\u516c\u53f8\u6a21\u677f","model":"","parameter":"","checked":"","dn":"","deepClass":"second","childs":[{"id":"821","pid":"820","title":"\u6a21\u677f\u7ba1\u7406","permissions":"\u6a21\u677f\u7ba1\u7406","model":"","parameter":"","checked":"","dn":"","deepClass":"third","childs":[{"id":"822","pid":"821","title":"\u67e5\u770b\u5217\u8868","permissions":"\u67e5\u770b\u5217\u8868","model":"","parameter":"_p_=_list_","checked":"","dn":"","deepClass":"fourth","childs":[]},{"id":"823","pid":"821","title":"\u6dfb\u52a0\u6a21\u677f","permissions":"\u6dfb\u52a0\u6a21\u677f","model":"","parameter":"","checked":"","dn":"","deepClass":"fourth","childs":[]},{"id":"824","pid":"821","title":"\u7f16\u8f91\u6a21\u677f","permissions":"\u7f16\u8f91\u6a21\u677f","model":"","parameter":"","checked":"","dn":"","deepClass":"fourth","childs":[]},{"id":"825","pid":"821","title":"\u5220\u9664\u6a21\u677f","permissions":"\u5220\u9664\u6a21\u677f","model":"","parameter":"","checked":"","dn":"","deepClass":"fourth","childs":[]},{"id":"826","pid":"821","title":"\u590d\u5236\u6a21\u677f","permissions":"\u590d\u5236\u6a21\u677f","model":"","parameter":"","checked":"","dn":"","deepClass":"fourth","childs":[]},{"id":"846","pid":"821","title":"\u4fee\u6539\u57fa\u7840\u6570\u636e","permissions":"\u4fee\u6539\u6a21\u677f\u57fa\u7840\u6570\u636e","model":"","parameter":"","checked":"","dn":"","deepClass":"fourth","childs":[]},{"id":"827","pid":"821","title":"\u6a21\u677f\u76f8\u5173","permissions":"\u6a21\u677f\u76f8\u5173","model":"","parameter":"_p_=t","checked":"","dn":"","deepClass":"fourth","childs":[{"id":"835","pid":"827","title":"\u5b57\u6bb5\u7ba1\u7406","permissions":"\u5b57\u6bb5\u7ba1\u7406","model":"","parameter":"_p_=t","checked":"","dn":"","deepClass":"fifth","childs":[{"id":"836","pid":"835","title":"\u6dfb\u52a0\u8282\u70b9","permissions":"\u6dfb\u52a0\u8282\u70b9","model":"","parameter":"_p_=t","checked":"","dn":"","deepClass":"sixth","childs":[]},{"id":"837","pid":"835","title":"\u7f16\u8f91\u8282\u70b9","permissions":"\u7f16\u8f91\u8282\u70b9","model":"","parameter":"_p_=t","checked":"","dn":"","deepClass":"sixth","childs":[]},{"id":"838","pid":"835","title":"\u6dfb\u52a0\u5b57\u6bb5","permissions":"\u6dfb\u52a0\u5b57\u6bb5","model":"","parameter":"_p_=t","checked":"","dn":"","deepClass":"sixth","childs":[]},{"id":"839","pid":"835","title":"\u4fee\u6539\u5b57\u6bb5","permissions":"\u7f16\u8f91\u5b57\u6bb5","model":"","parameter":"_p_=t","checked":"","dn":"","deepClass":"sixth","childs":[]},{"id":"847","pid":"835","title":"\u6279\u91cf\u6dfb\u52a0","permissions":"\u6279\u91cf\u6dfb\u52a0","model":"","parameter":"","checked":"","dn":"","deepClass":"sixth","childs":[]}]},{"id":"828","pid":"827","title":"\u7b49\u7ea7\u7ba1\u7406","permissions":"\u7b49\u7ea7\u7ba1\u7406","model":"","parameter":"","checked":"","dn":"","deepClass":"fifth","childs":[{"id":"840","pid":"828","title":"\u6dfb\u52a0\u7b49\u7ea7","permissions":"\u6dfb\u52a0\u7b49\u7ea7","model":"","parameter":"","checked":"","dn":"","deepClass":"sixth","childs":[]},{"id":"841","pid":"828","title":"\u7f16\u8f91\u7b49\u7ea7","permissions":"\u7f16\u8f91\u7b49\u7ea7","model":"","parameter":"","checked":"","dn":"","deepClass":"sixth","childs":[]}]},{"id":"829","pid":"827","title":"\u79ef\u5206\u7ba1\u7406","permissions":"\u79ef\u5206\u7ba1\u7406","model":"","parameter":"","checked":"","dn":"","deepClass":"fifth","childs":[]},{"id":"830","pid":"827","title":"\u670d\u88c5\u5206\u7c7b","permissions":"\u670d\u88c5\u5206\u7c7b","model":"","parameter":"","checked":"","dn":"","deepClass":"fifth","childs":[{"id":"842","pid":"830","title":"\u6dfb\u52a0\u5c5e\u6027","permissions":"\u6dfb\u52a0\u5c5e\u6027","model":"","parameter":"","checked":"","dn":"","deepClass":"sixth","childs":[]},{"id":"843","pid":"830","title":"\u7f16\u8f91\u5c5e\u6027","permissions":"\u7f16\u8f91\u5c5e\u6027","model":"","parameter":"","checked":"","dn":"","deepClass":"sixth","childs":[]}]},{"id":"831","pid":"827","title":"\u6570\u636e\u6a21\u5757","permissions":"\u6570\u636e\u6a21\u5757","model":"","parameter":"","checked":"","dn":"","deepClass":"fifth","childs":[{"id":"844","pid":"831","title":"\u6dfb\u52a0\u5b57\u6bb5","permissions":"\u6dfb\u52a0\u5b57\u6bb5","model":"","parameter":"","checked":"","dn":"","deepClass":"sixth","childs":[]},{"id":"845","pid":"831","title":"\u7f16\u8f91\u5b57\u6bb5","permissions":"\u7f16\u8f91\u5b57\u6bb5","model":"","parameter":"","checked":"","dn":"","deepClass":"sixth","childs":[]}]}]}]},{"id":"832","pid":"820","title":"\u6a21\u677f\u83dc\u5355","permissions":"\u6a21\u677f\u83dc\u5355","model":"","parameter":"","checked":"","dn":"","deepClass":"third","childs":[{"id":"834","pid":"832","title":"\u6dfb\u52a0\u83dc\u5355","permissions":"\u6dfb\u52a0\u83dc\u5355","model":"","parameter":"_p_=t","checked":"","dn":"","deepClass":"fourth","childs":[]},{"id":"833","pid":"832","title":"\u7f16\u8f91\u83dc\u5355","permissions":"\u7f16\u8f91\u83dc\u5355","model":"","parameter":"_p_=t","checked":"","dn":"","deepClass":"fourth","childs":[]}]}]}]},{"id":"357","pid":"0","title":"\u7528\u6237\u7ba1\u7406","permissions":"\u7528\u6237\u7ba1\u7406","model":null,"parameter":"","checked":" checked","dn":" dn","deepClass":"first","childs":[{"id":"362","pid":"357","title":"\u603b\u63a7\u7528\u6237\u7ba1\u7406","permissions":"\u603b\u63a7\u7528\u6237\u7ba1\u7406","model":null,"parameter":"","checked":" checked","dn":" dn","deepClass":"second","childs":[{"id":"377","pid":"362","title":"\u7528\u6237\u5217\u8868","permissions":"\u7528\u6237\u5217\u8868","model":null,"parameter":"","checked":" checked","dn":" dn","deepClass":"third","childs":[{"id":"545","pid":"377","title":"\u67e5\u770b\u5217\u8868","permissions":"\u67e5\u770b\u5217\u8868","model":"","parameter":"_p_=_list_","checked":"","dn":"","deepClass":"fourth","childs":[]},{"id":"378","pid":"377","title":"\u6dfb\u52a0\u7528\u6237","permissions":"\u6dfb\u52a0\u7528\u6237","model":null,"parameter":"","checked":" checked","dn":" dn","deepClass":"fourth","childs":[]},{"id":"379","pid":"377","title":"\u4fee\u6539\u7528\u6237","permissions":"\u4fee\u6539\u7528\u6237","model":null,"parameter":"","checked":" checked","dn":" dn","deepClass":"fourth","childs":[]},{"id":"380","pid":"377","title":"\u5220\u9664\u7528\u6237","permissions":"\u5220\u9664\u7528\u6237","model":null,"parameter":"","checked":" checked","dn":" dn","deepClass":"fourth","childs":[]}]},{"id":"381","pid":"362","title":"\u89d2\u8272\u5217\u8868","permissions":"\u89d2\u8272\u5217\u8868","model":null,"parameter":"","checked":" checked","dn":" dn","deepClass":"third","childs":[{"id":"546","pid":"381","title":"\u67e5\u770b\u5217\u8868","permissions":"\u67e5\u770b\u5217\u8868","model":"","parameter":"_p_=_list_","checked":"","dn":"","deepClass":"fourth","childs":[]},{"id":"382","pid":"381","title":"\u6dfb\u52a0\u89d2\u8272","permissions":"\u6dfb\u52a0\u89d2\u8272","model":null,"parameter":"","checked":" checked","dn":" dn","deepClass":"fourth","childs":[]},{"id":"383","pid":"381","title":"\u4fee\u6539\u89d2\u8272","permissions":"\u4fee\u6539\u89d2\u8272","model":null,"parameter":"","checked":" checked","dn":" dn","deepClass":"fourth","childs":[]},{"id":"384","pid":"381","title":"\u5220\u9664\u89d2\u8272","permissions":"\u5220\u9664\u89d2\u8272","model":null,"parameter":"","checked":" checked","dn":" dn","deepClass":"fourth","childs":[]}]},{"id":"385","pid":"362","title":"\u90e8\u95e8\u7ba1\u7406","permissions":"\u90e8\u95e8\u7ba1\u7406","model":null,"parameter":"","checked":" checked","dn":" dn","deepClass":"third","childs":[{"id":"547","pid":"385","title":"\u67e5\u770b\u5217\u8868","permissions":"\u67e5\u770b\u5217\u8868","model":"","parameter":"_p_=_list_","checked":"","dn":"","deepClass":"fourth","childs":[]},{"id":"386","pid":"385","title":"\u6dfb\u52a0\u90e8\u95e8","permissions":"\u6dfb\u52a0\u90e8\u95e8","model":null,"parameter":"","checked":" checked","dn":" dn","deepClass":"fourth","childs":[]},{"id":"387","pid":"385","title":"\u4fee\u6539\u90e8\u95e8","permissions":"\u4fee\u6539\u90e8\u95e8","model":null,"parameter":"","checked":" checked","dn":" dn","deepClass":"fourth","childs":[]},{"id":"388","pid":"385","title":"\u5220\u9664\u90e8\u95e8","permissions":"\u5220\u9664\u90e8\u95e8","model":null,"parameter":"","checked":" checked","dn":" dn","deepClass":"fourth","childs":[]}]}]},{"id":"366","pid":"357","title":"\u516c\u53f8\u7528\u6237\u7ba1\u7406","permissions":"\u516c\u53f8\u7528\u6237\u7ba1\u7406","model":null,"parameter":"","checked":" checked","dn":" dn","deepClass":"second","childs":[{"id":"403","pid":"366","title":"\u7528\u6237\u5217\u8868","permissions":"\u7528\u6237\u5217\u8868","model":null,"parameter":"","checked":" checked","dn":" dn","deepClass":"third","childs":[{"id":"548","pid":"403","title":"\u67e5\u770b\u5217\u8868","permissions":"\u67e5\u770b\u5217\u8868","model":"","parameter":"_p_=_list_","checked":"","dn":"","deepClass":"fourth","childs":[]},{"id":"404","pid":"403","title":"\u6dfb\u52a0\u7528\u6237","permissions":"\u6dfb\u52a0\u7528\u6237","model":null,"parameter":"","checked":" checked","dn":" dn","deepClass":"fourth","childs":[]},{"id":"405","pid":"403","title":"\u7f16\u8f91\u7528\u6237","permissions":"\u7f16\u8f91\u7528\u6237","model":null,"parameter":"","checked":" checked","dn":" dn","deepClass":"fourth","childs":[]},{"id":"406","pid":"403","title":"\u5220\u9664\u7528\u6237","permissions":"\u5220\u9664\u7528\u6237","model":null,"parameter":"","checked":" checked","dn":" dn","deepClass":"fourth","childs":[]}]},{"id":"407","pid":"366","title":"\u89d2\u8272\u5217\u8868","permissions":"\u89d2\u8272\u5217\u8868","model":null,"parameter":"","checked":" checked","dn":" dn","deepClass":"third","childs":[{"id":"549","pid":"407","title":"\u67e5\u770b\u5217\u8868","permissions":"\u67e5\u770b\u5217\u8868","model":"","parameter":"_p_=_list_","checked":"","dn":"","deepClass":"fourth","childs":[]},{"id":"418","pid":"407","title":"\u6dfb\u52a0\u89d2\u8272","permissions":"\u6dfb\u52a0\u89d2\u8272","model":"","parameter":"","checked":" checked","dn":" dn","deepClass":"fourth","childs":[]},{"id":"419","pid":"407","title":"\u7f16\u8f91\u89d2\u8272","permissions":"\u7f16\u8f91\u89d2\u8272","model":"","parameter":"","checked":" checked","dn":" dn","deepClass":"fourth","childs":[]},{"id":"408","pid":"407","title":"\u89d2\u8272\u5220\u9664","permissions":"\u89d2\u8272\u5220\u9664","model":"","parameter":"","checked":" checked","dn":" dn","deepClass":"fourth","childs":[]}]},{"id":"409","pid":"366","title":"\u90e8\u95e8\u7ba1\u7406","permissions":"\u90e8\u95e8\u7ba1\u7406","model":null,"parameter":"","checked":" checked","dn":" dn","deepClass":"third","childs":[{"id":"550","pid":"409","title":"\u67e5\u770b\u5217\u8868","permissions":"\u67e5\u770b\u5217\u8868","model":"","parameter":"_p_=_list_","checked":"","dn":"","deepClass":"fourth","childs":[]},{"id":"410","pid":"409","title":"\u6dfb\u52a0\u90e8\u95e8","permissions":"\u6dfb\u52a0\u90e8\u95e8","model":null,"parameter":"","checked":" checked","dn":" dn","deepClass":"fourth","childs":[]},{"id":"411","pid":"409","title":"\u7f16\u8f91\u90e8\u95e8","permissions":"\u7f16\u8f91\u90e8\u95e8","model":null,"parameter":"","checked":" checked","dn":" dn","deepClass":"fourth","childs":[]},{"id":"412","pid":"409","title":"\u5220\u9664\u90e8\u95e8","permissions":"\u5220\u9664\u90e8\u95e8","model":null,"parameter":"","checked":" checked","dn":" dn","deepClass":"fourth","childs":[]}]}]}]},{"id":"358","pid":"0","title":"\u5de5\u4f5c\u7ad9","permissions":"\u5de5\u4f5c\u7ad9","model":"","parameter":"?&act=new","checked":" checked","dn":" dn","deepClass":"first","childs":[{"id":"363","pid":"358","title":"\u5b57\u6bb5\u7ba1\u7406","permissions":"\u5b57\u6bb5\u7ba1\u7406","model":"","parameter":"","checked":" checked","dn":" dn","deepClass":"second","childs":[{"id":"391","pid":"363","title":"\u5b57\u6bb5\u5217\u8868","permissions":"\u5b57\u6bb5\u5217\u8868","model":null,"parameter":"","checked":" checked","dn":" dn","deepClass":"third","childs":[{"id":"392","pid":"391","title":"\u4fee\u6539\u5b57\u6bb5","permissions":"\u4fee\u6539\u5b57\u6bb5","model":null,"parameter":"","checked":" checked","dn":" dn","deepClass":"fourth","childs":[]},{"id":"393","pid":"391","title":"\u6dfb\u52a0\u5b57\u6bb5","permissions":"\u6dfb\u52a0\u5b57\u6bb5","model":null,"parameter":"","checked":" checked","dn":" dn","deepClass":"fourth","childs":[]},{"id":"395","pid":"391","title":"\u5b57\u6bb5\u6743\u9650","permissions":"\u5b57\u6bb5\u6743\u9650","model":null,"parameter":"","checked":" checked","dn":" dn","deepClass":"fourth","childs":[]},{"id":"551","pid":"391","title":"\u67e5\u770b\u5217\u8868","permissions":"\u67e5\u770b\u5217\u8868","model":"","parameter":"_p_=_list_","checked":"","dn":"","deepClass":"fourth","childs":[]}]},{"id":"445","pid":"363","title":"\u8282\u70b9\u7ba1\u7406","permissions":"\u8282\u70b9\u7ba1\u7406","model":"","parameter":"","checked":"","dn":"","deepClass":"third","childs":[{"id":"552","pid":"445","title":"\u67e5\u770b\u5217\u8868","permissions":"\u67e5\u770b\u5217\u8868","model":"","parameter":"_p_=_list_","checked":"","dn":"","deepClass":"fourth","childs":[]},{"id":"446","pid":"445","title":"\u6dfb\u52a0\u8282\u70b9","permissions":"\u6dfb\u52a0\u8282\u70b9","model":"","parameter":"","checked":"","dn":"","deepClass":"fourth","childs":[]},{"id":"447","pid":"445","title":"\u7f16\u8f91\u8282\u70b9","permissions":"\u7f16\u8f91\u8282\u70b9","model":"","parameter":"","checked":"","dn":"","deepClass":"fourth","childs":[]},{"id":"448","pid":"445","title":"\u5220\u9664\u8282\u70b9","permissions":"\u5220\u9664\u8282\u70b9","model":"","parameter":"","checked":"","dn":"","deepClass":"fourth","childs":[]},{"id":"396","pid":"445","title":"\u7ecf\u8425\u6237\u5b57\u6bb5","permissions":"\u7ecf\u8425\u6237\u5b57\u6bb5","model":"","parameter":"?nid=1","checked":" checked","dn":" dn","deepClass":"fourth","childs":[{"id":"553","pid":"396","title":"\u67e5\u770b\u5217\u8868","permissions":"\u67e5\u770b\u5217\u8868","model":"","parameter":"&_p_=_list_","checked":"","dn":"","deepClass":"fifth","childs":[]},{"id":"397","pid":"396","title":"\u6dfb\u52a0\u7ecf\u8425\u6237\u5b57\u6bb5","permissions":"\u6dfb\u52a0\u7ecf\u8425\u6237\u5b57\u6bb5","model":null,"parameter":"","checked":" checked","dn":" dn","deepClass":"fifth","childs":[]},{"id":"398","pid":"396","title":"\u7f16\u8f91\u7ecf\u8425\u6237\u5b57\u6bb5","permissions":"\u7f16\u8f91\u7ecf\u8425\u6237\u5b57\u6bb5","model":null,"parameter":"","checked":" checked","dn":" dn","deepClass":"fifth","childs":[]},{"id":"399","pid":"396","title":"\u5220\u9664\u7ecf\u8425\u6237\u5b57\u6bb5","permissions":"\u5220\u9664\u7ecf\u8425\u6237\u5b57\u6bb5","model":null,"parameter":"","checked":" checked","dn":" dn","deepClass":"fifth","childs":[]}]},{"id":"449","pid":"445","title":"\u540c\u6b65\u6570\u636e","permissions":"\u540c\u6b65\u6570\u636e","model":"","parameter":"","checked":"","dn":"","deepClass":"fourth","childs":[]},{"id":"894","pid":"445","title":"\u6253\u5370\u5b57\u6bb5","permissions":"\u6253\u5370\u5b57\u6bb5","model":"","parameter":"","checked":"","dn":"","deepClass":"fourth","childs":[{"id":"895","pid":"894","title":"\u67e5\u770b\u5217\u8868","permissions":"\u67e5\u770b\u5217\u8868","model":"","parameter":"_p_=_list_","checked":"","dn":"","deepClass":"fifth","childs":[]}]},{"id":"659","pid":"445","title":"\u7b5b\u9009\u6761\u4ef6","permissions":"\u7b5b\u9009\u6761\u4ef6","model":"","parameter":"","checked":"","dn":"","deepClass":"fourth","childs":[{"id":"662","pid":"659","title":"\u6dfb\u52a0\u7b5b\u9009\u6761\u4ef6\u5b57\u6bb5","permissions":"\u6dfb\u52a0\u7b5b\u9009\u6761\u4ef6\u5b57\u6bb5","model":"","parameter":"","checked":"","dn":"","deepClass":"fifth","childs":[]},{"id":"661","pid":"659","title":"\u7f16\u8f91\u7b5b\u9009\u6761\u4ef6\u5b57\u6bb5","permissions":"\u7f16\u8f91\u7b5b\u9009\u6761\u4ef6\u5b57\u6bb5","model":"","parameter":"","checked":"","dn":"","deepClass":"fifth","childs":[]}]},{"id":"660","pid":"445","title":"\u5217\u8868\u8868\u5934","permissions":"\u5217\u8868\u8868\u5934","model":"","parameter":"","checked":"","dn":"","deepClass":"fourth","childs":[{"id":"663","pid":"660","title":"\u6dfb\u52a0\u5217\u8868\u8868\u5934\u5b57\u6bb5","permissions":"\u6dfb\u52a0\u5217\u8868\u8868\u5934\u5b57\u6bb5","model":"","parameter":"","checked":"","dn":"","deepClass":"fifth","childs":[]},{"id":"664","pid":"660","title":"\u7f16\u8f91\u5217\u8868\u8868\u5934\u5b57\u6bb5","permissions":"\u7f16\u8f91\u5217\u8868\u8868\u5934\u5b57\u6bb5","model":"","parameter":"","checked":"","dn":"","deepClass":"fifth","childs":[]}]}]},{"id":"389","pid":"363","title":"\u5b57\u6bb5\u5206\u7c7b","permissions":"\u5b57\u6bb5\u5206\u7c7b","model":"","parameter":"","checked":" checked","dn":" dn","deepClass":"third","childs":[{"id":"390","pid":"389","title":"\u4fee\u6539\u5b57\u6bb5\u5206\u7c7b","permissions":"\u4fee\u6539\u5b57\u6bb5\u5206\u7c7b","model":null,"parameter":"","checked":" checked","dn":" dn","deepClass":"fourth","childs":[]},{"id":"394","pid":"389","title":"\u6dfb\u52a0\u5b57\u6bb5\u5206\u7c7b","permissions":"\u6dfb\u52a0\u5b57\u6bb5\u5206\u7c7b","model":null,"parameter":"","checked":" checked","dn":" dn","deepClass":"fourth","childs":[]}]}]},{"id":"360","pid":"358","title":"\u83dc\u5355\u7ba1\u7406","permissions":"\u83dc\u5355\u7ba1\u7406","model":null,"parameter":"","checked":" checked","dn":" dn","deepClass":"second","childs":[{"id":"371","pid":"360","title":"\u83dc\u5355\u7ba1\u7406","permissions":"\u83dc\u5355\u7ba1\u7406","model":null,"parameter":"?&act=new","checked":" checked","dn":" dn","deepClass":"third","childs":[{"id":"369","pid":"371","title":"\u83dc\u5355\u6dfb\u52a0","permissions":"\u6dfb\u52a0\u83dc\u5355","model":"","parameter":"","checked":" checked","dn":" dn","deepClass":"fourth","childs":[]},{"id":"368","pid":"371","title":"\u83dc\u5355\u7f16\u8f91","permissions":"\u7f16\u8f91\u83dc\u5355","model":"","parameter":"_p_=a","checked":" checked","dn":" dn","deepClass":"fourth","childs":[]},{"id":"370","pid":"371","title":"\u5220\u9664\u83dc\u5355","permissions":"\u5220\u9664\u83dc\u5355","model":null,"parameter":"","checked":" checked","dn":" dn","deepClass":"fourth","childs":[]}]}]}]},{"id":"359","pid":"0","title":"\u7cfb\u7edf\u8bbe\u7f6e","permissions":"\u7cfb\u7edf\u8bbe\u7f6e","model":"","parameter":"","checked":" checked","dn":" dn","deepClass":"first","childs":[{"id":"364","pid":"359","title":"\u7cfb\u7edf\u8bbe\u7f6e","permissions":"\u7cfb\u7edf\u8bbe\u7f6e","model":null,"parameter":"","checked":" checked","dn":" dn","deepClass":"second","childs":[{"id":"400","pid":"364","title":"\u5168\u5c40\u8bbe\u7f6e","permissions":"\u5168\u5c40\u8bbe\u7f6e","model":null,"parameter":"","checked":" checked","dn":" dn","deepClass":"third","childs":[]}]},{"id":"365","pid":"359","title":"\u7cfb\u7edf\u65e5\u5fd7","permissions":"\u7cfb\u7edf\u65e5\u5fd7","model":null,"parameter":"","checked":" checked","dn":" dn","deepClass":"second","childs":[{"id":"401","pid":"365","title":"\u65e5\u5fd7\u67e5\u8be2","permissions":"\u65e5\u5fd7\u67e5\u8be2","model":null,"parameter":"","checked":" checked","dn":" dn","deepClass":"third","childs":[]},{"id":"402","pid":"365","title":"\u5220\u9664\u65e5\u5fd7","permissions":"\u5220\u9664\u65e5\u5fd7","model":null,"parameter":"","checked":" checked","dn":" dn","deepClass":"third","childs":[]}]},{"id":"718","pid":"359","title":"\u7248\u672c\u7ba1\u7406","permissions":"\u7248\u672c\u7ba1\u7406","model":"","parameter":"","checked":"","dn":"","deepClass":"second","childs":[{"id":"720","pid":"718","title":"\u7248\u672c\u8bb0\u5f55","permissions":"\u7248\u672c\u8bb0\u5f55","model":"","parameter":"","checked":"","dn":"","deepClass":"third","childs":[{"id":"724","pid":"720","title":"\u67e5\u770b\u5217\u8868","permissions":"\u67e5\u770b\u5217\u8868","model":"","parameter":"_p_=_list_","checked":"","dn":"","deepClass":"fourth","childs":[]},{"id":"725","pid":"720","title":"\u6dfb\u52a0\u7248\u672c","permissions":"\u6dfb\u52a0\u7248\u672c","model":"","parameter":"","checked":"","dn":"","deepClass":"fourth","childs":[]},{"id":"726","pid":"720","title":"\u7f16\u8f91\u7248\u672c","permissions":"\u7f16\u8f91\u7248\u672c","model":"","parameter":"","checked":"","dn":"","deepClass":"fourth","childs":[]},{"id":"727","pid":"720","title":"\u5220\u9664\u7248\u672c","permissions":"\u5220\u9664\u7248\u672c","model":"","parameter":"","checked":"","dn":"","deepClass":"fourth","childs":[]}]}]},{"id":"719","pid":"359","title":"\u53cd\u9988\u7ba1\u7406","permissions":"\u53cd\u9988\u7ba1\u7406","model":"","parameter":"","checked":"","dn":"","deepClass":"second","childs":[{"id":"721","pid":"719","title":"\u53cd\u9988\u7ba1\u7406","permissions":"\u53cd\u9988\u7ba1\u7406","model":"","parameter":"","checked":"","dn":"","deepClass":"third","childs":[{"id":"728","pid":"721","title":"\u67e5\u770b\u5217\u8868","permissions":"\u67e5\u770b\u5217\u8868","model":"","parameter":"_p_=_list_","checked":"","dn":"","deepClass":"fourth","childs":[]},{"id":"729","pid":"721","title":"\u5220\u9664\u53cd\u9988","permissions":"\u5220\u9664\u53cd\u9988","model":"","parameter":"","checked":"","dn":"","deepClass":"fourth","childs":[]}]}]}]}]');
      console.log(this.roleData);
      this.getRoleSelectedIds(this.roleData);
      // console.log(this.selected);
      // console.log(this.parentId);
      this.$store.dispatch('roleSelectedAdd',this.selected);
      this.$store.dispatch('roleParentId',this.parentId);
    }
  }
</script>