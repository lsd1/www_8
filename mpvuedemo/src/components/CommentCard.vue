<template>
    <div>
    <div v-for="(item, index) in commentList">
        <div class="appraisal-item" :key="index">
            <div class="top top-left">
                <wux-avatar :src="item.avatar"></wux-avatar>
            </div>
            <div class="top top-right">
                <span class="name">{{ item.username }}</span>
                <span class="time">{{ item.datetime }}</span>
                <wux-rater slot="footer" :defaultValue="item.score" :activeColor="'#F39D21'" :fontSize="'40rpx'" :disabled="true" icon="ios-heart" :margin="7" />
                <div class="imgs" >
                    <div v-for="(img, index) in item.images" :key="index">
                        <img lazy-load="true"  :src="img"  />
                    </div>
                </div>
                <div class="content" >
                    {{ item.content }}
                </div>
                <div class="reply" v-if="!empty(item.reply)" >
                    <span class="reply-head">商家回复:</span>{{ item.reply }}
                </div>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
  import empty from 'is-empty'
  export default {
    name: 'CommentCard',
    props: {
      'commentList': {
        type: Object,
        default: []
      }
    },
    methods: {
      empty
    }
  }
</script>

<style lang="scss" scoped>
.appraisal-item {
    background-color: #fff;
    padding-top: 59px;
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: flex-start;
    .top {
        display: flex;
    }
    .top-left {
        width: 15%;
        justify-content: center;
    }
    .top-right {
        width: 85%;
        flex-flow: column wrap;
        .name {
            font-size:30px;
            font-family:PingFang-SC-Bold;
            font-weight:bold;
            color: #333;
        }
        .time {
            font-size:24px;
            font-family:PingFang-SC-Medium;
            font-weight:500;
            color: #A5A4A4;
        }
        .imgs {
            display: flex;
            flex-flow: row wrap;
            margin-top: 20px;
            div {
                padding: 5px;
                width: 180px;
                height: 180px;
                img {
                    width: 100%;
                    height: 100%;
                    border-radius: 10px;
                }
            }
        }
        .content {
            margin-top: 20px;
            font-size:24px;
            font-family:PingFang-SC-Medium;
            font-weight:500;
            color:#333;
        }
        .reply {
            font-size:24px;
            font-family:PingFang-SC-Medium;
            font-weight:500;
            color:#333;
            margin-top: 20px;
            .reply-head {
                color: #F39D21;
            }
        }
    }
}
</style>
