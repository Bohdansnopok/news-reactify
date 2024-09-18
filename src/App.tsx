import Header from "./components/header/header";
import React from 'react'; // Додай
import Main from "./pages/main/main";


function App() {
    return (
        <>
            <Header/>
            <div className="container">
                <Main/>
            </div>
        </>
    )
}

export default App
