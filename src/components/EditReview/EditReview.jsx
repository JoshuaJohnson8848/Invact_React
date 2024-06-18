import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import StarRating from '../StarRating/StarRating';
import { getMovie, updateMovieReview, updateMovieStatus } from '../../services/MovieServices';
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { useGlobalContext } from '../../context/GlobalProvider'

function EditReview() {
    const location = useLocation();
    const navigate = useNavigate();
    const [data, setData] = useState('')

    const queryParams = new URLSearchParams(location.search);
    const movieId = queryParams.get('movieId');
    console.log('ID',movieId);

    useEffect(() => {
      getOneMovie(movieId)
    }, [movieId])
    

    const getOneMovie = async(id) => {
      const res = await getMovie(id)
      if(res){
        setData(res)
      }
    }
    
    const validate = (values) => {
        const errors = {};

        if (values.rating > 5) {
            errors.rating = 'Movie Rating must between 1 to 5';
        }
    
        return errors;
    };


    const handleSubmitFn = (values, { setSubmitting, resetForm }) => {
        console.log(values);
        updateReview(values)
        setSubmitting(false);
        resetForm()
    };

    const onViewStatusChange = async(status) => {
        let params = {
            watched: !status
        }
        const res = await updateMovieStatus(params, movieId);
        if(res){
            getOneMovie(movieId);
        }
    }

    const updateReview = async({ review, rating}) => {
      let params =  {
        review: review ? review : '',
        rating: rating ? rating : null,
      }
      const res = await updateMovieReview(params, movieId);

      if(res){
        navigate('/')
      }
    }

  return (
    <>
        <div className='flex flex-row justify-center items-center h-screen w-full overflow-y-auto'>
            <div className='flex flex-col w-[650px] h-auto border rounded-xl bg-slate-200 border-slate-400'> 
                <div className='py-4 px-2'>
                    <h1 className='text-2xl text-center'>Edit Movie Form</h1>
                </div>
                <Formik
                initialValues={{ rating: (data) ? data?.rating : null , review: (data) ? data?.review : ''  }}
                validate={validate}
                onSubmit={handleSubmitFn}
                enableReinitialize={true}
                >
                {({ isSubmitting, resetForm }) => (
                    <Form className="px-6">
                        <div className='py-4 px-2'>
                          <div className='flex flex-row justify-between'>
                            <div>
                              <h2 className='py-2 px-2'>Rating</h2>
                              <Field type="number" name="rating" className='rounded-lg border border-slate-400 h-9 w-full px-2' max={5} />
                              <ErrorMessage name="rating" component="div" className="text-red-600 text-sm" />
                            </div>
                          </div>
                            <h2 className='py-2 px-2'>Review</h2>
                            <Field type="text" name="review" className='rounded-lg border border-slate-400 h-9 w-full px-2' maxLength={100} />
                            <ErrorMessage name="review" component="div" className="text-red-600 text-sm" />
                            <div className='pt-4'>
                                <span>
                                    <h3>View Status : <button onClick={()=>onViewStatusChange(data?.watched)} type='submit' className={`px-4 py-2 font-semibold text-sm rounded-lg shadow-md focus:outline-none transition-colors duration-300 ${(data?.watched) ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>{(data?.watched) ? 'Watched' : 'Unwatched'}</button></h3>
                                </span>
                            </div>
                        </div>
                        <div className='w-24 mx-3 flex flex-row my-3'>
                            <button type="submit" disabled={isSubmitting} className={`${isSubmitting ? 'bg-slate-400': 'bg-blue-500'} text-white py-2 px-4 rounded-lg hover:bg-blue-700`}>
                                Update
                            </button>
                            <button type="button" className='bg-blue-500 text-white py-2 px-6 rounded-lg mx-4 hover:bg-blue-700' onClick={() => navigate('/')}>
                                Cancel
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

export default EditReview