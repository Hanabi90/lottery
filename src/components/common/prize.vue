<template>
    <div>
        <ul>
            <li class="prize_li" v-for="item in prizeArr" :key="item.id">
                <p class="wrap">
                    <span class="issue">{{item.issue}}</span>
                    <span class="ball" v-for="(ball, index) in item.code">{{ball}}</span>
                </p>
            </li>
        </ul>
    </div>
</template>

<script>
import {getprize} from '../../Api/api';
export default {
    mounted(){
        this.getprize()
    },
    data() {
        return {
            prizeArr:[]
        }
    },
    props:['lotteryid'],
    methods: {
        getprize(){
            getprize({lotteryid:this.lotteryid,size:50}).then((res)=>{
                this.prizeArr = res.data.data
            })
        }
    }
}
</script>

<style lang="stylus" scoped>
.wrap
    display flex
    justify-content space-around
    padding 20px 10px;
.prize_li
        border-bottom 1px solid #eee
.issue
    height 30px
    display flex
    justify-content center
    align-items center
    border-left: 8px solid #c32026;
    text-indent: 6px;
.ball
    background #c32026 
    color #fff
    border-radius 50%
    width 30px
    height 30px
    display flex
    justify-content center
    align-items center
</style>
