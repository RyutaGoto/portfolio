<template lang="pug">
div
  div.nav
    div#nav-drawer
        input(type="checkbox")#nav-input.nav-unshown
        label(for="nav-input")#nav-open
          span
          span
          span
        label(for="nav-input")#nav-close.nav-unshown
        div#nav-content
          nuxt-link(to="/")#nav-item top
          nuxt-link(to="/works")#nav-item works
          nuxt-link(to="/about")#nav-item about
  div.back
    div#back-drawer
      nuxt-link(to="/works")
        i.fas.fa-chevron-left.fa-3x
  Modal(:imgSrc="postSrc" v-if="showModal" @close="closeModal")
  div.container
    div.thumnail
      p.background-filter
        img(:src="data.abstract.thum").background
    div.contents
      div.abstract
        h2 {{ data.abstract.title }}
        div.table
          div.row
            p.item category
            p.substance {{ data.abstract.category }}
          div.row
            p.item period
            p.substance {{ data.abstract.period }}
          div.row
            p.item tools
            p.substance {{ data.abstract.tools }}
        h3 {{ data.abstract.detail }}
        a(v-if="data.abstract.url" :href="data.abstract.url" target="_blank" rel="noopener").url {{ data.abstract.title }}へ 
          i.fas.fa-external-link-alt
        div.gallery
          img(v-for="i in data.abstract.img" :src="i" @click="openModal(i)")
      div.process
        //h2 process
        //div(v-for="(i, index) in data.process").item
          ProcessItem(:title="i.subtitle", :imgSrc="i.img", :detail="i.detail", :number="index+1")
      Footer
      //div.footer
        p ©2020 RyutaGoto


</template>

<script>
import Logo from '~/components/Logo.vue'
import ProcessItem from '~/components/ProcessItem.vue'
import Footer from '~/components/Footer.vue'
import Modal from '~/components/Modal.vue'
import worksData from '~/assets/json/works.json'



export default {
  components: {
    Logo,
    ProcessItem,
    Footer,
    Modal
  },

  head(){
    return{
      title: this.data.abstract.title
    }
  },

  data(params){
    return{
      isOpened: false,
      showModal: false,
      postSrc: '',
    };
  },

  methods:{
    accordionToggle: function(){
      this.isOpened = !this.isOpened;
    },
    openModal(src){
      this.postSrc = src;
      this.showModal = true;
    },
    closeModal(){
      this.showModal = false;
    }
  },

  asyncData: async function({params}){
    return {
      data: worksData[params.detail]
    };
  }

}
</script>

<style lang="sass" scoped>

@media screen and (max-width: 700px) //単列
  .back
    display: none;
  .container
    width: 100%;
    height: auto;
    position: relative;

  .thumnail
    position: fixed;
    width: 100%;
    height: 35vh;
    .background-filter
      margin-block-start: 0;
      margin-block-end: 0;
      background-color: #222;
      height: 100%;
    .background
      opacity: 0.8;
      width: 100%;
      height: 100%;
      margin-bottom: -2px;
      object-fit: cover;
      object-position: 50% 50%;

  .contents
    position: absolute;
    top: 32vh;
    left: 50%;
    transform : translate(-50%, 0);
    display: flex;
    flex-direction: column;
    //justify-content: center;
    //align-items: center;
    background-color: #f0f0f0;
    width: 100%;
    box-shadow: 0 -5px 6px #707070;
    //z-index: 200;

  .abstract
    padding: 48px 24px 0 24px;
    h2
      font-size: 24px;
      color: #2d642f;
      font-weight: 700;
    h3
      line-height: 1.7em;
      letter-spacing: 0.05em;
      font-size: 16px;
      color: #5a5a5a;
      font-weight: 400;
      margin-bottom: 8px;
    .url
      padding: 5px 12px;
      background-color: #33843f;
      color: #fff;
      font-size: 14px;
      font-weight: 200;
      text-decoration: none;
      border-radius: 4px;

  .table
    margin: 16px 0 48px 0;

  .row
    display: flex;
    font-size: 14px;
    font-weight: 300;
    color: #848484;
    margin-bottom: 8px;

  .item
    flex-basis: 25%;

  .substance
    flex-basis: 75%;
  
  .gallery
    margin: 24px 0;
    width: 100%;
    img
      margin: 8px 0;
      width: 100%;
      object-fit: cover;
  
  .process
    padding: 0px 24px 0 24px;
    margin: 80px 0 48px 0;
    h2
      text-align: center;
      margin-bottom: 24px;
      color: #2d642f;
  .item:last-child
  //.num:before
    color: blue !important;
  



@media screen and (min-width: 701px) //複数列
  .back
    position: fixed;
    z-index: 100;
    top: 4%;
    left: 5%;
    i
      padding: 8px;
      color: #ddd;
      text-shadow: 0 1px 4px #5a5a5a;
    //#back-drawer
      position: relative;
      display: inline-block;
      &:before
        content: '';
        width: 32px;
        height: 32px;
        border: 0px;
        border-top: solid 4px #ddd;
        border-left: solid 4px #ddd;
        box-shadow: 0 -1px 4px -2px #5a5a5a;
        -ms-transform: rotate(-45deg);
        -webkit-transform: rotate(-45deg);
        transform: rotate(-45deg);
        position: absolute;
        top: 50%;
        left: 0;
        margin-top: -4px;

  .container
    width: 100%;
    height: auto;
    position: relative;

  .thumnail
    position: fixed;
    width: 100%;
    height: 50vh;
    .background-filter
      margin-block-start: 0;
      margin-block-end: 0;
      background-color: #222;
      height: 100%;
    .background
      opacity: 0.8;
      width: 100%;
      height: 100%;
      margin-bottom: -2px;
      object-fit: cover;
      object-position: 50% 50%;
    h1
      position: absolute;
      top: 60%;
      left: 50%;
      font-weight: 500;
      font-size: 32px;
      color: #fff;
      text-shadow: 0 3px 4px #222;

  .contents
    position: absolute;
    top: 50vh;
    left: 50%;
    transform : translate(-50%, 0);
    display: flex;
    flex-direction: column;
    //justify-content: center;
    align-items: center;
    background-color: #f0f0f0;
    width: 100%;
    box-shadow: 0 -5px 6px #707070;
    //z-index: 200;

  .abstract
    max-width: 700px;
    padding-top: 48px;
    h2
      font-size: 32px;
      color: #2d642f;
      font-weight: 700;
    h3
      line-height: 1.5em;
      letter-spacing: 0.05em;
      font-size: 18px;
      color: #5a5a5a;
      font-weight: 400;
      margin-bottom: 16px;
    .url
      padding: 8px;
      background-color: #33843f;
      color: #fff;
      font-size: 14px;
      font-weight: 200;
      text-decoration: none;
      border-radius: 4px;


  .table
    margin: 16px 0 48px 0;

  .row
    display: flex;
    font-size: 18px;
    font-weight: 300;
    color: #848484;
    margin-bottom: 8px;

  .item
    flex-basis: 25%;

  .substance
    flex-basis: 75%;

  .gallery
    margin-top: 32px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    //align-items: space-evenly;
    img
      margin: 16px 0;
      width: 48%;
  
  .process
    width: 700px;
    //padding: 0px 24px 0 24px;
    margin: 80px 0 48px 0;
    h2
      text-align: center;
      margin-bottom: 24px;
      color: #2d642f;
  .item:last-child
  //.num:before
    color: blue !important;

</style>
