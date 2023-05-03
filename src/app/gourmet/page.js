export const metadata = {
  title: 'Gourmet',
}

const Gourmet = () => {
  const menu = [
    {
      name: '椒麻',
      color: 'red',
      items: [
        {
          name: '椒麻雞腿飯',
          spicy: true  
        }
      ]
    },
    {
      name: '麻婆',
      color: 'red',
      items: [
        {
          name: '麻婆豆腐燴飯',
          spicy: true  
        },
        {
          name: '麻婆豆腐蛋包飯',
          spicy: true 
        }
      ]
    },
  ]
  
  return (
    <>
    
    {menu.map(category => (
      <div>
        <div className="main-meal" style={{color: category.color}}>
          {category.name}
        </div>
        {category.items.map(item => (
          <div className={item.spicy ? 'spicy-meals' : 'no-spicy-meals'}>
            {item.spicy && <img src="/images/chili.png" width="10" height="10" />}
            {item.name}
          </div>
        ))}
        <br />
      </div>
    ))}
    
    <section className="recipes-container" id="recipes-container">
      <div className="tags-container">
        <div className="spicy-chicken-list">
          <a href="#spicy-chicken-item">椒麻</a>
        </div>
        <div className="spicy-dofu-list">
          <a href="#spicy-dofu">麻婆</a>
        </div>
        <div className="curry-list">
          <a href="#curry">咖哩</a>
        </div>
        <div className="green-curry-list">
          <a href="#green-curry">綠咖哩</a>
        </div>
        <div className="donburi-list">
          <a href="#donburi">丼飯</a>
        </div>
        <div className="noodles-list">
          <a href="#noodles">烏龍麵</a>
        </div>
        <div className="single-dishes-list" id="single-dishes-list">
          <a href="#single-dishes">單點</a>
        </div>
      </div>
    </section>
    
    <section className="recipes-container-2">
      <div className="tags-container-2">
          
          <div id="spicy-chicken" className="main-meal" style={{color: 'red', marginTop: '10%'}}>椒麻</div>
          <div id="spicy-chicken-item" className="spicy-meals"><a href=""><img src="/images/chili.png" width="10px" height="10px"></img>椒麻雞腿飯</a></div>
          <br />
          <div id="spicy-dofu" className="main-meal" style={{color: 'red' }}>麻婆</div>
          <div id="spicy-dofu-item" className="spicy-meals"><a href=""><img src="/images/chili.png" width="10px" height="10px"></img>麻婆豆腐燴飯</a></div>
          <div id="spicy-dofu-item" className="spicy-meals"><a href=""><img src="/images/chili.png" width="10px" height="10px"></img>麻婆豆腐蛋包飯</a></div>
          <div id="spicy-dofu-item" className="spicy-meals"><a href=""><img src="/images/chili.png" width="10px" height="10px"></img>麻婆豆腐雞腿飯</a></div>
          <div id="spicy-dofu-item" className="spicy-meals"><a href=""><img src="/images/chili.png" width="10px" height="10px"></img>麻婆豆腐豬排飯</a></div>
          <div id="spicy-dofu-item" className="spicy-meals"><a href=""><img src="/images/chili.png" width="10px" height="10px"></img>麻婆雞腿烏龍麵</a></div>
          <div id="spicy-dofu-item" className="spicy-meals"><a href=""><img src="/images/chili.png" width="10px" height="10px"></img>麻婆豬排烏龍麵</a></div>
          <div id="spicy-dofu-item" className="spicy-meals"><a href=""><img src="/images/chili.png" width="10px" height="10px"></img>麻婆炸竹莢魚飯</a></div>
          <div id="spicy-dofu-item" className="spicy-meals"><a href=""><img src="/images/chili.png" width="10px" height="10px"></img>麻婆炸蝦排飯</a></div>
          <br />
          <div id="curry" className="main-meal" style={{color: 'gold'}} >咖哩</div>
          <div id="curry-item" className="no-spicy-meals"><a href="">咖哩蛋包飯</a></div>
          <div id="curry-item" className="no-spicy-meals"><a href="">咖哩雞腿飯</a></div>
          <div id="curry-item" className="no-spicy-meals"><a href="">咖哩豬排飯</a></div>
          <div id="curry-item" className="no-spicy-meals"><a href="">咖哩雞腿烏龍麵</a></div>
          <div id="curry-item" className="no-spicy-meals"><a href="">咖哩豬排烏龍麵</a></div>
          <br />
          <div id="green-curry" className="main-meal" style={{color: 'green'}}>綠咖哩</div>
          <div id="green-curry-item" className="spicy-meals"><a href=""><img src="/images/chili.png" width="10px" height="10px"></img>綠咖哩蛋包飯</a></div >
          <div id="green-curry-item" className="spicy-meals"><a href=""><img src="/images/chili.png" width="10px" height="10px"></img>綠咖哩雞腿飯</a></div >
          <div id="green-curry-item" className="spicy-meals"><a href=""><img src="/images/chili.png" width="10px" height="10px"></img>綠咖哩豬排飯 </a></div >
          <div id="green-curry-item" className="spicy-meals"><a href=""><img src="/images/chili.png" width="10px" height="10px"></img>綠咖哩雞腿烏龍麵 </a></div >
          <div id="green-curry-item" className="spicy-meals"><a href=""><img src="/images/chili.png" width="10px" height="10px"></img>綠咖哩豬排烏龍麵 </a></div >
          <br />    
          <div id="donburi" className="main-meal" style={{color: 'burlywood'}}>丼飯</div>
          <div id="donburi-item" className="no-spicy-meals"><a href="">豬五花丼飯</a></div>
          <div id="donburi-item" className="no-spicy-meals"><a href="">牛五花丼飯</a></div>
          <div id="donburi-item" className="no-spicy-meals"><a href="">炸雞腿丼飯</a></div>
          <div id="donburi-item" className="no-spicy-meals"><a href="">炸豬排丼飯</a></div>
          <div id="donburi-item" className="no-spicy-meals"><a href="">炸蝦排丼飯</a></div>
          <div id="donburi-item" className="no-spicy-meals"><a href="">炸竹筴魚丼飯</a></div>
          <br />
          <div id="noodles" className="main-meal" style={{color: 'burlywood'}}>烏龍麵</div>
          <div id="noodles-item" className="no-spicy-meals"><a href="">豬五花烏龍麵</a></div >
          <div id="noodles-item" className="no-spicy-meals"><a href="">牛五花烏龍麵</a></div >
          <div id="noodles-item" className="no-spicy-meals"><a href="">炸雞腿烏龍麵</a></div >
          <div id="noodles-item" className="no-spicy-meals"><a href="">炸豬排烏龍麵</a></div >
          <br />
          <div id="single-dishes" className="main-meal" style={{color: 'green'}}>單點</div >
          <div id="single-dishes-item" className="no-spicy-meals"><a href="">香噴噴白飯</a></div>
          <div id="single-dishes-item" className="no-spicy-meals"><a href="">蔥香蛋花湯</a></div>
          <div id="single-dishes-item" className="no-spicy-meals"><a href="">Q彈貢丸湯</a></div>
          <div id="single-dishes-item" className="no-spicy-meals"><a href="">咖哩可麗餅</a></div>
          <div id="single-dishes-item" className="no-spicy-meals"><a href="">黑糖麻糬X4</a></div>
          <div id="single-dishes-item" className="no-spicy-meals"><a href="">煉乳麻糬X4</a></div>
          <div id="single-dishes-item" className="spicy-meals"><a href=""><img src="/images/chili.png" width="10px" height="10px" />麻婆豆腐</a></div>
          <div id="single-dishes-item" className="no-spicy-meals"><a href="">酥脆炸豬排</a></div>
          <div id="single-dishes-item" className="spicy-meals">
            <a href="">
              <img src="/images/chili.png" width="10" height="10"></img>椒麻雞腿排
            </a>
          </div>
          
          <dialog id="chickendialog">
              <p>幾份</p>
          </dialog>
          </div>
          </section>
          </>
  )
}

export default Gourmet
