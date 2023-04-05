import { NavigationTypes } from './NavigationTypes'
import * as FaIcons from 'react-icons/fa'


export const navMenu: NavigationTypes[] = [
    {
        link: 'Dashboard',
        url: '/',
        icon: <FaIcons.FaGripVertical />
        
    },
    {
        link: 'Courses',
        url: '/courses',
        icon: <FaIcons.FaClipboard/>

    },
    {
        link: 'Partners',
        url: '/partners',
        icon: <FaIcons.FaHandsHelping/>

    },
    {
        link: 'Facilitators',
        url: '/facilitators',
        icon: <FaIcons.FaChalkboardTeacher/>

    },
    {
        link: 'Recepients',
        url: '/recepients',
        icon: <FaIcons.FaUserAlt/>
        
    },
    {
        link: 'Credentials',
        url: '/credentials',
        icon: <FaIcons.FaCertificate/>
    }
]