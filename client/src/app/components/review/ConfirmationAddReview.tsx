import { BtnType, Button } from "@/components/common/button";
import { forwardRef } from "react";
import { ShowConfirmProps } from "@/types/types";

// const ConfirmationAddReview = forwardRef<HTMLDialogElement, ShowConfirmProps>(
//   ({ showConfirm, setShowConfirm, modalRef }, ref) => {
//     console.log("confirmation", showConfirm);

//     return (
//       <>
//         {showConfirm && (
//           // <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50">
//           //   <div className="modal-box">
//           //     <h3 className="font-bold text-lg">Preview</h3>
//           //     <p className="py-4">Will you publish?</p>
//           //     {/* <div className="modal-action"> */}
//           //     <div className="flex gap-2">
//           //       <Button
//           //         type={BtnType.cancel}
//           //         className="btn flex-1"
//           //         onClick={() => setShowConfirm(false)}
//           //       >
//           //         Cancel
//           //       </Button>
//           //       <Button type={BtnType.submit} className="btn flex-1">
//           //         Add
//           //       </Button>
//           //       {/* </div> */}
//           //     </div>
//           //   </div>
//           // </div>
//           <dialog ref={ref || modalRef}>
//             <div className="modal-box">
//               <h3 className="font-bold text-lg">Preview</h3>
//               <p className="py-4">Will you publish?</p>
//               <div className="modal-action">
//                 <form method="dialog">
//                   <Button
//                     type={BtnType.cancel}
//                     className="btn flex-1"
//                     onClick={() => setShowConfirm(false)}
//                   >
//                     Cancel
//                   </Button>
//                   <Button type={BtnType.submit} className="btn flex-1">
//                     Add
//                   </Button>
//                 </form>
//               </div>
//             </div>
//           </dialog>
//         )}
//       </>
//     );
//   }
// );

// ConfirmationAddReview.displayName = "ConfirmationAddReview";
// export default ConfirmationAddReview;

// function ConfirmationAddReview () {

// }
