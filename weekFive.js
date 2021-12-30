class Model {
    constructor(name, bodyStyle) {
        this.name = name;
        this.bodyStyle = bodyStyle;
    }
    describer() {
        return`${this.name}s body style is ${this.bodyStyle}`
    }
}

class Make {
    constructor(name) {
        this.name = name;
        this.models = [];
    }
    addModel(model) {
        if (model instanceof Model) {
            this.models.push(model);
        }else {
            throw new Error(`You can only add an instance of Model. Argument is not a model: ${model}`);
        }
        }
        describe() {
            return `${this.name} has ${this.models.length} models.`;
        }
    }
    class Menu {
        constructor(){
            this.makes = [];
            this.selectedMake = null;
        }
        start(){
            let selection = this.showMainMenuOptions();
            while(selection != 0) {
                switch(selection) {
                    case '1':
                    this.createMake();
                    break;
                    case '2':
                        this.viewMake();
                        break;
                        case '3':
                            this.deleteMake();
                            break;
                            case '4':
                                this.displayMakes();
                                break;
                            default:
                                selection = 0;
                                
                }
                selection = this.showMainMenuOptions();
            }
            alert('Goodbye!');
        }
        showMainMenuOptions() {
            return prompt(`
            0) exit
            1) create new make
            2) view make
            3) delete make
            4) display all makes
            `);
        }
        showMakeMenuOptions(makeInfo){
            return prompt(`
            0) back
            1) create model
            2) delete model
            ${makeInfo}
            `)

        }
        displayMakes() {
            let makeString = '';
            for (let i=0; i< this.makes.length; i++){
                makeString += i +') ' + this.makes[i].name + '\n';
            }
            alert(makeString);
        }
        createMake() {
            let name = prompt('Enter name for new make:');
            this.makes.push(new Make(name));
        }
        viewMake() {
            let index = prompt('Enter the index of the make you wish to view:');
            if (index > -1 && index < this.makes.length) {
                this.selectedMake = this.makes[index];
                let description = 'Make Name: ' + this.selectedMake.name + '\n';
                for(let i = 0; i < this.selectedMake.models.length; i++){
                    description += i + ') ' + this.selectedMake.models[i]. name + ' - ' + this.selectedMake.models[i]. bodyStyle + '\n';
                }
                let selection = this.showMakeMenuOptions(description);
                switch (selection) {
                    case '1' :
                    this.createModel();
                    break;
                    case '2':
                        this.deleteModel();
                        break;
                }
            }
        }
        deleteMake() {
            let index = prompt('Enter the index of the make you wish to delete');
            if (index > -1 && index < this.makes.length) {
                this.makes.splice(index, 1);
            }
        }
        createModel() {
            let name = prompt('Enter name for new model:');
            let bodyStyle = prompt ('Enter body style for new model');
            this.selectedMake.models.push(new Model(name, bodyStyle));
        }
        deleteModel() {
            let index = prompt('Enter the index of the model you wish to delete:');
            if (index > -1 && index < this.selectedMake.models.length) {
                this.selectedMake.models.splice(index, 1);

            }
        }

    }

let menu = new Menu();
menu.start();