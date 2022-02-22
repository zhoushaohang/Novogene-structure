<template>
    <a-layout>
        <a-layout-header class="header">
            <div class="logo" />
            <a-menu
                v-model:selectedKeys="selectedKeys1"
                theme="dark"
                mode="horizontal"
                :style="{ lineHeight: '64px' }"
            >
                <h1 class="name">Novogene网站逻辑图</h1>
            </a-menu>
        </a-layout-header>
        <a-layout>
            <a-layout-sider width="200" style="background: #fff">
                <a-menu
                    v-model:selectedKeys="selectedKeys2"
                    v-model:openKeys="openKeys"
                    mode="inline"
                    :style="{ height: '100%', borderRight: 0 }"
                >
                    <a-sub-menu key="sub1">
                        <template #title>
                            <span>
                                <user-outlined />
                                服务
                            </span>
                        </template>
                        <a-menu-item key="1"><router-link to="/biaoguan">研究服务</router-link></a-menu-item>
                        <a-menu-item key="2"><router-link to="/linchuang">临床诊断</router-link></a-menu-item>
                        <a-menu-item key="3">生物制药</a-menu-item>
                        <a-menu-item key="4">服务支持</a-menu-item>
                    </a-sub-menu>
                    <a-sub-menu key="sub2">
                        <template #title>
                            <span>
                                <laptop-outlined />
                                技术
                            </span>
                        </template>
                        <a-menu-item key="5"
                            ><router-link to="/index"
                                >概述</router-link
                            ></a-menu-item
                        >
                        <a-menu-item key="6">平台</a-menu-item>
                        <a-menu-item key="7">认证</a-menu-item>
                        <a-menu-item key="8">智能配送平台</a-menu-item>
                    </a-sub-menu>
                    <a-sub-menu key="sub3">
                        <template #title>
                            <span>
                                <notification-outlined />
                                资源
                            </span>
                        </template>
                        <a-menu-item key="9">出版物</a-menu-item>
                        <a-menu-item key="10">下载</a-menu-item>
                        <a-menu-item key="11">小册子</a-menu-item>
                        <a-menu-item key="12">网络研讨会</a-menu-item>
                        <a-menu-item key="13">博客</a-menu-item>
                    </a-sub-menu>
                    <a-sub-menu key="sub4">
                        <template #title>
                            <span>
                                <notification-outlined />
                                关于
                            </span>
                        </template>
                        <a-menu-item key="14">关于我们</a-menu-item>
                        <a-menu-item key="15">诺金全球</a-menu-item>
                        <a-menu-item key="16">新闻与事件</a-menu-item>
                        <a-menu-item key="17">职业生涯</a-menu-item>
                        <a-menu-item key="18">合伙人</a-menu-item>
                    </a-sub-menu>
                    <a-sub-menu key="sub5">
                        <template #title>
                            <span>
                                <notification-outlined />
                                联系我们
                            </span>
                        </template>
                    </a-sub-menu>
                </a-menu>
            </a-layout-sider>
            <a-layout style="padding: 0 24px 24px">
                <router-view></router-view>
            </a-layout>
        </a-layout>
    </a-layout>
</template>
<script>
import {
    UserOutlined,
    LaptopOutlined,
    NotificationOutlined,
} from '@ant-design/icons-vue'
import { defineComponent, ref } from 'vue'
export default defineComponent({
    components: {
        UserOutlined,
        LaptopOutlined,
        NotificationOutlined,
    },

    setup() {
        return {
            selectedKeys1: ref(['2']),
            selectedKeys2: ref(['1']),
            collapsed: ref(false),
            openKeys: ref(['sub1']),
        }
    },
})
</script>
<style>
#components-layout-demo-top-side-2 .logo {
    float: left;
    width: 120px;
    height: 31px;
    margin: 16px 24px 16px 0;
    background: rgba(255, 255, 255, 0.3);
}

.ant-row-rtl #components-layout-demo-top-side-2 .logo {
    float: right;
    margin: 16px 0 16px 24px;
}

.site-layout-background {
    background: #fff;
}
.name {
    color: #fff;
}
</style>