import React from "react";
import Notes from "./Notes";

export default function Home(props) {
  // {showAlert}=props;
  return (
    <div>
      <Notes showAlert={props.showAlert} />
    </div>
  );
}
