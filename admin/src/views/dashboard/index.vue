<template>
  <div class="dashboard-container">
    <div class="dashboard-text">当前版本V1.0</div>
    <div class="dashboard-text">你好,管理员:{{ name }}</div>
    <div class="dashboard-text">
      角色:
      <span>{{ roles == 1 ? '普通管理员' : '超级管理员' }}</span>
    </div>
    <div class="dashboard-text">
      注册时间:
      <span>{{ new Date(createTime).toLocaleString() }}</span>
    </div>
    <PanelGroup
      :girl-count="girlCount"
      :user-count="userCount"
      :finished-count="finishedCount"
      :visit-count="visitCount"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import PanelGroup from './components/PanGroup'
import { getCounts } from '@/api/common'
export default {
  name: 'Dashboard',
  components: {
    PanelGroup
  },
  data() {
    return {
      visitCount: parseInt(Math.random() * 10000),
      finishedCount: 0,
      girlCount: 0,
      userCount: 0
    }
  },
  computed: {
    ...mapGetters([
      'name',
      'roles',
      'createTime'
    ])
  },
  created() {
    getCounts().then(rs => {
      const { finishedCount, girlCount, userCount } = rs.data
      this.finishedCount = finishedCount
      this.girlCount = girlCount
      this.userCount = userCount
    })
  },
  methods: {

  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
