import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import ContactsIcon from '@mui/icons-material/Contacts';
import InfoIcon from '@mui/icons-material/Info';

export const SidebarData = [
    {
        title:'Home',
        path:'/',
        icon:<HomeIcon/>,
        cName:'nav-text'
    },
    {
        title:'Patients',
        path:'/networks',
        icon:<LocalHospitalIcon/>,
        cName:'nav-text'
    },
    {
        title:'About Us',
        path:'/About',
        icon:<InfoIcon/>,
        cName:'nav-text'
    },
    {
        title:'Contact',
        path:'/Contact',
        icon:<ContactsIcon/>,
        cName:'nav-text'
    },
    {
        title:'Choice3',
        path:'/Choice3',
        icon:<DoneOutlineIcon/>,
        cName:'nav-text'
    }
]