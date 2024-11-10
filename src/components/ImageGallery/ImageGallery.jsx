import React from "react";
import PropTypes from "prop-types";
import styles from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ images, onImageClick }) => (
	<ul className={styles.gallery}>
		{images.map((image) => (
			<ImageCard
				key={image.id}
				image={image}
				onClick={onImageClick}
			/>
		))}
	</ul>
);

ImageGallery.propTypes = {
	images: PropTypes.array.isRequired,
	onImageClick: PropTypes.func.isRequired,
};

export default ImageGallery;
