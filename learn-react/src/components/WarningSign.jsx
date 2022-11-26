// 1. Create a component called WarningSign which receives a string as a prop.
//    This text should be presented inside an Alert react-bootstrap component of type danger.

import { Alert } from "react-bootstrap";

const WarningSign = ({ color, text }) => {
  return <Alert variant={color}>{text}</Alert>;
};

/* ------------------------------------------
Q:
why does the below code not render the Alert?
--------------------------------------------*/

// const WarningSign = ({ color }) => {
//   const k = color;
//   const arr = ["primary", "secondary", "success", "danger", "warning", "info", "light", "dark"].filter(
//     (variant) => variant === k
//   );
//   console.log({ arr });
//   arr.map((variable) => {
//     console.log({ variable });
//     return <Alert variant={variable}>This is a {variable} alert—check it out!</Alert>;
//   });
// };

export default WarningSign;
