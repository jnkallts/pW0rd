import React, { useState, useEffect } from "react";

export default function Main() {
   const [formData, setFormData] = useState({
      title: "",
      link: "",
      email: "",
      username: "",
      password: "",
   });

   const [submitted, setSubmitted] = useState(false);

   useEffect(() => {
      localStorage.setItem("pW0rd", JSON.stringify(formData));
   }, [formData]);

   function handleChange(event) {
      const { name, value, type } = event.target;
      setFormData((prevFormData) => {
         return {
            ...prevFormData,
            [name]: value,
         };
      });
   }

   function handleSubmit(event) {
      event.preventDefault();
      setSubmitted(true);
   }

   function generateCard(event) {
      event.preventDefault();
   }

   return (
      <main>
         {formData != null ? (
            <article className="card">
               <div className="card-info">
                  <a href={formData.link} className="card-link" target="_blank">
                     <h2 className="card-title">{formData.title}</h2>
                  </a>
                  <p className="card-info">{formData.email}</p>
                  <p className="card-info">{formData.username}</p>
                  <p className="card-info">{formData.password}</p>
               </div>
            </article>
         ) : (
            <button>Add pW0rd</button>
         )}
         <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
               {submitted && (
                  <div className="success-message">
                     pW0rd sucessfully saved!
                  </div>
               )}
               <label className="label">Title</label>
               <input
                  type="text"
                  placeholder="Google"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className="form-input"
               />
               <label className="label">URL</label>
               <input
                  type="text"
                  placeholder="https://google.com"
                  name="link"
                  value={formData.link}
                  onChange={handleChange}
                  className="form-input"
               />
               <label className="label">Email</label>
               <input
                  type="email"
                  placeholder="abc@google.com"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
               />
               <label className="label">Username</label>
               <input
                  type="text"
                  placeholder="johndoe"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  className="form-input"
               />
               <label className="label">Password</label>
               <input
                  type="password"
                  placeholder="P@ssw0rd"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="form-input"
               />
               <button
                  className="form-submit"
                  type="submit"
                  onClick={generateCard}
               >
                  Save pW0rd
               </button>
            </form>
         </div>
      </main>
   );
}
