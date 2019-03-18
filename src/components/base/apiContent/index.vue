<template>
    <div class="content">
        <el-form label-width="150px" label-position="top">
            <el-form-item label="公共参数">
                <template>
                    <el-table :data="tableData1">
                        <el-table-column prop="date" label="环境"></el-table-column>
                        <el-table-column prop="name" label="HTTPS请求地址"></el-table-column>
                    </el-table>
                </template>
            </el-form-item>
            <el-form-item label="公共请求参数">
                <el-table :data="tableData2">
                    <el-table-column prop="name1" label="参数"></el-table-column>
                    <el-table-column prop="name2" label="类型"></el-table-column>
                    <el-table-column prop="name3" label="是否必填"></el-table-column>
                    <el-table-column prop="name4" label="最大长度"></el-table-column>
                    <el-table-column prop="name5" label="描述"></el-table-column>
                    <el-table-column prop="name6" label="示例值"></el-table-column>
                </el-table>
            </el-form-item>
            <el-form-item label="请求参数">
                <el-table :data="tableData3">
                    <el-table-column prop="name1" label="参数"></el-table-column>
                    <el-table-column prop="name2" label="类型"></el-table-column>
                    <el-table-column prop="name3" label="是否必填"></el-table-column>
                    <el-table-column prop="name4" label="最大长度"></el-table-column>
                    <el-table-column prop="name5" label="描述"></el-table-column>
                    <el-table-column prop="name6" label="示例值"></el-table-column>
                </el-table>
            </el-form-item>
            <el-form-item label="公共响应参数">
                <el-table :data="tableData2">
                    <el-table-column prop="name1" label="参数"></el-table-column>
                    <el-table-column prop="name2" label="类型"></el-table-column>
                    <el-table-column prop="name3" label="是否必填"></el-table-column>
                    <el-table-column prop="name4" label="最大长度"></el-table-column>
                    <el-table-column prop="name5" label="描述"></el-table-column>
                    <el-table-column prop="name6" label="示例值"></el-table-column>
                </el-table>
            </el-form-item>
            <el-form-item label="请求示例">
                <el-tabs type="border-card">
                    <el-tab-pane label="JAVA">
                        AlipayClient alipayClient = new DefaultAlipayClient("https://openapi.alipay.com/gateway.do","app_id","your private_key","json","GBK","alipay_public_key","RSA2");
                        AlipayUserInfoShareRequest request = new AlipayUserInfoShareRequest();
                        AlipayUserInfoShareResponse response = alipayClient.execute(request,accessToken);
                        if(response.isSuccess()){
                        System.out.println("调用成功");
                        } else {
                        System.out.println("调用失败");
                        }
                    </el-tab-pane>
                    <el-tab-pane label=".NET">
                        IAopClient client = new DefaultAopClient("https://openapi.alipay.com/gateway.do", "app_id", "merchant_private_key", "json", "1.0", "RSA2", "alipay_public_key", "GBK", false);
                        AlipayUserInfoShareRequest request= new AlipayUserInfoShareRequest() ;
                        AlipayUserInfoShareResponse response=client.execute(request,accessToken);
                        Console.WriteLine(response.Body);
                    </el-tab-pane>
                    <el-tab-pane label="PHP">
                        $aop = new AopClient ();
                        $aop->gatewayUrl = 'https://openapi.alipay.com/gateway.do';
                        $aop->appId = 'your app_id';
                        $aop->rsaPrivateKey = '请填写开发者私钥去头去尾去回车，一行字符串';
                        $aop->alipayrsaPublicKey='请填写支付宝公钥，一行字符串';
                        $aop->apiVersion = '1.0';
                        $aop->signType = 'RSA2';
                        $aop->postCharset='GBK';
                        $aop->format='json';
                        $request = new AlipayUserInfoShareRequest ();
                        $result = $aop->execute ( $request , $accessToken );
                        $responseNode = str_replace(".", "_", $request->getApiMethodName()) . "_response";
                        $resultCode = $result->$responseNode->code;
                        if(!empty($resultCode)&&$resultCode == 10000){
                        echo "成功";
                        } else {
                        echo "失败";
                        }
                    </el-tab-pane>
                    <el-tab-pane
                        label="HTTP请求源码"
                    >https://openapi.alipay.com/gateway.do?timestamp=2013-01-01 08:08:08&method=alipay.user.info.share&app_id=5121&sign_type=RSA2&sign=ERITJKEIJKJHKKKKKKKHJEREEEEEEEEEEE&version=1.0&charset=GBK&auth_token=20130319e9b8d53d09034da8998caefa756c4006</el-tab-pane>
                </el-tabs>
            </el-form-item>
            <el-form-item label="响应示例">
                <el-tabs type="border-card">
                    <el-tab-pane label="JSON示例">
                        {
                        "alipay_user_info_share_response": {
                        "code": "10000",
                        "msg": "Success",
                        "user_id": "2088102104794936",
                        "avatar": "http://tfsimg.alipay.com/images/partner/T1uIxXXbpXXXXXXXX",
                        "province": "安徽省",
                        "city": "安庆",
                        "nick_name": "支付宝小二",
                        "is_student_certified": "T",
                        "user_type": "1",
                        "user_status": "T",
                        "is_certified": "T",
                        "gender": "F"
                        },
                        "sign": "ERITJKEIJKJHKKKKKKKHJEREEEEEEEEEEE"
                        }
                    </el-tab-pane>
                    <el-tab-pane label="XML示例">
                        IAopClient client = new DefaultAopClient("https://openapi.alipay.com/gateway.do", "app_id", "merchant_private_key", "json", "1.0", "RSA2", "alipay_public_key", "GBK", false);
                        AlipayUserInfoShareRequest request= new AlipayUserInfoShareRequest() ;
                        AlipayUserInfoShareResponse response=client.execute(request,accessToken);
                        Console.WriteLine(response.Body);
                    </el-tab-pane>
                </el-tabs>
            </el-form-item>
            <el-form-item label="业务错误码">
                <el-table :data="tableData2">
                    <el-table-column prop="name1" label="错误码"></el-table-column>
                    <el-table-column prop="name2" label="错误描述"></el-table-column>
                    <el-table-column prop="name3" label="解决方案"></el-table-column>
                </el-table>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
    data() {
        return {
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
                    name1:'SYSTEM_ERROR',
                    name2:'系统繁忙',
                    name3:'系统错误请稍后再试',
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.content {
    padding: 0 30px;
    .title {
        margin-bottom: 40px;
        h1 {
            font-size: 22px;
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
</style>

