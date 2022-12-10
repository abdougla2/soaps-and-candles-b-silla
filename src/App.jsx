import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="topBanner">
        <div className="logo">
          <img src="/logo.jpg" />
        </div>
        <div className='navBar'>
          <input type="text" placeholder='Search' />
          <i className="fa-solid fa-magnifying-glass"></i>
          <i className="fa-regular fa-user"></i>
          <i className="fa-solid fa-cart-shopping"></i>
        </div>
      </div>

      <div className="header">
        <a href="#">HOME</a>
        <a href="#">ABOUT US</a>
        <a href="#">OUR COLLECTION</a>
        <a href="#">REVIEWS</a>
        <a href="#">CONTACT US</a>
      </div>
      <div className="Body">
        <br></br>
        <div className="Home">
          <img src='http://virtmall.com/wp-content/uploads/2018/06/VirtMall-The-Best-Scented-Soaps-and-Candles-for-Every-Gift-Basket.jpg' id='homePic' />
          <div className='centeredText'>
            <h1>May the Scents of Silla Bring You</h1>
            <h1 id='secondLine'>Joy & Happiness</h1>
            <p id='thirdLine'>"Scents that bring your nose buds delight!"</p>
          </div>
        </div>

        <br></br>
        <br></br>
        <br></br>
        <div classname="aboutUS">
          <h2 id = "aboutTitle">About The Business</h2>
          <div className='bioAndPic'>
        <div class="grid grid-cols-2 u-gap-2">
    <div>
        <p id="bio">Silla Rochester is the owner and operator of Soap and Candle by Silla. This is a small business which
started a few years ago, making soap out of my kitchen with ingredients that was already in the pantry.
The reason I started soap making was to have control of the ingredients I wanted to have in the soap I
wanted to use. I figured I could make soap with skin loving oils and butters that was not harsh on the
skin, and something that would provide moisture to the skin as well.
<br></br>
<br></br>
I started my research as to how I could accomplish this task and jumped right into the process. I first
started out making bar soaps which was introduced to friends and family members, who all appreciated
the way the soap felt on their skin. From there the idea came that this could be a small business, which
it eventually turned into.
<br></br>
<br></br>
In addition to making soap, I thought candles would be a nice addition to the business, so I started
making 100% soy candles. I didn’t stop there, the wheels of entrepreneurship started spinning which got
me to thinking. Now the line has extended to include body wash, face wash, shampoo, feminine wash,
face serum and moisturizer. I am excited and cannot wait to see what will be next.
I appreciate everyone who takes the time to support my small business! With God’s help I anticipate
great success. <br/>
Silla.</p>
    </div>
    <div>
        <p><img src='./biopic.jpg' id='bioPic'/></p>
    </div>
    </div>
    
</div>
        </div>
      </div>
    </div>
  )
}

export default App
