import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

function AddMovie() {
    const location = useLocation();
    const navigate = useNavigate()
    const { state }  = location;

    const data = state?.data;
    const isEdit = state?.isEdit;
    
    const validate = (values) => {
        const errors = {};
    
        if (!values.movieName) {
          errors.movieName = 'Movie Name is required';
        }

        if (!values.genre) {
            errors.genre = 'Movie Genre is required';
          }
    
        if (!values.year) {
          errors.year = 'Year is required';
        } else if (isNaN(values.year) || parseInt(values.year) <= 0) {
          errors.year = 'Year must be a positive number';
        }
    
        if (!values.description) {
          errors.description = 'Description is required';
        }
    
        return errors;
    };


    const handleSubmit = (values, { setSubmitting, resetForm }) => {
        console.log(values);
        setSubmitting(false);
        resetForm()
    };

  return (
    <>
        <div className='flex flex-row justify-center items-center h-screen w-full overflow-y-auto'>
            <div className='flex flex-col w-[650px] h-auto border rounded-xl bg-slate-200 border-slate-400'> 
                <div className='py-4 px-2'>
                    <h1 className='text-2xl text-center'>{isEdit ? 'Edit' : 'Add'} Movie Form</h1>
                </div>
                <Formik
                initialValues={{ movieName: (isEdit && data) ? data?.title : '', year: (isEdit && data) ? data?.year : '', genre:(isEdit && data) ? data?.genre : '', description: (isEdit && data) ? data?.desc : '' }}
                validate={validate}
                onSubmit={handleSubmit}
                >
                {({ isSubmitting, resetForm }) => (
                    <Form className="px-6">
                        <div className='py-4 px-2'>
                            <h2 className='py-2 px-2'>Movie Name</h2>
                            <Field type="text" name="movieName" className='rounded-lg border border-slate-400 h-9 w-full px-2' maxLength={25}/>
                            <ErrorMessage name="movieName" component="div" className="text-red-600 text-sm" />
                            <h2 className='py-2 px-2'>Year</h2>
                            <Field type="text" name="year" className='rounded-lg border border-slate-400 h-9 w-full px-2' />
                            <ErrorMessage name="year" component="div" className="text-red-600 text-sm" maxLength={4}/>
                            <h2 className='py-2 px-2'>Genre</h2>
                            <Field type="text" name="genre" className='rounded-lg border border-slate-400 h-9 w-full px-2' maxLength={20} />
                            <ErrorMessage name="genre" component="div" className="text-red-600 text-sm" />
                            <h2 className='py-2 px-2'>Description</h2>
                            <Field as="textarea" name="description" className='rounded-lg border border-slate-400 h-24 w-full px-2' maxLength={50} />
                            <ErrorMessage name="description" component="div" className="text-red-600 text-sm" />
                        </div>
                        <div className='w-24 mx-3 flex flex-row my-3'>
                            <button type="submit" disabled={isSubmitting} className={`${isSubmitting ? 'bg-slate-400': 'bg-blue-500'} text-white py-2 px-4 rounded-lg hover:bg-blue-700`}>
                                {isEdit ? 'Update' : 'Submit'}
                            </button>
                            <button type="button" className='bg-blue-500 text-white py-2 px-6 rounded-lg mx-4 hover:bg-blue-700' onClick={isEdit ? (() => navigate('/')): resetForm}>
                                {isEdit ? 'Cancel' : 'Clear'}
                            </button>
                        </div>
                    </Form>
                )}
                </Formik>
            </div>
        </div>
    </>
  )
}

export default AddMovie