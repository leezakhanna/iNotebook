import React, { useContext } from "react";
import noteContext from "../context/notes/notecontext";

const Noteitem = (props) => {
  const context = useContext(noteContext);
  const { deleteNote } = context;
  const { note, updateNote } = props;
  return (
    <a
      href="#"
      className="block max-w-sm p-6 ml-6 mt-3 bg-gray border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
    >
      <h5 className="mb-2  font-bold tracking-tight text-gray-900 dark:text-white ">
        {" "}
        {note.title ? note.title : "No Title"}
      </h5>
   
  <div className="whitespace-normal">
      <p className="font-normal text-gray-700 dark:text-gray-400 whitespace-pre-wrap">
        {note.description}
      </p>
      </div>
    
      <div className="flex items-center mt-5 justify-between text-gray-800 dark:text-gray-100">
      <button
        className="w-8 h-8 rounded-full bg-gray-800 text-white dark:bg-gray-100 dark:text-gray-800 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 ring-offset-gray-300  focus:ring-black"
        aria-label="edit note"
        role="button"
        onClick={() => {
          updateNote(note);
        }}
      >
        <img
          className="dark:hidden"
          src="https://tuk-cdn.s3.amazonaws.com/can-uploader/4-by-3-multiple-styled-cards-svg1.svg"
          alt="edit"
        />
        <img
          className="dark:block hidden"
          src="https://tuk-cdn.s3.amazonaws.com/can-uploader/4-by-3-multiple-styled-cards-svg1dark.svg"
          alt="edit"
        />
      </button>
      <button
        className="w-8 h-8 rounded-full bg-gray-800 text-black dark:bg-gray-100 dark:text-gray-800 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 ring-offset-gray-300  focus:ring-black"
        aria-label="edit note"
        role="button"
        onClick={() => {
          deleteNote(note._id);
          props.showAlert("Deleted Successfully", "success");
        }}
      >
        <img
          className="dark:hidden"
          src="https://tuk-cdn.s3.amazonaws.com/can-uploader/4-by-3-multiple-styled-cards-svg1.svg"
          alt="edit"
        />
        <i className="far fa-trash-alt mx-2 "></i>
      </button>
      </div>
    </a>
   
    // <div className=" mx-auto container  px-6">
    //   <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6">
    //     <div className="rounded">
    //       <div className="w-full h-64 flex flex-col justify-between bg-gray-300 dark:bg-gray-700 dark:border-gray-700 rounded-lg border border-gray-300 mb-6 py-5 px-4">
    //         <div>
    //           <h4 className="text-gray-800 dark:text-gray-100 font-bold mb-3  overflow-auto w-full h-10">
    //             {note.title ? note.title : "No Title"}
    //           </h4>

    //              {/* <div className="whitespace-pre-wrap"> */}
    //           <p className="text-gray-800 dark:text-gray-100 text-sm overflow-auto  ">
    //             {note.description}
    //           </p>

    //           {/* </div> */}

    //         </div>
    //         <div>
    //           <div className="f">

    //             <buttonlex items-center justify-between text-gray-800 dark:text-gray-100
    //               className="w-8 h-8 rounded-full bg-gray-800 text-white dark:bg-gray-100 dark:text-gray-800 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 ring-offset-gray-300  focus:ring-black"
    //               aria-label="edit note"
    //               role="button"
    //               onClick={() => {
    //                 updateNote(note);
    //               }}
    //             >
    //               <img
    //                 className="dark:hidden"
    //                 src="https://tuk-cdn.s3.amazonaws.com/can-uploader/4-by-3-multiple-styled-cards-svg1.svg"
    //                 alt="edit"
    //               />
    //               <img
    //                 className="dark:block hidden"
    //                 src="https://tuk-cdn.s3.amazonaws.com/can-uploader/4-by-3-multiple-styled-cards-svg1dark.svg"
    //                 alt="edit"
    //               />

    //             </buttonlex>
    //             <button
    //               className="w-8 h-8 rounded-full bg-gray-800 text-black dark:bg-gray-100 dark:text-gray-800 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 ring-offset-gray-300  focus:ring-black"
    //               aria-label="edit note"
    //               role="button"
    //               onClick={() => {
    //                 deleteNote(note._id);
    //                 props.showAlert("Deleted Successfully", "success");
    //               }}
    //             >
    //               <img
    //                 className="dark:hidden"
    //                 src="https://tuk-cdn.s3.amazonaws.com/can-uploader/4-by-3-multiple-styled-cards-svg1.svg"
    //                 alt="edit"
    //               />
    //               <i className="far fa-trash-alt mx-2 "></i>
    //             </button>
    //           </div>
    //         </div>
    //       </div>
    //     </div>

    //   </div>
    // </div>

    // <div className="col-md-3">
    // <div className="card my-3 mx-3 ">
    //     <div className="card-body">
    //         <div className="d-flex align-items-center">
    //             <h5 className="card-title">{note.title?note.title:"No Title"}</h5>
    //             <i className="far fa-trash-alt mx-2" onClick={()=>{deleteNote(note._id); props.showAlert("Deleted Successfully","success")}}></i>
    //             <i className="far fa-edit mx-2" onClick={()=>{updateNote(note)}}></i>
    //         </div>

    //         <div className="card-text card-text-truncate ">
    //         <p className="card-text ">{note.description}</p>
    //         </div>
    //         </div>

    // </div>
    // </div>
  );
};

export default Noteitem;
