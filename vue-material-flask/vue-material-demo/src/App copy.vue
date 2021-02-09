<template>
  <div class="page-container">
    <md-app>
      <md-app-toolbar class="md-primary">
        <md-button class="md-icon-button" @click="toggleMenu" v-if="!menuVisible">
          <md-icon>menu</md-icon>
        </md-button>
        <span class="md-title">Catcheryp demo</span>
      </md-app-toolbar>

      <md-app-drawer :md-active.sync="menuVisible" md-persistent="full">
        <md-toolbar class="md-transparent" md-elevation="0">
          <span>Navigation</span>

          <div class="md-toolbar-section-end">
            <md-button class="md-icon-button md-dense" @click="toggleMenu">
              <md-icon>keyboard_arrow_left</md-icon>
            </md-button>
          </div>
        </md-toolbar>

        <md-list>
          <md-list-item 
            v-for="item in md_list"
            v-bind:key="item.id"
            v-on:click="currentTab = item.id"
          >
            <md-icon>{{ item.icon }}</md-icon>
            <span class="md-list-item-text">{{ item.text }}</span>
          </md-list-item>
        </md-list>
      </md-app-drawer>

      <md-app-content>
        <keep-alive>
          <component v-bind:is="currentTabComponent"></component>
        </keep-alive>
      </md-app-content>

    </md-app>
  </div>
</template>

<script>
  import CardDemo from './components/CardDemo'
  import SteppersDemo from './components/SteppersDemo'
  import FormsDemo from './components/FormsDemo'
  import AppDemo from './components/AppDemo'

  export default {
    components: {
      "cardDemo": CardDemo, 
      "steppersDemo": SteppersDemo,
      "formsDemo": FormsDemo,
      "appDemo": AppDemo
    },
    name: 'App',
    data() {
      return {
        menuVisible: false,
        currentTab: "cardDemo",
        message: 'hello world',
        md_list: [{
            id: 'cardDemo',
            icon: 'move_to_inbox',
            text: 'card demo'
        }, {
            id: 'steppersDemo',
            icon: 'send',
            text: 'steppers demo'
        },{ 
            id: 'formsDemo',
            icon: 'delete',
            text: 'forms demo'
        },{
            id: 'appDemo',
            icon: 'error',
            text: 'app demo'
        }
        ],
      }
    },
    methods: {
      toggleMenu () {
        this.menuVisible = !this.menuVisible
      }
    },
    computed:{
      currentTabComponent: function() {
            return this.currentTab;
      }
    }
  }
</script>

<style lang="scss" scoped>
  .md-app {
    min-height: 300px;
    border: 1px solid rgba(#000, .12);
  }

   // Demo purposes only
  .md-drawer {
    width: 230px;
    max-width: calc(100vw - 125px);
  }
</style>
