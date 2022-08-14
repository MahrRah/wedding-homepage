import React from 'react';
import '../../assets/css/main.css'



function Gallery() {


    return (
        <div id="main">
            <section className="post">
                <h2>Image</h2>
                <span>Sneak Peak of some of the pictures. For more follow the link <a>here</a></span>
                <h3>Fit</h3>
                <span className="image fit"><img src="images/pic01.jpg" alt="" /></span>
                <div className="box alt">
                    <div className="row gtr-50 gtr-uniform">
                        <div className="col-4"><span className="image fit"><img src={require("../../images/pic02.jpg")} alt="" /></span></div>
                        <div className="col-4"><span className="image fit"><img src={require("../../images/pic03.jpg")} alt="" /></span></div>
                        <div className="col-4"><span className="image fit"><img src={require("../../images/pic04.jpg")} alt="" /></span></div>
                        <div className="col-4"><span className="image fit"><img src={require("../../images/pic05.jpg")} alt="" /></span></div>
                        <div className="col-4"><span className="image fit"><img src={require("../../images/pic06.jpg")} alt="" /></span></div>
                        <div className="col-4"><span className="image fit"><img src={require("../../images/pic07.jpg")} alt="" /></span></div>
                        <div className="col-4"><span className="image fit"><img src={require("../../images/pic06.jpg")} alt="" /></span></div>
                        <div className="col-4"><span className="image fit"><img src={require("../../images/pic05.jpg")} alt="" /></span></div>
                        <div className="col-4"><span className="image fit"><img src={require("../../images/pic03.jpg")} alt="" /></span></div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Gallery;
