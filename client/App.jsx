import React from "react";
import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import LandingPage from "./src/views/LandingPage/LandingPage";
import { Home } from "./src/views/Home/Home";
import Detail from "./src/views/Detail/Detail";
import { Profile } from "./src/views/Profile";
import Admin from "./src/views/Admin/Admin";
import AdminProducts from "./src/views/Admin/AdminProducts/AdminProducts";
import SearchedProducts from "./src/views/SearchedProducts/SearchedProducts";
import SellProduct from "./src/views/Forms/SellProduct/SellProduct";
import { useAuth0 } from "@auth0/auth0-react";

// Fonts
import "./src/fonts/SportsWorld.ttf";
import "./src/fonts/Seriously.ttf";
import "./src/fonts/aBlackLives.ttf";
import "./src/fonts/RobotoThin.ttf";
import "./src/fonts/RobotoCondensed.ttf";
import "./src/fonts/Bebas.ttf";
import "./src/fonts/MetroPoliceLight.otf";
import "./src/fonts/MetroPoliceRegular.otf";
import Tshirts from "./src/Components/Categories/Tshirts/Tshirts";
import Shoes from "./src/Components/Categories/Shoes/Shoes";
import Balls from "./src/Components/Categories/Balls/Balls";
import Supplements from "./src/Components/Categories/Suplements/Suplements";
import Accesories from "./src/Components/Categories/Accesories/Accesories";
import Gym from "./src/Components/Categories/Gym/Gym";
import Pants from "./src/Components/Categories/Pants/Pants";
import Puma from "./src/Components/Categories/Puma/Puma";
import Nike from "./src/Components/Categories/Nike/Nike";
import Adidas from "./src/Components/Categories/Adidas/Adidas";
import UnderArmour from "./src/Components/Categories/UnderArmour/UnderArmour";
import Fila from "./src/Components/Categories/Fila/Fila";
import Reebok from "./src/Components/Categories/Reebok/Reebok";
import ProfileShopping from "./src/views/Profile/ProfileShopping/ProfileShopping";
import ProfileSales from "./src/views/Profile/ProfileSales/ProfileSales";
import ProfileFavorites from "./src/views/Profile/ProfileFavorites/ProfileFavorites";
import ProfileProducts from "./src/views/Profile/ProfileProducts/ProfileProducts";
import Man from "./src/Components/Categories/Man/Man";
import Woman from "./src/Components/Categories/Woman/Woman";
import Kids from "./src/Components/Categories/Kids/Kids";
import Promotions from "./src/Components/Categories/Promotions/Promotions";
import Fitness from "./src/Components/Categories/Fitness/Fitness";
import Policy from "./src/views/TermsConditions/Policy/Policy";
import Terms from "./src/views/TermsConditions/Terms/Terms";
import ProfileReviews from "./src/views/Profile/ProfileReviews/ProfileReviews";
import AdminShopping from "./src/views/Admin/AdminShopping/AdminShopping";
import AdminSales from "./src/views/Admin/AdminSales/AdminSales";
import AdminReviews from "./src/views/Admin/AdminReviews/AdminReviews";
import AdminFavorites from "./src/views/Admin/AdminFavorites/AdminFavorites";
import AllUsers from "./src/views/Admin/AllUsers/AllUsers";
import AllProducts from "./src/views/Admin/AllProducts/AllProducts";
import Reviews from "./src/views/Reviews/Reviews";
// import Cart from "./src/Components/Cart";
import Cart from "./src/views/Cart/Cart"; /* Nuevo Componente */

const App = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  return (
    <>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route
          path="/profile"
          element={isAuthenticated ? <Profile /> : <Navigate to="/home" />}
        />
        <Route
          path="/profile/shopping"
          element={
            isAuthenticated ? <ProfileShopping /> : <Navigate to="/home" />
          }
        />
        <Route
          path="/profile/sales"
          element={isAuthenticated ? <ProfileSales /> : <Navigate to="/home" />}
        />
        <Route
          path="/profile/favorites"
          element={
            isAuthenticated ? <ProfileFavorites /> : <Navigate to="/home" />
          }
        />
        <Route
          path="/profile/myproducts"
          element={
            isAuthenticated ? <ProfileProducts /> : <Navigate to="/home" />
          }
        />
        <Route
          path="/profile/reviews"
          element={
            isAuthenticated ? <ProfileReviews /> : <Navigate to="/home" />
          }
        />
        <Route
          path="/dashboard"
          element={isAuthenticated ? <Admin /> : <Navigate to="/home" />}
        />
        <Route
          path="/dashboard/myproducts"
          element={
            isAuthenticated ? <AdminProducts /> : <Navigate to="/home" />
          }
        />
        <Route
          path="/dashboard/shopping"
          element={
            isAuthenticated ? <AdminShopping /> : <Navigate to="/home" />
          }
        />
        <Route
          path="/dashboard/sales"
          element={isAuthenticated ? <AdminSales /> : <Navigate to="/home" />}
        />
        <Route
          path="/dashboard/reviews"
          element={isAuthenticated ? <AdminReviews /> : <Navigate to="/home" />}
        />
        <Route
          path="/dashboard/favorites"
          element={
            isAuthenticated ? <AdminFavorites /> : <Navigate to="/home" />
          }
        />
        <Route
          path="/dashboard/allusers"
          element={isAuthenticated ? <AllUsers /> : <Navigate to="/home" />}
        />
        <Route
          path="/dashboard/allproducts"
          element={isAuthenticated ? <AllProducts /> : <Navigate to="/home" />}
        />
        <Route path="/category/tShirts" element={<Tshirts />} />
        <Route path="products/:product" element={<SearchedProducts />} />
        <Route path="/category/nike" element={<Nike />} />
        <Route path="/category/adidas" element={<Adidas />} />
        <Route path="/category/puma" element={<Puma />} />
        <Route path="/category/under-armour" element={<UnderArmour />} />
        <Route path="/category/fila" element={<Fila />} />
        <Route path="/category/reebok" element={<Reebok />} />
        <Route path="/category/pants" element={<Pants />} />
        <Route path="/category/gym" element={<Gym />} />
        <Route path="/category/shoes" element={<Shoes />} />
        <Route path="/category/balls" element={<Balls />} />
        <Route path="/category/supplements" element={<Supplements />} />
        <Route path="/category/accessories" element={<Accesories />} />
        <Route path="/post/product" element={<SellProduct />} />
        <Route path="/category/man" element={<Man />} />
        <Route path="/category/woman" element={<Woman />} />
        <Route path="/category/kids" element={<Kids />} />
        <Route path="/category/promotions" element={<Promotions />} />
        {/*  <Route path="/category/fitness" element={<Fitness />} /> */}
        <Route path="*" element={<Navigate to="/home" />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route
          path="/cart"
          element={isAuthenticated ? <Cart /> : <Navigate to="/home" />}
        />
        <Route path="/policy" element={<Policy />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
    </>
  );
};

export default App;
