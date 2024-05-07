import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Navigation from "./components/Navigation";
function App() {
  return (
    <Provider store={appStore}>
    <Navigation/>
    </Provider>
  );
}
export default App;