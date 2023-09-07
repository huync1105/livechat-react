import { useRef } from "react";
import "./App.scss";
import ShowAppMessageWidget from "./widget/show-app-message-widget/ShowAppMessageWidget";
import ShowAppSidebarWidget from "./widget/show-app-sidebar-widget/ShowAppSidebarWidget";

function App() {
  const userDetailRef = useRef<HTMLDivElement | null>(null);
  let isOpen = false;
  const logger = () => {
    const divEle = userDetailRef.current;
    if (divEle) {
      if (!isOpen) {
        divEle.style.width = "600px";
      } else {
        divEle.style.width = "0px";
      }
      isOpen = !isOpen;
    }
  };
  return (
    <>
      <div className="app">
        {/* sidebar */}
        <div className="app__sidebar">
          <ShowAppSidebarWidget />
        </div>

        {/* content */}
        <div className="app__message">
          <ShowAppMessageWidget openLayout={logger} />
        </div>

        <div
          className="app__userDetail"
          ref={userDetailRef}
          style={{ width: "0" }}
        ></div>
      </div>
    </>
  );
}

export default App;
