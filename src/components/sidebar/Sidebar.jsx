import ThemeToggle from '../common/ThemeToggle';
//Components
import Logo from './Logo';
import BoardItems from '../common/BoardItems';

//Spinner
import { TailSpin } from 'react-loader-spinner';
import { useSelector } from 'react-redux';
import HideSidebar from './HideSidebar';
import CreateNewBoard from '../common/CreateNewBoard';
import { useState } from 'react';
import AddEditBoardModal from '../modals/AddEditBoardModal';

const Sidebar = () => {
	const { boardList } = useSelector((state) => state.boards);
	const [isOpen, setIsOpen] = useState(false);

	const renderSpinnerOrBoardList = () => {
		if (boardList.length === 0) {
			return (
				<div className="flex justify-center items-center py-[50px]">
					<TailSpin color="#00BFFF" height={80} width={80} />
				</div>
			);
		} else {
			return <BoardItems boards={boardList} />;
		}
	};

	return (
		<div className="flex flex-col justify-between flex-shrink-0 py-[32px] dark:bg-dark_grey lg:w-[300px] md:w-[260px]">
			<div>
				<Logo />
				<h3 className="text-medium_grey text-12 leading-15 tracking-2.4 font-700 non-italic mt-[54px] lg:px-[32px] md:px-[24px]">
					ALL BOARDS ({boardList.length})
				</h3>
				{renderSpinnerOrBoardList()}
				<CreateNewBoard setIsOpen={setIsOpen} />
				<AddEditBoardModal
					isOpen={isOpen}
					onClose={() => setIsOpen(false)}
					title="Add New Board"
				/>
			</div>
			<div className="">
				<ThemeToggle padding="pl-[64px] pr-[66px] py-[14px]" />
				<HideSidebar />
			</div>
		</div>
	);
};

export default Sidebar;
