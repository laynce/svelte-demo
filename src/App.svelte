<script>
  import Router  from 'svelte-spa-router'
  import {Routes} from '../router/index'
</script>
<main>
  <h1>Vite + Svelte</h1>

  <div class="card">
    <Router routes={Routes}></Router>
  </div>
  
</main>
