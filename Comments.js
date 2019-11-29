

class Comments {
    constructor(comments, filename) {
        this.filename = filename;
        this.comments = comments;
    }

    createString() {
        let n = 1;
        let string = "";
        string = string.concat("==========" + this.filename + "==========\n\n");
        Object.keys(this.comments).forEach(key => {
            string = string.concat(`${n++} : ${this.comments[key].content}\n`)
        });
        return string;
    }
    //This for testing
    showInConsole() {
        let n = 1;
        console.log("==========" + this.filename + "==========")
        Object.keys(this.comments).forEach(key => {
            console.log(`${n++} : ${this.comments[key].content}`);
        })
    }
}

module.exports = Comments;