import React, {useState, useEffect} from 'react'
import {useLocation} from 'react-router-dom'

function Result() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);

    const name = queryParams.get('name');
    const age = queryParams.get('age');
    const gender = queryParams.get('gender');

    const question1 = queryParams.get('question1');
    const question2 = queryParams.get('question2');
    const question3 = queryParams.get('question3');
    const question4 = queryParams.get('question4');
    const question5 = queryParams.get('question5');
    const question6 = queryParams.get('question6');
    const question7 = queryParams.get('question7');
    const question8 = queryParams.get('question8');
    const question9 = queryParams.get('question9');
    const question10 = queryParams.get('question10');

    const [result, setResult] = useState(0)
    const [text, setText] = useState("")

    const [mistakes, setMistakes] = useState([])
    const [correction, setCorrection] = useState([])

    let [button, setButton] = useState(false)
    let [clicked, setClicked] = useState(false)

    let answer_list = [question1, question2, question3, question4, question5, question6, question7, question8, question9, question10]
    let correct_answer = [
    'console.log("Hello World")', 
    "3", 
    'variable = "value"', 
    'let array = []', 
    'The == convert the type values to be the same then compare, while === compare there types and values.', 
    'function name()', 
    'for i in list', 
    'def name()', 
    'let name = "lorem"', 
    'using try and except'
    ]

    let clicked_mistakes = []
    let mistake_correction = []

    useEffect(() => {
      let score = 0;

      for (let i = 0; i < correct_answer.length; i++) {
        if (answer_list[i] === correct_answer[i]) {
          score++;
        }

        else  {
          clicked_mistakes.push(answer_list[i])
          mistake_correction.push(correct_answer[i])
        }
      }

      setResult(score);

      handleText()

      if (clicked_mistakes.length === 0) {
        setButton(true);
      }

    }, [answer_list, correct_answer, clicked_mistakes, mistake_correction])

    const handleText = () => {
      if (result <=5) {
        setText(`Hello ${name}! 🌟 , your score is ${result}. This suggests that you are still working on building a strong foundation 
        in Python and JavaScript. Don't get discouraged! Remember, mistakes are a part of the learning process, 
        and they pave the way for success. Keep pushing yourself, work hard, and stay committed to your goals. 
        Good luck on your learning journey!🚀`)
      }

      else if (result === 6 || result === 7) {
        setText(`Hey ${name}! 🌟 You scored ${result} out of 10. Awesome job! You're making great progress in Python and JavaScript. 
        Keep up the good work! 💪🚀`)
      }

      else if (result === 8 || result === 9) {
        setText(`Wow, ${name}! 🎉 You scored ${result} out of 10. Incredible! You have a strong grasp of Python and JavaScript. 
        Keep up the fantastic work! 🌟🚀`)
      }

      else {
        setText( `🎉🎉🎉 Congratulations, ${name}! 🎉🎉🎉 You scored a perfect 10 out of 10! 🌟🚀 You're a coding superstar! 
        Keep up the amazing work and keep reaching for the stars! 🌠💯`)
      }
    }

    const handleMistakes = () => {
      if (clicked_mistakes.length > 0 && clicked === false){
        setMistakes(clicked_mistakes)
        setCorrection(mistake_correction)
        setClicked(true)
      }
      else if (clicked === true){
        setMistakes([])
        setCorrection([])
        setClicked(false)
      }

    }

  return (
    <div id="result_page">
      <div id="result" className="Result">
        <h1>Your Result</h1>
        <span id="score"><b>{result}/10</b></span>
        <p>{text}</p>

        <button onClick={handleMistakes} disabled={button}>Show Mistakes</button>
        <div id="mistakes">
            <ul>
              {mistakes.map((mistake, index) => (
                <li key={index}>
                Mistake:<span id='span1'>{mistake}</span> - Correction: <span id='span2'>{correction[index]}</span>
                </li>
              ))}
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Result