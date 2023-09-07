import "./App.scss";
import ShowAppMessageWidget from "./widget/show-app-message-widget/ShowAppMessageWidget";
import ShowAppSidebarWidget from "./widget/show-app-sidebar-widget/ShowAppSidebarWidget";

function App() {
  return (
    <>
      <div className="app">
        {/* sidebar */}
        <div className="app__sidebar">
          <ShowAppSidebarWidget />
        </div>

        {/* content */}
        <div className="app__message">
          <ShowAppMessageWidget />
        </div>
      </div>
    </>
  );
}

export default App;
