<template>
  <footer
    class="footer"
    :class="{ [`footer-${type}`]: type }"
    :data-background-color="backgroundColor"
  >
    <div class="container">
      <nav>
        <ul>
          <li>
            <a  >
              沪ICP备2021020020号-1 <br>
              版权所有 © 2005-2022.华誉评级
            </a>
          </li>
          <li>
            <a  >
              About Us
            </a>
          </li>
          <li>
            <a  >
              Blog
            </a>
          </li>
          <li>
            <a >
              Licenses
            </a>
          </li>
        </ul>
      </nav>
      <div class="copyright">
        &copy; {{ year }}, made with <md-icon>favorite</md-icon> by
        <a   target="_blank">Larry</a>
        for a better web.
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  props: {
    backgroundColor: String,
    type: String
  },
  data() {
    return {
      year: new Date().getFullYear()
    };
  }
};
</script>
<style></style>
