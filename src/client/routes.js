import ProfilesView   from '@/components/ProfilesView';
import NewProfileView from '@/components/NewProfileView';

const routes = [
    {
        path    : '/',
        redirect: '/profiles'
    },
    {
        path     : '/profiles',
        name     : 'Profiles',
        component: ProfilesView
    },
    {
        path     : '/profiles/new',
        name     : 'New profile',
        component: NewProfileView
    }
];

export default routes;
