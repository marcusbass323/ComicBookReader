import React, { Component } from 'react'
import FlipPage from 'react-flip-page';

export default class Thor extends Component {

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
                <img className="img" alt="" src="https://readcomicsonline.ru/uploads/manga/the-mighty-thor-2015/chapters/706/01.jpg"/>
                <img className="img" alt=""  src="https://readcomicsonline.ru/uploads/manga/the-mighty-thor-2015/chapters/706/02.jpg"/>
              </article>
              <article>
                <img className="img" alt="" src="https://readcomicsonline.ru/uploads/manga/the-mighty-thor-2015/chapters/706/03.jpg"/>
                <img className="img" alt=""  src="https://readcomicsonline.ru/uploads/manga/the-mighty-thor-2015/chapters/706/04.jpg"/>
              </article>
              <article>
                <img className="img" alt="" src="https://readcomicsonline.ru/uploads/manga/the-mighty-thor-2015/chapters/706/05.jpg"/>
                <img className="img" alt=""  src="https://readcomicsonline.ru/uploads/manga/the-mighty-thor-2015/chapters/706/06.jpg"/>
              </article>
              <article>
                <img className="img" alt="" src="https://readcomicsonline.ru/uploads/manga/the-mighty-thor-2015/chapters/706/07.jpg"/>
                <img className="img" alt=""  src="https://readcomicsonline.ru/uploads/manga/the-mighty-thor-2015/chapters/706/08.jpg"/>
              </article>
              <article>
                <img className="img" alt="" src="https://readcomicsonline.ru/uploads/manga/the-mighty-thor-2015/chapters/706/09.jpg"/>
                <img className="img" alt=""  src="https://readcomicsonline.ru/uploads/manga/the-mighty-thor-2015/chapters/706/10.jpg"/>
              </article>
              <article>
                <img className="img" alt="" src="https://readcomicsonline.ru/uploads/manga/the-mighty-thor-2015/chapters/706/11.jpg"/>
                <img className="img" alt=""  src="https://readcomicsonline.ru/uploads/manga/the-mighty-thor-2015/chapters/706/12.jpg"/>
              </article>
              <article>
                <img className="img" alt="" src="https://readcomicsonline.ru/uploads/manga/the-mighty-thor-2015/chapters/706/13.jpg"/>
                <img className="img" alt=""  src="https://readcomicsonline.ru/uploads/manga/the-mighty-thor-2015/chapters/706/14.jpg"/>
              </article>
              <article>
                <img className="img" alt="" src="https://readcomicsonline.ru/uploads/manga/the-mighty-thor-2015/chapters/706/15.jpg"/>
                <img className="img" alt=""  src="https://readcomicsonline.ru/uploads/manga/the-mighty-thor-2015/chapters/706/16.jpg"/>
              </article>
              <article>
                <img className="img" alt="" src="https://readcomicsonline.ru/uploads/manga/the-mighty-thor-2015/chapters/706/17.jpg"/>
                <img className="img" alt=""  src="https://readcomicsonline.ru/uploads/manga/the-mighty-thor-2015/chapters/706/18.jpg"/>
              </article>
              <article>
                <img className="img" alt="" src="https://readcomicsonline.ru/uploads/manga/the-mighty-thor-2015/chapters/706/19.jpg"/>
                <img className="img" alt=""  src="https://readcomicsonline.ru/uploads/manga/the-mighty-thor-2015/chapters/706/20.jpg"/>
              </article>
              <article>
                <img className="img" alt="" src="https://readcomicsonline.ru/uploads/manga/the-mighty-thor-2015/chapters/706/21.jpg"/>
                <img className="img" alt=""  src="https://readcomicsonline.ru/uploads/manga/the-mighty-thor-2015/chapters/706/22.jpg"/>
              </article>
              <article>
                <img className="img" alt="" src="https://readcomicsonline.ru/uploads/manga/the-mighty-thor-2015/chapters/706/23.jpg"/>
                <img className="img" alt=""  src="https://readcomicsonline.ru/uploads/manga/the-mighty-thor-2015/chapters/706/24.jpg"/>
              </article>
              <article>
                <img className="img" alt="" src="https://readcomicsonline.ru/uploads/manga/the-mighty-thor-2015/chapters/706/25.jpg"/>
              </article>
              
              ))}
            </FlipPage>
          </div>
        );
      }
}
