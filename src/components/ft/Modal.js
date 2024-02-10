import React from "react";

export const Modal = ({ closeModal, onSubmit, defaultValue }) => {
   const [formState, setFormState] = useState(
      defaultValue || {
         title: "",
         url: "",
         email: "",
         username: "",
         password: "",
      }
   );

   const [errors, setErrors] = useState("");

   const validateForm = () => {
      if (
         formState.title &&
         formState.link &&
         formState.email &&
         formState.username &&
         formState.password
      ) {
         setErrors("");
         return true;
      } else {
         let errorFields = [];
         for (const [key, value] of Object.entries(formState)) {
            if (!value) {
               errorFields.push(key);
            }
         }
         setErrors(errorFields.join(", "));
         return false;
      }
   };

   const handleChange = (e) => {
      setFormState({ ...formState, [e.target.name]: e.target.value });
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      if (!validateForm()) return;
      onSubmit(formState);
      closeModal();
   };

   return (
      <div
         className="modal-container"
         onClick={(e) => {
            if (e.target.className === "modal-container") closeModal();
         }}
      >
         <div className="modal">
            <form>
               <div className="form-group">
                  <input
                     type="text"
                     name="title"
                     onChange={handleChange}
                     value={formState.title}
                  />
                  <input
                     type="url"
                     name="link"
                     onChange={handleChange}
                     value={formState.link}
                  />
                  <input
                     type="email"
                     name="email"
                     onChange={handleChange}
                     value={formState.email}
                  />
                  <input
                     type="text"
                     name="username"
                     onChange={handleChange}
                     value={formState.username}
                  />
                  <input
                     type="password"
                     name="password"
                     onChange={handleChange}
                     value={formState.password}
                  />
               </div>
               {errors && (
                  <div className="error">{`Please incluse: ${errors}`}</div>
               )}
               <button type="submit" className="btn" onClick={handleSubmit}>
                  Save
               </button>
            </form>
         </div>
      </div>
   );
};
