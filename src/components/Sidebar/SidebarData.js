import { MdLocalMovies } from 'react-icons/md';
import { RiSlideshow3Fill, RiArrowDownSFill, RiArrowUpSFill } from 'react-icons/ri';
import { BsPersonFill } from 'react-icons/bs';

export const SidebarData = [
    {
        title: 'Movies',
        path: '/movies',
        icon: MdLocalMovies,
        iconCLosed: RiArrowDownSFill,
        iconOpened: RiArrowUpSFill,
        subNav: [
            {
                title: 'Top Rated Movies',
                path: '/',
            },
            {
                title: 'Most Popular Movies',
                path: '/',
            },
            {
                title: 'Coming Soon',
                path: '/',
            },
            {
                title: 'Best Picture Winners',
                path: '/',
            }
        ]
    },
    {
        title: 'TV Shows',
        path: '/tvshows',
        icon: RiSlideshow3Fill,
        iconCLosed: RiArrowDownSFill,
        iconOpened: RiArrowUpSFill,
        subNav: [
            {
                title: 'Top Rated Shows',
                path: '/',
            },
            {
                title: 'Most Popular Shows',
                path: '/',
            }
        ]
    },
    {
        title: 'Celebs',
        path: '/celebs',
        icon: BsPersonFill,
        iconCLosed: RiArrowDownSFill,
        iconOpened: RiArrowUpSFill,
        subNav: [
            {
                title: 'Born Today',
                path: '/',
            },
            {
                title: 'Most Popular Celebs',
                path: '/',
            }
        ]
    }
];