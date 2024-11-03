import { useEffect, useState } from "react";
import './AdminDashboard.scss'
import MetricsCard from "../../../../components/chart/MetricsCard/MetricsCard";
import LineChartComponent from "../../../../components/chart/LineChart/LineChart";
import PieChartComponent from "../../../../components/chart/PieChart/PieChart";
import { InitialLineChartData, initialMetricsCard, InitialPieData, initialRecentActivity, initialRecentReviews } from "../../../../data/adminDashboard";

const Dashboard = () => {
    const [metricsCard, setMetricsCard] = useState<Array<{title: string, value: string}>>([]);
    const [lineChartData, setLineChartData] = useState<{ name: string; orders: number; }[]>([]);
    const [pieChartData, setPieChartData] = useState<{ name: string; value: number; }[]>([]);
    const [recentActivity, setRecentActivity] = useState<Array<{time: string, type: string, description: string}>>([]);
    const [recentReviews, setRecentReviews] = useState<Array<{dishName: string, rating: number, comment: string}>>([]);

    useEffect(() => {
        setMetricsCard(initialMetricsCard);
        setLineChartData(InitialLineChartData);
        setPieChartData(InitialPieData);
        setRecentActivity(initialRecentActivity);
        setRecentReviews(initialRecentReviews);
    }, [])

    return (
        <div className="admin-dashboard ">
            <div className="metrics">
                {metricsCard.length > 0 && (
                    <>
                        <MetricsCard title={metricsCard[0].title} value={metricsCard[0].value} icon="FaShoppingCart" />
                        <MetricsCard title={metricsCard[1].title} value={metricsCard[1].value} icon="FaUsers" />
                        <MetricsCard title={metricsCard[2].title} value={metricsCard[2].value} icon="FaDollarSign" />
                        <MetricsCard title={metricsCard[3].title} value={metricsCard[3].value} icon="FaUtensils" />
                        <MetricsCard title={metricsCard[4].title} value={metricsCard[4].value} icon="FaUtensils" />
                    </>
                )}
            </div>

            <div className="charts">
                <div className="chart-wrapper">
                    <h3>Orders Trend</h3>
                    <LineChartComponent data={lineChartData}/>
                </div>

                <div className="chart-wrapper">
                    <h3>Top Food Categories</h3>
                    <PieChartComponent pieData={pieChartData}/>
                </div>
            </div>

            <div className="food-activity-and-review">
                <div className="recent-activity">
                    <h3>Recent Food Delivery Activity</h3>
                    <ul className="activity-list">
                        {recentActivity.map((activity, index) => (
                            <li key={index} className="activity-item">
                                <span className="time">{activity.time}</span>
                                <span className={`event ${activity.type}`}>{activity.description}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="food-reviews">
                    <h3>Recent Food Reviews</h3>
                    <ul>
                        {recentReviews.map((review, index) => (
                            <li key={index}>
                                <strong>{review.dishName}</strong> - {Array(review.rating).fill('⭐').join('')} "{review.comment}"
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};
export default Dashboard;