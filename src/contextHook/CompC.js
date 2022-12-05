import React, { useContext } from "react";
import { UserContext, ChannelContext } from "../App3";

export default function CompC() {
  const user = useContext(UserContext);
  const channel = useContext(ChannelContext);
  return (
    <div>
      {user} {channel}
    </div>
  );
}

// import React from "react";
// import { UserContext, ChannelContext } from "../App";

// export default function CompC() {
//   return (
//     <UserContext.Consumer>
//       {(user) => {
//         return (
//           <ChannelContext.Consumer>
//             {(channel) => {
//               return (
//                 <div>
//                   My Name is {user} {channel}
//                 </div>
//               );
//             }}
//           </ChannelContext.Consumer>
//         );
//       }}
//     </UserContext.Consumer>
//   );
// }
