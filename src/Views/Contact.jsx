import { Link, NavLink } from "react-router-dom";


let image = "https://firebasestorage.googleapis.com/v0/b/proyecto19-a20d1.appspot.com/o/65d1333d-2260-4229-b5a9-3383fd4062af.jpg?alt=media&token=00c677e6-197f-4bd6-a9a4-833402dba33b";

const Contact = () => {
  return (
    <>
      <section className="text-gray-400 bg-gray-900 h-screen body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center" >
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
              <img className="object-cover object-center rounded-3xl" alt="hero" src={image} />
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Esta es mi primera web. By Chriss.
                <br className="hidden lg:inline-block" />
              </h1>
              <p className="mb-8 leading-relaxed">Si no te gusta el contenido díselo al Buticito lindo pero también tienes las siguientes opciones:</p>
              <div className="grid gap-x-5 gap-y-5 grid-cols-2 ml-5">
                <button className="text-white bg-indigo-500 border-0 py-3 px-8 focus:outline-none hover:bg-green-400 rounded text-lg hover:outline hover:outline-4 hover:outline-green-700">Comment</button>
                <button className="text-white bg-indigo-500 border-0 py-3 px-8 focus:outline-none hover:bg-orange-400 rounded text-lg hover:outline hover:outline-4 hover:outline-orange-600">Report</button>
                <button className="text-white bg-indigo-500 border-0 py-3 px-8 focus:outline-none hover:bg-yellow-300 rounded text-lg hover:outline hover:outline-4 hover:outline-yellow-400">GAAAAAA</button>
                <NavLink className="text-white bg-indigo-500 border-0 py-3 px-8 focus:outline-none hover:bg-red-500 rounded text-lg hover:outline hover:outline-4 hover:outline-red-700" to="/">Mandar GG</NavLink>
              </div>
            </div>
        </div>
      </section>
    </>
  );
};


export default Contact;
