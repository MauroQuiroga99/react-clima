import { countries } from "../data/countries";

const Form = () => {
  return (
    <div>
      <form action="">
        <div>
          <label htmlFor="city">Ciudad:</label>
          <input
            className="text-black"
            type="text"
            id="text"
            name="city"
            placeholder="Ciudad"
          />
        </div>
        <div>
          <label htmlFor="city">País:</label>
          <select name="" id="">
            <option className="text-black" value="">
              --Seleccione un país--
            </option>
            {countries.map((country) => (
              <option key={country.code} value={country.name}>
                {country.name}
              </option>
            ))}
          </select>
        </div>
        <input type="submit" value="Consultar Clima" />
      </form>
    </div>
  );
};

export default Form;
