<template>
    <div class="content">
        <el-tabs v-model="activeName" tab-position="left">
            <el-tab-pane
                v-for="item in data"
                :key="item.index"
                :label="item.tabPane.label"
                :name="item.tabPane.name"
            >
                
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>

export default {
    data() {
        return {
            activeName: '',
            data: [
                {
                    tabPane: {
                        label: '订单列表分页查询',
                        name: 'queryOrderPage'
                    },
                    tabContent: {
                        head: {
                            title: '/order/queryOrderPage.action',
                            label: ['可导出execl'],
                            explain: '订单列表分页查询接口'
                        },
                        parameter: {
                            public: {
                                head: [],
                                body: [],
                            }
                        }
                    }
                }
            ],

            tableData1: [{
                date: '正式环境',
                name: 'https://openapi.alipay.com/gateway.do',
            }],
            tableData2: [{
                name1: 'app_id',
                name2: 'String',
                name3: '是',
                name4: '32',
                name5: '支付宝分配给',
                name6: '2014072300007148'
            },
            {
                name1: 'app_id',
                name2: 'String',
                name3: '是',
                name4: '32',
                name5: '支付宝分配给',
                name6: '2014072300007148'
            },
            {
                name1: 'app_id',
                name2: 'String',
                name3: '是',
                name4: '32',
                name5: '支付宝分配给',
                name6: '2014072300007148'
            }],
            tableData3: [],
            tableData4: [
                {
                    name1: 'SYSTEM_ERROR',
                    name2: '系统繁忙',
                    name3: '系统错误请稍后再试',
                }
            ]
        };
    },
    mounted() {
        this.activeName = this.data[0].tabPane.name;
    },
}
</script>

<style lang="scss" scoped>
.content {
    .tab-content {
        padding: 0 30px;
        .title {
            margin-bottom: 40px;
            h1 {
                font-size: 22px;
                margin: 0;
            }
            p {
                color: rgba(0, 0, 0, 0.65);
                span {
                    display: inline-block;
                    border: 1px solid #f0d5a6;
                    color: #f09948;
                    margin-right: 20px;
                    padding: 0 20px;
                }
            }
        }
    }
}
</style>
