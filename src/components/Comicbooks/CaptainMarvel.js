import React, { Component } from 'react'
import FlipPage from 'react-flip-page';

export default class CaptainMarvel extends Component {

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
          touchAction: "none"        
        };

        return (

          <div className="comicbook" style={playerStyles}>
            <FlipPage {...this.flipPageSettings}>
              <article>
                <img className="img" alt="" src="https://readcomicsonline.ru/uploads/manga/captain-marvel-2017/chapters/129/01.jpg"/>
                <img className="img" alt=""  src="https://readcomicsonline.ru/uploads/manga/captain-marvel-2017/chapters/129/02.jpg"/>
              </article>
              <article>
                <img className="img" alt="" src="https://readcomicsonline.ru/uploads/manga/captain-marvel-2017/chapters/129/03.jpg"/>
                <img className="img" alt=""  src="https://readcomicsonline.ru/uploads/manga/captain-marvel-2017/chapters/129/04.jpg"/>
              </article>
              <article>
                <img className="img" alt="" src="https://readcomicsonline.ru/uploads/manga/captain-marvel-2017/chapters/129/05.jpg"/>
                <img className="img" alt=""  src="https://readcomicsonline.ru/uploads/manga/captain-marvel-2017/chapters/129/06.jpg"/>
              </article>
              <article>
                <img className="img" alt="" src="https://readcomicsonline.ru/uploads/manga/captain-marvel-2017/chapters/129/07.jpg"/>
                <img className="img" alt=""  src="https://readcomicsonline.ru/uploads/manga/captain-marvel-2017/chapters/129/08.jpg"/>
              </article>
              <article>
                <img className="img" alt="" src="https://readcomicsonline.ru/uploads/manga/captain-marvel-2017/chapters/129/09.jpg"/>
                <img className="img" alt=""  src="https://readcomicsonline.ru/uploads/manga/captain-marvel-2017/chapters/129/10.jpg"/>
              </article>
              <article>
                <img className="img" alt="" src="https://readcomicsonline.ru/uploads/manga/captain-marvel-2017/chapters/129/11.jpg"/>
                <img className="img" alt=""  src="https://readcomicsonline.ru/uploads/manga/captain-marvel-2017/chapters/129/12.jpg"/>
              </article>
              <article>
                <img className="img" alt="" src="https://readcomicsonline.ru/uploads/manga/captain-marvel-2017/chapters/129/13.jpg"/>
                <img className="img" alt=""  src="https://readcomicsonline.ru/uploads/manga/captain-marvel-2017/chapters/129/14.jpg"/>
              </article>
              <article>
                <img className="img" alt="" src="https://readcomicsonline.ru/uploads/manga/captain-marvel-2017/chapters/129/15.jpg"/>
                <img className="img" alt=""  src="https://readcomicsonline.ru/uploads/manga/captain-marvel-2017/chapters/129/16.jpg"/>
              </article>
              <article>
                <img className="img" alt="" src="https://readcomicsonline.ru/uploads/manga/captain-marvel-2017/chapters/129/17.jpg"/>
                <img className="img" alt=""  src="https://readcomicsonline.ru/uploads/manga/captain-marvel-2017/chapters/129/18.jpg"/>
              </article>
              <article>
                <img className="img" alt="" src="https://readcomicsonline.ru/uploads/manga/captain-marvel-2017/chapters/129/19.jpg"/>
                <img className="img" alt=""  src="https://readcomicsonline.ru/uploads/manga/captain-marvel-2017/chapters/129/20.jpg"/>
              </article>
              <article>
                <img className="img" alt="" src="https://readcomicsonline.ru/uploads/manga/captain-marvel-2017/chapters/129/21.jpg"/>
                <img className="img" alt=""  src="https://readcomicsonline.ru/uploads/manga/captain-marvel-2017/chapters/129/22.jpg"/>
              </article>
              ))}
            </FlipPage>
          </div>
        );
      }
}
