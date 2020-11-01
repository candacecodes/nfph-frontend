import Dashboard from "../patient-components/Dashboard.jsx";
import NewEntry from "../patient-components/NewEntry.js";
// ui components
import Alerts from "../views/ui-components/alert.jsx";
import Badges from "../views/ui-components/badge.jsx";
import Buttons from "../views/ui-components/button.jsx";
import Cards from "../views/ui-components/cards.jsx";
import LayoutComponent from "../views/ui-components/layout.jsx";
import PaginationComponent from "../views/ui-components/pagination.jsx";
import PopoverComponent from "../views/ui-components/popover.jsx";
import TooltipComponent from "../views/ui-components/tooltip.jsx";

var PatientRoutes = [
  {
    path: "/patient/dashboard",
    name: "Patient Dashboard",
    icon: "far fa-clock",
    component: Dashboard,
  },
  {
    path: "/patient/newentry",
    name: "New Entry",
    icon: "fas fa-comment-alt",
    component: NewEntry,
  },
  {
    path: "/patient/alert",
    name: "Alerts",
    icon: "fas fa-comment-alt",
    component: Alerts,
  },
  {
    path: "/patient/badge",
    name: "Badges",
    icon: "fas fa-clone",
    component: Badges,
  },
  {
    path: "/patient/button",
    name: "Buttons",
    icon: "fas fa-inbox",
    component: Buttons,
  },
  {
    path: "/patient/card",
    name: "Cards",
    icon: "far fa-credit-card",
    component: Cards,
  },
  {
    path: "/patient/grid",
    name: "Grid",
    icon: "fas fa-th",
    component: LayoutComponent,
  },
  {
    path: "/patient/pagination",
    name: "Pagination",
    icon: "fas fa-undo",
    component: PaginationComponent,
  },
  {
    path: "/patient/popover",
    name: "Popover",
    icon: "fas fa-sun",
    component: PopoverComponent,
  },
  {
    path: "/patient/ui-components/tooltip",
    name: "Toltips",
    icon: "fas fa-tachometer-alt",
    component: TooltipComponent,
  },
  { path: "/patient", pathTo: "/patient/dashboard", name: "Dashboard", redirect: true },
];
export default PatientRoutes;
