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
        <h1 class="name">Novogene</h1>
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
                Services
              </span>
            </template>
            <a-menu-item key="1"
              ><router-link to="/biaoguan"
                >Research Services</router-link
              ></a-menu-item
            >
            <a-menu-item key="2"
              ><router-link to="/linchuang"
                >Clinical Diagnostics</router-link
              ></a-menu-item
            >
            <a-menu-item key="3">
              <router-link to="/Biopharma-Services"
                >Biopharma Services</router-link
              >
            </a-menu-item>
            <a-menu-item key="4"
              ><router-link to="/Service-Support">Service Support</router-link>
            </a-menu-item>
          </a-sub-menu>
          <a-menu-item key="sub2">
            <template #icon>
              <InboxOutlined />
            </template>
            <span><router-link to="/Technology">Technology</router-link></span>
          </a-menu-item>
          <a-menu-item key="sub3">
            <template #icon>
              <InboxOutlined />
            </template>
            <span><router-link to="/resources">Resources</router-link></span>
          </a-menu-item>
          <a-menu-item key="sub4">
            <template #icon>
              <InboxOutlined />
            </template>
            <span><router-link to="/About">About</router-link></span>
          </a-menu-item>
          <a-menu-item key="sub5">
            <template #icon>
              <InboxOutlined />
            </template>
            <span><router-link to="/Contact-Us">Contact-Us</router-link></span>
          </a-menu-item>

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
} from "@ant-design/icons-vue";
import { defineComponent, ref } from "vue";
export default defineComponent({
  components: {
    UserOutlined,
  },

  setup() {
    return {
      selectedKeys1: ref(["2"]),
      selectedKeys2: ref(["1"]),
      collapsed: ref(false),
      openKeys: ref(["sub1"]),
    };
  },
});
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
