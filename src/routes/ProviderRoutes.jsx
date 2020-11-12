import ProviderAlerts from "../provider-components/dashboard-components/ProviderAlerts.jsx";
import Dashboard from "../provider-components/Dashboard.jsx";
import Profile from "../provider-components/Profile.jsx";
// ui components
import Alerts from "../views/ui-components/alert.jsx";
import Badges from "../views/ui-components/badge.jsx";
import Buttons from "../views/ui-components/button.jsx";
import Cards from "../views/ui-components/cards.jsx";
import LayoutComponent from "../views/ui-components/layout.jsx";
import PaginationComponent from "../views/ui-components/pagination.jsx";
import PopoverComponent from "../views/ui-components/popover.jsx";
import TooltipComponent from "../views/ui-components/tooltip.jsx";

var ProviderRoutes = [
  {
    path: "/provider/dashboard",
    name: "Provider Dashboard",
    icon: "far fa-clock",
    component: Dashboard,
  },
  {
    path: "/provider/patients",
    name: "Patient Profile",
    icon: "fas fa-comment-alt",
    component: ProviderAlerts,
  },
  {
    path: "/provider/profile",
    name: "Provider Profile",
    icon: " fas fa-user",
    component: Profile,
  },
  {
    path: "/provider/badge",
    name: "Badges",
    icon: "fas fa-clone",
    component: Badges,
  },
  {
    path: "/provider/button",
    name: "Buttons",
    icon: "fas fa-inbox",
    component: Buttons,
  },
  {
    path: "/provider/card",
    name: "Cards",
    icon: "far fa-credit-card",
    component: Cards,
  },
  {
    path: "/provider/grid",
    name: "Grid",
    icon: "fas fa-th",
    component: LayoutComponent,
  },
  {
    path: "/provider/pagination",
    name: "Pagination",
    icon: "fas fa-undo",
    component: PaginationComponent,
  },
  {
    path: "/provider/popover",
    name: "Popover",
    icon: "fas fa-sun",
    component: PopoverComponent,
  },
  {
    path: "/provider/ui-components/tooltip",
    name: "Toltips",
    icon: "fas fa-tachometer-alt",
    component: TooltipComponent,
  },
  { path: "/provider", pathTo: "/provider/dashboard", name: "Dashboard", redirect: true },
];
export default ProviderRoutes;
