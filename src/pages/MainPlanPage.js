import React from 'react';
import '../styles/MainPlanPage.css'; // zaimportuj odpowiedni plik CSS
import PageHeader from '../components/PageHeader';
import '../styles/FormStyle.css'; 

const MainPlanPage = () => {
  return (
    <div>
      <PageHeader title="Porównanie planów" />
      <div  className="plan-main-container">
    <div className="plan-comparison-container">
      
      <div className="top-row">
        <div className="search-form">




          <div className="main-form-container">
      <form>
      <input className="form-field" type="text" placeholder="Wyszukaj osobę..." />
      <input className="form-field" type="text" placeholder="Wpisz datę od..." />
      <input className="form-field" type="text" placeholder="Wpisz datę do..." />
            <button className="form-register-button" type="submit">Wyszukaj</button>
      </form>
      </div>






        </div>


        <div className="common-free-hours">
          <h2>Wspólne wolne godziny</h2>
          <table>
            <tr>
              <td>Od</td><td>Do</td>
            </tr>
            {/* Tutaj będą dane z bazy */}
            <tr><td>10:00</td> <td>11:00</td></tr>
            <tr><td>13:00</td> <td>14:00</td></tr>
            <tr><td>16:00</td> <td>17:00</td></tr>
          </table>
        </div>
      </div>
      <div className="bottom-row">
        <div className="your-weekly-schedule">
          <h2>Twój tygodniowy harmonogram</h2>
          <table>
            <tr>
              <td>Od</td><td>Do</td><td>Rodzaj</td><td>Opis</td>
            </tr>
            {/* Tutaj będą dane z bazy */}
            <tr className="day-row"><td colspan="4">02.04.2024 Poniedziałek</td></tr>
            <tr><td>09:00</td><td>10:00</td> <td>Praca</td> <td>Spotkanie zespołu</td></tr>
            <tr><td>11:00</td><td>12:00</td><td>Praca</td><td>Praca nad projektem</td></tr>
            <tr><td>14:00</td><td>15:00</td><td>Przerwa</td><td>Obiad</td></tr>
            <tr className="day-row"><td colspan="4">Wtorek</td></tr>
            <tr><td>09:00</td><td>10:00</td> <td>Praca</td> <td>Spotkanie zespołu</td></tr>
            <tr><td>11:00</td><td>12:00</td><td>Praca</td><td>Praca nad projektem</td></tr>
            <tr><td>14:00</td><td>15:00</td><td>Przerwa</td><td>Obiad</td></tr>
            <tr className="day-row"><td colspan="4">Środa</td></tr>
            <tr><td>09:00</td><td>10:00</td> <td>Praca</td> <td>Spotkanie zespołu</td></tr>
            <tr><td>11:00</td><td>12:00</td><td>Praca</td><td>Praca nad projektem</td></tr>
            <tr><td>14:00</td><td>15:00</td><td>Przerwa</td><td>Obiad</td></tr>
            <tr className="day-row"><td colspan="4">Czwartek</td></tr>
            <tr><td>09:00</td><td>10:00</td> <td>Praca</td> <td>Spotkanie zespołu</td></tr>
            <tr><td>11:00</td><td>12:00</td><td>Praca</td><td>Praca nad projektem</td></tr>
            <tr><td>14:00</td><td>15:00</td><td>Przerwa</td><td>Obiad</td></tr>
          </table>
        </div>
        <div className="other-person-weekly-schedule">
          <h2>Tygodniowy harmonogram wyszukanej osoby</h2>
          <table>
            <tr><td>Od</td><td>Do</td><td>Rodzaj</td><td>Opis</td></tr>
            {/* Tutaj będą dane z bazy */}
            <tr className="day-row"><td colspan="4">Poniedziałek</td></tr>
            <tr><td>09:00</td><td>10:00</td> <td>Praca</td> <td>Spotkanie zespołu</td></tr>
            <tr><td>11:00</td><td>12:00</td><td>Praca</td><td>Praca nad projektem</td></tr>
            <tr><td>14:00</td><td>15:00</td><td>Przerwa</td><td>Obiad</td></tr>
            <tr className="day-row"><td colspan="4">Wtorek</td></tr>
            <tr><td>09:00</td><td>10:00</td> <td>Praca</td> <td>Spotkanie zespołu</td></tr>
            <tr><td>14:00</td><td>15:00</td><td>Przerwa</td><td>Obiad</td></tr>
            <tr className="day-row"><td colspan="4">Środa</td></tr>
            <tr><td>09:00</td><td>10:00</td> <td>Praca</td> <td>Spotkanie zespołu</td></tr>
            <tr><td>11:00</td><td>12:00</td><td>Praca</td><td>Praca nad projektem</td></tr>
            <tr><td>14:00</td><td>15:00</td><td>Przerwa</td><td>Obiad</td></tr>
            <tr className="day-row"><td colspan="4">Czwartek</td></tr>
            <tr><td>09:00</td><td>10:00</td> <td>Praca</td> <td>Spotkanie zespołu</td></tr>
            <tr><td>14:00</td><td>15:00</td><td>Przerwa</td><td>Obiad</td></tr>
          </table>
        </div>
      </div>
    </div>
    </div></div>
  );
};

export default MainPlanPage;
