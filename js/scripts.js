// Single post wrapped div for styling purpose 
$('.c-post p').wrap( "<div id='wrapped'></div>" );
$('.c-post p img').unwrap(); // 



// 
$('#pulse')
  .mouseover( function() {
    $(this).addClass('pulse');
  })
  .mouseout( function() {
    $(this).removeClass('pulse');
  })



// Vue test
// #############################
// var app = new Vue({
//   el: '#app',
//   data: {
//     posts: []
//   },
//   mounted() {
//     // get data with an ajax call
//     axios.get('/site.json').then(response => this.posts = response.data )
//   }
// })


// vue router
// 0. If using a module system (e.g. via vue-cli), import Vue and VueRouter and then call Vue.use(VueRouter).

// 1. Define route components.
const Foo = { 
  template: `
  <div class="row">
    <h1>Foo</h1>
  </div>
  `
}
const Bar = { template: '<div>bar</div>' }

// 2. Define some routes
const routes = [
  { path: '/teste', component: Foo },
  { path: '/teste/bar', component: Bar }
]

// 3. Create the router instance and pass the `routes` option
const router = new VueRouter({
  routes, // short for routes: routes
  mode: 'history'
})

// 4. Create and mount the root instance.
const app = new Vue({
  el: '#app',
  router
})

// Now the app has started!