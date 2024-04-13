import {useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import React, { useState } from 'react';
import { FaCode } from 'react-icons/fa';
import './pagestyling.css';

function Homepage({name, setName}) {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    setName(data.naam);
    navigate('/Welkomstbericht');
  };

    const resetName = () => {
        setName('');
    };

    const displayName = name.charAt(0).toUpperCase() + name.slice(1);

    return (
        <div className="outer-container-homepage">

            <div className="inner-container-homepage">
                <div className="homepage-logo-container">

                        <span> Full stack</span><FaCode className="code-icon-homepage"/><span> Mendix  </span>

                </div>
                <h1>Welkom{name ? ` ${displayName}  ` : ''} op mijn sollicitatiepagina! </h1>

                <div className="homepage-content-container">
                    <p> Leuk dat je hier bent. Dit is React projectje t.b.v. de sollicitatie voor <i>Full Stack
                        Ontwikkelaar</i> bij team Student Connect. </p>
                </div>

                {name ? (
                    <>
                        <button className="btn-homepage" onClick={resetName}>Reset naam</button>
                    </>
                ) : (
                    <>

                        <p> Je kunt zo mijn CV en motivatie bekijken maar ik wil je vragen om onderstaand je
                            naam in te geven: </p>


                        <form className="form-homepage" onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-group">
                                <label>Naam: </label>
                                <input
                                    className={`input-homepage ${errors.naam ? 'input-error' : ''}`}
                                    name="name"
                                    placeholder="Bijvoorbeeld: Stefan"
                                    type="text" {...register('naam', {required: true})} />
                                <button className="btn-homepage" type="submit">Verder</button>
                                {errors.naam && <p className="error-style">Het naamveld is verplicht</p>}

                            </div>

                        </form>
                    </>
                )}
            </div>
        </div>
    );
}


export default Homepage;