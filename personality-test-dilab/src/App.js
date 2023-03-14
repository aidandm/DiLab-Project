
import  {Model } from "survey-core"
import { Survey } from "survey-react-ui"

const json = {
  "title": "Personality Questionnaire",
  "logoPosition": "right",
  "completedHtml": "<h3>Thank you for completing the survey</h3><div style=\"margin: 32px 0;\"><button class=\"rounded-button rounded-button--small\" onclick=\"reRunSurvey();\">Run Survey Again</button></div>",
  "pages": [
   {
    "name": "page1",
    "elements": [
      {
        "type": "matrix",
        "name": "Page 1",
        "isRequired": true,
        "columns": [
          "Strong Disagree",
          "Disagree",
          "Somewhat Disagree",
          "Neither Disagree nor Agree",
          "Somewhat Agree",
          "Agree",
          "Strongly Agree"
        ],
        "rows": [
          "Improve my skills",
          "Gain new knowledge/expertise",
          "Test my talent/capabilities",
          "Keep up with new ideas and innovations",
          "Come up with new ideas",
          "Have a pleasurable work experience",
          "Have fun at work",
          "Enjoy what I am doing",
          "Feel more satisfied with my work"
        ],
        "validators": [
          {
            "type": "matrix",
            "minRowCount": 9,
            "minColumnCount": 1,
            "text": "Please provide an answer for every row."
          }
        ]
      }
      
    ]
   },
   {
    "name": "page2",
    "elements": [
     {
      "type": "matrix",
      "name": "Page 2",
      "isRequired": true,
      "columns": [
       "Strong Disagree",
       "Disagree",
       "Somewhat Disagree",
       "Neither Disagree nor Agree",
       "Somewhat Agree",
       "Agree",
       "Strongly Agree"
      ],
      "rows": [
       "Have better interactions with  my colleagues  ",
       "Expand my personal/social network",
       "Strengthen my affiliation to my organization",
       "Feel I belong to my organization",
       "Meet others with whom I share similar interests at work",
       "Make a good impression on my colleagues",
       "Make a better contribution",
       "Improve the impact of my work",
       "Control the quality of my work",
       "Have positive impact on other’s work"
      ]
     }
    ]
   }
  ],
  "showPageNumbers": true,
  "showQuestionNumbers": "off"
 }
 function App() {
  const model = new Model(json);
  model.onComplete.add((sender, options) => {
    if (!sender.isValid) {
      alert("Please provide an answer for every row.");
      options.allowComplete = false;
    }
  });
  return <Survey model={model} />;
}

export default App;