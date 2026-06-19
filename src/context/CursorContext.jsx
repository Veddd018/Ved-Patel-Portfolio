import { createContext, useState } from 'react';

export const CursorContext = createContext();

export const CursorProvider = ({ children }) => {
  const [cursorVariant, setCursorVariant] = useState("default");
  const [cursorText, setCursorText] = useState("");

  const mouseEnterLink = () => {
    setCursorText("");
    setCursorVariant("link");
  };

  const mouseLeave = () => {
    setCursorText("");
    setCursorVariant("default");
  };

  const mouseEnterProject = (text = "View") => {
    setCursorText(text);
    setCursorVariant("project");
  };

  return (
    <CursorContext.Provider value={{ cursorVariant, cursorText, mouseEnterLink, mouseLeave, mouseEnterProject }}>
      {children}
    </CursorContext.Provider>
  );
};
