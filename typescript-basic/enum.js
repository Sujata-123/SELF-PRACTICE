// A group of contants
// That can assign a number to your string and make an easy comparison
// enum role [Vaues]
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["MANAGER"] = 1] = "MANAGER";
    Role[Role["READ_ONLY_USER"] = 2] = "READ_ONLY_USER";
})(Role || (Role = {}));
console.log(Role);
