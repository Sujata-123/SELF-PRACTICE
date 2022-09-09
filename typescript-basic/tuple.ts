let role:[string,string,number,number,boolean?]=["admin","manager",1,3]
role.push(true);
role[1]="user";
console.log(role);

// in case of tuple we can specify the type specifically.