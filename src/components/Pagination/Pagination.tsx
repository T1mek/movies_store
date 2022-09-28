import React from 'react';
import style from './Pagnation.module.scss'
import ReactPaginate from "react-paginate";


type IPagination = {
	onChangePage: (i:number)=>void;
};


const Pagination :React.FC<IPagination>= ({onChangePage}) => {


	return (


		<ReactPaginate
			className={style.root}
			breakLabel="..."
			nextLabel=">"
			onPageChange={(e)=>onChangePage(e.selected+1)}
			pageRangeDisplayed={4}
			pageCount={90}
			previousLabel="<"
		/>
	);
};

export default Pagination;