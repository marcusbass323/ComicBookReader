import React, { Component } from 'react'
import FlipPage from 'react-flip-page';

export default class Killmonger extends Component {

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
                <img className="img" alt="" src="https://readcomicsonline.ru/uploads/manga/killmonger-2018/chapters/1/01.jpg"/>
                <img className="img" alt=""  src="https://readcomicsonline.ru/uploads/manga/killmonger-2018/chapters/1/02.jpg"/>
              </article>
              <article>
                <img className="img" alt="" src="https://readcomicsonline.ru/uploads/manga/killmonger-2018/chapters/1/03.jpg"/>
                <img className="img" alt=""  src="https://readcomicsonline.ru/uploads/manga/killmonger-2018/chapters/1/04.jpg"/>
              </article>
              <article>
                <img className="img" alt="" src="https://readcomicsonline.ru/uploads/manga/killmonger-2018/chapters/1/05.jpg"/>
                <img className="img" alt=""  src="https://readcomicsonline.ru/uploads/manga/killmonger-2018/chapters/1/06.jpg"/>
              </article>
              <article>
                <img className="img" alt="" src="https://readcomicsonline.ru/uploads/manga/killmonger-2018/chapters/1/07.jpg"/>
                <img className="img" alt=""  src="https://readcomicsonline.ru/uploads/manga/killmonger-2018/chapters/1/08.jpg"/>
              </article>
              <article>
                <img className="img" alt="" src="https://readcomicsonline.ru/uploads/manga/killmonger-2018/chapters/1/09.jpg"/>
                <img className="img" alt=""  src="https://readcomicsonline.ru/uploads/manga/killmonger-2018/chapters/1/10.jpg"/>
              </article>
              <article>
                <img className="img" alt="" src="https://readcomicsonline.ru/uploads/manga/killmonger-2018/chapters/1/11.jpg"/>
                <img className="img" alt=""  src="https://readcomicsonline.ru/uploads/manga/killmonger-2018/chapters/1/12.jpg"/>
              </article>
              <article>
                <img className="img" alt="" src="https://readcomicsonline.ru/uploads/manga/killmonger-2018/chapters/1/13.jpg"/>
                <img className="img" alt=""  src="https://readcomicsonline.ru/uploads/manga/killmonger-2018/chapters/1/14.jpg"/>
              </article>
              <article>
                <img className="img" alt="" src="https://readcomicsonline.ru/uploads/manga/killmonger-2018/chapters/1/15.jpg"/>
                <img className="img" alt=""  src="https://readcomicsonline.ru/uploads/manga/killmonger-2018/chapters/1/16.jpg"/>
              </article>
              <article>
                <img className="img" alt="" src="https://readcomicsonline.ru/uploads/manga/killmonger-2018/chapters/1/17.jpg"/>
                <img className="img" alt=""  src="https://readcomicsonline.ru/uploads/manga/killmonger-2018/chapters/1/18.jpg"/>
              </article>
              <article>
                <img className="img" alt="" src="https://readcomicsonline.ru/uploads/manga/killmonger-2018/chapters/1/19.jpg"/>
                <img className="img" alt=""  src="https://readcomicsonline.ru/uploads/manga/killmonger-2018/chapters/1/20.jpg"/>
              </article>
              <article>
                <img className="img" alt="" src="https://readcomicsonline.ru/uploads/manga/killmonger-2018/chapters/1/21.jpg"/>
                <img className="img" alt=""  src="https://readcomicsonline.ru/uploads/manga/killmonger-2018/chapters/1/22.jpg"/>
              </article>
              <article>
                <img className="img" alt="" src="https://readcomicsonline.ru/uploads/manga/killmonger-2018/chapters/1/23.jpg"/>
                <img className="img" alt=""  src="https://readcomicsonline.ru/uploads/manga/killmonger-2018/chapters/1/24.jpg"/>
              </article>
              <article>
                <img className="img" alt="" src="https://readcomicsonline.ru/uploads/manga/killmonger-2018/chapters/1/25.jpg"/>
                <img className="img" alt=""  src="https://readcomicsonline.ru/uploads/manga/killmonger-2018/chapters/1/26.jpg"/>
              </article>
              <article>
                <img className="img" alt="" src="https://readcomicsonline.ru/uploads/manga/killmonger-2018/chapters/1/27.jpg"/>
                <img className="img" alt=""  src="https://readcomicsonline.ru/uploads/manga/killmonger-2018/chapters/1/28.jpg"/>
              </article>
              <article>
                <img className="img" alt="" src="https://readcomicsonline.ru/uploads/manga/killmonger-2018/chapters/1/29.jpg"/>
                <img className="img" alt=""  src="https://readcomicsonline.ru/uploads/manga/killmonger-2018/chapters/1/30.jpg"/>
              </article>

              ))}
            </FlipPage>
          </div>
        );
      }
}
