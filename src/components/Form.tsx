import { ChangeEvent, FormEvent, useState } from "react";
import { SearchType } from "../types";
import { countries } from "../data/countries";
import Alert from "./Alert";

type FormProps = {
  fetchWeather: (search: SearchType) => Promise<void>;
};

const Form = ({ fetchWeather }: FormProps) => {
  const [search, setSearch] = useState<SearchType>({
    city: "",
    country: "",
  });

  const [alert, setAlert] = useState("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
  ) => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (Object.values(search).includes("")) {
      setAlert("Todos los campos son obligatorios!!");
      return;
    }
    fetchWeather(search);
  };
  return (
    <div>
      <form className=" flex flex-col gap-8" action="" onSubmit={handleSubmit}>
        {alert && <Alert> {alert} </Alert>}
        <div className=" flex flex-col gap-8">
          <label className="text-white font-bold uppercase " htmlFor="city">
            Ciudad:
          </label>
          <input
            className=" p-2 bg-slate-400 font-bold  border-2 rounded-md border-white placeholder:text-white"
            type="text"
            id="city"
            name="city"
            placeholder="Ciudad"
            value={search.city}
            onChange={handleChange}
          />
        </div>
        <div className=" flex flex-col gap-8">
          <label className="text-white font-bold uppercase" htmlFor="country">
            País:
          </label>
          <select
            onChange={handleChange}
            value={search.country}
            id="country"
            name="country"
            className=" p-2 rounded-md bg-slate-400 text-white font-bold  border-2 border-white placeholder:text-white"
          >
            <option value="">--Seleccione un país--</option>
            {countries.map((country) => (
              <option key={country.code} value={country.code}>
                {country.name}
              </option>
            ))}
          </select>
        </div>
        <input
          className=" p-5 bg-orange-500 text-white font-bold uppercase rounded-md border-2 border-white cursor-pointer"
          type="submit"
          value="Consultar Clima"
        />
      </form>
    </div>
  );
};

export default Form;
