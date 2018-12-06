// class_es6.js javascript_patterns
//
// Implementing a class in ES6 format.

export class Thing2D {
    constructor(n) {
    	this.length =
    	this.width  = 0;
    	this.name   = n;
    }

    toString() {
	    return ('This is a thing called "' + this.name + '"');
    }

    area() {
	    return (this.length * this.width);
    }

    getColor() {
        return "blue";
    }

    // This looks like a method but it's static
    // so use "Thing.foo()" not "thing.foo()" to access it.
    static foo() {
	    return 100;
    }
}

// I can add some static data too, not just methods.
Thing2D.bar = '101';

// Inheritance or 'subclass' if you prefer

export class Thing3D extends Thing2D {
    // I don't have to define a constructor here.

    setSize(l,w,h) {
        this.length = l;
	    this.width = w
        this.height = h;
    }

    // I will inherit the area() f from the base class
    // but add a new volume f here.

    volume() {
	    return (this.length * this.width * this.height);
    }

    // I can override the base class

    getColor() {
        if (this.color === undefined) {
            // ...I can invoke the base f if I want.
            return super.getColor();
        }
        return this.color;
    }
}

console.log('class_es6 loaded');
