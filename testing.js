class Lambdasian {
    constructor(attributes) {
      this.name = attributes.name;
      this.age = attributes.age;
      this.location = attributes.location;
    }

    speak() {
      return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
  }

  class Student extends Lambdasian {
    constructor(studentAttributes) {
      super(studentAttributes);
      this.previousBackground = studentAttributes.previousBackground;
      this.className = studentAttributes.className;
      this.favSubjects = studentAttributes.favSubjects;
      this.grade = 83;
    }

    listSubjects() {
      return `Loving, ${this.favSubjects}`;
    }
    PRAssignment(subject) {
      return `${this.name} has submitted a PR for ${subject}`;
    }

    sprintChallenge(subject) {
      return `${this.name} has begun sprint challenge ${subject}`;
    }

    graduate(instructor) {
        if (this.grade >= 70) {
            return `${this.name} has graduated from Lambda!`;
        } else {
            while (this.grade < 70) {
                instructor.gradeStudent(this);
                return this.graduate(instructor);
            }
        }
    }
    
 }



class Instructor extends Lambdasian {
    constructor(instructorAttributes) {
      super(instructorAttributes);
      this.specialty = instructorAttributes.specialty;
      this.favLanguage = instructorAttributes.favLanguage;
      this.catchPhrase = instructorAttributes.catchPhrase;
    }

    demo(subject) {
      return `Today we are learning about ${subject}`;
    }

    grade(student, subject) {
      return `${student.name} receives a perfect score on ${subject}`;
    }

    gradeStudent(student) {
      let random = Math.random()
      let randomGrade = Math.floor(random * 40);
      let addSub = Math.floor(random * 2);
      if (addSub === 1) {
          return student.grade += randomGrade;
      } else if (addSub === 0) {
          return student.grade -= randomGrade;
      }
    }
 }

 class ProjectManager extends Instructor {
    constructor(pmAttributes) {
      super(pmAttributes);
      this.gradClassName = pmAttributes.gradClassName;
      this.favInstructor = pmAttributes.favInstructor;
    }

    standUp(slack) {
      return `${this.name} announces to ${slack}, @${slack} standy times!`
    }
    
    debugsCode(student, subject) {
      return `${this.name} debugs ${student.name}'s code on ${subject}`;
    }
}

 const student = {
     name: 'billy',
     age: 4,
     location: 'Boston',
     previousBackground: 'Coder',
     className: 'webpt',
     favSubjects: ['math', 'science'],
     grade: 83
 }

 const billy = new Student(student);
 console.log(billy);

 const instructor = {
     name: 'Lightening McQueen',
     age: 21,
     location: 'Boston',
     specialty: 'Driving',
     favLanguage: ['racing', 'tow-mater', 'that hot porsche'],
     catchPhrase: 'Kachow'

 }

 const kachow = new ProjectManager(instructor);
 console.log(kachow);

 kachow.gradeStudent(billy);
 console.log(billy.grade);

console.log(billy.graduate(kachow));

