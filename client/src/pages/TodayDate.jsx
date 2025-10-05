import React, { useEffect, useState } from "react";

function TodayDate() {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 1000 * 60 * 60);
    return () => clearInterval(timer);
  }, []);
  const formattedDate = date.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });
  return <p className="ml-2 mr-4 hidden md:inline-block">{formattedDate}</p>;
}

export default TodayDate;
