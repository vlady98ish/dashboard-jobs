import React from 'react';
import Modal from 'react-modal';
import { handleOverlayClick } from '../../utils/handler';

const ModalWrapper = ({ isOpen, onClose, children }) => {
	return (
		<Modal
			isOpen={isOpen}
			onRequestClose={(e) => handleOverlayClick(e, onClose)}
			overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
			className="h-fit w-full sm:max-w-[343px] bg-white  rounded-[6px]  dark:bg-dark_grey md:p-[32px]  md:max-w-[480px] focus:outline-none"
			ariaHideApp={false}
		>
			<div className="flex flex-col">{children}</div>
		</Modal>
	);
};

export default ModalWrapper;
