import React, { Component } from 'react'
import FlipPage from 'react-flip-page';

export default class Hulk extends Component {

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
                <img className="img" alt="" src="https://readcomicsonline.ru/uploads/manga/the-totally-awesome-hulk-2016/chapters/23/01.jpg"/>
                <img className="img" alt=""  src="https://readcomicsonline.ru/uploads/manga/the-totally-awesome-hulk-2016/chapters/23/02.jpg"/>
              </article>
              <article>
                <img className="img" alt="" src="https://readcomicsonline.ru/uploads/manga/the-totally-awesome-hulk-2016/chapters/23/03.jpg"/>
                <img className="img" alt=""  src="https://readcomicsonline.ru/uploads/manga/the-totally-awesome-hulk-2016/chapters/23/04.jpg"/>
              </article>
              <article>
                <img className="img" alt="" src="https://readcomicsonline.ru/uploads/manga/the-totally-awesome-hulk-2016/chapters/23/05.jpg"/>
                <img className="img" alt=""  src="https://readcomicsonline.ru/uploads/manga/the-totally-awesome-hulk-2016/chapters/23/06.jpg"/>
              </article>
              <article>
                <img className="img" alt="" src="https://readcomicsonline.ru/uploads/manga/the-totally-awesome-hulk-2016/chapters/23/07.jpg"/>
                <img className="img" alt=""  src="https://readcomicsonline.ru/uploads/manga/the-totally-awesome-hulk-2016/chapters/23/08.jpg"/>
              </article>
              <article>
                <img className="img" alt="" src="https://readcomicsonline.ru/uploads/manga/the-totally-awesome-hulk-2016/chapters/23/09.jpg"/>
                <img className="img" alt=""  src="https://readcomicsonline.ru/uploads/manga/the-totally-awesome-hulk-2016/chapters/23/10.jpg"/>
              </article>
              <article>
                <img className="img" alt="" src="https://readcomicsonline.ru/uploads/manga/the-totally-awesome-hulk-2016/chapters/23/11.jpg"/>
                <img className="img" alt=""  src="https://readcomicsonline.ru/uploads/manga/the-totally-awesome-hulk-2016/chapters/23/12.jpg"/>
              </article>
              <article>
                <img className="img" alt="" src="https://readcomicsonline.ru/uploads/manga/the-totally-awesome-hulk-2016/chapters/23/13.jpg"/>
                <img className="img" alt=""  src="https://readcomicsonline.ru/uploads/manga/the-totally-awesome-hulk-2016/chapters/23/14.jpg"/>
              </article>
              <article>
                <img className="img" alt="" src="https://readcomicsonline.ru/uploads/manga/the-totally-awesome-hulk-2016/chapters/23/15.jpg"/>
                <img className="img" alt=""  src="https://readcomicsonline.ru/uploads/manga/the-totally-awesome-hulk-2016/chapters/23/16.jpg"/>
              </article>
              <article>
                <img className="img" alt="" src="https://readcomicsonline.ru/uploads/manga/the-totally-awesome-hulk-2016/chapters/23/17.jpg"/>
                <img className="img" alt=""  src="https://readcomicsonline.ru/uploads/manga/the-totally-awesome-hulk-2016/chapters/23/18.jpg"/>
              </article>
              <article>
                <img className="img" alt="" src="https://readcomicsonline.ru/uploads/manga/the-totally-awesome-hulk-2016/chapters/23/19.jpg"/>
                <img className="img" alt=""  src="https://readcomicsonline.ru/uploads/manga/the-totally-awesome-hulk-2016/chapters/23/20.jpg"/>
              </article>
              <article>
                <img className="img" alt="" src="https://readcomicsonline.ru/uploads/manga/the-totally-awesome-hulk-2016/chapters/23/21.jpg"/>
                <img className="img" alt=""  src="https://readcomicsonline.ru/uploads/manga/the-totally-awesome-hulk-2016/chapters/23/22.jpg"/>
              </article>
              <article>
                <img className="img" alt="" src="https://readcomicsonline.ru/uploads/manga/the-totally-awesome-hulk-2016/chapters/23/23.jpg"/>
              </article>              
              ))}
            </FlipPage>
          </div>
        );
      }
}
