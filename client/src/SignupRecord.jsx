//@flow
import React from "react";
import Block from "jsxstyle/Block";
import * as t from "./types";
import firebase from "firebase/app";

interface Props {
  id: string
}
export default class SignupRecord extends React.Component {

  props: Props;
  state: t.Signup;
  mounted: boolean;

  constructor(props: Props) {
    super(props);
    this.state = null;
  }

  componentDidMount() {
    this.mounted = true;
    this.fetchSignupRecord();
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  render() {
    if (this.state === null) return <div>Loading...</div>;
    const s: t.Signup = this.state;

    return (
      <Block>
        <h1>SignupRecord</h1>
        {s.name}
        {s.companyName}
        {s.eventDate}
      </Block>
    );
  }

  fetchSignupRecord() {
    const id = this.props.id;
    const database = firebase.database();
    const signupRef = database.ref("signups/" + id);
    signupRef.on('value', snapshot => {
      this.setState(snapshot.val());
    })
  }
}
