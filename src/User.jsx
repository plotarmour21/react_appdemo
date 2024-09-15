export default function User(props) {
//   if (props.isLoggedin) {
//     return <h2>Welcome {props.username}</h2>;
//   } else {
//     return <h2>Login to continue</h2>;
//   }


return (props.isLoggedin ? <h2>welcome {props.username}</h2>: <h2>please login</h2>)
}
