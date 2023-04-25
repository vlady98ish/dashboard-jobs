import React, { useEffect } from 'react';
import Sidebar from '../components/sidebar/Sidebar';
import Header from '../components/header/Header';
import Main from '../components/main/Main';
import { useDispatch, useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';

import { getAllBoards } from '../utils/Api';
import { setBoards, setIsLoading } from '../redux/slices/boardSlice';
import { showToastMessage } from '../utils/helper';
import { ERROR } from '../utils/constant';

const Dashboard = () => {
	// Initialize Redux dispatch and state
	const dispatch = useDispatch();
	// you need to use name of your slice

	// Get the value of the "hidden" property from the "sidebar" slice of the Redux store
	const isSidebarHidden = useSelector((state) => state.sidebar.hidden);

	// Get a boolean value indicating whether the screen size is less than or equal to 767 pixels wide
	const isMobile = useMediaQuery({ maxWidth: 768 });

	// Load all boards from REST API on mount
	useEffect(() => {
		getAllBoards()
			.then(dispatch(setIsLoading()))
			.then((data) => {
				dispatch(setBoards(data));
			})
			.catch((error) => showToastMessage(ERROR, error));
	}, [dispatch]);

	return (
		<div className="flex flex-col  h-screen">
			<Header isMobile={isMobile} />
			<div className="flex h-full ">
				{/* If the sidebar is not hidden... */}
				{!isSidebarHidden && (
					<div className="flex h-full">
						{/* ...and the screen size is not mobile... */}
						{!isMobile && <Sidebar />}

						{/* ...add a vertical line as a separator */}
						<div className=" w-[1px] bg-lines_light dark:bg-lines_dark md:block" />
					</div>
				)}
				<div className="flex min-w-0 max-h-full flex-1 flex-col">
					<Main isMobile={isMobile} />
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
