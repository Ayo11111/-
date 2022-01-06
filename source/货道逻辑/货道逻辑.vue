<!--
 * @Descripttion: 测试
 * @Company: 思宏科技
 * @version: v1.0
 * @Author: HJ
 * @Date: 2021-11-09 15:55:27
 * @LastEditors: HJ
 * @LastEditTime: 2021-11-18 21:25:25
-->
<template>
  <div class="container">
    <div>
      <a-row v-for="(i, k) in containers" :key="k">
        <a-col v-for="(ic, kc) in i" :key="kc" :span="ic.size * 3">
          <div class="container-wrapper" v-show="ic.judgeDel">
            <p>
              {{ ic }}
            </p>
            <div class="right-control" v-show="isShowRightControl(k, ic.column)">
              <a-icon type="plus-circle" @click="addColumn(k, ic.column)" />
              <a-icon type="minus" @click="reduceColumn(k, ic.column)" />
            </div>
            <div class="bottom-control" v-show="isShowBottomControl(k, ic.column)">
              <a-icon type="plus-circle" @click="addLine(k, ic.column)" />
              <a-icon type="minus" @click="reduceLine(k, ic.column)" />
            </div>
          </div>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TestIndex',
  components: {},
  created() {},
  data() {
    return {
      containers: {
        1: [
          {
            id: 120,
            modelId: 55,
            modelRow: 1,
            column: 1,
            aisleLimit: 10,
            size: 1,
            creatTime: null,
            updateTime: null,
            judgeDel: true
          },
          {
            id: 121,
            modelId: 55,
            modelRow: 1,
            column: 2,
            aisleLimit: 10,
            size: 1,
            creatTime: null,
            updateTime: null,
            judgeDel: true
          },
          {
            id: 122,
            modelId: 55,
            modelRow: 1,
            column: 3,
            aisleLimit: 10,
            size: 1,
            creatTime: null,
            updateTime: null,
            judgeDel: true
          },
          {
            id: 123,
            modelId: 55,
            modelRow: 1,
            column: 4,
            aisleLimit: 10,
            size: 1,
            creatTime: null,
            updateTime: null,
            judgeDel: true
          },
          {
            id: 124,
            modelId: 55,
            modelRow: 1,
            column: 5,
            aisleLimit: 10,
            size: 1,
            creatTime: null,
            updateTime: null,
            judgeDel: true
          },
          {
            id: 125,
            modelId: 55,
            modelRow: 1,
            column: 6,
            aisleLimit: 10,
            size: 1,
            creatTime: null,
            updateTime: null,
            judgeDel: true
          },
          {
            id: 126,
            modelId: 55,
            modelRow: 1,
            column: 7,
            aisleLimit: 10,
            size: 1,
            creatTime: null,
            updateTime: null,
            judgeDel: true
          },
          {
            id: 127,
            modelId: 55,
            modelRow: 1,
            column: 8,
            aisleLimit: 10,
            size: 1,
            creatTime: null,
            updateTime: null,
            judgeDel: true
          }
        ],
        2: [
          {
            id: 128,
            modelId: 55,
            modelRow: 2,
            column: 1,
            aisleLimit: 10,
            size: 1,
            creatTime: null,
            updateTime: null,
            judgeDel: true
          },
          {
            id: 129,
            modelId: 55,
            modelRow: 2,
            column: 2,
            aisleLimit: 10,
            size: 1,
            creatTime: null,
            updateTime: null,
            judgeDel: true
          },
          {
            id: 130,
            modelId: 55,
            modelRow: 2,
            column: 3,
            aisleLimit: 10,
            size: 1,
            creatTime: null,
            updateTime: null,
            judgeDel: true
          },
          {
            id: 131,
            modelId: 55,
            modelRow: 2,
            column: 4,
            aisleLimit: 10,
            size: 1,
            creatTime: null,
            updateTime: null,
            judgeDel: true
          },
          {
            id: 132,
            modelId: 55,
            modelRow: 2,
            column: 5,
            aisleLimit: 10,
            size: 1,
            creatTime: null,
            updateTime: null,
            judgeDel: true
          },
          {
            id: 133,
            modelId: 55,
            modelRow: 2,
            column: 6,
            aisleLimit: 10,
            size: 1,
            creatTime: null,
            updateTime: null,
            judgeDel: true
          },
          {
            id: 134,
            modelId: 55,
            modelRow: 2,
            column: 7,
            aisleLimit: 10,
            size: 1,
            creatTime: null,
            updateTime: null,
            judgeDel: true
          },
          {
            id: 135,
            modelId: 55,
            modelRow: 2,
            column: 8,
            aisleLimit: 10,
            size: 1,
            creatTime: null,
            updateTime: null,
            judgeDel: true
          }
        ],
        3: [
          {
            id: 136,
            modelId: 55,
            modelRow: 3,
            column: 1,
            aisleLimit: 10,
            size: 1,
            creatTime: null,
            updateTime: null,
            judgeDel: true
          },
          {
            id: 137,
            modelId: 55,
            modelRow: 3,
            column: 2,
            aisleLimit: 10,
            size: 1,
            creatTime: null,
            updateTime: null,
            judgeDel: true
          },
          {
            id: 138,
            modelId: 55,
            modelRow: 3,
            column: 3,
            aisleLimit: 10,
            size: 1,
            creatTime: null,
            updateTime: null,
            judgeDel: true
          },
          {
            id: 139,
            modelId: 55,
            modelRow: 3,
            column: 4,
            aisleLimit: 10,
            size: 1,
            creatTime: null,
            updateTime: null,
            judgeDel: true
          },
          {
            id: 140,
            modelId: 55,
            modelRow: 3,
            column: 5,
            aisleLimit: 10,
            size: 1,
            creatTime: null,
            updateTime: null,
            judgeDel: true
          },
          {
            id: 141,
            modelId: 55,
            modelRow: 3,
            column: 6,
            aisleLimit: 10,
            size: 1,
            creatTime: null,
            updateTime: null,
            judgeDel: true
          },
          {
            id: 142,
            modelId: 55,
            modelRow: 3,
            column: 7,
            aisleLimit: 10,
            size: 1,
            creatTime: null,
            updateTime: null,
            judgeDel: true
          },
          {
            id: 143,
            modelId: 55,
            modelRow: 3,
            column: 8,
            aisleLimit: 10,
            size: 1,
            creatTime: null,
            updateTime: null,
            judgeDel: true
          }
        ],
        4: [
          {
            id: 144,
            modelId: 55,
            modelRow: 4,
            column: 1,
            aisleLimit: 10,
            size: 1,
            creatTime: null,
            updateTime: null,
            judgeDel: true
          },
          {
            id: 145,
            modelId: 55,
            modelRow: 4,
            column: 2,
            aisleLimit: 10,
            size: 1,
            creatTime: null,
            updateTime: null,
            judgeDel: true
          },
          {
            id: 146,
            modelId: 55,
            modelRow: 4,
            column: 3,
            aisleLimit: 10,
            size: 1,
            creatTime: null,
            updateTime: null,
            judgeDel: true
          },
          {
            id: 147,
            modelId: 55,
            modelRow: 4,
            column: 4,
            aisleLimit: 10,
            size: 1,
            creatTime: null,
            updateTime: null,
            judgeDel: true
          },
          {
            id: 148,
            modelId: 55,
            modelRow: 4,
            column: 5,
            aisleLimit: 10,
            size: 1,
            creatTime: null,
            updateTime: null,
            judgeDel: true
          },
          {
            id: 149,
            modelId: 55,
            modelRow: 4,
            column: 6,
            aisleLimit: 10,
            size: 1,
            creatTime: null,
            updateTime: null,
            judgeDel: true
          },
          {
            id: 150,
            modelId: 55,
            modelRow: 4,
            column: 7,
            aisleLimit: 10,
            size: 1,
            creatTime: null,
            updateTime: null,
            judgeDel: true
          },
          {
            id: 151,
            modelId: 55,
            modelRow: 4,
            column: 8,
            aisleLimit: 10,
            size: 1,
            creatTime: null,
            updateTime: null,
            judgeDel: true
          }
        ],
        5: [
          {
            id: 152,
            modelId: 55,
            modelRow: 5,
            column: 1,
            aisleLimit: 10,
            size: 1,
            creatTime: null,
            updateTime: null,
            judgeDel: true
          },
          {
            id: 153,
            modelId: 55,
            modelRow: 5,
            column: 2,
            aisleLimit: 10,
            size: 1,
            creatTime: null,
            updateTime: null,
            judgeDel: true
          },
          {
            id: 154,
            modelId: 55,
            modelRow: 5,
            column: 3,
            aisleLimit: 10,
            size: 1,
            creatTime: null,
            updateTime: null,
            judgeDel: true
          },
          {
            id: 155,
            modelId: 55,
            modelRow: 5,
            column: 4,
            aisleLimit: 10,
            size: 1,
            creatTime: null,
            updateTime: null,
            judgeDel: true
          },
          {
            id: 156,
            modelId: 55,
            modelRow: 5,
            column: 5,
            aisleLimit: 10,
            size: 1,
            creatTime: null,
            updateTime: null,
            judgeDel: true
          },
          {
            id: 157,
            modelId: 55,
            modelRow: 5,
            column: 6,
            aisleLimit: 10,
            size: 1,
            creatTime: null,
            updateTime: null,
            judgeDel: true
          },
          {
            id: 158,
            modelId: 55,
            modelRow: 5,
            column: 7,
            aisleLimit: 10,
            size: 1,
            creatTime: null,
            updateTime: null,
            judgeDel: true
          },
          {
            id: 159,
            modelId: 55,
            modelRow: 5,
            column: 8,
            aisleLimit: 10,
            size: 1,
            creatTime: null,
            updateTime: null,
            judgeDel: true
          }
        ],
        6: [
          {
            id: 161,
            modelId: 55,
            modelRow: 6,
            column: 1,
            aisleLimit: 10,
            size: 1,
            creatTime: null,
            updateTime: null,
            judgeDel: true
          },
          {
            id: 162,
            modelId: 55,
            modelRow: 6,
            column: 2,
            aisleLimit: 10,
            size: 1,
            creatTime: null,
            updateTime: null,
            judgeDel: true
          },
          {
            id: 163,
            modelId: 55,
            modelRow: 6,
            column: 3,
            aisleLimit: 10,
            size: 1,
            creatTime: null,
            updateTime: null,
            judgeDel: true
          },
          {
            id: 164,
            modelId: 55,
            modelRow: 6,
            column: 4,
            aisleLimit: 10,
            size: 1,
            creatTime: null,
            updateTime: null,
            judgeDel: true
          },
          {
            id: 165,
            modelId: 55,
            modelRow: 6,
            column: 5,
            aisleLimit: 10,
            size: 1,
            creatTime: null,
            updateTime: null,
            judgeDel: true
          },
          {
            id: 166,
            modelId: 55,
            modelRow: 6,
            column: 6,
            aisleLimit: 10,
            size: 1,
            creatTime: null,
            updateTime: null,
            judgeDel: true
          },
          {
            id: 167,
            modelId: 55,
            modelRow: 6,
            column: 7,
            aisleLimit: 10,
            size: 1,
            creatTime: null,
            updateTime: null,
            judgeDel: true
          },
          {
            id: 168,
            modelId: 55,
            modelRow: 6,
            column: 8,
            aisleLimit: 10,
            size: 1,
            creatTime: null,
            updateTime: null,
            judgeDel: true
          }
        ]
      }
    }
  },
  methods: {
    change() {
      this.containers[1] = [
        {
          id: 1,
          aisleLimit: 10,
          column: 1,
          modelRow: 1,
          size: 2
        },
        {
          id: 2,
          aisleLimit: 10,
          column: 2,
          modelRow: 1,
          size: 0
        },
        {
          id: 3,
          aisleLimit: 10,
          column: 3,
          modelRow: 1,
          size: 1
        }
      ]
    },
    // 是否显示右边的控制器
    // row 当前的行号
    // column 当前的列号
    isShowRightControl(row, column) {
      const { containers } = this
      // 列号是从1开始的所以不需要+1
      const rightContainers = containers[row][column]
      return !rightContainers || !rightContainers.judgeDel
    },
    // 是否显示下边的控制器
    // row 当前的行号
    // column 当前的列号
    isShowBottomControl(row, column) {
      const { containers } = this
      const bottomRow = containers[+row + 1]
      const bottomContainer = bottomRow ? bottomRow[column - 1] : null
      return !bottomContainer || !bottomContainer.judgeDel
    },
    // 增加一列
    addColumn(row, column) {
      this.containers[row][column].judgeDel = true
      this.$forceUpdate()
    },
    // 减少一列
    reduceColumn(row, column) {
      this.containers[row][column - 1].judgeDel = false
      this.$forceUpdate()
    },
    // 增加一行
    addLine(row, column) {
      this.containers[+row + 1][column - 1].judgeDel = true
      this.$forceUpdate()
    },
    // 减少一行
    reduceLine(row, column) {
      this.containers[row][column - 1].judgeDel = false
      this.$forceUpdate()
    }
  }
}
</script>

<style lang="scss" scoped>
.container-wrapper {
  position: relative;
  border: 1px solid #eee;

  width: 160px;
  height: 160px;
  margin-bottom: 32px;
  .right-control {
    position: absolute;
    right: 0;
    top: 0;
    transform: translate(100%, 0);
    width: 100%;
    height: 100%;
  }
  .bottom-control {
    position: absolute;
    left: 0;
    bottom: 0;
    transform: translate(0, 100%);
    width: 100%;
    height: 100%;
  }
}
</style>
