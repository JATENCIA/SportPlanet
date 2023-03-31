import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllProduct } from '../../../redux/Actions';
import { ProductItem } from '../../Produts';
import { Paginate } from '../../Paginate/Paginate';
import { Link } from 'react-router-dom';

export default function () {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllProduct());
    }, [dispatch])

    const allProducts = useSelector((state) => state.allProducts)
    const filterProduct = allProducts.filter(product => {
        return product.category === "footwear"
    })

    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 10;
    const ultimo = currentPage * productsPerPage;
    const primero = ultimo - productsPerPage;
    const products = filterProduct.slice(primero, ultimo);

    const setPagination = (page) => {
        return setCurrentPage(page);
    };



    return (
        <div>
            {
                products?.map(product => {
                    return (
                        <Link to={`/detail/${product._id}`}>
                            <ProductItem
                                key={crypto.randomUUID()}
                                _id={product._id}
                                name={product.name}
                                image={product.image}
                                size={product.size}
                                price={product.price}
                                description={product.description}
                            />
                        </Link>
                    )
                })
            }

            <Paginate
                productsPerPage={productsPerPage}
                allProducts={filterProduct.length}
                setPagination={setPagination}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
        </div>
    )
}
