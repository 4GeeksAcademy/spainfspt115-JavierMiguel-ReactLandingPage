import React from "react";

// SRC'S
import rigoImage from "../../img/rigo-baby.jpg";


//Components
import { Card } from "./Card";
import { Jumbotron } from "./Jumbotron";

export const Content = () => {

    return (
        <div>
            <Jumbotron />

            <div className="py-5">
                <div className="container">
                    <div className="row">
                        <Card
                            cardTitle="Card Title 1"
                            cardText="Card text 1 for example shortest"
                            cardImage={rigoImage}
                        />
                        <Card
                            cardTitle={"Card Title 2"}
                            cardText="Card text 2 for example short Lorem Ipsum"
                            cardImage={rigoImage}
                        />
                        <Card
                            cardTitle={"Card Title 3"}
                            cardText="Card text 3 for example medium Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                            cardImage={rigoImage}
                        />
                        <Card
                            cardTitle={"Card Title 4"}
                            cardText="Card text 4 for example large Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                            cardImage={rigoImage}
                        />
                    </div>
                </div>
            </div>

        </div>
    );
};