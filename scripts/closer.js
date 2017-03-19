function Closer() {

    this.stack = [];
    this.counter = 0;

}

Closer.prototype.addElement = function(element) {

    this.stack.push(element[0]);
    this.counter = 1;

};

Closer.prototype.closeElements = function(target) {

    if(this.counter > 0) {
        this.counter = 0;
        return false;
    }

    for(let item in this.stack) {

        let element = this.stack[item];
        if($(element).find(target).length > 0 || $(element).is($(target))) {}
        else {
            $(element).removeClass('open');
            this.stack.splice(item, 1);
        }

    }

};