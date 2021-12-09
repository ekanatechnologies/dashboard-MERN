/*!

=========================================================
* Material Dashboard React - v1.10.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
import Language from "@material-ui/icons/Language";
import DashboardPage from "views/Dashboard/Dashboard.js";
import User from "views/User/User.js";
import TrackTrip from "views/TrackTrip/TrackTrip";
import RecordValuables from "views/RecordValuables/RecordValuables.js";
import DrivingSkills from "views/DrivingSkills/DrivingSkills.js";
import BusinessInsured from "views/BusinessInsured/BusinessInsured.js";
import QuoteRequest from "views/QuoteRequest/QuoteRequest.js";
import Enquiries from "views/Enquiries/Enquiries.js";
import Agents from "views/Agents/Agents.js";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin",
  },
  {
    path: "/user",
    name: "Users",
    rtlName: "ملف تعريفي للمستخدم",
    icon: Person,
    component: User,
    layout: "/admin",
  },
  {
    path: "/agents",
    name: "Agents",
    rtlName: "ملف تعريفي للمستخدم",
    icon: Person,
    component: Agents,
    layout: "/admin",
  },
  {
    path: "/trip-tacking-record",
    name: "Trip Tacking Record",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: TrackTrip,
    layout: "/admin",
  },
  {
    path: "/record-valuables",
    name: "Record Valuables",
    rtlName: "طباعة",
    icon: LibraryBooks,
    component: RecordValuables,
    layout: "/admin",
  },
  {
    path: "/driving-skills",
    name: "Driving Skill Test Reports",
    rtlName: "الرموز",
    icon: BubbleChart,
    component: DrivingSkills,
    layout: "/admin",
  },
  {
    path: "/business-properly-insured",
    name: "Business Properly Insured",
    rtlName: "خرائط",
    icon: LocationOn,
    component: BusinessInsured,
    layout: "/admin",
  },
  {
    path: "/quote-request",
    name: "Quote Request",
    rtlName: "إخطارات",
    icon: Notifications,
    component: QuoteRequest,
    layout: "/admin",
  },
  {
    path: "/enquiries",
    name: "Enquiries",
    rtlName: "پشتیبانی از راست به چپ",
    icon: Language,
    component: Enquiries,
    layout: "/admin",
  },
];

export default dashboardRoutes;
