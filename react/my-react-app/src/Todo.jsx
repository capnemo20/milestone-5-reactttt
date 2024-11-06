// export default function Todo({task, isDone}){
//     return(
//         <li>Task: {task} {isDone}</li>
//     )
// }
// <<<<<<<------------<<<<--------->>>>>>>-------------->>>>>>>>>
// conditional rendering option-1
// export default function Todo({task, isDone}){
//     if(isDone){
//         return <li>Finished: {task}</li>
//     }
//     else{
//         return <li>Work On: {task}</li>
//     }
// }
// <<<<<<<------------<<<<--------->>>>>>>-------------->>>>>>>>>
// conditional rendering option-2
// export default function Todo({ task, isDone }) {
//   if (isDone) {
//     return <li>Finished: {task}</li>;
//   }

//   return <li>Work On: {task}</li>;
// }

// <<<<<<<------------<<<<--------->>>>>>>-------------->>>>>>>>>
// conditional rendering option-3 using ternary operator
// export default function Todo({ task, isDone }) {
 
//     return(
//         <li>{isDone?"Finished": "Work On"} : {task}</li>
//     )
//   }
  // <<<<<<<--conditional rendering option-4-->>>>>>>>>
//   using && operator
//   export default function Todo({task, isDone}){
//     return(
          
//         // <li>{task} {isDone && ":Done"}</li>
//         // <<<<<<<--conditional rendering option-5-->>>>>>>>>
//         <li>{task} {isDone || ":Do it"}</li>
//     )
// }
// <<<<<<<--conditional rendering option-6-->>>>>>>>>
export default function Todo({ task, isDone }) {
    let listItem;
  if (isDone) {
    listItem = <li>Finished: {task}</li>
  }
  else{
    listItem = <li>Work on: {task}</li>
  }

  return listItem;
}