/*write a function that takes two parameters (userarole, roles) , 
return true or false based on the role check. 
eg: const userRole=["admin"," vendor"];
const roles=["vendor",inventoryManager","receptionist"];
const chechRole =(userRoles,roles)=>{}
*/

const userRoles = ["admin", "vendor"];
const roles = ["vendor", "inventoryManager", "receptionist"];

const checkRole = (userRoles, roles) => {
  const check = roles.map((role) => userRoles.includes(role));
  return check.includes(true);
};

const check = checkRole(userRoles, roles);
console.log(check);
