//1
class Persona{
    name;
    age;
    stomach=[];
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    
    eat(comida) {
        if(this.stomach.length<9){
            this.stomach.push(comida);
            console.log("ha comido "+comida);
        }
        else{
            console.log("el estomago esta lleno");
        }
    }

    poop(){
        this.stomach=[];
    }


    toString(){
        return "nombre: "+this.name+" edad: "+this.age;
    }

}

let persona1=new Persona("Rubén","19");

//2

class Car{
    model;
    milesPerGallon;
    tank=0;
    odometer=0;

    constructor(model,milesPerGallon){
        this.model=model;
        this.milesPerGallon=milesPerGallon;
    }
    
    fill(gallons){
        this.tank+=gallons;
        console.log("se ha llenado el deposito: "+gallons);
    }
    drive(distance){
        if(this.tank<=0){
            console.log("no se puede recorrer nada");
            console.log(this.odometer);
        }
        else{
            this.odometer+=distance;
            this.tank=this.tank-(this.milesPerGallon/distance)
        }
    }
}

coche1=new Car("mercedes",20);

//3
class Lambdasian{
    name;
    age;
    location;
    constructor(objeto){
        this.name=objeto.name;
        this.age=objeto.age;
        this.location=objeto.location;
    }

    speak(){
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
}

lamb1=new Lambdasian({name:"ruben",age:19,location:"Granada"});

//4
class Instructor extends Lambdasian{
    specialty;
    favLanguage;
    catchPhrase;
    constructor(objeto){
        super(objeto);
        this.specialty=objeto.specialty;
        this.favLanguage=objeto.favLanguage;
        this.catchPhrase=objeto.catchPhrase;
    }
    demo(subject){
        return 'today we are learning about '+subject;
    }
    grade(student,subject){
        return `${student.name} receives a pefect score on ${subject}`;

    }
    restarCalififcacion(student){
        return student.calificacion-Math.floor(Math.random()*40);
    }
}
profesor1=new Instructor({name:"jose",age: 40, location:"granada",specialty:"dwec",favLanguage:"JavaScript",catchPhrase:"hola"});

//5
class Student extends Lambdasian{
    previousBackground;
    className;
    favSubjects;
    calificacion=Math.floor(Math.random()*100);
    constructor(objeto){
        super(objeto);
        this.previousBackground=objeto.previousBackground;
        this.className=objeto.className;
        this.favSubjects=objeto.favSubjects;
    }

    listSubjects(){
        return "loving "+this.favSubjects;
    }

    PRAssignment(subject){
        return  `${this.name} has submitted a PR for ${subject}`;
    }

    sprintChallenge(subject){
        return`${this.name} has begun sprint challege on ${subject}`;
    }

    graduate(){
        if(this.calificacion>=70){
            console.log("te has graduado");
        }
        else{
            console.log("no has conseguido graduarte");
        }
    }
}

estudiante1=new Student({name:"Rubén",age:19,location:"Granada",previousBackground:"aa",className:"2ºDAW",favSubjects:"JavaScript"});

//6
class ProjectManager extends Instructor{
    gradClassName;
    favInstructor;

    constructor(objeto){
        super(objeto);
        this.gradClassName=objeto.gradClassName;
        this.favInstructor=objeto.favInstructor;
    }

    standUp(channel){
        return `${this.name} announces to ${channel},@channel standy times!`;
    }

    debugsCode(student,subject){
        return `${this.name} debugs ${student.name}'s code on ${subject}`;
    }

}

manager1=new ProjectManager({name:"Rubén",age:19,location:"Granada",specialty:"dwec",favLanguage:"JavaScript",catchPhrase:"hola",gradClassName: "2ºdaw",favInstructor: "jose"});


