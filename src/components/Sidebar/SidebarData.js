import * as MdIcons from 'react-icons/md';
import * as RiIcons from 'react-icons/ri';
import * as BsIcons from 'react-icons/bs';

export const SidebarData = [
    {
        title: 'Movies',
        path: '#',
        icon: <MdIcons.MdLocalMovies />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                subTitle: 'Top Rated Movies',
                subPath: '/top-rated-movies',
            },
            {
                subTitle: 'Most Popular Movies',
                subPath: '/most-popular-movies',
            },
            {
                subTitle: 'Coming Soon',
                subPath: '/coming-soon',
            }
        ]
    },
    {
        title: 'TV Shows',
        path: '#',
        icon: <RiIcons.RiSlideshow3Fill />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                subTitle: 'Top Rated TV Shows',
                subPath: '/top-rated-tvshows',
            },
            {
                subTitle: 'Most Popular TV Shows',
                subPath: '/most-popular-tvshows',
            }
        ]
    },
    {
        title: 'Celebs',
        path: '#',
        icon: <BsIcons.BsPersonFill />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                subTitle: 'Most Popular Celebs',
                subPath: '/most-popular-celebs',
            }
        ]
    }
];