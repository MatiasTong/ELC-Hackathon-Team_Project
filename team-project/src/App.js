import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Home from "./pages/Home"
import Age from "./pages/Age"
import Insurance from "./pages/Insurance"
import Result from "./pages/Result"
import Case1 from "./pages/Case1"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Formik} from "formik"
function App() {
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


       <Router>
                <Switch>
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
                    <Route path="/questionnaire-result">
                        <Result/>
                    </Route>
                    <Route path="/case1">
                        <Case1/>
                    </Route>
                </Switch>
        </Router>

)}
  </Formik>
    </div>
  );
}

export default App;
