import { SharedPref } from "../services/SharedPref.js";
export class TextInput {
    constructor(type, id, title) {
        this.type = type; // can be on of the following : input, textarea
        this.id = id; //unique element id
        this.title = "Question without title";; // a quick description
        this.placeholder = "You can customize the placeholder";
    }
    updateTitle(event) { //this should be binded to the main object ( in this case the real "this" )
        this.title = event.target.value;
    }
    updatePlaceholder(event) { //this should be binded to the main object ( in this case the real "this" )
        this.placeholder = event.target.value;
    }

    buildView() {
        const parentSection = document.getElementById("parent-section");
        //creating a new child-section
        const newSection = document.createElement("section");
        newSection.classList.add("child-section", "section");
        newSection.id = this.id;

        //creating the delete section button
        let delIcon = document.createElement("i");
        delIcon.classList.add("far", "fa-trash-alt", "delIcon");
        delIcon.addEventListener("click", SharedPref.removeSection.bind(this));
        newSection.appendChild(delIcon);

        //creating the swap with top section button
        let upArrow = document.createElement("i");
        upArrow.classList.add("fas", "fa-chevron-up", "arrows", "upArrow");
        upArrow.addEventListener("click", SharedPref.swapWithTopSection.bind(this));
        newSection.appendChild(upArrow);

        //creating the swap with bottom section button
        let downArrow = document.createElement("i");
        downArrow.classList.add("fas", "fa-chevron-down", "arrows", "downArrow");
        downArrow.addEventListener("click", SharedPref.swapWithBottomSection.bind(this));
        newSection.appendChild(downArrow);

        //creating the title input field
        let input_title = document.createElement("input");
        input_title.classList.add("question");
        input_title.value = this.title;
        input_title.type = "text";
        input_title.addEventListener("input", this.updateTitle.bind(this))

        var question_input;
        //creating the question input field
        if (this.type == "input") {
            question_input = document.createElement("input");
            question_input.classList.add("questionInput");
            question_input.placeholder = this.placeholder;
            question_input.type = "text";
            question_input.addEventListener("input", this.updatePlaceholder.bind(this))
        } else {
            question_input = document.createElement("textarea");
            question_input.classList.add("questionInput", "questionTextArea");
            question_input.placeholder = this.placeholder;
            question_input.addEventListener("input", this.updatePlaceholder.bind(this))
        }

        newSection.appendChild(input_title);
        newSection.appendChild(question_input);
        parentSection.appendChild(newSection);
        return newSection;
    }
}