import { RotatingLines } from "react-loader-spinner";
import styles from "./Loader.module.css";

const Loader = () => (
	<div className={styles.loader}>
		<RotatingLines
			strokeColor="blue"
			width="50"
			visible={true}
		/>
	</div>
);

export default Loader;
