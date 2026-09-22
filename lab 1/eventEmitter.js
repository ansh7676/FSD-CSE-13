import{EventEmitter} from "node:events";
const task=new EventEmitter();
const sayHi = (name) =>{
    console.log(`Hi ${name}`);
};


task.on("greet",sayHi);//Event and method binding
task.emit("greet","John Doe");//announcement