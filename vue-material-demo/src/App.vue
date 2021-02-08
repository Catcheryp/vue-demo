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
          <md-list-item>
            <md-icon>move_to_inbox</md-icon>
            <span class="md-list-item-text">Inbox</span>
          </md-list-item>

          <md-list-item>
            <md-icon>send</md-icon>
            <span class="md-list-item-text">Sent Mail</span>
          </md-list-item>

          <md-list-item>
            <md-icon>delete</md-icon>
            <span class="md-list-item-text">Trash</span>
          </md-list-item>

          <md-list-item>
            <md-icon>error</md-icon>
            <span class="md-list-item-text">Spam</span>
          </md-list-item>
        </md-list>
      </md-app-drawer>

      <md-app-content>
        <!-- Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quibusdam, non molestias et! Earum magnam, similique, quo recusandae placeat dicta asperiores modi sint ea. -->
        <Card1></Card1>  
        <Card4></Card4>    
        <Card5>
          <div>
              <input v-model="message">
              <input :value="message" @input="handleChange">
                  {{message}} {{message + message}}
                  <div :id="message"></div>
                  <!-- <ul>
                      <todo-item v-for="item in list" :title="item.title" :del="item.del"></todo-item>
                  </ul> -->
                  <todo-list>
                      <todo-item @delete="handleDelete" v-for="(item, index) in list" :key="index" :title="item.title" :del="item.del">
                          <template v-slot:pre-icon="{value}">
                              <span>前置图标 {{value}}</span>
                          </template>
                      </todo-item>
                  </todo-list>
            </div>  
        </Card5>    
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
  import Card1 from './components/Card1'
  import Card2 from './components/Card2'
  import Card3 from './components/Card3'
  import Card4 from './components/Card4'
  import Card5 from './components/Card5'
  import TodoList from './components/TodoList.vue'
  import TodoItem from './components/TodoItem.vue'

  export default {
    components: {
      Card1,
      Card2,
      Card3,
      Card4,
      Card5,
      TodoItem,
      TodoList
    },
    name: 'PersistentFull',
    // data: () => ({
    //   menuVisible: false, 
    // }),
    data() {
      return {
        menuVisible: false,
        message: 'hello world',
        list: [{
            title: '课程1',
            del: false
        }, {
            title: '课程2',
            del: true
        }],
      }
    },
    methods: {
      toggleMenu () {
        this.menuVisible = !this.menuVisible
      },
      handleChange(e) {
      this.message = e.target.value
      },
      handleDelete(val) {
          // eslint-disable-next-line no-console
          console.log('handleDelete', val)
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
