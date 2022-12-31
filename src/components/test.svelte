<p>传递过来的值： {$$props.msg}</p>

<button on:click={send}>传递事件至父组件</button>

<script>
  // export let msg // 声明接收的prop
  // export let msg =  '默认值'// 声明接收的prop，并带有默认值
  import {createEventDispatcher} from 'svelte'
  console.log($$props, 111) // $$props可以拿到传递过来的所有prop
  // 创建事件触发器
  const dispatch = createEventDispatcher()

  const send = ()=> {
    dispatch('message', {
      date: new Date().getTime()
    })
  }
</script>