import { Provider } from "react-redux";
import store from "./store/store";
import ProfileCard from "./components/ProfileCard";

function App() {
  return (
    <div
      className="min-h-screen w-full flex items-center justify-center"
      style={{
        background: "linear-gradient(to right, #9a8478, #1e130c)",
      }}
    >
      <ProfileCard />
    </div>
  );
}

export default function Root() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}
