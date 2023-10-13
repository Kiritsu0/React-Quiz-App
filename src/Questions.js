import React from 'react';
import { Link } from 'react-router-dom';
import {FaAngleLeft} from 'react-icons/fa'
import {BsSlashLg} from 'react-icons/bs'
import {FaAngleRight} from 'react-icons/fa'


function Questions() {
  return (
    <div>
      <div className='home'>
        <i><FaAngleLeft /></i>
        <div id="main">
          <h1>Programming Test</h1>
          <p>The beginner-level test assesses your programming skills in JavaScript and Python.</p>
          <Link to='/Test' className='button'><button>Start Test</button></Link>
        </div>
        <div id='icons'>
        <i id='slash'><BsSlashLg /></i>
        <i><FaAngleRight /></i>
        </div>
      </div>
      <img id="image" src="project-2.jpg" alt="programming-img"></img>
    </div>
  );
}

export default Questions;