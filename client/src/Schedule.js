//@flow
import React from "react";
import moment from "moment";
import Block from "jsxstyle/Block";
import Col from "jsxstyle/Col";
import {Card, CardActions, CardText} from "material-ui/Card";
import FlatButton from "material-ui/FlatButton";
import * as ss from "./util";
import publicEvents from "./data/publicEvents.json";
import workshops from "./data/workshops.json";
import * as t from "./types";

export default function Schedule() {

  const ids = Object.keys(publicEvents);

  return (
    <Col margin="1rem" alignItems="center">
      {ids.map((eventId: t.Event) => <ScheduleCard key={eventId} id={eventId} event={publicEvents[eventId]}/>)}
    </Col>
  );
}

function ScheduleCard({id,event}: { id:string,event: t.Event }) {
  const date1 = moment(event.date);
  const date2 = moment(date1).add(4, 'days');
  const dateString = date1.format("ddd MMM D") + " - " + date2.format("ddd MMM D");

  const workshop = workshops[event.workshopKey];
  const workshopTitle = workshop.title;
  const url = "signup/" + id;

  return (
    <Card style={{maxWidth: "23rem", margin: "1rem"}}>
      <CardText>
        <Block fontWeight="500" fontSize="1.5rem" marginBottom=".5rem">{dateString}</Block>
        <Block fontSize="1.2rem">{workshopTitle} - San Clemente, CA</Block>
      </CardText>
      <CardActions style={{display: "flex", justifyContent: "center"}}>
        <FlatButton label="Register Now" onClick={() => ss.spaRedir(url)}/>
      </CardActions>
    </Card>
  );
}
