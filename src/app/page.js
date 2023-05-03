export const metadata = {
  title: 'Home',
};

const Home = () => {
  return (
    <main class="page-1">
    <a href="/gourmet"><img src="/images/inside.png" width="25" height="25" />內   用</a>
   <br />
   <br />
   <a href="/gourmet"><img src="/images/take away.png" width="25" height="25" />外     帶</a>
    <br />
    <br />
    <a href="/gourmet"><img src="/images/uber.png" width="25" height="25" />外     送<br /><b class="limit">(需消費滿500)</b></a>
   
</main>
  )
}

export default Home
