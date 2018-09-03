import React from "react";
import {RatingBaseComponent} from "./rating-component";

export default ({data}) => {
    const imageUrl = `url(${data.img})`;

    return (
        <div className="row hotel-card">
            <div className="col hotel-card__img-wrapper">
                <div className="hotel-card__img" style={{backgroundImage: imageUrl}}></div>
            </div>
            <div className="col hotel-card__content">
                <div className="border-bottom h-100">
                    <h5>{data.name}</h5>
                    <div>{data.address}</div>
                    <div>
                        <RatingBaseComponent rating={data.rate} />
                    </div>
                </div>
            </div>
            <div className="col border-left hotel-card__details">
                <div className="h-100 font-weight-bold">
                    ${data.price.single}
                </div>
                <button type="button" className="btn btn-danger w-100">View details</button>
            </div>
        </div>
    );
}