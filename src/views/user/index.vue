<style scoped>
.layout{
    border: lpx solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
}
.layout-logo{
    width: 100px;
    height: 30px;
    background: #5b6270;
    float: left;
    position: relative;
    top: 15px;
    left:20px;
}
.layout-nav{
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
}
</style>

<template>
    <div class="layout">
        <Layout>
            <Header>
                <Menu mode="horizontal" theme="dark" active-name="1">
                    <div class="layout-logo">
                        <img src="@/assets/cnki-logo.png"  width="100" height="32"/>
                    </div>
                    <div class= "layout-nav">
                        <MenuItem name="1">
                            <Icon type="ios-navigate"></Icon>
                            Item 1
                        </MenuItem>
                        <MenuItem name="2">
                            <Icon type="ios-keypad"></Icon>
                            Item 2
                        </MenuItem>
                        <MenuItem name="3">
                            <Icon type="ios-analytics"></Icon>
                            Item 3
                        </MenuItem>
                        <MenuItem name="4">
                            <Icon type="ios-paper"></Icon>
                            Item 4
                        </MenuItem>
                    </div>
                </Menu>
            </Header>
            <Layout>
                <Sider hide-trigger :style="{background: '#fff'}">
                    <Menu active-name="1-2" theme="light" width="auto" :open-names="['1']">
                        <Submenu name="1">
                            <template slot="title">
                                <Icon type="ios-navigate"/>
                                用户管理
                            </template>
                            <MenuItem name="1-1" @click.native.prevent="getAllUserInfo">用户信息</MenuItem>
                            <MenuItem name="1-2">角色信息</MenuItem>
                        </Submenu>
                        <Submenu name="2">
                            <template slot="title">
                                <Icon type="ios-keypad" />
                                Item 2
                            </template>
                            <MenuItem name="2-1">Option 1</MenuItem>
                            <MenuItem name="2-2">Option 2</MenuItem>
                        </Submenu>
                        <Submenu name="3"> 
                            <template slot="title">
                                <Icon type="ios-analytics" />
                                Item 3
                            </template>
                            <MenuItem name="3-1">Option 1</MenuItem>
                            <MenuItem name="3-3">Option 2</MenuItem>
                        </Submenu>
                    </Menu>
                </Sider>

                <Layout :style="{padding: '0 24px 24px'}">
                    <Breadcrumb :style="{margin: '24px 0'}">
                        <BreadcrumbItem>Home</BreadcrumbItem>
                        <BreadcrumbItem>Home1</BreadcrumbItem>
                        <BreadcrumbItem>Home2</BreadcrumbItem>
                    </Breadcrumb>
                    <Content :style="{padding: '0 50px'}">
                        <Card style="height=900px">
                            <!-- <Table  border :columns="columns1" :data="tableData1"></Table> -->
                            <i-table border :content="self" :columns="columns" :data="userInfoList"></i-table>
                        </Card>
                    </Content>
                </Layout>

            </Layout>
        </Layout>

    </div>
</template>

<script>
  export default {
    name: "table-main",
    data() {
      return {
        userInfoList: [],      
        self: this,
        columns: [
          {key: 'userId', title: '编号',  titleAlign: 'center', columnAlign: 'center',isResize:true},
          {key: 'userName', title: '姓名', titleAlign: 'center', columnAlign: 'center',isResize:true},
          {key: 'phone', title: '手机号',  titleAlign: 'center', columnAlign: 'center',isResize:true},
          {key: 'email', title: '邮箱',  titleAlign: 'center', columnAlign: 'left',isResize:true},
          {key: 'role', title: '角色',  titleAlign: 'center', columnAlign: 'left',isResize:true},
          {key: 'createDate', title: '创建时间',  titleAlign: 'center', columnAlign: 'left',isResize:true}
        ]
      }
    },
    created() {
      this.getAllUserInfo();
    },
    methods: {
        getAllUserInfo() {
            this.listLoading = true;
            this.$store.dispatch("getAllUserInfo")
            .then(response => {
                this.listLoading = false;
                this.userInfoList = response.data
                console.log(response.data);
                
            });
        },

    }
  }
</script>