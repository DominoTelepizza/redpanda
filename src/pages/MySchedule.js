import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';

function MySchedule() {
  // Przykładowe dane dla harmonogramu
  const [schedule, setSchedule] = useState([
    { day: "02.04.2024 Poniedziałek", entries: [
      { timeFrom: "09:00", timeTo: "10:00", type: "Praca", description: "Spotkanie zespołu" },
      { timeFrom: "11:00", timeTo: "12:00", type: "Praca", description: "Praca nad projektem" },
      { timeFrom: "14:00", timeTo: "15:00", type: "Przerwa", description: "Obiad" }
    ]},
    { day: "03.04.2024 Wtorek", entries: [
      { timeFrom: "09:00", timeTo: "10:00", type: "Praca", description: "Spotkanie zespołu" },
      { timeFrom: "11:00", timeTo: "12:00", type: "Praca", description: "Praca nad projektem" },
      { timeFrom: "14:00", timeTo: "15:00", type: "Przerwa", description: "Obiad" }
    ]}
    // Dodaj więcej dni zgodnie z potrzebami
  ]);

  const [adding, setAdding] = useState(null);  // Nowy stan dla dodawania nowych wpisów
  const [editing, setEditing] = useState({ dayIndex: null, entryIndex: null, data: null });


  // Dodawanie nowego wpisu do harmonogramu (przykładowo)
  const addEntry = (dayIndex) => {
    const newEntry = { timeFrom: "16:00", timeTo: "17:00", type: "Praca", description: "Nowe zadanie" };
    const newSchedule = [...schedule];
    newSchedule[dayIndex].entries.push(newEntry);
    setSchedule(newSchedule);
  };

  // Usuwanie wpisu z harmonogramu
  const deleteEntry = (dayIndex, entryIndex) => {
    const newSchedule = [...schedule];
    newSchedule[dayIndex].entries.splice(entryIndex, 1);
    setSchedule(newSchedule);
  };


  const handleEdit = (dayIndex, entryIndex, entry) => {
    setEditing({ dayIndex, entryIndex, data: { ...entry } });
  };

  const handleEditChange = (field, value, isAdding = false) => {
    const update = isAdding ? setAdding : setEditing;
    update(prev => ({ ...prev, data: { ...prev.data, [field]: value } }));
  };

  const saveEntry = (isAdding = false) => {
    const newSchedule = [...schedule];
    const { dayIndex, data } = isAdding ? adding : editing;
    if (isAdding) {
      newSchedule[dayIndex].entries.push(data);
      setAdding(null);
    } else {
      const { entryIndex } = editing;
      newSchedule[dayIndex].entries[entryIndex] = data;
      setEditing(null);
    }
    setSchedule(newSchedule);
  };

  const initiateAddEntry = (dayIndex) => {
    setAdding({ dayIndex, data: { timeFrom: '', timeTo: '', type: '', description: '' } });
  };
  const saveEdit = () => {
    const newSchedule = [...schedule];
    const { dayIndex, entryIndex, data } = editing;
    newSchedule[dayIndex].entries[entryIndex] = data;
    setSchedule(newSchedule);
    setEditing({ dayIndex: null, entryIndex: null, data: null }); // Clear editing state
  };





  return (
    <div>
      <PageHeader title="Twój tygodniowy harmonogram" />
      
      <div  className="plan-main-container">
    <div className="your-weekly-schedule">
      {schedule.map((day, dayIndex) => (
        <div key={dayIndex}>
          <table>
            <tr>
              <td>Od</td><td>Do</td><td>Rodzaj</td><td>Opis</td><td>Akcje</td>
            </tr>
            <tr className="day-row"><td colSpan="5">{day.day}</td></tr>
            {day.entries.map((entry, index) => (
              <tr key={index}>
                <td>{entry.timeFrom}</td>
                <td>{entry.timeTo}</td>
                <td>{entry.type}</td>
                <td>{entry.description}</td>
                <td>
                  <button className="form-button" onClick={() => handleEdit(dayIndex, index, entry)}>Edytuj</button>
                  <button className="form-button" onClick={() => deleteEntry(dayIndex, index)}>Usuń</button>
                </td>
              </tr>
            ))}
            {editing.dayIndex === dayIndex && day.entries.map((entry, index) => (
              editing.entryIndex === index &&
              <tr key="edit">
                <td><input value={editing.data.timeFrom} onChange={e => handleEditChange('timeFrom', e.target.value)} /></td>
                <td><input value={editing.data.timeTo} onChange={e => handleEditChange('timeTo', e.target.value)} /></td>
                <td><input value={editing.data.type} onChange={e => handleEditChange('type', e.target.value)} /></td>
                <td><input value={editing.data.description} onChange={e => handleEditChange('description', e.target.value)} /></td>
                <td><button className="form-button" onClick={saveEdit}>Zapisz</button></td>
              </tr>
            ))}
            {(adding && adding.dayIndex === dayIndex) && (
              <tr>
                <td><input value={adding.data.timeFrom} onChange={e => handleEditChange('timeFrom', e.target.value, true)} /></td>
                <td><input value={adding.data.timeTo} onChange={e => handleEditChange('timeTo', e.target.value, true)} /></td>
                <td><input value={adding.data.type} onChange={e => handleEditChange('type', e.target.value, true)} /></td>
                <td><input value={adding.data.description} onChange={e => handleEditChange('description', e.target.value, true)} /></td>
                <td><button className="form-button" onClick={() => saveEntry(true)}>Zapisz</button></td>
              </tr>
            )}
            <tr>
              <td colSpan="5">
                <button className="form-button" onClick={() => initiateAddEntry(dayIndex)}>Dodaj nowy wpis</button>
              </td>
            </tr>
          </table>
        </div>
      ))}
    </div>
    </div>
    </div>
  );
}


export default MySchedule;
