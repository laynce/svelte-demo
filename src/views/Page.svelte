<h2>内容部分</h2>

<section>
  <aside>
    <ul>
      <li><a>变量</a></li>
      <li><a title="相当于vue的计算属性">反应性能力</a></li>
      <li><a use:link href="/page/demo1">数组的处理</a></li>
    </ul>
  </aside>
  <main>
    <div id="cont1">
      key: num ---- value: {num}
      <br/>

      <button on:click={increase}>num + 1</button>

    </div>
    <div id="cont2">
      <h3>依赖num</h3>
      <p>numAdd5显示num加5后的值，num变化，则此处显示自动变化, look: {numAdd5}</p>      
      <p>反应式语句，if num % 2===0 ,则打印num,请看控制台</p>      
    </div>

  </main>
</section>
<script>
  import {link} from 'svelte-spa-router'
  let num = 1
  // 反应式值
  $: numAdd5 = num + 5 // 反应性能力, 相当于是计算属性, num 变化则numAdd5就会变化，需要用 $: 来声明
  
  // 反应式代码块
  $: if (num %2 === 0) {
    console.log(num, 'num %2 === 0')
  }

  $: {
    console.log(numAdd5, 'numAdd5')
  }

  const increase = ()=> {
    num++
  }

</script>
<style>
  section {
    display: flex;
  }

  section main {
    margin-left: 60px;
  }
















</style>