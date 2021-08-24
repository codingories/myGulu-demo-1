<template>
  <div>
    <g-tabs :selected="selected">
      <g-tabs-head>
        <g-tabs-item name="1">1</g-tabs-item>
        <g-tabs-item name="2">2</g-tabs-item>
      </g-tabs-head>
      <g-tabs-body>
        <g-tabs-pane name="1">content 1</g-tabs-pane>
        <g-tabs-pane name="2">content 2</g-tabs-pane>
      </g-tabs-body>
    </g-tabs>

<!--    <g-nav :selected.sync="selected" :multiple="false">-->
<!--      <g-nav-item name="home">首页</g-nav-item>-->
<!--      <g-sub-nav name="about">-->
<!--        <template slot="title">关于</template>-->
<!--        <g-nav-item name="culture">企业文化</g-nav-item>-->
<!--        <g-nav-item name="developer">开发团队</g-nav-item>-->
<!--        <g-sub-nav name="contacts">-->
<!--          <template slot="title">联系方式</template>-->
<!--          <g-nav-item name="wechat">微信</g-nav-item>-->
<!--          <g-nav-item name="qq">QQ</g-nav-item>-->
<!--          <g-sub-nav name="phone">-->
<!--            <template slot="title">手机</template>-->
<!--            <g-nav-item name="cm">移动</g-nav-item>-->
<!--            <g-nav-item name="cu">联通</g-nav-item>-->
<!--            <g-nav-item name="cn">电信</g-nav-item>-->
<!--          </g-sub-nav>-->
<!--        </g-sub-nav>-->
<!--      </g-sub-nav>-->
<!--      <g-nav-item name="hire">招聘</g-nav-item>-->
<!--    </g-nav>-->
  </div>
</template>
<script>
  import GNav from './nav/nav.vue';
  import GNavItem from './nav/nav-item.vue';
  import GSubNav from './nav/sub-nav.vue';

  import Gtabs from './tabs/tabs'
  import GtabsBody from './tabs/tabs-body'
  import GtabsHead from './tabs/tabs-head'
  import GtabsItem from './tabs/tabs-item'
  import Gtabspane from './tabs/tabs-pane'


  export default {
    name: '',
    components: {
      GNav, GNavItem, GSubNav, 'g-tabs': Gtabs, 'g-tabs-body': GtabsBody, 'g-tabs-head': GtabsHead,
      'g-tabs-item':GtabsItem, 'g-tabs-pane': Gtabspane
    },
    data(){
      return {
        selected: '1'

        // selected: ['culture']
      }
    },
}
</script>
<style>
* {margin: 0; padding: 0; box-sizing: border-box;}
</style>
