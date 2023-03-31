import React from "react";
import style from './Paginatea.module.css'

export function Paginatea({allProducts, productsPerPage, setPagination, currentPage, setCurrentPage}) {

	const pageNumber = []  

	for(let i = 1; i <= Math.ceil(allProducts/productsPerPage); i++){   
		pageNumber.push(i)										
	}															

	const handlePrev = () => { 
		if(currentPage === 1) setCurrentPage(1)  
		else setCurrentPage(currentPage-1)
	}

	const handleNext = () => { //next
		if(currentPage === pageNumber[pageNumber.length-1]) setCurrentPage(currentPage)  
		else setCurrentPage(currentPage+1)
	}

	return(
		<div className={style.paginate_container}>
			<div className={style.prev_next}>
				<button className={style.next_prev_btn} onClick={() => handlePrev()} disabled={allProducts < 2}>prev</button>
			</div>
				<div className={style.pages}>
					{allProducts < 8 ? 
					<div key='pagination'> {setPagination(1)}</div> : 
					pageNumber && pageNumber.map(n =>(
						<div className={style.page}>
							<button className={'page-number' + (n === currentPage ? 'active' : '')}  key={n} onClick={(event) => setPagination(n)} >{n}</button>
						</div>
					))
					}
				</div>
				<div className={style.prev_next}>
					<button className={style.next_prev_btn} onClick={() => handleNext()} disabled={allProducts < 2}>next</button>
				</div>
		</div>
	)
}













