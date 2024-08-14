import Form from "./components/Form";

function App() {
  return (
    <>
      <div className="bg-[url('/public/bg-on-clima.gif')] bg-no-repeat bg-cover h-lvh  ">
        <h1 className=" text-center text-4xl text-black uppercase py-10 mb-10 font-bold ">
          Buscador De Clima
        </h1>
        <div className="w-11/12 max-w-screen-lg m-auto text-white mt-10 md:grid md:grid-cols-2 md:items-center md:gap-5 md:mt-6">
          <Form />
          <p>2</p>
        </div>
      </div>
    </>
  );
}

export default App;
