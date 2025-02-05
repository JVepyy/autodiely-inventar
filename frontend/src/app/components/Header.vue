<template>
  <div class="nav">
    <div class="container">
      <router-link to="/" class="btn">Domov</router-link>
      <router-link to="/auta" class="btn">Autá</router-link>
      <router-link to="/diely" class="btn">Diely</router-link>
      <router-link to="/filter" class="btn">Filter</router-link>
      <svg
        class="outline"
        overflow="visible"
        width="400"
        height="60"
        viewBox="0 0 400 60"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          class="rect"
          pathLength="100"
          x="0"
          y="0"
          width="400"
          height="60"
          fill="transparent"
          stroke-width="5"
        ></rect>
      </svg>
    </div>
  </div>
</template>


<script>
export default {
};
</script>

<style scoped>
.outline {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.rect {
  stroke-dashoffset: 5;
  stroke-dasharray: 0 0 10 40 10 40;
  transition: 0.5s;
  stroke: #fff;
}

.nav {
  position: relative;
  width: 400px;
  height: 60px;
}

.container:hover .outline .rect {
  transition: 450s;
  stroke-dashoffset: 1;
  stroke-dasharray: 0;
}

.container {
  position: absolute;
  inset: 0;
  background: #bef6;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 0.5em;
}

.btn {
  padding: 0.5em 1.5em;
  color: #fff;
  cursor: pointer;
  transition: 0.1s;
}

.btn:hover {
  background: #fff3;
}

.btn:nth-child(1):hover ~ svg .rect {
  stroke-dashoffset: 0;
  stroke-dasharray: 0 2 8 73.3 8 10.7;
}

.btn:nth-child(2):hover ~ svg .rect {
  stroke-dashoffset: 0;
  stroke-dasharray: 0 12.6 9.5 49.3 9.5 31.6;
}

.btn:nth-child(3):hover ~ svg .rect {
  stroke-dashoffset: 0;
  stroke-dasharray: 0 24.5 8.5 27.5 8.5 55.5;
}

.btn:nth-child(4):hover ~ svg .rect {
  stroke-dashoffset: 0;
  stroke-dasharray: 0 34.7 6.9 10.2 6.9 76;
}

.btn:hover ~ .outline .rect {
  stroke-dashoffset: 0;
  stroke-dasharray: 0 0 10 40 10 40;
  transition: 0.5s !important;
}
</style>


