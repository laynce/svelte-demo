<script>
  import {link} from 'svelte-spa-router'
  let count = 0
  const increment = () => {
    count += 1
  }

 
</script>

<h2>第一个Svelete的组件: counter计数器</h2>
<div style="text-align: center;">
  <button on:click={increment} style="border: 1px solid blue;">
    count is {count}
  </button><br />
  <br/>
  <br/>
  ...<a use:link href="/page">了解更多</a>
</div>


<style>
  /* 样式作用域隔离 */
  h2 {
    color: blue;
  }
  
</style>
