import React, {useState} from 'react';
import { Switch, Route, useLocation} from "react-router-dom"
import Home from "./pages/Home"
import Age from "./pages/Age"
import Insurance from "./pages/Insurance"
import Result from "./pages/Result"
import Case1 from "./pages/Case1"
import Case4 from "./pages/Case4"

import Case3 from "./pages/Case3"

import 'bootstrap/dist/css/bootstrap.min.css';
import {AnimatePresence} from "framer-motion";
import './App.css';
import {Formik} from "formik"
function App() {
  const location = useLocation();



  return (
    <div className="App">
      <Formik    
        initialValues={{
            age: "",
            hasInsurance: false,
            insuranceType:"",
            state:"",
            zipCode: "",
        }}
        onSubmit = {(data, {setSubmitting})=> {
            // To disable submit button when submitting
            setSubmitting(true)
            console.log("Submit: ", data)
            setSubmitting(false)
        }}>

{({values, handleChange, handleBlur, handleSubmit, isSubmitting}) =>(

// location={location} key={location.pathname}
     <AnimatePresence>
         <Switch >
                    {/* "exact" is needed in this route, otherwise it would match all paths starting with "/" */}
                    {/* Route paths go here */}
                     {console.log(values)}
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/questionnaire-age">
                        <Age/>
                    </Route>
                    <Route path="/questionnaire-insurance">
                        <Insurance/>
                    </Route>
                    <Route path="/result">
                        <Result/>
                    </Route>
                    <Route path="/case1">
                        <Case1/>
                    </Route>

                    <Route path="/case4">
                        <Case4/>
                    </Route>

                    <Route path="/case3">
                        <Case3/>
                    </Route>

                </Switch>
     </AnimatePresence>

)}
  </Formik>
    </div>
  );
}

export default App;
