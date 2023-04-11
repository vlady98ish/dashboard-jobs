import React from 'react';
import Modal from 'react-modal';
import TextField from '../common/form/TextField';
import CustomLabel from '../common/form/CustomLabel';
import CancelIcon from '../../assets/icon-cross.svg';
import SecondaryButton from '../common/buttons/SecondaryButton';
import PrimaryButton from '../common/buttons/PrimaryButton';

const AddNewBoardModal = () => {
	return (
		<Modal
			isOpen={true}
			overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
			className="w-[480px] h-fit bg-white p-[32px] rounded-[6px] border-none"
			ariaHideApp={false}
		>
			<div className="flex flex-col">
				<h2 className="font-700 lg:text-18 lg:leading-23 ">Add New Board</h2>
				<form>
					<div className="mt-[24px]">
						<CustomLabel htmlFor="nameBoard" text="Name" />
						<TextField
							type="text"
							id="nameBoard"
							name="nameBoard"
							placeholder="e.g Web Design"
						/>
					</div>
					<div className="mt-[24px]">
						<CustomLabel htmlFor="column1" text="Columns" />
						<div className="flex items-center justify-center">
							<TextField
								type="text"
								id="column1"
								name="columns"
								placeholder="e.g. Todo"
							/>
							<button type="button" className="ml-[16px] mt-[12px]">
								<img src={CancelIcon} alt="Delete Input Field" />
							</button>
						</div>
						<div className="flex items-center justify-center">
							<TextField
								type="text"
								id="column1"
								name="columns"
								placeholder="e.g. Todo"
							/>
							<button type="button" className="ml-[16px] mt-[12px]">
								<img src={CancelIcon} alt="Delete Input Field" />
							</button>
						</div>
					</div>
					<SecondaryButton text="+ Add New Column" margin="mt-[18px]" />
					<PrimaryButton
						text="Create New Board"
						fullWidth={true}
						margin="mt-[24px]"
						padding_y={9}
					/>
				</form>
			</div>
		</Modal>
	);
};

export default AddNewBoardModal;
