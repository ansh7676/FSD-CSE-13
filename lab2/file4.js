import {mkdir} from"fs/promises";

// await makdir ("upload");
//console.log("folder created");

// await mkdir("upload/resume");
// console.log("resume created under upload folder");

await mkdir ("images/profile/logos",{recursive:true});
console.log("all folder created");
await rm ("upload")