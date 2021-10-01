class person {
  constructor(p, p2, p3) {
    this.Name = p;
    this.age = p2;
    this.weight = p3;
  }
  get firstName() {
    return this.Name;
  }
  get Age() {
    return this.age;
  }
  get Weight() {
    return this.weight;
  }
  set firstName(x) {
    this.name = x;
  }
  set Age(age) {
    this.age = age;
  }
  set Weight(weight) {
    this.weight = weight;
  }
}

class engineer extends person {
  constructor(p, p2, p3, p4) {
    super(p, p2, p3);
    this.genderZ = p4;
  }
  get genderY() {
    return this.genderZ;
  }
  set genderY(gn) {
    this.genderZ = gn;
  }
}

var myObj = new engineer("Yavuz", 10, 150, "Male");
console.log(myObj.firstName);
console.log(myObj.Age);
console.log(myObj.Weight);
console.log(myObj.genderY);

console.log((myObj.firstName = "Julia"));
console.log((myObj.Age = 15));
console.log((myObj.Weight = 22));
console.log((myObj.genderY = "Female"));
