<h2>内容部分</h2>

<section>
  <main>
    <div id="cont1">
      <p>
        由于 Svelte 的反应性是由赋值语句触发的，因此使用数组的诸如 push 和 splice 之类的方法就不会触发自动更新。
      </p>
      数组的值： {arr}<br />
      <button on:click={()=> add(3)}>数组push</button>
    </div>
    <hr />
    <p>复选框 bind:checked</p>

    <input type="checkbox" bind:checked={checked} />是<br/>
    {#if checked} 
    <p>复选框选中了</p>
    {:else} 
    <p>没选中</p>
    {/if}

    <hr />
    
  </main>
</section>
<script>
  let arr = [2, 4]

  const add = (num)=> {
    arr.push(num)
    // arr = arr // 数组的处理，因为反应性是通过赋值语句实现的
    // 数组的增删改查都得这样处理
    arr = [...arr]
    console.log(arr)
  }

  let checked =  false

</script>
<style>
  section {
    display: flex;
  }

  section main {
    margin-left: 60px;
  }






































</style>