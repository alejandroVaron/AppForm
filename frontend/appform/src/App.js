import "./App.css";
import React from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import axios from "axios";
import { useAlert } from "react-alert";
function App() {
  const animatedComponents = makeAnimated();
  const alert = useAlert();
  const [name, setName] = React.useState("");
  const [tags, setTags] = React.useState([]);
  const [countriesSelected, setCountries] = React.useState([]);

  React.useEffect(() => {
    axios
      .get(
        "https://appform17.azurewebsites.net/api/country"
      )
      .then((response) => {
        let countries = [];
        for (let country of response.data.data) {
          countries.push({
            value: country.country_name,
            label: country.country_name,
          });
        }
        setTags(countries);
      });
  }, []);
  function validateForm() {
    if (name === "" || countriesSelected.length === 0) {
      alert.error("¡Tiene que llenar los campos!");
    } else {
      createForm(name, countriesSelected);
    }
  }
  function createForm(name, countriesSelected) {
    let countries = [];
    for (let i of countriesSelected) {
      countries.push(i.value);
    }
    axios
      .post(
        "https://appform17.azurewebsites.net/api/data",
        { data_name: name, data_countries: countries.toString() }
      )
      .then((response) => {
        console.log(response)
        alert.success("¡Se ha enviado el formulario con éxito!");
        setCountries([]);
        setName("");
      })
      .catch((error) => {
        console.log(error)
        alert.error("¡A habido un problema a la hora de enviar el formulario!");
      });
  }
  return (
    <div className="App">
      <div className="MainDiv">
        <div className="headerDiv">
          <h1>Formulario:</h1>
        </div>
        <div className="bodyDiv">
          <div className="contentDiv">
            <input
              id="inputName"
              onChange={(change) => {
                setName(change.target.value);
              }}
              value={name}
              type="text"
              placeholder="Ingrese su nombre completo"
            />
          </div>
          <div className="contentDiv">
            <Select
              closeMenuOnSelect={false}
              defaultValue={[tags[0], tags[1]]}
              id="inputCountry"
              placeholder="Selecciona un país"
              components={animatedComponents}
              value={countriesSelected}
              onChange={(change) => {
                setCountries(change);
              }}
              options={tags}
              isMulti
            />
          </div>
          <div className="contentDiv">
            <button className="button-4" onClick={validateForm}>
              Enviar formulario
            </button>
          </div>
        </div>
        <div className="footerDiv">Se puede consultar los formularios en el endpoint: http://nodebackend-env.eba-me6mq5b4.us-east-2.elasticbeanstalk.com/api/data</div>
      </div>
    </div>
  );
}

export default App;
