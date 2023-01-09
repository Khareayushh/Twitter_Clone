import React from 'react';
import TwitterIcon from '@material-ui/icons/Twitter';
import SidebarOptions from './SidebarOptions';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Explore from '@material-ui/icons/Explore';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import { Button } from '@material-ui/core';
import './Sidebar.css'

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <TwitterIcon className='sidebar__twitterIcon'/>

            <SidebarOptions active Icon={HomeIcon} text="Home" />
            <SidebarOptions Icon={Explore} text="Explore" />
            <SidebarOptions Icon={NotificationsNoneIcon} text="Notifications" />
            <SidebarOptions Icon={MailOutlineIcon} text="Messages" />
            <SidebarOptions Icon={BookmarkBorderOutlinedIcon} text="Bookmarks" />
            <SidebarOptions Icon={ListAltIcon} text="Lists" />
            <SidebarOptions Icon={PermIdentityIcon} text="Profile" />
            <SidebarOptions Icon={MoreHorizIcon} text="More" />

            <Button variant='outlined' className='sidebar__tweet' fullWidth>
                Tweet
            </Button>
        </div>
    )
}

export default Sidebar;
