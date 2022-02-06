import { MultiChoice } from "./scripts/models/MultiChoice.js";
import { TextInput } from "./scripts/models/TextInput.js";
import { SharedPref } from "./scripts/services/SharedPref.js";
import { finalFormBuilder } from "./scripts/services/finalFormBuilder.js";

const parentSection = document.getElementById("bodySection");
function scrollToBottom(element){
    parentSection.scroll({
        top: element.offsetTop,
        behavior: 'smooth'
    });
}

function createSingleChoice(event){
    const id = SharedPref.makeid();
    const radioElement = new MultiChoice("radio", id);
    SharedPref.finalForm_sections.push(radioElement);
    var element = radioElement.buildView();
    scrollToBottom(element);
}

function createMultiChoice(event){
    const id = SharedPref.makeid();
    const checkBox = new MultiChoice("checkbox", id);
    SharedPref.finalForm_sections.push(checkBox);
    var element = checkBox.buildView();
    scrollToBottom(element);
}

function createDropDownMenu(event){
    const id = SharedPref.makeid();
    const dropDown = new MultiChoice("dropdown", id);
    SharedPref.finalForm_sections.push(dropDown);
    var element = dropDown.buildView();
    scrollToBottom(element);
}

function createShortAnswer(event){
    const id = SharedPref.makeid();
    const shortAnswer = new TextInput("input", id);
    SharedPref.finalForm_sections.push(shortAnswer);
    var element = shortAnswer.buildView();
    scrollToBottom(element);
}

function createLongAnswer(event){
    const id = SharedPref.makeid();
    const longAnswer = new TextInput("textarea", id);
    SharedPref.finalForm_sections.push(longAnswer);
    var element = longAnswer.buildView();
    scrollToBottom(element);
}

const singleChoiceBtn = document.getElementById("singleChoiceBtn");
if(singleChoiceBtn != undefined){
    singleChoiceBtn.addEventListener("click",createSingleChoice)
}

const multiChoiceBtn = document.getElementById("multiChoiceBtn");
if(multiChoiceBtn != undefined){
    multiChoiceBtn.addEventListener("click",createMultiChoice)
}

const dropDownMenuBtn = document.getElementById("dropDownMenuBtn");
if(dropDownMenuBtn != undefined){
    dropDownMenuBtn.addEventListener("click",createDropDownMenu)
}

const shortAnswerBtn = document.getElementById("shortAnswerBtn");
if(shortAnswerBtn != undefined){
    shortAnswerBtn.addEventListener("click",createShortAnswer)
}

const longAnswerBtn = document.getElementById("longAnswerBtn");
if(longAnswerBtn != undefined){
    longAnswerBtn.addEventListener("click",createLongAnswer)
}


function showFinalResult(){
    const formBuilders = document.getElementsByClassName("formBuilderTool");
    for (let i = 0; i < formBuilders.length; i++) {
        const element = formBuilders[i];
        element.classList.add("hidden");
    }
    document.getElementById("formBuilderResult").classList.remove("hidden");
    finalFormBuilder();
}
function returnToFormBuilder(){
    const formBuilders = document.getElementsByClassName("formBuilderTool");
    for (let i = 0; i < formBuilders.length; i++) {
        const element = formBuilders[i];
        element.classList.remove("hidden");
    }
    document.getElementById("formBuilderResult").classList.add("hidden");
}

const submitFormBtn = document.getElementById("submitFormBtn");
submitFormBtn.addEventListener("click",showFinalResult)

const returnToFormBuilderBtn = document.getElementById("returnToFormBuilder");
returnToFormBuilderBtn.addEventListener("click",returnToFormBuilder)

const formTitleInput = document.getElementById("form-title-input");
formTitleInput.addEventListener("input",(event)=>{
    SharedPref.formTitle = event.target.value;
});

const formDescInput = document.getElementById("form-desc-input");
formDescInput.addEventListener("input",(event)=>{
    SharedPref.formDesc = event.target.value;
});

// --------------------Modal configuration-----------------------

var modal = document.getElementById("deleteModal");
var modalXCloseBtn = document.getElementsByClassName("closeXbtn")[0];
var modalNoCloseBtn = document.getElementById("closeNobtn")
var modalYesCloseBtn = document.getElementById("closeYesbtn")

modalXCloseBtn.onclick = function () {
    modal.style.display = "none";
}
modalNoCloseBtn.onclick = function () {
    modal.style.display = "none";
}
modalYesCloseBtn.onclick = function () {
    SharedPref.removeSectionData();
    modal.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
