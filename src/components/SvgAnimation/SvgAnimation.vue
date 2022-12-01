<template>
  <div>
    <!-- <div class="container">
      <svg width="500" height="200" viewBox="0 0 500 200">
        <rect
          class="rect"
          x="10"
          y="10"
          height="50"
          width="100"
          fill="none"
          stroke="blue"
          stroke-width="5"
        />
      </svg>
    </div>
    <div class="container">
      <svg width="440" height="440" viewBox="0 0 440 440">
        <circle
          cx="220"
          cy="220"
          r="200"
          stroke-width="20"
          stroke="#d1d3d7"
          fill="none"
        ></circle>
        <circle
          class="circles"
          cx="220"
          cy="220"
          r="200"
          stroke-width="20"
          stroke="#00a5e0"
          fill="none"
          transform="matrix(0 -1 1 0 0 440)"
        ></circle>
      </svg>
    </div>
    <div class="container">
      <svg width="200" height="200" viewBox="0 0 200 200">
        <rect
          x="0"
          y="0"
          width="200"
          height="200"
          fill="none"
          stroke="grey"
          stroke-width="8"
        ></rect>
        <rect
          x="0"
          y="0"
          width="200"
          height="200"
          fill="none"
          stroke="blue"
          stroke-width="8"
          class="rect-process"
          transform="matrix(0,1,-1,0,200,0)"
        ></rect>
      </svg>
    </div>
    <div class="container">
      <svg
        t="1668928202420"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="1268"
        width="200"
        height="200"
      >
        <path
          class="logo"
          d="M821.638095 436.419048l-23.161905-3.657143c-29.257143-6.095238-54.857143-24.380952-70.704761-51.2-15.847619-25.6-20.72381-57.295238-12.190477-86.552381l7.314286-21.942857c-48.761905-53.638095-120.685714-67.047619-120.685714-67.047619l-14.628572 17.066666c-19.504762 23.161905-48.761905 35.352381-79.238095 35.352381h-2.438095c-30.47619 1.219048-59.733333-10.971429-79.238095-32.914285l-14.628572-15.84762c-71.92381 15.847619-118.247619 71.92381-118.247619 71.92381l7.314286 20.72381c9.752381 28.038095 6.095238 59.733333-8.533333 85.333333 0 1.219048-1.219048 1.219048-1.219048 2.438095-14.628571 26.819048-39.009524 46.32381-68.266667 53.638095l-21.942857 4.876191c-21.942857 69.485714 2.438095 137.752381 2.438095 137.752381l23.161905 3.657143c29.257143 6.095238 54.857143 24.380952 70.704762 51.2 15.847619 25.6 20.72381 57.295238 12.190476 86.552381l-7.314285 21.942857c48.761905 53.638095 120.685714 67.047619 120.685714 67.047619l14.628571-17.066667c19.504762-23.161905 48.761905-35.352381 79.238095-35.352381h2.438096c30.47619-1.219048 59.733333 10.971429 79.238095 32.914286l14.628571 15.847619c71.92381-15.847619 118.247619-71.92381 118.247619-71.92381l-7.314285-20.723809c-9.752381-28.038095-6.095238-59.733333 8.533333-85.333333 0-1.219048 1.219048-1.219048 1.219048-2.438096 14.628571-26.819048 39.009524-46.32381 68.266666-53.638095l21.942857-4.87619c23.161905-68.266667-2.438095-137.752381-2.438095-137.752381zM512 616.838095c-57.295238 0-103.619048-46.32381-103.619048-104.838095 0-57.295238 46.32381-104.838095 103.619048-104.838095s103.619048 46.32381 103.619048 104.838095c0 57.295238-46.32381 104.838095-103.619048 104.838095z"
          p-id="1269"
        ></path>
      </svg>
    </div>
    <div class="container">
      <svg width="200" height="200">
        <rect x="0" y="0" fill="red" width="100" height="50">
          <set attributeName="x" attributeType="XML" to="10" begin="1s"></set>
          <set attributeName="x" attributeType="XML" to="20" begin="2s"></set>
        </rect>
      </svg>
    </div>
    <div class="container">
      <svg width="200" height="200">
        <circle
          cx="0"
          cy="50"
          r="30"
          fill="blue"
          stroke="black"
          stroke-width="1"
        >
          <animate
            attributeName="cx"
            attributeType="XML"
            from="0"
            to="100"
            dur="1s"
            repeatCount="2"
            fill="freeze"
          ></animate>
        </circle>
      </svg>
    </div>
    <div class="container">
      <svg width="400" height="400">
        <polygon points="30 30 70 30 90 70 10 70" fill="#fcc" stroke="black">
          <animate attributeName="points" attributeType="XML" to="50 30 70 50 50 90 30 50" dur="5s" fill="freeze" repeatCount="1" />
        </polygon>
      </svg>
    </div>
    <div class="container">
      <svg width="200" height="200">
        <rect x="0" y="0" fill="red" width="10" height="10">
          <animateMotion
            path="M10 10 L110 10 L110 110 L10 110 Z"
            dur="5s"
            rotate="0"
            fill="freeze"
            repeatCount="2"
          >
          </animateMotion>
        </rect>
        <path d="M10 10 L110 10 L110 110 L10 110 Z" fill="none" stroke="green" stroke-width="1"/>
      </svg>
    </div> -->
    <div class="container">
      <svg width="400" height="400">
        <defs>
          <mask id="mask-test">
            <rect x="5" y="5" width="390" height="390" fill="green"></rect>
            <circle r="20" cx="100" cy="100" />
          </mask>
        </defs>
        <rect x="5" y="5" width="390" height="390" fill="red" />
        <rect x="5" y="5" width="390" height="390" fill="blue" mask="url(#mask-test)" />
      </svg>
    </div>
  </div>
</template>

<script>
// import { onMounted } from 'vue'
export default {
  name: 'SvgAnimation',
  setup () {
    // onMounted(() => {
    //   const logo = document.getElementsByClassName('logo')[0]
    //   console.log(logo.getTotalLength())
    // })
  }
}
</script>

<style lang="scss" scoped>
.container {
  // width: 200px;
  // height: 200px;
  svg {
    border: 1px solid #000;
  }
}
.rect {
  stroke-dasharray: 10 20;
}
.circles {
  // stroke-dasharray: 10 1131;
  animation: circle 5s linear infinite;
}
@keyframes circle {
  from {
    stroke-dasharray: 0 1257;
  }
  to {
    stroke-dasharray: 1257 0;
  }
}
.rect-process {
  // stroke-dasharray: 10 1131;
  animation: circle 5s linear infinite;
}
@keyframes resct-process {
  from {
    stroke-dasharray: 0 800;
  }
  to {
    stroke-dasharray: 800 0;
  }
}
.logo {
  fill: none;
  stroke: #333;
  stroke-width: 10;
  animation: logo 5s linear 1 forwards;
}
@keyframes logo {
  0% {
    stroke-dasharray: 2849;
    stroke-dashoffset: 2849;
    fill: white;
    stroke: #333;
  }
  50% {
    stroke-dasharray: 2849;
    stroke-dashoffset: 0;
    fill: white;
    stroke: #333;
  }
  75% {
    fill: red;
    stroke: white;
  }
  100% {
    fill: blue;
    stroke: white;
  }
}
</style>
