import React, { useState } from 'react';
import Papa from 'papaparse';
import PageHeader from '../components/PageHeader';
import '../styles/FormStyle.css'; 

function ImportSchedulePage() {
  const [file, setFile] = useState(null);
  const [data, setData] = useState([]);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleImport = () => {
    if (file) {
      Papa.parse(file, {
        complete: function(results) {
          console.log('Parsed results:', results.data);
          setData(results.data);
        },
        header: true
      });
    }
  };

  return (
    <div>
        <PageHeader title="Importuj Harmonogram" />
    <div className="form-container">
      <input type="file" accept=".csv" onChange={handleFileChange} /> 
      <button className="form-button" onClick={handleImport}>Importuj</button>
      {data.length > 0 && (
        <div>
          <h2>Preview Danych</h2>
          <table>
            <thead>
              <tr>
                {Object.keys(data[0]).map((header, index) => <th key={index}>{header}</th>)}
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr key={index}>
                  {Object.values(row).map((cell, index) => <td key={index}>{cell}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      </div>
    </div>
  );
}

export default ImportSchedulePage;
