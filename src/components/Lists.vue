<template>
  <section>
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

    <!--列表-->
    <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%" @row-click="openDetails" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="38"></el-table-column>
      <el-table-column label="订单编号" width="170" fixed>
        <template slot-scope="scope">{{ scope.row.orderNo }}</template>
      </el-table-column>
      <el-table-column prop="payNo" label="支付单号" width="170"></el-table-column>
      <el-table-column prop="wName" label="商户公众号名称" width="130"></el-table-column>
      <el-table-column prop="wID" label="商户公众号ID" width="120"></el-table-column>
      <el-table-column prop="payer" label="支付人" width="120"></el-table-column>
      <el-table-column prop="payment" label="支付方式" width="100"></el-table-column>
      <el-table-column prop="business" label="所属业务" width="100" show-overflow-tooltip></el-table-column>
      <el-table-column prop="amount" label="支付金额" width="120" class-name="sum-color"></el-table-column>
      <el-table-column prop="fee" label="手续费" width="120" class-name="sum-color"></el-table-column>
      <el-table-column prop="refund" label="退款金额" width="120" class-name="sum-color"></el-table-column>
      <el-table-column prop="actual" label="实际金额" width="120" class-name="sum-color"></el-table-column>
      <el-table-column prop="status" label="到账状态" width="100"></el-table-column>
      <el-table-column prop="payDate" label="支付时间" width="150"></el-table-column>
      <el-table-column prop="arrivalDate" label="到账时间" width="150"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!--页码-->
    <el-col :span="24" class="toolbar">
      <el-button type="primary" :disabled="this.selected.length==0">批量操作</el-button>
      <el-pagination
        background
        layout="prev, pager, next"
        @click="handleCurrentChange"
        :total="total">
      </el-pagination>
    </el-col>
  </section>
</template>

<script>
export default {
  name: 'Lists',
  data () {
    return {
      title: 'Welcome to Your Vue.js App......MrParker.',
      tableData: [],
      multipleSelection: [],
      selected: [],
      filters: {
        name: ''
      },
      page: 1,
      total: 100
    }
  },
  watch: {
    multipleSelection: function(){
      let arr = []
      this.multipleSelection.map((item)=> {
          arr.push(item.id)
      })
      console.log(arr.length?arr.join(','):'-');
    }
  },
  methods: {
    openDetails: function(item,event,column){
      console.log(item.id);
      event.cancelBubble = true;
    },
    handleSelectionChange: function(item){
      // console.log(item);
      this.selected = item;
    },
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
    getUsers(val = 1){
      console.log(val);
    },
    handleAdd(){

    },
    handleCurrentChange(val) {
      this.page = val;
      this.getUsers(val);
    },

  },
  mounted(){
    this.tableData = [
      {
        id: 123,
        orderNo: '6881234567890123456',
        payNo: '2331234567890123456',
        wName: 'xxx公众号',
        wID: 'zjfiawsf',
        payer: '张三张四张五',
        payment: '微信支付',
        business: '微餐饮',
        amount: '14614.00',   // 支付金额
        fee: '322.00',        // 手续费
        refund: '322.00',     // 退款金额
        actual: '322.00',     // 实际金额
        status: '已到账',    // 到账状态
        payDate: '2017-9-27 10:31:37',        // 支付时间
        arrivalDate: '2017-9-27 10:31:44',        // 到账日期
      },{
        id: 124,
        orderNo: '6881234567890123452',
        payNo: '2331234567890123453',
        wName: 'xxx公众号',
        wID: 'zjfiawsf',
        payer: '张三张四张五',
        payment: '微信支付',
        business: '微餐饮',
        amount: '14614.00',   // 支付金额
        fee: '322.00',        // 手续费
        refund: '322.00',     // 退款金额
        actual: '322.00',     // 实际金额
        status: '已到账',    // 到账状态
        payDate: '2017-9-27 10:31:37',        // 支付时间
        arrivalDate: '2017-9-27 10:31:44',        // 到账日期
      }
    ]
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
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
