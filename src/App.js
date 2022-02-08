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
import NotFound from "./Components/NotFound/NotFound";
import MyShop from './Components/MerchantPanel/Menu/MyShop';
import ManageLocation from './Components/MerchantPanel/Menu/ManageLocation';
import ShopSetting from './Components/MerchantPanel/Menu/ShopSetting';
import FAQ from './Components/MerchantPanel/Menu/FAQ';
import Tutorial from './Components/MerchantPanel/Menu/Tutorial';
import CreditHistory from './Components/MerchantPanel/Menu/CreditHistory';
import CoverageArea from './Components/MerchantPanel/Menu/CoverageArea';
import AllMerchant from './Components/Admin/SubMenu/AllMerchant';
import PendingMerchant from "./Components/Admin/SubMenu/PendingMerchant";
import RejectedMerchant from "./Components/Admin/SubMenu/RejectedMerchant";
import AllHub from "./Components/Admin/SubMenu/AllHub";
import PendingHub from "./Components/Admin/SubMenu/PendingHub";
import RejectedHub from "./Components/Admin/SubMenu/RejectedHub";
import AllPickup from "./Components/Admin/SubMenu/AllPickup";
import PendingPick from "./Components/Admin/SubMenu/PendingPick";
import RejectedPick from "./Components/Admin/SubMenu/RejectedPick";
import AllMan from "./Components/Admin/SubMenu/AllMan";
import PendingMan from "./Components/Admin/SubMenu/PendingMan";
import RejectedMan from "./Components/Admin/SubMenu/RejectedMan";
import ParcelList from './Components/Admin/SubMenu/ParcelList';
import PendingParcel from './Components/Admin/SubMenu/PendingParcel';
import RejectedParcel from './Components/Admin/SubMenu/RejectedParcel';
import EditAllmerch from './Components/Admin/EditSubMenu/EditAllmerch';
import Invoice from './Components/Admin/Invoice';
import MerchantView from './Components/Admin/SubMenu/MerchantView';
import ChargeList from './Components/Admin/SubMenu/ChargeList';
import WeightList from './Components/Admin/SubMenu/WeightList';
import ChargePack from './Components/Admin/SubMenu/ChargePack';
import DeliveryOption from './Components/Admin/SubMenu/DeliveryOption';
import EditParcel from './Components/Admin/EditSubMenu/EditParcel';
import ViewProfile from './Components/Admin/SubMenu/Profile/ViewProfile';
import AccountSetting from './Components/Admin/SubMenu/Profile/AccountSetting';
import ChangePass from './Components/Admin/SubMenu/Profile/ChangePass';
import AddMan from './Components/Admin/SubMenu/AddMan';
import Income from './Components/Admin/SubMenu/Income';
import Expenses from "./Components/Admin/SubMenu/Expenses";
import PaidInvoice from './Components/Admin/SubMenu/PaidInvoice';
import UnPaidInvo from "./Components/Admin/SubMenu/UnPaidInvo";
import Allinvoice from './Components/Admin/SubMenu/Allinvoice';
import MakeSalary from './Components/Admin/SubMenu/MakeSalary';
import AddNotice from './Components/Admin/SubMenu/AddNotice';
import AllNotice from './Components/Admin/SubMenu/AllNotice';
import DelivaryArea from './Components/Admin/SubMenu/DelivaryArea';
import AllCoupon from './Components/Admin/SubMenu/AllCoupon';
import AddCoupon from './Components/Admin/SubMenu/AddCoupon';
import EditProfile from './Components/Admin/SubMenu/Profile/EditProfile';
import ViewHub from './Components/Admin/SubMenu/ViewHub';
import EditView from './Components/Admin/SubMenu/EditView';

