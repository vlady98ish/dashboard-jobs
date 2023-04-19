import React from 'react';
import { handleOverlayClick } from '../../utils/handler';

import Modal from 'react-modal';

import DropMenuButton from '../common/buttons/DropMenuButton';
import CustomLabel from '../common/form/CustomLabel';
import { useSelector } from 'react-redux';
import TextFieldWithDropDown from '../common/form/tasks/TextFieldWithDropDown';

const TaskInfoModal = ({ isOpen, onClose }) => {
	const { selectedBoard } = useSelector((state) => state.boards);
	return (
		<Modal
			isOpen={isOpen}
			overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
			className="h-fit w-full sm:max-w-[343px] bg-white  rounded-[6px]  dark:bg-dark_grey md:p-[32px]  md:max-w-[480px] focus:outline-none"
			onRequestClose={(e) => handleOverlayClick(e, onClose)}
			ariaHideApp={false}
		>
			<div className="flex flex-col gap-[24px]">
				<div className="flex flex-row gap-[24px] items-center">
					<h2 className="font-700 text-18 leading-23">
						Research pricing points of various competitors and trial different
						business models
					</h2>
					<DropMenuButton />
				</div>
				<p className="font-500 text-12 leading-23 text-medium_grey">
					We know what we're planning to build for version one. Now we need to
					finalise the first pricing model we'll use. Keep iterating the
					subtasks until we have a coherent proposition.
				</p>
				<div>
					<CustomLabel text="Subtasks (2 of 3)" />
					<div className="flex flex-col gap-[8px] mt-[24px]">
						<div className="flex gap-4">
							<label
								htmlFor="checkbox-list"
								className="relative flex items-center w-full cursor-pointer gap-4 rounded bg-light_grey p-3 hover:bg-main_purple hover:bg-opacity-25 dark:bg-very_dark_grey"
							>
								<input
									id="checkbox-list"
									type="checkbox"
									className="absolute h-0 w-0 opacity-0"
									value="false"
								/>
								<span
									className="flex h-4 w-4 items-center justify-center rounded-[4px] border border-medium_grey border-opacity-20  after:absolute
        after:top-1.5 after:h-2 after:w-2.5
      bg-white after:hidden after:content-none dark:bg-dark_grey"
								></span>
								<p className=" text-12 font-700 text-black dark:text-white">
									eqwe
								</p>
							</label>
						</div>
					</div>
					<div className="flex flex-col mt-[24px]">
						<CustomLabel text={'Current Status'} />
						<TextFieldWithDropDown
							options={selectedBoard && selectedBoard.columns}
						/>
					</div>
				</div>
			</div>
		</Modal>
	);
};

export default TaskInfoModal;
