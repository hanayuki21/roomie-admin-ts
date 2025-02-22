import { createLazyFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import DashboardTable from "@/components/DashboardTable";
import BookingTrendsChart from "@/components/BookingTrendsChart";
import RoomAvailabilityChart from "@/components/RoomAvailabilityChart";
import "@/styles/dashboard.css";
import Loader from "@/components/loader/Loader";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="dashboard-container">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <h2 className="dashboard-title">Overview</h2>
          <div className="charts-section">
            <div className="chart-box">
              <h3 className="chart-title">Room Availability</h3>
              <RoomAvailabilityChart />
            </div>

            <div className="chart-box">
              <h3 className="chart-title">Booking Trends</h3>
              <BookingTrendsChart />
            </div>
          </div>

          <div className="activity-section">
            <DashboardTable /> {/* No need to pass searchQuery, it's handled internally */}
          </div>
        </>
      )}
    </div>
  );
}

export default Index;
