import React, { Component } from 'react'
import FlipPage from 'react-flip-page';

export default class CaptainAmerica extends Component {

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
                <img className="img" alt="" src="https://readcomicsonline.ru/uploads/manga/captain-america-20152017/chapters/25/01.jpg"/>
                <img className="img" alt=""  src="https://readcomicsonline.ru/uploads/manga/captain-america-20152017/chapters/25/02.jpg"/>
              </article>
              <article>
                <img className="img" alt="" src="https://readcomicsonline.ru/uploads/manga/captain-america-20152017/chapters/25/03.jpg"/>
                <img className="img" alt=""  src="https://readcomicsonline.ru/uploads/manga/captain-america-20152017/chapters/25/04.jpg"/>
              </article>
              <article>
                <img className="img" alt="" src="https://readcomicsonline.ru/uploads/manga/captain-america-20152017/chapters/25/05.jpg"/>
                <img className="img" alt=""  src="https://readcomicsonline.ru/uploads/manga/captain-america-20152017/chapters/25/06.jpg"/>
              </article>
              <article>
                <img className="img" alt="" src="https://readcomicsonline.ru/uploads/manga/captain-america-20152017/chapters/25/07.jpg"/>
                <img className="img" alt=""  src="https://readcomicsonline.ru/uploads/manga/captain-america-20152017/chapters/25/08.jpg"/>
              </article>
              <article>
                <img className="img" alt="" src="https://readcomicsonline.ru/uploads/manga/captain-america-20152017/chapters/25/09.jpg"/>
                <img className="img" alt=""  src="https://readcomicsonline.ru/uploads/manga/captain-america-20152017/chapters/25/10.jpg"/>
              </article>
              <article>
                <img className="img" alt="" src="https://readcomicsonline.ru/uploads/manga/captain-america-20152017/chapters/25/11.jpg"/>
                <img className="img" alt=""  src="https://readcomicsonline.ru/uploads/manga/captain-america-20152017/chapters/25/12.jpg"/>
              </article>
              <article>
                <img className="img" alt="" src="https://readcomicsonline.ru/uploads/manga/captain-america-20152017/chapters/25/13.jpg"/>
                <img className="img" alt=""  src="https://readcomicsonline.ru/uploads/manga/captain-america-20152017/chapters/25/14.jpg"/>
              </article>
              <article>
                <img className="img" alt="" src="https://readcomicsonline.ru/uploads/manga/captain-america-20152017/chapters/25/15.jpg"/>
                <img className="img" alt=""  src="https://readcomicsonline.ru/uploads/manga/captain-america-20152017/chapters/25/16.jpg"/>
              </article>
              <article>
                <img className="img" alt="" src="https://readcomicsonline.ru/uploads/manga/captain-america-20152017/chapters/25/17.jpg"/>
                <img className="img" alt=""  src="https://readcomicsonline.ru/uploads/manga/captain-america-20152017/chapters/25/18.jpg"/>
              </article>
              <article>
                <img className="img" alt="" src="https://readcomicsonline.ru/uploads/manga/captain-america-20152017/chapters/25/19.jpg"/>
                <img className="img" alt=""  src="https://readcomicsonline.ru/uploads/manga/captain-america-20152017/chapters/25/20.jpg"/>
              </article>
              <article>
                <img className="img" alt="" src="https://readcomicsonline.ru/uploads/manga/captain-america-20152017/chapters/25/21.jpg"/>
                <img className="img" alt=""  src="https://readcomicsonline.ru/uploads/manga/captain-america-20152017/chapters/25/22.jpg"/>
              </article>
              <article>
                <img className="img" alt="" src="https://readcomicsonline.ru/uploads/manga/captain-america-20152017/chapters/25/23.jpg"/>
                <img className="img" alt=""  src="https://readcomicsonline.ru/uploads/manga/captain-america-20152017/chapters/25/24.jpg"/>
              </article>
              <article>
                <img className="img" alt="" src="https://readcomicsonline.ru/uploads/manga/captain-america-20152017/chapters/25/25.jpg"/>
                <img className="img" alt=""  src="https://readcomicsonline.ru/uploads/manga/captain-america-20152017/chapters/25/26.jpg"/>
              </article>
              <article>
                <img className="img" alt="" src="https://readcomicsonline.ru/uploads/manga/captain-america-20152017/chapters/25/27.jpg"/>
                <img className="img" alt=""  src="https://readcomicsonline.ru/uploads/manga/captain-america-20152017/chapters/25/28.jpg"/>
              </article>
              <article>
                <img className="img" alt="" src="https://readcomicsonline.ru/uploads/manga/captain-america-20152017/chapters/25/29.jpg"/>
                <img className="img" alt=""  src="https://readcomicsonline.ru/uploads/manga/captain-america-20152017/chapters/25/30.jpg"/>
              </article>
              <article>
                <img className="img" alt="" src="https://readcomicsonline.ru/uploads/manga/captain-america-20152017/chapters/25/31.jpg"/>
                <img className="img" alt=""  src="https://readcomicsonline.ru/uploads/manga/captain-america-20152017/chapters/25/32.jpg"/>
              </article>
              ))}
            </FlipPage>
          </div>
        );
      }
}
