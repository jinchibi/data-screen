<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="container">
    <!-- <svg width="20px" height="20px" viewBox="0 0 100 100">
      <line
        x1="0"
        y1="50"
        x2="100"
        y2="50"
        stroke-width="8"
        stroke="currentColor"
      />
      <line
        x1="50"
        y1="0"
        x2="50"
        y2="100"
        stroke-width="8"
        stroke="currentColor"
      />
    </svg>
    <svg
      width="500px"
      height="200px"
      viewBox="0 0 200 200"
      style="border: 1px solid #000"
    >
      <rect x="100" y="100" width="100" height="50" stroke-width="10" />
    </svg>
    <svg
      width="500px"
      height="200px"
      viewBox="0 0 200 200"
      style="border: 1px solid #000"
      preserveAspectRatio="none"
    >
      <rect x="100" y="100" width="100" height="50" stroke-width="10" />
    </svg> -->
    <svg width="100" height="100" viewBox="0 0 100 100">
      <defs>
        <symbol id="more" viewBox="0 0 100 100">
          <circle r="5" cx="20" cy="25" fill="currentColor" />
          <circle r="5" cx="20" cy="50" fill="currentColor" />
          <circle r="5" cx="20" cy="75" fill="currentColor" />
          <line
            x1="40"
            y1="25"
            x2="90"
            y2="25"
            stroke-width="8"
            stroke="currentColor"
          />
          <line
            x1="40"
            y1="50"
            x2="90"
            y2="50"
            stroke-width="8"
            stroke="currentColor"
          />
          <line
            x1="40"
            y1="75"
            x2="90"
            y2="75"
            stroke-width="8"
            stroke="currentColor"
          />
        </symbol>
        <symbol id="filledArrowRight" viewBox="0 0 100 100">
          <polyline points="20 10, 80 50, 20 90" fill="currentColor" />
        </symbol>
        <symbol id="arrowRight" viewBox="0 0 100 100">
          <polyline
            points="30 20, 70 50, 30 80"
            fill="transparent"
            stroke="currentColor"
            stroke-width="3"
          />
        </symbol>
        <symbol id="download" viewBox="0 0 1024 1024">
          <!-- <svg
            t="1668859766512"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="1268"
            width="200"
            height="200"
          > -->
            <path
              fill="currentColor"
              d="M709.485714 396.190476C694.857143 304.761905 616.838095 235.27619 522.971429 235.27619S349.866667 304.761905 336.457143 396.190476h-9.752381c-99.961905 0-181.638095 81.67619-181.638095 181.638095s81.67619 181.638095 181.638095 181.638096h384c99.961905 0 181.638095-81.67619 181.638095-181.638096s-82.895238-181.638095-182.857143-181.638095zM518.095238 679.009524l-104.838095-104.838095 34.133333-34.133334 46.32381 46.32381v-158.476191h48.761904v158.476191l46.32381-46.32381 34.133333 34.133334-104.838095 104.838095z"
              p-id="1269"
            ></path>
          <!-- </svg> -->
        </symbol>
      </defs>
    </svg>

    <svg width="30" height="30" style="color: red">
      <use href="#more"></use>
    </svg>
    <svg width="30" height="30" style="color: green">
      <use href="#filledArrowRight"></use>
    </svg>
    <svg width="30" height="30" style="color: orange">
      <use href="#arrowRight" />
    </svg>
    <!-- :style="{width: 50, height: 50, color: 'red'}" -->
    <Icon name="arrowRight" class="common-style" />
    <Icon name="download" class="common-style" />
    <SvgAnimation />
  </div>
</template>

<style lang="scss" scoped>
// eslint-disable-next-line vue/multi-word-component-names

.container {
  color: green;
}
.common-style {
  width: 50px;
  height: 50px;
  color: red;
}
</style>
