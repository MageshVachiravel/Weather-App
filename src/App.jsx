const App = () =>{
  return (
    <div className="bg-black p-16">
      <div className="bg-green-500 p-10 rounded">
        <h1 className="text-2xl font-semibold">Weather Report</h1>
        <p>I can give you a weather report about your city !</p>
        <input type="text" placeholder="Enter your City Name" className="mt-3 px-2 py-1 rounded block outline-none" />
        <button className="bg-black text-white px-2 py-1 rounded my-3">Get Report</button>
        <p className="font-bold text-md">Weather : </p>
        <p className="font-bold text-md">Temperature : </p>
        <p className="font-bold text-md">Description : </p>
      </div>
    </div>
  )
}

export default App