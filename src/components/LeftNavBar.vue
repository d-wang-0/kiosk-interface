<template>
  <div class="container">
    <div class="page-title">
      <span class="page-title__num">0{{ page }}</span>
      <span class="page-title__title t--capitalize">{{ $t(pageTitle)}}</span>
    </div>
    <div class="navigator" v-if="!busy">
      <template v-for="value in numPages">
        <div :key="value" class="a"
             @click="navigate(value-1)">
          <span :class="navClass(value-1)"></span>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LeftNavBar',
  props: {
    numPages: Number,
    page: Number,
    navigate: Function,
    pageTitle: String,
    busy: Boolean
  },
  methods: {
    navClass: function(id) {
      return this.page === id ? "navbutton navbutton--current" : "navbutton";
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.container {
  height: 95vh;
  width: 9rem;
  position: absolute;
  left: 0;
  top: 0;

  white-space: nowrap;
}

.page-title {
  display: flex;
  font-size: 4rem;
  font-family: 'Avenir Next Bold';
  margin-top: 3.5rem;
}
.page-title__num {
  color: $red;
  right: 0;
  text-align: center;
  min-width: 7.5rem;
  padding-left: 1.5rem;
}

.a {
  height: 2.5rem;
  width: 2.5rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 1.5rem;
}
.navigator {
  width: 2.5rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.navbutton {
  background: $grey;
  border-radius: 50%;
  cursor: pointer;
  height: 2.5rem;
  margin: 0.2rem;
  overflow: hidden;
  transform: scale3d(0.5, 0.5, 1);
  transition: transform 0.5s ease;
  width: 2.5rem;
  position: absolute;

  left: 0;
}
.navbutton::before {
  background: $red;
  content: '';
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  transform: translate3d(0, 100%, 0);
  transition: all 0.5s cubic-bezier(0.2, 1, 0.3, 1);
  width: 100%;
}

.navbutton:not(.navbutton--current):focus,
.navbutton:not(.navbutton--current):hover {
  transform: scale3d(1, 1, 1);
}
.navbutton--current::before {
  transform: translate3d(0, 0, 0);
}

</style>
