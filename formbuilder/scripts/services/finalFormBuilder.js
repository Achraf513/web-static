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
            case "radio":
                buildRadioOrCheckBoxSection(finalFormSection,section);
                break;
            case "checkbox":
                buildRadioOrCheckBoxSection(finalFormSection,section);
                break;
            case "dropdown":   
                buildDropDownSection(finalFormSection,section);
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
    const newSection = buildTheTitleQuestion(section);

    var question_input;
    //creating the question input field
    question_input= document.createElement("input");
    question_input.classList.add("questionInput");
    question_input.placeholder=section.placeholder;
    question_input.type = "text";
     
    newSection.appendChild(question_input);
    finalFormSection.appendChild(newSection);
}

function buildLongAnswerSection(finalFormSection, section){
    //creating a new child-section
    const newSection = buildTheTitleQuestion(section);

    var question_input;
    //creating the question input field
    question_input= document.createElement("textarea");
    question_input.classList.add("questionInput", "questionTextArea");
    question_input.placeholder=section.placeholder;
    
    newSection.appendChild(question_input);
    finalFormSection.appendChild(newSection);
}

function buildRadioOrCheckBoxSection(finalFormSection, section){
        //creating a new child-section
        const newSection = buildTheTitleQuestion(section);

        section.choices.forEach((choice)=>{
            let div = document.createElement("div");
            div.classList.add("finalOptionContainer")
            //creating the radio button
            let multiInput = document.createElement("input");
            multiInput.classList.add("finalMultiInput");
            multiInput.type = section.type;
            multiInput.name = section.id;
            multiInput.value = choice.description;
            multiInput.id = SharedPref.makeid();

            //creating the option description field
            let label = document.createElement("label");
            label.value = choice.description;
            label.innerHTML = choice.description;
            label.setAttribute("for",multiInput.id);
            label.classList.add("optionLabel");

            div.appendChild(multiInput);
            div.appendChild(label);
            newSection.appendChild(div);
        })
        finalFormSection.appendChild(newSection);
    }

function buildTheTitleQuestion(section){
    //creating a new child-section
    const newSection = document.createElement("section");
    newSection.classList.add("child-section", "finalSection");

    //creating the title input field
    let questionTitle = document.createElement("p");
    questionTitle.classList.add("finalQuestion");
    questionTitle.innerHTML=section.title;
    newSection.appendChild(questionTitle);
    return newSection;
}

function buildDropDownSection(finalFormSection, section){
        //creating a new child-section
        const newSection = buildTheTitleQuestion(section);
        const select = document.createElement("select");
        select.classList.add("dropDownMenu");

        section.choices.forEach((choice)=>{
            //creating the option 
            let option = document.createElement("option");
            option.classList.add("selectOption");
            option.name = section.id;
            option.value = choice.description;
            option.innerHTML = choice.description;

            select.appendChild(option);
        });
        
        newSection.appendChild(select);
        finalFormSection.appendChild(newSection);
}
