import React, { useEffect, useState } from 'react'

function FetchList() {
  const [info, setInfo] = useState([])

  useEffect(() => {
    getInfo()
  }, [])

  const getInfo = async () => {
    const url = 'https://thin-fireant-85.loca.lt/comments'
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    setInfo(data)
  }


  return (
    <div>
      {info?.map((item) => (
        <React.Fragment>
          <p>{item.body}</p>
        </React.Fragment>
      ))}
    </div>
  )
}

export default FetchList

// function App(){

//   const [commentList, setCommentList] = useState([]);

//   useEffect(() => {
//     getCommentList();
//   }, []);

//   const getCommentList = async () => {
//       const url = 'https://thin-fireant-85.loca.lt/comments';
//       const response = await fetch(url);
//       const comments = await response.json();

//       setCommentList(comments);
//   }

//   const deleteHandler = async (pCommentId) => {
//       await fetch(`https://thin-fireant-85.loca.lt/comments/${pCommentId}`, {
//         method: 'DELETE',
//       });

//       await getCommentList();
//   }

//   return(
//       <div>
//         {
//           commentList.map((comment)=> 
//             <p> 
//               <span onClick={()=> deleteHandler(comment.id)}>x</span>  
//               {comment.body}
//             </p>
//           )
//         }
//       </div>
//     )
// }