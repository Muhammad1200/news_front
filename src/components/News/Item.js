import React from "react";
import no_image_product_details from '../../assets/img/no_image_product_details.png';

const Item = ({ item }) => {

    return (

        <div className="col-lg-4 my-3 col-md-6">
            <div className="card h-100 pos-rel">
                <div className="card-header">
                    <img className="img_card_home_news_duplicate" style={{objectFit:'fill'}} src={item.urlToImage} />
                    <img className="img_card_home_news" src={no_image_product_details} />
                </div>
                <div className="card-body">
                    <h2>
                        {item.title}
                    </h2>
                    <p className="news_description_text_elipse">{item.description}</p>
                </div>
            </div>
        </div>

    );
};

export default Item;