import React, { useEffect } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { useDispatch } from "react-redux";
import MidArea from "./components/MidArea";
import PreviewArea from "./components/PreviewArea";
import Sidebar from "./components/Sidebar";
import { updateList } from "./redux/slice/midSlice";
import { store } from "./store";

function App({ update_list }) {
  const dispatch = useDispatch();

  function initializeSpriteSyles() {
    const el = document.getElementById(`${store.getState().sprite.active}-div`);
    if (!el) return;\n    el.style.position = "relative";
    el.style.left = "0px";
    el.style.top = "0px";
  }

  useEffect(() => {
    initializeSpriteSyles();
  }, []);

  const onDragEnd = (result) => {
    dispatch(updateList(result));
  };

  return (
    <div className="studio-shell">\n      <header className="studio-header"><div className="studio-brand"><span className="studio-logo">◆</span><div><strong>Code Block</strong><small>CREATE · PLAY · IMAGINE</small></div></div><span className="studio-status">● Visual Coding Studio</span><span className="studio-version">Beta editor</span></header>
      <main className="studio-main">
        <DragDropContext onDragEnd={onDragEnd}>
          <div className="studio-editor">
            <Sidebar />
            <MidArea />
          </div>
          <div className="studio-preview">
            <PreviewArea />
          </div>
        </DragDropContext>
      </div>
    </div>
  );
}

export default App;
