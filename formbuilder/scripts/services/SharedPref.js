export var SharedPref = {

    actions_toUndo: [],
    actions_toRedo: [],
    existingIds: [],
    finalForm_sections: [],
    formTitle:"Form title here",
    formDesc:"Form description here",

    makeid() {
        while (true) {
            var id = this.generateRandomId();
            if(!this.existingIds.includes(id)){
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
    }

}