function App() {
  return (
    <BrowserRouter >
      <Routes>
      <Route path="/" element={<Home></Home>} />
      <Route path="/*" element={<NotFound></NotFound>} />
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
      <Route path="/invoice" element={<Invoice></Invoice>} />
      <Route path="/admin/addmerchant" element={<AddMerchant></AddMerchant>} />
      <Route path="/admin/all-merchant" element={<AllMerchant></AllMerchant>} />
      <Route path="/admin/edit-all-merchant" element={<EditAllmerch></EditAllmerch>} />
      <Route path="/admin/pending-merchant" element={<PendingMerchant></PendingMerchant>} />
      <Route path="/admin/rejected-merchant" element={<RejectedMerchant></RejectedMerchant>} />
      <Route path="/admin/merchant-view" element={<MerchantView></MerchantView>} />
      <Route path="/admin/edit-view" element={<EditView></EditView>} />

      <Route path="/admin/parcel-list" element={<ParcelList></ParcelList>} />
      <Route path="/admin/pending-parcel" element={<PendingParcel></PendingParcel>} />
      <Route path="/admin/rejected-parcel" element={<RejectedParcel></RejectedParcel>} />
      <Route path="/admin/edit-parcel" element={<EditParcel></EditParcel>} />

      <Route path="/admin/addhubmanger" element={<AddHubManager></AddHubManager>} />
      <Route path="/admin/all-hub" element={<AllHub></AllHub>} />
      <Route path="/admin/pending-hub" element={<PendingHub></PendingHub>} />
      <Route path="/admin/rejected-hub" element={<RejectedHub></RejectedHub>} />
      <Route path="/admin/hub-view" element={<ViewHub></ViewHub>} />

      <Route path="/admin/all-pickup" element={<AllPickup></AllPickup>} />
      <Route path="/admin/addPickup" element={<AddPickupAgent></AddPickupAgent>} />
      <Route path="/admin/pending-pickup" element={<PendingPick></PendingPick>} />
      <Route path="/admin/rejected-pickup" element={<RejectedPick></RejectedPick>} />

      <Route path="/admin/deliveryman" element={<DeliveryMen></DeliveryMen>} />
      <Route path="/admin/charge-list" element={<ChargeList></ChargeList>} />
      <Route path="/admin/weight-list" element={<WeightList></WeightList>} />
      <Route path="/admin/charge-package" element={<ChargePack></ChargePack>} />
      <Route path="/admin/delivery-option" element={<DeliveryOption></DeliveryOption>} />
      <Route path="/admin/delivery-area" element={<DelivaryArea></DelivaryArea>} />

      <Route path="/admin/add-delivery-man" element={<AddMan></AddMan>} />
      <Route path="/admin/all-man" element={<AllMan></AllMan>} />
      <Route path="/admin/rejected-man" element={<RejectedMan></RejectedMan>} />
      <Route path="/admin/pending-man" element={<PendingMan></PendingMan>} />

      <Route path="/admin/income" element={<Income></Income>} />
      <Route path="/admin/Expenses" element={<Expenses></Expenses>} />
      <Route path="/admin/paid-invoice" element={<PaidInvoice></PaidInvoice>} />
      <Route path="/admin/unpaid-invoice" element={<UnPaidInvo></UnPaidInvo>} />
      <Route path="/admin/all-invoice" element={<Allinvoice></Allinvoice>} />
      <Route path="/admin/make-salary" element={<MakeSalary></MakeSalary>} />

      <Route path="/admin/view-profile" element={<ViewProfile></ViewProfile>} />
      <Route path="/admin/edit-profile" element={<EditProfile></EditProfile>} />
      <Route path="/admin/account-setting" element={<AccountSetting></AccountSetting>} />
      <Route path="/admin/change-password" element={<ChangePass></ChangePass>} />

      <Route path="/admin/add-notice" element={<AddNotice></AddNotice>} />
      <Route path="/admin/all-notice" element={<AllNotice></AllNotice>} />

      <Route path="/admin/all-coupon" element={<AllCoupon></AllCoupon>} />
      <Route path="/admin/add-coupon" element={<AddCoupon></AddCoupon>} />

      <Route path="/my-shop" element={<MyShop></MyShop> } />
      <Route path="/manage-location" element={<ManageLocation></ManageLocation>} />
      <Route path="/shop-setting" element={<ShopSetting></ShopSetting>} />
      <Route path="/coverage-area" element={<CoverageArea></CoverageArea>} />
      <Route path="/credit-history" element={<CreditHistory></CreditHistory>} />
      <Route path="/tutorial" element={<Tutorial></Tutorial>} />
      <Route path="/faq" element={<FAQ></FAQ>} />
      
      
      </Routes>
    </BrowserRouter>
  );
}

export default App;
