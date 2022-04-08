import React from "react";
import { useParams } from "react-router";
function Description({ list }) {
  const { id } = useParams();
  return (
    <div>
      {list
        .filter((each) => parseInt(each.id) === parseInt(id))
        .map((last) => {
          return <div key={last.id}>{last.description}</div>;
        })}
    </div>
  );
}
export default Description;
