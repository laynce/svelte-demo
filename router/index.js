import Counter from '../src/views/Counter.svelte'
import Page from '../src/views/Page.svelte'
import Page1 from '../src/views/Page1.svelte'
import Page2 from '../src/views/Page2.svelte'


export const Routes = {
  '/': Counter,
  '/page': Page,
  '/page/demo1': Page1,
  '/page/demo2': Page2
}