
export var SharedPref = {

    sectionToDelete: {
        domElement: undefined,
        sectionData: undefined
    },
    existingIds: [],
    finalForm_sections: [],
    formTitle: "Form title here",
    formDesc: "Form description here",

    makeid() {
        while (true) {
            var id = this.generateRandomId();
            if (!this.existingIds.includes(id)) {
                this.existingIds.push(id)
                return id;
            }
        }
    },

    generateRandomId() {
        const length = 5;
        var result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() *
                charactersLength));
        }
        return result;
    },

    removeSectionData() {
        this.sectionToDelete.domElement.remove();
        this.finalForm_sections.splice(this.finalForm_sections.indexOf(this.sectionToDelete.sectionData), 1);
        this.existingIds.splice(this.existingIds.indexOf(this.sectionToDelete.sectionData.id), 1);
    },

    removeSection(event) {
        var modal = document.getElementById("deleteModal");
        modal.style.display = "block"
        SharedPref.sectionToDelete.domElement = event.target.parentNode;
        SharedPref.sectionToDelete.sectionData = this;
    },

    swapWithTopSection(event) {
        var elem = event.target.parentNode;
        if (elem.previousElementSibling != null) {
            elem.style.top = "-" + elem.previousElementSibling.offsetHeight + "px";
            elem.style.opacity = "0.8";
            elem.previousElementSibling.style.opacity = "0.4";
            setTimeout(() => {
                elem.style.top = "0";
                elem.style.opacity = "1";
                elem.previousElementSibling.style.opacity = "1";
                let aux = this;
                let index = SharedPref.finalForm_sections.indexOf(this);
                SharedPref.finalForm_sections[index] = SharedPref.finalForm_sections[index - 1];
                SharedPref.finalForm_sections[index - 1] = aux;
                elem.parentNode.insertBefore(elem, elem.previousElementSibling);
            }, 650)
        }
    },

    swapWithBottomSection(event) {
        var elem = event.target.parentNode;
        if (elem.nextElementSibling != null) {
            elem.nextElementSibling.style.top = "-" + elem.offsetHeight + "px";
            elem.nextElementSibling.opacity = "0.8";
            elem.style.opacity = "0.4";
            setTimeout(() => {
                elem.nextElementSibling.style.top = "0";
                elem.style.top = "0";
                elem.nextElementSibling.opacity = "1";
                elem.style.opacity = "1";
                let aux = this;
                let index = SharedPref.finalForm_sections.indexOf(this);
                SharedPref.finalForm_sections[index] = SharedPref.finalForm_sections[index + 1];
                SharedPref.finalForm_sections[index + 1] = aux;
                elem.parentNode.insertBefore(elem.nextElementSibling, elem);
            }, 650)
        }
    }
}