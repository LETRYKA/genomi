import generateName from "./nameGenerator.js";
import birthGenerator from "./birthGenerator.js"
import generateloc from "./locationGen.js"
import colors from "./src/clr.js"


export const genomi = (createRandomUser, count) => {
    return Array.from({ length: count }, () => createRandomUser());
};


export default genomi;