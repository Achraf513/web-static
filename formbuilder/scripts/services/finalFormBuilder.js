import { SharedPref } from "./SharedPref.js";
export function finalFormBuilder(){
    const finalFormSection = document.getElementById("finalForm-section");
    buildTitleSection(finalFormSection);
    SharedPref.finalForm_sections.forEach((section)=>{
        switch (section.type) {
            case "input":
                buildShortAnswerSection(finalFormSection,section);
                break;
            case "textarea":
                buildLongAnswerSection(finalFormSection,section);
                break;
            default:
                break;
        }
    })
}

function buildTitleSection(finalFormSection){
    // building title section
    finalFormSection.innerHTML = "";
    const titleSection = document.createElement("section");
    titleSection.classList.add("finalSection");
    const h1 = document.createElement("h1");
    const p = document.createElement("p");
    h1.innerHTML = SharedPref.formTitle;
    p.innerHTML = SharedPref.formDesc;
    titleSection.appendChild(h1);
    titleSection.appendChild(p);
    finalFormSection.appendChild(titleSection);
}

function buildShortAnswerSection(finalFormSection, section){
    //creating a new child-section
    const newSection = document.createElement("section");
    newSection.classList.add("child-section", "finalSection");

    //creating the title input field
    let questionTitle = document.createElement("p");
    questionTitle.classList.add("question");
    questionTitle.innerHTML=section.title;

    var question_input;
    //creating the question input field
    question_input= document.createElement("input");
    question_input.classList.add("questionInput");
    question_input.placeholder=section.placeholder;
    question_input.type = "text";
    
    newSection.appendChild(questionTitle);
    newSection.appendChild(question_input);
    finalFormSection.appendChild(newSection);
}
function buildLongAnswerSection(finalFormSection, section){
    //creating a new child-section
    const newSection = document.createElement("section");
    newSection.classList.add("child-section", "finalSection");

    //creating the title input field
    let questionTitle = document.createElement("p");
    questionTitle.classList.add("question");
    questionTitle.innerHTML=section.title;

    var question_input;
    //creating the question input field
    question_input= document.createElement("textarea");
    question_input.classList.add("questionInput", "questionTextArea");
    question_input.placeholder=section.placeholder;
    
    newSection.appendChild(questionTitle);
    newSection.appendChild(question_input);
    finalFormSection.appendChild(newSection);
}