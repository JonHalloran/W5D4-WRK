

function Student(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.courses = [];
}

Student.prototype.name = function() {
  return `${this.firstName} ${this.lastName}`;
};

Student.prototype.enroll = function(course) {
  if (!this.courses.includes(course)){
    this.courses.push(course);
  }
};

Student.prototype.courseLoad = function() {
  return 
}
