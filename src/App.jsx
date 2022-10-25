import { BrowserRouter } from "react-router-dom";
import "./App.css";
import "./assets/styles/fonts.css";
import ChatProvider from "./data/Chat";
import Routes from "./Routes";

function App() {
  return (
    <ChatProvider>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </ChatProvider>
  );
}

export default App;
