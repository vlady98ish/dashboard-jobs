import React from "react";
import EmptyBoard from "./EmptyBoard";
import { useSelector } from "react-redux";
import ShowSideBar from "../sidebar/ShowSideBar";

const Main = ({ isMobile }) => {
  const isSidebarHidden = useSelector((state) => state.sidebar.hidden);
  const { selectedBoard } = useSelector((state) => state.boards);
  const isNoColumns = selectedBoard.columns.length === 0;
  return (
    <main className="bg-light_grey h-full dark:bg-very_dark_grey relative">
      {isNoColumns && <EmptyBoard isMobile={isMobile} />}
      {isSidebarHidden && <ShowSideBar />}
    </main>
  );
};

export default Main;
