import React from 'react';
import {useState} from 'react'
import { useNavigate } from 'react-router-dom';

function Test() {
  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [gender, setGender] = useState('')

  const [question1, setQ1] = useState('')
  const [question2, setQ2] = useState('')
  const [question3, setQ3] = useState('')
  const [question4, setQ4] = useState('')
  const [question5, setQ5] = useState('')
  const [question6, setQ6] = useState('')
  const [question7, setQ7] = useState('')
  const [question8, setQ8] = useState('')
  const [question9, setQ9] = useState('')
  const [question10, setQ10] = useState('')


  const handleSubmit = (e) => {
    e.preventDefault();

    navigate(`/Result?name=${name}&age=${age}&gender=${gender}&question1=${question1}&question2=${question2}&question3=${question3}
&question4=${question4}&question5=${question5}&question6=${question6}&question7=${question7}&question8=${question8}&question9=${question9}
&question10=${question10}`);
  };

  return (
    <div className="questions">
      <p>Complete the necessary information below.</p>
      <form onSubmit={handleSubmit}>
        <div className='main-questions'>
          <div className="input">
            <label htmlFor="name"><b>Name:</b></label><br />
            <input name="Name" id="name" placeholder='Enter your Name' value={name} onChange={e => {setName(e.target.value)}} required /><br />
          </div>

          <div className="input">
            <label htmlFor="age"><b>Age:</b></label><br />
            <input type="number" name="Age" id="age" placeholder='Age' max={100} min={1} value={age} onChange={e => {setAge(e.target.value)}} required /><br />
          </div>

          <div className="input">
            <label htmlFor="gender"><b>Gender:</b></label><br />
            <select name="Gender" id="gender" value={gender} onChange={e => {setGender(e.target.value)}} required>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select><br />
          </div>
        </div>
        <hr id="hr1"/>
        <h2 id="test-header">Test</h2>
        <div className="test">
          <div className="q">
            <label className='label'>1- What is the right way to output "Hello World" in JavaScript?</label><br />

            <input type="radio" name="Output1" id="a1_1" value='print("Hello World")' onChange={e => {setQ1(e.target.value)}} required />
            <label htmlFor="a1_1">print("Hello World")</label><br />

            <input type="radio" name="Output1" id="a2_1" value='console.log("Hello World")' onChange={e => {setQ1(e.target.value)}} />
            <label htmlFor="a2_1">console.log("Hello World")</label><br />

            <input type="radio" name="Output1" id="a3_1" value='console("Hello World")' onChange={e => {setQ1(e.target.value)}} />
            <label htmlFor="a3_1">console("Hello World")</label><br />
          </div>
          <hr />

          <div className='q'>
            <label className='label'>2- What is the output of "print(7//2)"?</label><br />

            <input type="radio" name="Output2" id="a1_2" value='3.5' onChange={e => {setQ2(e.target.value)}} required/>
            <label htmlFor="a1_2">3.5</label><br />

            <input type="radio" name="Output2" id="a2_2" value='3' onChange={e => {setQ2(e.target.value)}} />
            <label htmlFor="a2_2">3</label><br />

            <input type="radio" name="Output2" id="a3_2" value='4' onChange={e => {setQ2(e.target.value)}} />
            <label htmlFor="a3_2">4</label><br />
          </div>
          <hr />
          <div className='q'>
            <label className='label'>3- How do you declare a variable in Python?</label><br />

            <input type="radio" name="Output3" id="a1_3" value='variable = "value"' onChange={e => {setQ3(e.target.value)}} required/>
            <label htmlFor="a1_3">variable = "value"</label><br />

            <input type="radio" name="Output3" id="a2_3" value='let variable = "value"' onChange={e => {setQ3(e.target.value)}} />
            <label htmlFor="a2_3">let variable = "value"</label><br />

            <input type="radio" name="Output3" id="a3_3" value='Variable("value")' onChange={e => {setQ3(e.target.value)}} />
            <label htmlFor="a3_3">Variable("value")</label><br />
          </div>
          <hr />
          <div className='q'>
            <label className='label'>4- How do you create an array in JavaScript?</label><br />

            <input type="radio" name="Output4" id="a1_4" value='array = []' onChange={e => {setQ4(e.target.value)}} required/>
            <label htmlFor="a1_4">array = []</label><br />

            <input type="radio" name="Output4" id="a2_4" value='Array([])' onChange={e => {setQ4(e.target.value)}} />
            <label htmlFor="a2_4">Array([])</label><br />

            <input type="radio" name="Output4" id="a3_4" value='let array = []' onChange={e => {setQ4(e.target.value)}} />
            <label htmlFor="a3_4">let array = []</label><br />
          </div>
          <hr />
          <div className='q'>
            <label className='label'>5- What are the differences between == and === in JavaScript for comparison?</label><br />

            <input type="radio" name="Output5" id="a1_5" value='The == compare the values type while the === compare there values.' onChange={e => {setQ5(e.target.value)}} required/>
            <label htmlFor="a1_5">The == compare the values type while the === compare there values.</label><br />

            <input type="radio" name="Output5" id="a2_5" value='The == convert the type values to be the same then compare, while === compare there types and values.' onChange={e => {setQ5(e.target.value)}} />
            <label htmlFor="a2_5">The == convert the type values to be the same then compare, while === compare there types and values.</label><br />

            <input type="radio" name="Output5" id="a3_5" value='The == is used with string comparison, while === with numbers.' onChange={e => {setQ5(e.target.value)}} />
            <label htmlFor="a3_5">The == is used with string comparison, while === with numbers.</label><br />
          </div>
          <hr />
          <div className='q'>
            <label className='label'>6- How do you declare and call a function in Javascript?</label><br />

            <input type="radio" name="Output6" id="a1_6" value='function = ()' onChange={e => {setQ6(e.target.value)}} required/>
            <label htmlFor="a1_6">function = ()</label><br />

            <input type="radio" name="Output6" id="a2_6" value='function name()' onChange={e => {setQ6(e.target.value)}} />
            <label htmlFor="a2_6">function name() {}</label><br />

            <input type="radio" name="Output6" id="a3_6" value='Name()' onChange={e => {setQ6(e.target.value)}} />
            <label htmlFor="a3_6">Name()</label><br />
          </div>
          <hr />
          <div className='q'>
            <label className='label'>7- How do you write a for loop in Python to iterate over a list?</label><br />

            <input type="radio" name="Output7" id="a1_7" value='for i in list' onChange={e => {setQ7(e.target.value)}} required/>
            <label htmlFor="a1_7">for i in list</label><br />

            <input type="radio" name="Output7" id="a2_7" value='for i of list' onChange={e => {setQ7(e.target.value)}} />
            <label htmlFor="a2_7">for i of list</label><br />

            <input type="radio" name="Output7" id="a3_7" value='for i in range(list)' onChange={e => {setQ7(e.target.value)}} />
            <label htmlFor="a3_7">for i in range(list)</label><br />
          </div>
          <hr />
          <div className='q'>
            <label className='label'>8- How do you define and call a function in python?</label><br />

            <input type="radio" name="Output8" id="a1_8" value='def function name()' onChange={e => {setQ8(e.target.value)}} required/>
            <label htmlFor="a1_8">def function name()</label><br />

            <input type="radio" name="Output8" id="a2_8" value='def name()' onChange={e => {setQ8(e.target.value)}} />
            <label htmlFor="a2_8">def name()</label><br />

            <input type="radio" name="Output8" id="a3_8" value='name()' onChange={e => {setQ8(e.target.value)}} />
            <label htmlFor="a3_8">name()</label><br />
          </div>
          <hr />
          <div className='q'>
            <label className='label'>9- How do you declare and initialize variables in JavaScript using let?</label><br />

            <input type="radio" name="Output9" id="a1_9" value='let(name = "lorem")' onChange={e => {setQ9(e.target.value)}} required/>
            <label htmlFor="a1_9">let(name = "lorem")</label><br />

            <input type="radio" name="Output9" id="a2_9" value='let.name = "lorem"' onChange={e => {setQ9(e.target.value)}} />
            <label htmlFor="a2_9">let.name = "lorem"</label><br />

            <input type="radio" name="Output9" id="a3_9" value='let name = "lorem"' onChange={e => {setQ9(e.target.value)}} />
            <label htmlFor="a3_9">let name = "lorem"</label><br />
          </div>
          <hr />
          <div className='q'>
            <label className='label'>10- How can you handle exceptions (errors) in Python?</label><br />

            <input type="radio" name="Output10" id="a1_10" value='using try and except' onChange={e => {setQ10(e.target.value)}} required/>
            <label htmlFor="a1_10">using try and except</label><br />

            <input type="radio" name="Output10" id="a2_10" value='try' onChange={e => {setQ10(e.target.value)}}/>
            <label htmlFor="a2_10">try</label><br />

            <input type="radio" name="Output10" id="a3_10" value='throw' onChange={e => {setQ10(e.target.value)}}/>
            <label htmlFor="a3_10">throw</label><br />
          </div>
        </div>
        <input id="submit" type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Test;