import React from "react";

export const Card = ({ cardTitle, cardText, cardImage }) => {

    return (
        
        <div className="col-12 col-sm-6 col-md-3 mb-4">
            <div className="card h-100 text-center">
                <img src={cardImage} className="card-img-top" alt=""/>
                
                <div className="card-body">
                    <h5 className="card-title">{cardTitle}</h5>
                    <p className="card-text">{cardText}</p>
                    <a href="#" className="btn btn-primary">Find Out More!</a>
                </div>
            </div>
        </div>

    );
}