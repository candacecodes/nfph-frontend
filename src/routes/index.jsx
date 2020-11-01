import PatientLayout from '../layouts/PatientLayout.jsx';
import ProviderLayout from '../layouts/ProviderLayout.jsx';

var indexRoutes = [
    { path: '/patient', name: 'Patient Start', component: PatientLayout },
    { path: '/provider', name: 'Provider Start', component: ProviderLayout }
];

export default indexRoutes;
