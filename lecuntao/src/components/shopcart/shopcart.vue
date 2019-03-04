<template>
  <div>
    <Header></Header>
    <Main></Main>
    <CartFooter></CartFooter>
    <Footer></Footer>
  </div>
</template>
<script>
import Main from "./components/main"
import Header from "./components/header"
import CartFooter from "./components/footer"
import Footer from "../common/footer"
export default {
  components: {
    Header,
    Main,
    CartFooter,
    Footer
  },
}
</script>
<style lang="scss" scoped>
</style>
