import Vue from "vue";
// import App from "./App.vue";

// Vue.config.productionTip = false;

// new Vue({
//   render: h => h(App),
// }).$mount('#app')

new Vue({
  el: "#app",
  template: `<div>{{n}}</div>
  `,
  data: {
    n: 0,
  },
});

console.log(window.Vue);
