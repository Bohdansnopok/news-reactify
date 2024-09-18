import Header from "./components/header/header";
import Main from "./pages/main/main";
function App() {
    return (React.createElement(React.Fragment, null,
        React.createElement(Header, null),
        React.createElement("div", { className: "container" },
            React.createElement(Main, null))));
}
export default App;
