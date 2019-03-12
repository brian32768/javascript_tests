import { Converter } from 'usng/usng';

let c = new Converter;
console.log(c, c.LLtoUSNG(44,-123, 5));

// ------------------------------------------------------------------------
// What are the curly braces for on the import line, and when should I use them and when not?
// https://stackoverflow.com/questions/36795819/when-should-i-use-curly-braces-for-es6-import#36796281

// 1. Define a "default" object (a class in this case) in A.js, like export default class {};
// Then you can access it here and rename it if you want.
import Aye from './src/A';

// 2. I can gather imports into one file (index.js) and reexport under same or different names,
// then I can do this, jamming all 3 onto one line even though A is a default export from A.js
// Using the name "index.js" is like "index.html", I don't have to name it explicitly, just the folder it's in.
import { A,B,C } from "./src";

let a = new A();
let b = new B();

console.log('a =', a.toString());
console.log('b =', b.toString())
console.log('C =', C);

// ------------------------------------------------------------------------
// Okay, I know how to explicitly import things now, but how do I import everything from a package?
// For example I want to be able to reference ol.proj.Projection()
// without having to rewrite it to be
//     import {Projection} from "ol/proj"
//     var p = new Projection();
// Well, IF I knew how I would avoid doing this because it defeats the whole idea of "load only what you need"...
// Just fix the damn code!

// ------------------------------------------------------------------------
// Modules are one pattern for organizing your code.
// Here are two patterns for calling a function, old es3 and newer es6
//
import {m_es3} from './src/module_es3.js';
console.log(m_es3.getDatestamp());
//
import {getDatestamp as es6_datestamp} from './src/module_es6.js';
console.log(es6_datestamp());

// ------------------------------------------------------------------------
// Classes are another pattern for organization.
import {Thing2D, Thing3D} from './src/class_es6.js';

function intervalHandler(evt) {
    document.getElementById('header').innerHTML = 'ES6 time is ' + es6_datestamp();
    document.getElementById('footer').innerHTML = 'ES3 time is ' + m_es3.getDatestamp();
}

var btn = document.getElementById('ici');
btn.onclick = clickHandler;

var timed = setInterval(intervalHandler, 1000);

// class tests and inheritance

// Get an instance of our base class
var obelisk = new Thing2D('Diviner');
obelisk.length = 10;
obelisk.width  = 10;

console.log('Object: ' + obelisk); // calls toString() method
console.log('Object area: ' + obelisk.area());
console.log('Thing foo: ' + Thing2D.foo() + ' bar: ' + Thing2D.bar);

// Get an instance of a subclass that extends Thing
// Note this object accepts height in its constructor

var tall_one = new Thing3D('Terrapene Mundi')
tall_one.setSize(2,2,100);
console.log(tall_one); // Dump the entire object, toString() not called.
console.log(tall_one.volume());

function getProps(obj) {
    let content = ''
    // enumerate the thing's properties.
    for (var p in obj) {
 	      content += p + ' = ' + obj[p] + '<br />';
    }
    return content;
}
// Show me properties
function clickHandler(evt) {
    let one = getProps(obelisk);
    let two = getProps(tall_one);

    tall_one.color = 'pale peach';

    let content = "<h3>obelisk</h3>"  + one + "color=" + obelisk.getColor() +
                  "<h3>tall_one</h3>" + two +
                  "footprint=" + tall_one.area().toString() + ' ' +
                  "volume=" + tall_one.volume().toString() + '<br />' +
                  "color=" + tall_one.getColor()
    document.getElementById('test').innerHTML = content;
    console.log("click");
}

// namespaces

import MyNamespace from './src/namespaces';
let ns = new MyNamespace();
console.log("Namespace testing", ns, ns.instance);
console.log("Namespace totally", MyNamespace.totally);

let kc = new MyNamespace.KidClass();
console.log("Aha", kc);

console.log('index.js loaded');
