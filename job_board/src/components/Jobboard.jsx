import React, { useEffect, useState } from "react";
import "./jobboard.css";
import Jobs from "./Jobs";
const Jobboard = ({ ids }) => {
  const [count, setCount] = useState(6);
  const [data, setData] = useState([]);
  const [isVisible,setVisible] = useState(true)
  useEffect(() => {
   
    const getJobs = async (id) => {
      const selectedIds = ids.slice(0, count);
      
      try {
        const jobs = await Promise.all(
          selectedIds.map(async (id) => {
            const res = await fetch(
              `https://hacker-news.firebaseio.com/v0/item/${id}.json`
            );
            return res.json();
          })
        );
        
        setData(jobs);
      } catch (error) {
        console.log(error);
      }
    };

    getJobs();
  },[ids,count]);

  const loadMoreJobs = () => {
    const newCount = Math.min(count + 6, ids.length)
    setCount((prev) => newCount)
    if (newCount >= ids.length) {
      setVisible(false)
    }
  }
  return (
    <div className="jobboard">
      <h2
        style={{
          fontFamily: "serif",
        }}
      >
        Job Board
      </h2>
      {data?.map((item) => (
        <Jobs key={item.id} title={item.title} by={item.by} date={item.time} />
      ))}

      {isVisible && <button className="load-jobs" onClick={loadMoreJobs}>
        Load More Jobs
      </button>}
    </div>
  );
};

export default Jobboard;
