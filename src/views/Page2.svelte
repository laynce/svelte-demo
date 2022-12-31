<h2>内容部分</h2>

<section>
  <main>
    <div id="cont1">
      <p>
        由于 Svelte 的反应性是由赋值语句触发的，因此使用数组的诸如 push 和 splice 之类的方法就不会触发自动更新。
      </p>
      数组的值： {arr}<br />
      <button on:click={()=> add(3)}>数组push</button>

      <hr/>
      <p>对象obj: {JSON.stringify(obj)}-----------对象foo: {JSON.stringify(foo)}</p>
      <button on:click={changeFoo}>改变foo</button>
      
      <hr/>
      <p>组件之间传值prop</p>

      <Test msg={message} on:message={getMessage}/>


      <hr/>
      <p>#表示块开始，:表示块继续，/表示块结束，下面的#if， #each都是</p>
      <p>条件判断#if,</p>
      {#if showTest}
      <Test msg={message} on:message={getMessage}/>  
      <!-- on:message不赋值的话将会继续向上转发  -->
      {:else}
      不显示test组件了
      {/if}    

      // 事件修饰符once, preventDefault ,self 等<br />
      <button on:click|once ={toggleShow}>切换显示test组件</button>

      <hr/>

      <p>#each</p>
      指定key，否则达不到想要的效果 <br/>
      <button on:click={remove}>remove First</button>
      {#each list as {id, val}(id)} 

      <p><input type="text"></p>
      {/each}

      <!-- <hr />
      不指定就会存在问题<br/>
      {#each list as {id, val}} 

      <p><input type="text"></p>
      {/each} -->
      
      <hr />
      <p>#await Promise</p>
      {#await promise}
        <p>等待4s...</p>
      {:then res} 
      <p>{res}</p>
      {/await}
      
      // 下面这种写法也支持
      {#await promise then res}
      <p>{res}</p>
      {/await}

      <hr />
      <p>bind value----{val}</p>

      <input bind:value={val} />
    </div>
  </main>
</section>
<script>
  
import Test from '../components/test.svelte'
  let arr = [2, 4]

  const add = (num)=> {
    arr.push(num)
    // arr = arr // 数组的处理，因为反应性是通过赋值语句实现的
    // 数组的增删改查都得这样处理
    arr = [...arr]
    console.log(arr)
  }

  const obj = {
    con: 12
  }

  const foo = obj

  const changeFoo = async ()=> {
    console.log(111)
    const t = await new Promise((reslove=> setTimeout(()=> reslove(9), 4e3)))
    foo.con = foo.con + 1
    // obj变了，但是不更新
    console.log(JSON.stringify(obj), t)
  }


  const message = '父组件的问候'


  let showTest = false

  const toggleShow = ()=> showTest = !showTest


  let list = [{id: 1, val: '科目一'}, {id: 2, val: '科目二'}, {id: 3, val: '科目三'}]

  const remove= ()=> {
    list = list.slice(1)
  }

  let promise = new Promise( reslove=> {
    setTimeout(()=> {
      reslove('成功了，返回200')
    }, 4000)
  })

  const getMessage = (messObj)=> {
    console.log(messObj.detail, '子组件传递上来的信息')
  }

  let val = '22323'
</script>
<style>
  section {
    display: flex;
  }

  section main {
    margin-left: 60px;
  }


















































































</style>