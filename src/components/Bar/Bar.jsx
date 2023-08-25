import "./Bar.css";

function Bar(props) {
  return (
    <div className="bar">
     {props.isLogin ? <button>Logout</button> : <button>Login</button>}
    </div>
  );
}
export default Bar;
