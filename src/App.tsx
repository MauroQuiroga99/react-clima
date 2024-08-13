import Form from "./components/Form";

function App() {
  return (
    <>
      <h1 className=" text-center text-4xl text-white mt-10 font-bold ">
        Buscador De Clima
      </h1>
      <div className="w-11/12 max-w-screen-lg m-auto text-white mt-10 md:grid md:grid-cols-2 md:items-center mdd:gap-5 md:mt-6">
        <Form />
        <p>2</p>
      </div>
    </>
  );
}

export default App;
