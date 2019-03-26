import React, { Component } from 'react'
import FlipPage from 'react-flip-page';

export default class WinterSoldier extends Component {

    constructor(props) {
        super(props);

    
        this.flipPageSettings = {
          orientation: "horizontal",
          responsive: true,
          uncutPages: false,
          treshold: 1,
          pageBackground: "transparent",
          animationDuration: 400,
        };
      }

      
    
      render() {
        const screenHeight = window.innerHeight;
    
        const playerStyles = {
          height: screenHeight,
          minHeight: screenHeight,
          width: "100%",
          margin: "0 auto",
          touchAction: "none",
          
        };

        return (

          <div className="comicbook" style={playerStyles}>
            <FlipPage {...this.flipPageSettings}>
              <article>
                <img className="img" alt="" src="https://readcomicsonline.ru/uploads/manga/winter-soldier-2018/chapters/4/01.jpg"/>
                <img className="img" alt=""  src="https://readcomicsonline.ru/uploads/manga/winter-soldier-2018/chapters/4/02.jpg"/>
              </article>
              <article>
                <img className="img" alt="" src="https://readcomicsonline.ru/uploads/manga/winter-soldier-2018/chapters/4/02.jpg"/>
                <img className="img" alt=""  src="https://readcomicsonline.ru/uploads/manga/winter-soldier-2018/chapters/4/03.jpg"/>
              </article>
              <article>
                <img className="img" alt="" src="https://readcomicsonline.ru/uploads/manga/winter-soldier-2018/chapters/4/04.jpg"/>
                <img className="img" alt=""  src="https://readcomicsonline.ru/uploads/manga/winter-soldier-2018/chapters/4/05.jpg"/>
              </article>
              <article>
                <img className="img" alt="" src="https://readcomicsonline.ru/uploads/manga/winter-soldier-2018/chapters/4/06.jpg"/>
                <img className="img" alt=""  src="https://readcomicsonline.ru/uploads/manga/winter-soldier-2018/chapters/4/07.jpg"/>
              </article>
              <article>
                <img className="img" alt="" src="https://readcomicsonline.ru/uploads/manga/winter-soldier-2018/chapters/4/08.jpg"/>
                <img className="img" alt=""  src="https://readcomicsonline.ru/uploads/manga/winter-soldier-2018/chapters/4/10.jpg"/>
              </article>
              <article>
                <img className="img" alt="" src="https://readcomicsonline.ru/uploads/manga/winter-soldier-2018/chapters/4/11.jpg"/>
                <img className="img" alt=""  src="https://readcomicsonline.ru/uploads/manga/winter-soldier-2018/chapters/4/12.jpg"/>
              </article>
              <article>
                <img className="img" alt="" src="https://readcomicsonline.ru/uploads/manga/winter-soldier-2018/chapters/4/13.jpg"/>
                <img className="img" alt=""  src="https://readcomicsonline.ru/uploads/manga/winter-soldier-2018/chapters/4/14.jpg"/>
              </article>
              <article>
                <img className="img" alt="" src="https://readcomicsonline.ru/uploads/manga/winter-soldier-2018/chapters/4/15.jpg"/>
                <img className="img" alt=""  src="https://readcomicsonline.ru/uploads/manga/winter-soldier-2018/chapters/4/16.jpg"/>
              </article>
              <article>
                <img className="img" alt="" src="https://readcomicsonline.ru/uploads/manga/winter-soldier-2018/chapters/4/17.jpg"/>
                <img className="img" alt=""  src="https://readcomicsonline.ru/uploads/manga/winter-soldier-2018/chapters/4/18.jpg"/>
              </article>
              <article>
                <img className="img" alt="" src="https://readcomicsonline.ru/uploads/manga/winter-soldier-2018/chapters/4/19.jpg"/>
                <img className="img" alt=""  src="https://readcomicsonline.ru/uploads/manga/winter-soldier-2018/chapters/4/20.jpg"/>
              </article>
              <article>
                <img className="img" alt="" src="https://readcomicsonline.ru/uploads/manga/winter-soldier-2018/chapters/4/21.jpg"/>
                <img className="img" alt=""  src="https://readcomicsonline.ru/uploads/manga/winter-soldier-2018/chapters/4/22.jpg"/>
              </article>
              <article>
                <img className="img" alt="" src="https://readcomicsonline.ru/uploads/manga/winter-soldier-2018/chapters/4/23.jpg"/>
                <img className="img" alt=""  src="https://readcomicsonline.ru/uploads/manga/winter-soldier-2018/chapters/4/24.jpg"/>
              </article>
 
              
              ))}
            </FlipPage>
          </div>
        );
      }
}
