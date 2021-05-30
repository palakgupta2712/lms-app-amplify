import React from "react";
import { useParams } from "react-router-dom";
import Home from "./Home";
export default function Topic() {
  // The <Route> that rendered this component has a
  // path of `/topics/:topicId`. The `:topicId` portion
  // of the URL indicates a placeholder that we can
  // get from `useParams()`.
  let { topicId } = useParams();

  return (
    <div>
      kc
      <Home />
      <h3>{topicId}</h3>
    </div>
  );
}
