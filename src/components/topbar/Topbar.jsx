import "./topbar.css"
import {NotificationsNone,Language,Settings} from "@material-ui/icons"
import {Avatar} from "@material-ui/core"

export default function Topbar() {
    return (
        <div className='topbar'>
            <div className="topbarWrapper">
                <div className="left">
                    <h2 className="logo" >
                        <a href="/">Store'Ino</a>
                    </h2>
                </div>
                <div className="right">
                    <div className="topbarIcons">
                        <NotificationsNone />
                        <span className="topIconBadge">
                            2
                        </span>
                    </div>
                    <div className="topbarIcons">
                        <Language />
                    </div>
                    <div className="topbarIcons">
                        <Settings />
                    </div>
                    <Avatar alt="avatar" src="https://cdn.pixabay.com/photo/2015/09/02/13/24/girl-919048_960_720.jpg" />
                </div>
            </div>
        </div>
    )
}
