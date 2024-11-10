import React from "react";
import PropTypes from "prop-types";
import ReactModal from "react-modal";
import styles from "./ImageModal.module.css";

const ImageModal = ({ image, isOpen, onClose }) => (
	<ReactModal
		isOpen={isOpen}
		onRequestClose={onClose}
		className={styles.modal}
		overlayClassName={styles.overlay}
	>
		<img
			src={image.urls.regular}
			alt={image.alt_description}
		/>
		<button onClick={onClose}>Close</button>
	</ReactModal>
);

ImageModal.propTypes = {
	image: PropTypes.object.isRequired,
	isOpen: PropTypes.bool.isRequired,
	onClose: PropTypes.func.isRequired,
};

export default ImageModal;
