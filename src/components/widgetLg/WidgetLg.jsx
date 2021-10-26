import "./widgetLg.css"
import {Avatar} from "@material-ui/core"

export const WidgetLg = () => {

    const Button = ({type}) => {
        return <button className = {"widgetLgButton " + type}>
            {type}
        </button>
    }

    return (
        <div className="widgetLg" >
            <h3 className="widgetLgTitle">
                Last Transactions
            </h3>
            <table className="widgetLgTable">
                <tr className="widgetTr">
                    <th className="WidgetTh" >Customer</th>
                    <th className="WidgetTh" >Date</th>
                    <th className="WidgetTh" >Amount</th>
                    <th className="WidgetTh" >Status</th>
                </tr>

                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <Avatar alt ="avatar" src="https://media.istockphoto.com/photos/portrait-of-successful-black-male-modern-day-student-holding-picture-id1311634222?b=1&k=20&m=1311634222&s=170667a&w=0&h=VLNKNgkpFsX8413qVDq792wfkxbI9vDlOnCOLW5-PFY=" />
                        <span className="widgetLgName">Ahmed Mosaab</span>
                    </td>
                    <td className="widgetLgDate">
                        3 nov 2021
                    </td>
                    <td className="widgetLgAmount">
                        $252.88
                    </td>
                    <td className="widgetLgStatus">
                        <Button type="Approved" />
                    </td>
                </tr>
                

                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <Avatar alt ="avatar" src="https://media.istockphoto.com/photos/portrait-of-successful-black-male-modern-day-student-holding-picture-id1311634222?b=1&k=20&m=1311634222&s=170667a&w=0&h=VLNKNgkpFsX8413qVDq792wfkxbI9vDlOnCOLW5-PFY=" />
                        <span className="widgetLgName">Ahmed Mosaab</span>
                    </td>
                    <td className="widgetLgDate">
                        3 nov 2021
                    </td>
                    <td className="widgetLgAmount">
                        $252.88
                    </td>
                    <td className="widgetLgStatus">
                        <Button type="Declined" />
                    </td>
                </tr>

                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <Avatar alt ="avatar" src="https://media.istockphoto.com/photos/portrait-of-successful-black-male-modern-day-student-holding-picture-id1311634222?b=1&k=20&m=1311634222&s=170667a&w=0&h=VLNKNgkpFsX8413qVDq792wfkxbI9vDlOnCOLW5-PFY=" />
                        <span className="widgetLgName">Ahmed Mosaab</span>
                    </td>
                    <td className="widgetLgDate">
                        3 nov 2021
                    </td>
                    <td className="widgetLgAmount">
                        $252.88
                    </td>
                    <td className="widgetLgStatus">
                        <Button type="Pending" />
                    </td>
                </tr>

                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <Avatar alt ="avatar" src="https://media.istockphoto.com/photos/portrait-of-successful-black-male-modern-day-student-holding-picture-id1311634222?b=1&k=20&m=1311634222&s=170667a&w=0&h=VLNKNgkpFsX8413qVDq792wfkxbI9vDlOnCOLW5-PFY=" />
                        <span className="widgetLgName">Ahmed Mosaab</span>
                    </td>
                    <td className="widgetLgDate">
                        3 nov 2021
                    </td>
                    <td className="widgetLgAmount">
                        $252.88
                    </td>
                    <td className="widgetLgStatus">
                        <Button type="Approved" />
                    </td>
                </tr>

            </table>
        </div>
    )
}
