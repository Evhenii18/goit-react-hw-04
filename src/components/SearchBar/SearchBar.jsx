import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./SearchBar.module.css";
import toast from "react-hot-toast";

const SearchBar = ({ onSubmit }) => {
	const [query, setQuery] = useState("");

	const handleChange = (e) => setQuery(e.target.value);
	const handleSubmit = (e) => {
		e.preventDefault();
		if (!query.trim()) {
			toast.error("Please enter a search term");
			return;
		}
		onSubmit(query);
		setQuery("");
	};

	return (
		<header className={styles.searchBar}>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					autoComplete="off"
					autoFocus
					placeholder="Search images and photos"
					value={query}
					onChange={handleChange}
				/>
			</form>
		</header>
	);
};

SearchBar.propTypes = {
	onSubmit: PropTypes.func.isRequired,
};

export default SearchBar;
