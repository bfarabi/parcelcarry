import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header/Header";
import {

  BrowserRouter,
  Routes,
  Route,

} from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Enterprice from './Components/Enterprice/Enterprice';
import C2c from './Components/C2C/C2c';
import Login from './Components/Login/Login';
import MerchanHeader from './Components/MerchantPanel/MerchanHeader';
import Dashboard from "./Components/MerchantPanel/Dashboard/Dashboard";
import Parcels from './Components/MerchantPanel/Parcels/Parcels';
import Payments from './Components/MerchantPanel/Payments/Payments';
import Coupon from './Components/MerchantPanel/Coupon/Coupon';
import CreateParcel from './Components/MerchantPanel/Parcels/CreateParcel';
import AdminHome from './Components/Admin/AdminHome';
import AddMerchant from './Components/Admin/SubMenu/AddMerchant';
import AddHubManager from './Components/Admin/SubMenu/AddHubManager';
import AddPickupAgent from './Components/Admin/SubMenu/AddPickupAgent';
import DeliveryMen from './Components/Admin/SubMenu/DeliveryMen';

function App() {
  return (
    <BrowserRouter >
      <Routes>
      <Route path="/" element={<Home></Home>} />
      <Route path="/enterprise" element={<Enterprice></Enterprice>} />
      <Route path="/c2c" element={<C2c></C2c>} />
      <Route path="/login" element={<Login></Login>} />
      <Route path="/mheader" element={<MerchanHeader></MerchanHeader>} />
      <Route path="/dashboard" element={<Dashboard></Dashboard>} />
      <Route path="/parcels" element={<Parcels></Parcels>} />
      <Route path="/payments" element={<Payments></Payments>} />
      <Route path="/coupon" element={<Coupon></Coupon>} />
      <Route path="/create" element={<CreateParcel></CreateParcel>} />
      <Route path="/admin" element={<AdminHome></AdminHome>} />
      <Route path="/admin/addmerchant" element={<AddMerchant></AddMerchant>} />
      <Route path="/admin/addhubmanger" element={<AddHubManager></AddHubManager>} />
      <Route path="/admin/addPickup" element={<AddPickupAgent></AddPickupAgent>} />
      <Route path="/admin/deliveryman" element={<DeliveryMen></DeliveryMen>} />
      
      
      </Routes>
    </BrowserRouter>
  );
}

export default App;
