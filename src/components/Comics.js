import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Spiderman from './Comicbooks/Spiderman';
import Thor from './Comicbooks/Thor';
import Hulk from './Comicbooks/Hulk';
import Groot from './Comicbooks/Groot';
import BlackPanther from './Comicbooks/BlackPanther';
import CaptainAmerica from './Comicbooks/CaptainAmerica';
import CaptainMarvel from './Comicbooks/CaptainMarvel';
import WinterSoldier from './Comicbooks/WinterSoldier';
import Killmonger from './Comicbooks/Killmonger';


export default class Comics extends Component {
  render() {
    return (
      <div className="comicNav">
        <nav className="nav">
        <Link to="/Spiderman">
        <img         
        alt="" 
        className="navImg" 
        src="https://readcomicsonline.ru/uploads/manga/the-amazing-spiderman-2015/cover/cover_250x350.jpg"
        onMouseOver={e => (e.currentTarget.src = "https://media0.giphy.com/media/BWD3CtcudWL28/200.webp?cid=3640f6095c9a96795844736a7324e751")}
        onMouseOut={e => (e.currentTarget.src = "https://readcomicsonline.ru/uploads/manga/the-amazing-spiderman-2015/cover/cover_250x350.jpg")}
        />
        </Link>
        <Link to="/BlackPanther">
        <img 
        alt="" 
        className="navImg" 
        src="https://readcomicsonline.ru/uploads/manga/black-panther-2016/cover/cover_250x350.jpg"
        onMouseOver={e => (e.currentTarget.src = "https://media2.giphy.com/media/kMkVuVqHk2dB6/200w.webp?cid=3640f6095c9a96b36d354a315997c562")}
        onMouseOut={e => (e.currentTarget.src = "https://readcomicsonline.ru/uploads/manga/black-panther-2016/cover/cover_250x350.jpg")}
        />
        </Link>
        <Link to="/Thor">
        <img alt="" 
        className="navImg" 
        src="https://readcomicsonline.ru/uploads/manga/the-mighty-thor-2015/cover/cover_250x350.jpg"
        onMouseOver={e => (e.currentTarget.src = "https://media1.giphy.com/media/3ohhwCYr8Z5IIAbiZa/200w.webp?cid=3640f6095c9a9b09327258566bcff200")}
        onMouseOut={e => (e.currentTarget.src = "https://readcomicsonline.ru/uploads/manga/the-mighty-thor-2015/cover/cover_250x350.jpg")}
        />
        </Link>
        <Link to="/Hulk">
        <img 
        alt="" 
        className="navImg" 
        src="https://readcomicsonline.ru/uploads/manga/the-totally-awesome-hulk-2016/cover/cover_250x350.jpg"
        onMouseOver={e => (e.currentTarget.src = "https://media.tenor.com/images/4ce0f51b15f4f7784e0ac504c2c9324d/tenor.gif")}
        onMouseOut={e => (e.currentTarget.src = "https://readcomicsonline.ru/uploads/manga/the-totally-awesome-hulk-2016/cover/cover_250x350.jpg")}
        />
        </Link>
        <Link to="/CaptainAmerica">
        <img 
        alt="" 
        className="navImg" 
        src="https://readcomicsonline.ru/uploads/manga/captain-america-steve-rogers-2016/cover/cover_250x350.jpg"
        onMouseOver={e => (e.currentTarget.src = "https://media0.giphy.com/media/dGQinrFi3BDIQ/giphy.webp?cid=3640f6095c9a9b386752784163dbd826")}
        onMouseOut={e => (e.currentTarget.src = "https://readcomicsonline.ru/uploads/manga/captain-america-steve-rogers-2016/cover/cover_250x350.jpg")}
        />
        </Link>
        <Link to="/Groot">
        <img 
        alt="" 
        className="navImg" 
        src="https://readcomicsonline.ru/uploads/manga/i-am-groot-2017/cover/cover_250x350.jpg"
        onMouseOver={e => (e.currentTarget.src = "https://media3.giphy.com/media/xbn0xrEnPEhxK/giphy.webp?cid=3640f6095c9a9902514f52465935977e")}
        onMouseOut={e => (e.currentTarget.src = "https://readcomicsonline.ru/uploads/manga/i-am-groot-2017/cover/cover_250x350.jpg")}
        />
        </Link>
        <Link to="/CaptainMarvel">
        <img 
        alt="" 
        className="navImg" 
        src="https://readcomicsonline.ru/uploads/manga/captain-marvel-braver-mightier-2019/cover/cover_250x350.jpg"
        onMouseOver={e => (e.currentTarget.src = "https://media.tenor.com/images/bbb10478423b40d0da1926521ed90e33/tenor.gif")}
        onMouseOut={e => (e.currentTarget.src = "https://readcomicsonline.ru/uploads/manga/captain-marvel-braver-mightier-2019/cover/cover_250x350.jpg")}
        />
        </Link>
        <Link 
        to="/WinterSoldier">
        <img 
        alt="" 
        className="navImg" 
        src="https://readcomicsonline.ru/uploads/manga/winter-soldier-2018/cover/cover_250x350.jpg"
        onMouseOver={e => (e.currentTarget.src = "https://i.gifer.com/TIxu.gif")}
        onMouseOut={e => (e.currentTarget.src = "https://readcomicsonline.ru/uploads/manga/winter-soldier-2018/cover/cover_250x350.jpg")}
        />
        </Link>
        <Link 
        to="/Killmonger">
        <img 
        alt="" 
        className="navImg" 
        src="https://readcomicsonline.ru/uploads/manga/killmonger-2018/cover/cover_250x350.jpg"
        onMouseOver={e => (e.currentTarget.src = "https://data.whicdn.com/images/310272514/original.gif")}
        onMouseOut={e => (e.currentTarget.src = "https://readcomicsonline.ru/uploads/manga/killmonger-2018/cover/cover_250x350.jpg")}
        />
        </Link>
        </nav>
          <Switch>
      <Route exact path='/Spiderman' component={Spiderman}/>
      <Route exact path='/Thor' component={Thor}/>
      <Route exact path='/Hulk' component={Hulk}/>
      <Route exact path='/BlackPanther' component={BlackPanther}/>
      <Route exact path='/CaptainAmerica' component={CaptainAmerica}/>
      <Route exact path='/Groot' component={Groot}/>
      <Route exact path='/CaptainMarvel' component={CaptainMarvel}/>
      <Route exact path='/WinterSoldier' component={WinterSoldier}/>
      <Route exact path='/Killmonger' component={Killmonger}/>
        </Switch>

      </div>
    )
  }
}
