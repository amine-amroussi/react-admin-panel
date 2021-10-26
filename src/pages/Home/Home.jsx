import { Chart } from "../../components/chart/Chart"
import { FeaturedInfo } from "../../components/featuredInfo/FeaturedInfo"
import { WidgetLg } from "../../components/widgetLg/WidgetLg"
import { WidgetSm } from "../../components/widgetSm/WidgetSm"

import {userData} from "../../dammyData"

import "./home.css"

export default function Home() {
    return (
        <div className="home">
            <FeaturedInfo />
            <Chart data={userData} title='Active Users' dataKey="Active User" grid={true} />
            <div className="homeWidgets">
                <WidgetSm />
                <WidgetLg />
            </div>
        </div>
    )
}
