import "./widgetSm.css"
import {Avatar} from "@material-ui/core"
import {Visibility} from "@material-ui/icons"

export const WidgetSm = () => {
    return (
        <div className="widgetSm" >
            <h3 className="widgetSmTitle">New Join Members</h3>
            <ul className="widgetSmList" >
                <li className="widgetSmItem">
                    <Avatar alt="avatar" src="https://media.istockphoto.com/photos/pleasant-young-indian-woman-freelancer-consult-client-via-video-call-picture-id1300972573?b=1&k=20&m=1300972573&s=170667a&w=0&h=xuAsEkMkoBbc5Nh-nButyq3DU297V_tnak-60VarrR0=" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Alissa John</span>
                        <span className="widgetSmJob">Software Enginner</span>
                    </div>
                    <button className="widgetSmButton" >
                        <Visibility  className="widgetButtonIcon"/> Display
                    </button>
                </li>
                <li className="widgetSmItem">
                    <Avatar alt="avatar" src="https://media.istockphoto.com/photos/pleasant-young-indian-woman-freelancer-consult-client-via-video-call-picture-id1300972573?b=1&k=20&m=1300972573&s=170667a&w=0&h=xuAsEkMkoBbc5Nh-nButyq3DU297V_tnak-60VarrR0=" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Alissa John</span>
                        <span className="widgetSmJob">Software Enginner</span>
                    </div>
                    <button className="widgetSmButton" >
                        <Visibility className="widgetButtonIcon" /> Display
                    </button>
                </li>
                <li className="widgetSmItem">
                    <Avatar alt="avatar" src="https://media.istockphoto.com/photos/pleasant-young-indian-woman-freelancer-consult-client-via-video-call-picture-id1300972573?b=1&k=20&m=1300972573&s=170667a&w=0&h=xuAsEkMkoBbc5Nh-nButyq3DU297V_tnak-60VarrR0=" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Alissa John</span>
                        <span className="widgetSmJob">Software Enginner</span>
                    </div>
                    <button className="widgetSmButton" >
                        <Visibility className="widgetButtonIcon" /> Display
                    </button>
                </li>
                <li className="widgetSmItem">
                    <Avatar alt="avatar" src="https://media.istockphoto.com/photos/pleasant-young-indian-woman-freelancer-consult-client-via-video-call-picture-id1300972573?b=1&k=20&m=1300972573&s=170667a&w=0&h=xuAsEkMkoBbc5Nh-nButyq3DU297V_tnak-60VarrR0=" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Alissa John</span>
                        <span className="widgetSmJob">Software Enginner</span>
                    </div>
                    <button className="widgetSmButton" >
                        <Visibility className="widgetButtonIcon" /> Display
                    </button>
                </li>
                <li className="widgetSmItem">
                    <Avatar alt="avatar" src="https://media.istockphoto.com/photos/pleasant-young-indian-woman-freelancer-consult-client-via-video-call-picture-id1300972573?b=1&k=20&m=1300972573&s=170667a&w=0&h=xuAsEkMkoBbc5Nh-nButyq3DU297V_tnak-60VarrR0=" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Alissa John</span>
                        <span className="widgetSmJob">Software Enginner</span>
                    </div>
                    <button className="widgetSmButton" >
                        <Visibility className="widgetButtonIcon" /> Display
                    </button>
                </li>
            </ul>
        </div>
    )
}

