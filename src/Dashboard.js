import React, { useState, useEffect} from 'react';

const Dashboard = () => {
  const [data, setData] = useState(null); 
  const apiUrl = 'https://s3.amazonaws.com/roxiler.com/product_transaction.json';

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(apiUrl);
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
      setData(null);
    }
  };

  return (
    <div>
       <h2>Data Fetching Example</h2>
      {data ? (
        <div>
          <h3>Sample Data:</h3>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default Dashboard;
