import React from 'react';
import book from '../Assets/book.svg';
import camera from '../Assets/camera.svg';
import plane from '../Assets/plane.svg';
import map from '../Assets/map.svg';
import headphone from '../Assets/headphone.svg';
import folder from '../Assets/folder.svg';
 
const Service = () => {
  return (
    <div className="service">
      <div className="service__container">
        <h1 className="service__h1">Our services</h1>
          <div className="service__display">
            <div className="service__margin">

                <div className="service__item">
                    <img src={book} className="service__image"/>
                    <div className="service__text">
                        <h1>Lorem ipsum dolor sit amet</h1>
                        <h2>consectetur adipiscing elit. Curabitur consequat vestibulum turpis ut porttitor. Morbi
                            pretium sapien ante, vitae dapibus nunc hendrerit eget. Phasellus eget mi imperdiet,
                            pharetra orci at, tincidunt leo. Pellentesque ut scelerisque mauris, ut luctus velit.
                            Vestibulum erat eros,
                        </h2>
                    </div>
                </div>

                <div className="service__item">
                    <img src={camera} className="service__image"/>
                    <div className="service__text">
                        <h1>Lorem ipsum dolor sit amet</h1>
                        <h2>consectetur adipiscing elit. Curabitur consequat vestibulum turpis ut porttitor. Morbi
                            pretium sapien ante, vitae dapibus nunc hendrerit eget. Phasellus eget mi imperdiet,
                            pharetra orci at, tincidunt leo. Pellentesque ut scelerisque mauris, ut luctus velit.
                            Vestibulum erat eros,
                        </h2>
                    </div>
                </div>

                <div className="service__item">
                    <img src={plane} className="service__image"/>
                    <div className="service__text">
                        <h1>Lorem ipsum dolor sit amet</h1>
                        <h2>consectetur adipiscing elit. Curabitur consequat vestibulum turpis ut porttitor. Morbi
                            pretium sapien ante, vitae dapibus nunc hendrerit eget. Phasellus eget mi imperdiet,
                            pharetra orci at, tincidunt leo. Pellentesque ut scelerisque mauris, ut luctus velit.
                            Vestibulum erat eros,
                        </h2>
                    </div>

                </div>

            </div>
            <div className="service__margin">

                    <div className="service__item">
                        <img src={map} className="service__image"/>
                        <div className="service__text">
                            <h1>Lorem ipsum dolor sit amet</h1>
                            <h2>consectetur adipiscing elit. Curabitur consequat vestibulum turpis ut porttitor. Morbi
                                pretium sapien ante, vitae dapibus nunc hendrerit eget. Phasellus eget mi imperdiet,
                                pharetra orci at, tincidunt leo. Pellentesque ut scelerisque mauris, ut luctus velit.
                                Vestibulum erat eros,
                            </h2>
                        </div>
                    </div>

                    <div className="service__item">
                        <img src={headphone} className="service__image"/>
                        <div className="service__text">
                            <h1>Lorem ipsum dolor sit amet</h1>
                            <h2>consectetur adipiscing elit. Curabitur consequat vestibulum turpis ut porttitor. Morbi
                                pretium sapien ante, vitae dapibus nunc hendrerit eget. Phasellus eget mi imperdiet,
                                pharetra orci at, tincidunt leo. Pellentesque ut scelerisque mauris, ut luctus velit.
                                Vestibulum erat eros,
                            </h2>
                        </div>
                    </div>

                    <div className="service__item">
                        <img src={folder} className="service__image"/>
                        <div className="service__text">
                            <h1>Lorem ipsum dolor sit amet</h1>
                            <h2>consectetur adipiscing elit. Curabitur consequat vestibulum turpis ut porttitor. Morbi
                                pretium sapien ante, vitae dapibus nunc hendrerit eget. Phasellus eget mi imperdiet,
                                pharetra orci at, tincidunt leo. Pellentesque ut scelerisque mauris, ut luctus velit.
                                Vestibulum erat eros,
                            </h2>
                        </div>
                    </div>

            </div>
          </div>
      </div>
    </div> 
  );
}

export default Service;