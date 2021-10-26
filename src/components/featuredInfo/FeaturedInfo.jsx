import "./featuredInfo.css"

import {ArrowDownward, ArrowUpward} from "@material-ui/icons"

export const FeaturedInfo = () => {
    return (
        <div className='featured'>
            <div className="featuredItem">
                <span className="featuredTitle">
                    Revanue
                </span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">
                        $2,504
                    </span>
                    <span className="featuredMoneyRate">
                       - 11.8 <ArrowDownward className="featuredIcone down" />
                    </span>
                </div>
                <span className="featuredSub" >Compared to last month</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">
                    Sales
                </span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">
                        $2,504
                    </span>
                    <span className="featuredMoneyRate">
                        - 11.8 <ArrowDownward className="featuredIcone down" />
                    </span>
                </div>
                <span className="featuredSub" >Compared to last month</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">
                    Cost
                </span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">
                        $2,504
                    </span>
                    <span className="featuredMoneyRate">
                        + 11.8 <ArrowUpward className="featuredIcone up" />
                    </span>
                </div>
                <span className="featuredSub" >Compared to last month</span>
            </div>
        </div>
    )
}
