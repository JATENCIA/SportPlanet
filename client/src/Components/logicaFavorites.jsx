// const dispatch = useDispatch();

//   const { user } = useAuth0();

//   useEffect(() => {
//     dispatch(getAllProduct());
//     dispatch(getAllUser());
//   }, [dispatch]);

//   const allUsers = useSelector((state) => state.allUsers);
//   const userDb = allUsers?.find((element) => element.eMail === user?.email);

//   const favoriteHandler = async (e, product) => {
//     try {
//       e.preventDefault();
//       console.log(product._id, "product");
//       console.log(userDb._id, "user");
//       const favorite = {
//         user: userDb._id,
//         product: product._id,
//       };
//       await axios.post("/users/favorite", favorite);
//     } catch (error) {
//       console.log(error, 'error loko');
//     }
//   };


//   <div className={style.favoriteContainer}>
//   <button className={style.favorites} onClick={(e) => {favoriteHandler(e, product);}}>
//     <i className="fa-regular fa-heart fa-xl" />
//   </button>
// </div>