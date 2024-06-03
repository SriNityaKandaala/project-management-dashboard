// src/components/Project/ProjectReport.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Bar } from 'react-chartjs-2';

const ProjectReport = () => {
  const { id } = useParams();
  const [reportData, setReportData] = useState(null);

  useEffect(() => {
    const fetchReportData = async () => {
      try {
        const response = await axios.get(`/api/projects/${id}/report`);
        setReportData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchReportData();
  }, [id]);

  if (!reportData) return <div>Loading...</div>;

  const data = {
    labels: reportData.labels,
    datasets: [
      {
        label: 'Project Data',
        data: reportData.data,
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  return (
    <div>
      <h2>Project Report</h2>
      <Bar data={data} />
    </div>
  );
};

export default ProjectReport;
