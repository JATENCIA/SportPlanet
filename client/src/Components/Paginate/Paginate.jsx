import React from "react";
import style from './Paginate.module.css'

export function Paginate({allProducts, productsPerPage, setPagination, currentPage, setCurrentPage}) {

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

	const scroll = () => {
		window.scrollTo({
			top: 0,
			behaviour: 'smooth',
		})
	};

	return(
		<div className={style.paginate_container}>
			<div className={style.prev_next}>
				<button className={style.next_prev_btn} onClick={() => {scroll();handlePrev()}} disabled={currentPage === 1}> <i className="fa-solid fa-angle-left" /> </button>
			</div>
				
			<div className={style.pages}>
				{pageNumber && pageNumber.map(n => {
					return n !== currentPage ? (
						<div className={style.page}>
							<button className={style.numPage}  key={n} onClick={() => {scroll();setPagination(n)}} >{n}</button>
						</div>
					) : (
						<div className={style.page}>
							<button className={style.numPageSelected}  key={n} onClick={() => {scroll();setPagination(n)}} >{n}</button>
						</div>
						)
					})
				}
				</div>
				<div className={style.prev_next}>
					<button className={style.next_prev_btn} onClick={() => {scroll();handleNext()}} disabled={currentPage >= pageNumber.length}> <i className="fa-solid fa-angle-right" /> </button>
				</div>
		</div>
	)
}













