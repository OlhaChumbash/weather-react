import './App.css';
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
        < div className="container"> 
          <Weather  defailtCity = "Chemnitz"/>
          <footer>
            <p>
                This project was created by 
                <a href='https://www.linkedin.com/in/olha-chumbash-597568269/' target='_blanck' rel="noopener norefer">  Olha Chimbash </a>
                and is 
                <a href='https://github.com/OlhaChumbash/weather-react' target='_blanck' rel="noopener noreferrer"> open-sourced on GitHub</a>
            </p>
                         
          </footer>
          </div>  
    </div>
  );
}


