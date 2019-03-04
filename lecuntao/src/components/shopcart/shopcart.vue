<template>
<<<<<<< HEAD
    <div>
        <h2>shopcort</h2>
        <Footer/>
    </div>
</template>
<script>
import Footer from '../common/footer'
export default {
    components:{
        Footer
    }
=======
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
>>>>>>> e91724c40287891b2c4fc6001b231f4b3ec2daeb
}
</script>
<style lang="scss" scoped>
</style>
