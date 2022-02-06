import { SharedPref } from "../services/SharedPref.js";

// needed for refrencing
class Choice {
    constructor(description) {
        this.description = description;
    }
}

export class MultiChoice {
    constructor(type, id) {
        this.type = type; // can be on of the following : radio, checkbox, dropdown
        this.id = id; //unique element id
        this.title = "Question without title"; // a quick description
        this.choices = [new Choice("option1")]; // list of strings representing the choices possible
    }
    updateTitle(event) { //this should be binded to the main object ( in this case the real "this" )
        this.title = event.target.value;
    }
    updateChoice(event) { //this should be binded to the choice object
        this.description = event.target.value;
    }
    removeChoice(event) {
        if (this[0].choices.length > 1) {
            if (event.target.tagName == "BUTTON") {
                event.target.parentNode.remove();
            } else {
                event.target.parentNode.parentNode.remove();
            }
            this[0].choices.splice(this[0].choices.indexOf(this[1]), 1);
        }
    }

    /* removeSection(event){
        event.target.parentNode.remove();
        SharedPref.finalForm_sections.splice(SharedPref.finalForm_sections.indexOf(this), 1);
        SharedPref.existingIds.splice(SharedPref.existingIds.indexOf(this.id), 1);
    } */
    buildMultiChoice() {
        const parentSection = document.getElementById("parent-section");
        //creating a new child-section
        const newSection = document.createElement("section");
        newSection.classList.add("child-section", "section");
        newSection.id = this.id;

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

        //creating the delete section button
        let delIcon = document.createElement("i");
        delIcon.classList.add("far", "fa-trash-alt", "delIcon");
        delIcon.addEventListener("click", SharedPref.removeSection.bind(this));
        newSection.appendChild(delIcon);

        //creating the title input field
        let input_title = document.createElement("input");
        input_title.classList.add("question");
        input_title.value = this.title;
        input_title.type = "text";
        input_title.addEventListener("input", this.updateTitle.bind(this))

        newSection.appendChild(input_title);

        //creating the multichoices ( in this case a radio button )
        var choicesDiv = document.createElement("div");
        choicesDiv.classList.add("parentOptionContainer");
        choicesDiv.id = this.id + "choices";

        this.choices.forEach(choice => {
            let div = document.createElement("div");
            div.classList.add("optionContainer")
            //creating the radio button
            let radioInput = document.createElement("input");
            radioInput.type = this.type;
            radioInput.value = choice.description;
            radioInput.disabled = true;

            //creating the option description field
            let labelInput = document.createElement("input");
            labelInput.value = choice.description;
            labelInput.type = "text";
            labelInput.classList.add("optionInput");
            labelInput.addEventListener("input", this.updateChoice.bind(choice))

            //creating the remove option functionality
            let removeBtn = document.createElement("button");
            removeBtn.classList.add("removeBtn");
            removeBtn.innerHTML = "<i class=\"fas fa-times\"></i>";
            removeBtn.addEventListener("click", this.removeChoice.bind([this, choice]))

            div.appendChild(radioInput);
            div.appendChild(labelInput);
            div.appendChild(removeBtn);
            choicesDiv.appendChild(div);
            newSection.appendChild(choicesDiv);
        });

        let addChoiceBtn = document.createElement("button");
        addChoiceBtn.classList.add("addOptionBtn");
        addChoiceBtn.innerHTML = "<i class=\"fas fa-plus addIcon\"></i> Add an option";
        addChoiceBtn.addEventListener("click", this.addRadioOrCheckBoxChoice.bind(this));

        //adding the new section to the DOM
        newSection.appendChild(addChoiceBtn);
        parentSection.appendChild(newSection);
        return newSection;
    }

    buildDropDown() {
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

        newSection.appendChild(input_title);

        //creating the multichoices ( in this case a radio button )
        var ol = document.createElement("ol");
        ol.classList.add("parentOptionContainer");
        ol.id = this.id + "choices";

        this.choices.forEach(choice => {
            let li = document.createElement("li");
            li.classList.add("liOptionContainer")

            //creating the option description field
            let labelInput = document.createElement("input");
            labelInput.value = choice.description;
            labelInput.type = "text";
            labelInput.classList.add("optionInput");
            labelInput.addEventListener("input", this.updateChoice.bind(choice))

            //creating the remove option functionality
            let removeBtn = document.createElement("button");
            removeBtn.classList.add("removeBtn");
            removeBtn.innerHTML = "<i class=\"fas fa-times\"></i>";
            removeBtn.addEventListener("click", this.removeChoice.bind([this, choice]))

            li.appendChild(labelInput);
            li.appendChild(removeBtn);
            ol.appendChild(li);
            newSection.appendChild(ol);
        });

        let addChoiceBtn = document.createElement("button");
        addChoiceBtn.classList.add("addOptionBtn");
        addChoiceBtn.innerHTML = "<i class=\"fas fa-plus addIcon\"></i> Add an option";
        addChoiceBtn.addEventListener("click", this.addDropdownChoice.bind(this));

        //adding the new section to the DOM
        newSection.appendChild(addChoiceBtn);
        parentSection.appendChild(newSection);
        return newSection;
    }

    buildView() {
        var newSection;
        switch (this.type) {
            case "radio":
                newSection = this.buildMultiChoice("radio");
                break;
            case "checkbox":
                newSection = this.buildMultiChoice("checkbox");
                break;
            case "dropdown":
                newSection = this.buildDropDown();
                break;
            default:
                break;
        }
        return newSection;
    }

    addRadioOrCheckBoxChoice() {
        //creating and adding choice
        let choice = new Choice("option" + (this.choices.length + 1));
        this.choices.push(choice)

        //creating the div option container
        let div = document.createElement("div");
        div.classList.add("optionContainer")
        //creating the radio button
        let radioInput = document.createElement("input");
        radioInput.type = this.type;
        radioInput.value = choice.description;
        radioInput.disabled = true;

        //creating the option description field
        let labelInput = document.createElement("input");
        labelInput.value = choice.description;
        labelInput.type = "text";
        labelInput.classList.add("optionInput");
        labelInput.addEventListener("input", this.updateChoice.bind(choice))

        //creating the remove option functionality
        let removeBtn = document.createElement("button");
        removeBtn.classList.add("removeBtn");
        removeBtn.innerHTML = "<i class=\"fas fa-times\"></i>";
        removeBtn.addEventListener("click", this.removeChoice.bind([this, choice]))

        div.appendChild(radioInput);
        div.appendChild(labelInput);
        div.appendChild(removeBtn);
        let choicesDiv = document.getElementById(this.id + "choices");
        choicesDiv.appendChild(div);
    }

    addDropdownChoice() {
        //creating and adding choice
        let choice = new Choice("option" + (this.choices.length + 1));
        this.choices.push(choice)

        //creating the div option container
        let li = document.createElement("li");
        li.classList.add("liOptionContainer")

        //creating the option description field
        let labelInput = document.createElement("input");
        labelInput.value = choice.description;
        labelInput.type = "text";
        labelInput.classList.add("optionInput");
        labelInput.addEventListener("input", this.updateChoice.bind(choice))

        //creating the remove option functionality
        let removeBtn = document.createElement("button");
        removeBtn.classList.add("removeBtn");
        removeBtn.innerHTML = "<i class=\"fas fa-times\"></i>";
        removeBtn.addEventListener("click", this.removeChoice.bind([this, choice]))

        li.appendChild(labelInput);
        li.appendChild(removeBtn);
        let choicesDiv = document.getElementById(this.id + "choices");
        choicesDiv.appendChild(li);
    }
}
//21213796
