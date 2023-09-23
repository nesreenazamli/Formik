import './App.css';
import {Container, StyledBorderButton, StyledButton, StyledTitle, Typography} from "./styles/style.styled";
import {GlobelStyled} from "./Globel.styled";
import React, {Fragment, useRef} from "react";
import {Link, Route, Routes} from "react-router-dom";
import Home from "./Home/Home";
import About from "./Home/About";
import NotFound from "./Home/NotFound";
import Router from "./Router";
import {Form, Formik, Field, ErrorMessage} from "formik";
import * as yup from "yup"
import {schema} from "./validation";

function App() {

    const inputRef = useRef();
    const focus = () =>  {
        inputRef.current.focus()
        console.log(inputRef.current)
    }

  return (
      <>
      <GlobelStyled/>
          <input ref={inputRef} type={"text"}  />
          <button onClick={focus}>Focus</button>
    {/*<Container>*/}
    {/*    /!*<div>*!/*/}
    {/*    /!*    <Link to={"/"}>Logo</Link>*!/*/}
    {/*    /!*    <ul>*!/*/}
    {/*    /!*        <li><Link to={"/"}>Home</Link></li>*!/*/}
    {/*    /!*        <li><Link to={"/about"}>About</Link></li>*!/*/}
    {/*    /!*        <li><Link to={"/product/:id"}>About</Link></li>*!/*/}
    {/*    /!*    </ul>*!/*/}
    {/*    /!*</div>*!/*/}


    {/*  <Formik initialValues={{*/}
    {/*    email:"",*/}
    {/*    password:"",*/}

    {/*  }}*/}

    {/*    onSubmit={(values)=>console.log(values.email, values.password)}*/}

    {/*     validationSchema={schema}>*/}

    {/*    {({ errors, handleBlur, touched, handleChange }) => (*/}

    {/*        <Form>*/}
    {/*          /!*{console.log(errors, "errors")}*!/*/}
    {/*          /!*{console.log(touched, "touched")}*!/*/}
    {/*          /!*{touched}*!/*/}
    {/*          <Field type="email" name="email"/>*/}
    {/*          {errors.email && touched.email ? <small>{errors.email}</small> : null}*/}
    {/*          /!*<ErrorMessage name={"email"} />*!/*/}
    {/*          <Field type="password" name="password"/>*/}
    {/*          {errors.password && touched.password && <small>{errors.password}</small>}*/}
    {/*          <button type="submit">*/}
    {/*            Submit*/}
    {/*          </button>*/}
    {/*        </Form>*/}
    {/*    )}*/}


    {/*  </Formik>*/}













    {/*</Container>*/}





      </>
  );
}

export default App;
