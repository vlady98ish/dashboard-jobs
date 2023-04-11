import React, { useEffect } from "react";
import EmptyBoard from "./EmptyBoard";
import { useSelector } from "react-redux";
import ShowSideBar from "../sidebar/ShowSideBar";
import AddNewBoardModal from "../modals/AddNewBoardModal";

const Main = ({ isMobile }) => {
  const isSidebarHidden = useSelector((state) => state.sidebar.hidden);
  const { selectedBoard } = useSelector((state) => state.boards);
  useEffect(() => {
    console.log(selectedBoard);
  }, [selectedBoard]);

  return (
    <main className="bg-light_grey h-full dark:bg-very_dark_grey relative">
      {selectedBoard && selectedBoard.columns.length === 0 && (
        <EmptyBoard isMobile={isMobile} />
      )}
      <AddNewBoardModal />
      {isSidebarHidden && <ShowSideBar />}
    </main>
  );
};

export default Main;
