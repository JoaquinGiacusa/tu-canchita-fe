import React from 'react';
// import { Formik, FormikHelpers, FormikProps, Form, Field, FieldProps } from 'formik';

// interface MyFormValues {
// first_name: string,
// last_name: string,
// }

// const Basic = () => {
//     const initialValues: MyFormValues = {first_name: '', last_name: ''}

//     return(
//         <div>
//             <h1>Anywhere in your app!</h1>
//             <Formik
//             initialValues={initialValues}
//             validate={values => {
//                 const errors = {
//                     first_name: '',
//                     last_name: ''
//                 };
//                 if (!values.first_name) {
//                 errors.first_name = 'Required';
//                 }

//                 return errors;
//             }}
//             onSubmit={(values, { setSubmitting }) => {
//                 setTimeout(() => {
//                 alert(JSON.stringify(values, null, 2));
//                 setSubmitting(false);
//                 }, 400);
//             }}
//             >
//             {({
//                 values,
//                 errors,
//                 touched,
//                 handleChange,
//                 handleBlur,
//                 handleSubmit,
//                 isSubmitting,
//                 /* and other goodies */
//             }) => (
//                 <form onSubmit={handleSubmit}>
//                 <input
//                     type="email"
//                     name="email"
//                     onChange={handleChange}
//                     onBlur={handleBlur}
//                     value={values.email}
//                 />
//                 {errors.email && touched.email && errors.email}
//                 <input
//                     type="password"
//                     name="password"
//                     onChange={handleChange}
//                     onBlur={handleBlur}
//                     value={values.password}
//                 />
//                 {errors.password && touched.password && errors.password}
//                 <button type="submit" disabled={isSubmitting}>
//                     Submit
//                 </button>
//                 </form>
//             )}
//             </Formik>
//         </div>
// );

// export default Basic;
