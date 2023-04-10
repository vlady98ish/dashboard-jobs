import ThemeSwitcher from "../common/ThemeSwitcher";
//Components
import Logo from "./Logo";
import BoardItems from "../common/BoardItems";

//Spinner
import { TailSpin } from "react-loader-spinner";
import { useSelector } from "react-redux";
import HideSidebar from "./HideSidebar";
import CreateNewBoard from "../common/CreateNewBoard";

const Sidebar = () => {
  const { boardList } = useSelector((state) => state.boards);

  return (
    <div
      className="flex flex-col justify-between flex-shrink-0
    py-[32px]  dark:bg-dark_grey
    lg:w-[300px] md:w-[260px]"
    >
      <div>
        {/* Render logo */}
        <Logo />
        {/* Render board count */}
        <h3
          className="text-medium_grey text-12 leading-15
         tracking-2.4  font-700
         non-italic mt-[54px] lg:px-[32px] md:px-[24px]"
        >
          ALL BOARDS ({boardList.length})
        </h3>
        {/* Render spinner while loading or list of boards */}
        {boardList.length === 0 ? (
          <div className="flex justify-center items-center py-[50px]">
            <TailSpin color="#00BFFF" height={80} width={80} />
          </div>
        ) : (
          <BoardItems boards={boardList} />
        )}
        {/* Render button to create new board */}
        <CreateNewBoard />
      </div>
      <div className=" ">
        <ThemeSwitcher padding="pl-[64px] pr-[66px] py-[14px]" />
        <HideSidebar />
      </div>
    </div>
  );
};

export default Sidebar;