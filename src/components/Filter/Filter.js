import "./Filter.css";

export const Filter = ({ handleInputChange, query }) => {
	return (
		<div className='input-wrapper'>
			<input
				className='input'
				name='filter'
				value={query}
				onChange={handleInputChange}
				placeholder='Filter by name'
			/>
		</div>
	);
};
