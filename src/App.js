import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import {filterData, apiUrl} from "./data"
import Spinner from "./components/Spinner";
import { toast } from "react-toastify";


const App = () => {

  const [courses,setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchData(){
    setLoading(true);
    try {
      let res = await fetch(apiUrl);
      let output = await res.json();
      setCourses(output.data);
    } 
    catch (error) {
      toast.error("Network error");
    }
    setLoading(false);
  }

  useEffect( () =>{
    fetchData();
  },[]);


  return (
    <div className="min-h-screen flex flex-col bg-bgDark2">
      <div>
        <Navbar/>
      </div>

      <div className="bg-bgDark2">
        <Filter filterData = {filterData}/>
      </div>

      <div className="w-11/12 max-w-[1200px] 
        mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
        {
          loading ? (<Spinner/>) : <Cards courses = {courses}/>
        }
      </div>

    </div>
  );
};

export default App;
