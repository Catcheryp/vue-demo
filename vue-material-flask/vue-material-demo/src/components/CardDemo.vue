<template>
    <div>
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
    </div>
</template>

<script>
  import Card1 from './Card1'
  import Card2 from './Card2'
  import Card3 from './Card3'
  import Card4 from './Card4'
  import Card5 from './Card5'
  import TodoList from './TodoList.vue'
  import TodoItem from './TodoItem.vue'

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
    name: 'CardDemo',
    data() {
      return {
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