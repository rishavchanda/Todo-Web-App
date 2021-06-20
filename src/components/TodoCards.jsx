import React from "react"
import {
    Card, Button, CardImg, CardTitle, CardText, CardBody
} from 'reactstrap';

const TodoCards = ({ taskObj, index }) => {
    return (
        <>
            <Card className=" mb-3 card-ver">

                <CardBody>
                    <CardTitle tag="h5" className="max-text mb-2 mt-3">{taskObj.Name}</CardTitle>
                    <CardText tag="p" className="max-text desc mb-1">{taskObj.Description}</CardText>
                </CardBody>
            </Card>

        </>
    );
};

export default TodoCards;