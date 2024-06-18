import { ErrorMessage, Field, Form, Formik } from 'formik'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { createMovie, getMovie, updateMovie } from '../../services/MovieServices';
import { useGlobalContext } from '../../context/GlobalProvider'

function AddMovie() {
    const location = useLocation();
    const navigate = useNavigate();
    const [data, setData] = useState('')

    const queryParams = new URLSearchParams(location.search);
    const isEdit = queryParams.get('isEdit');
    const movieId = queryParams.get('movieId');

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
    
        if (!values.movieName) {
          errors.movieName = 'Movie Name is required';
        }

        if (!values.genre) {
            errors.genre = 'Movie Genre is required';
        }

        if (values.rating > 5) {
          errors.rating = 'Movie Rating should between 1 to 5';
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
        if(isEdit){
          updateMovieData(values)
        } else {
          addMovieData(values)
        }
        setSubmitting(false);
        resetForm()
    };

    const updateMovieData = async({ movieName, description, year, genre, review, rating, image}) => {
      let params =  {
        title: movieName ? movieName : '',
        desc: description ? description : '',
        year: year ? year : '',
        genre: genre ? genre : '',
        review: review ? review : '',
        rating: rating ? rating : null,
        image: image ? image : null
      }

      const res = await updateMovie(params, movieId);

      if(res){
        navigate('/')
      }
    }

    const addMovieData = async({ movieName, description, year, genre, review, rating, image}) => {
      let params =  {
        title: movieName ? movieName : '',
        desc: description ? description : '',
        year: year ? year : '',
        genre: genre ? genre : '',
        review: review ? review : '',
        rating: rating ? rating : null,
        image: image ? image : null
      }
      const res = await createMovie(params);

      if(res){
        navigate('/')
      }
    }

  return (
    <>
        <div className='flex flex-row justify-center items-center min-h-screen w-full overflow-y-auto my-4'>
            <div className='flex flex-col w-[650px] min-h-full border rounded-xl bg-slate-200 border-slate-400'> 
                <div className='py-4 px-2'>
                    <h1 className='text-2xl text-center'>{isEdit ? 'Edit' : 'Add'} Movie Form</h1>
                </div>
                <Formik
                initialValues={{ movieName: (isEdit && data) ? data?.title : '', year: (isEdit && data) ? data?.year : '', genre: (isEdit && data) ? data?.genre : '', description: (isEdit && data) ? data?.desc : '', image: '' , rating: (isEdit && data) ? data?.rating : '' , review: (isEdit && data) ? data?.review : ''  }}
                validate={validate}
                onSubmit={handleSubmit}
                enableReinitialize={true}
                >
                {({ isSubmitting, resetForm, setFieldValue }) => (
                    <Form className="px-6">
                        <div className='px-2'>
                          <div className='w-full'>
                            <div className='flex flex-row justify-center items-center w-full'>
                              { data.photo && <img className='w-[450px] border rounded-lg h-[200px]' src={data.photo} alt=""/>}
                            </div>
                          </div>
                          <h2>Image</h2>
                          <input type="file" name="image" accept="image/*" onChange={(event) => setFieldValue("image", event.currentTarget.files[0]) }/>
                          <ErrorMessage name="image" component="div" className="text-red-600 text-sm" />
                          <div className='flex flex-row justify-between py-2'>
                            <div>
                              <h2 className='py-2 px-2'>Name</h2>
                              <Field type="text" name="movieName" className='rounded-lg border border-slate-400 h-9 w-full px-2' maxLength={25}/>
                              <ErrorMessage name="movieName" component="div" className="text-red-600 text-sm" />
                            </div>
                            <div>
                              <h2 className='py-2 px-2'>Year</h2>
                              <Field type="text" name="year" className='rounded-lg border border-slate-400 h-9 w-full px-2' />
                              <ErrorMessage name="year" component="div" className="text-red-600 text-sm" maxLength={4}/>
                            </div>
                          </div>
                          <div className='flex flex-row justify-between'>
                            <div>
                              <h2 className='py-2 px-2'>Genre</h2>
                              <Field type="text" name="genre" className='rounded-lg border border-slate-400 h-9 w-full px-2' maxLength={20} />
                              <ErrorMessage name="genre" component="div" className="text-red-600 text-sm" />
                            </div>
                            <div>
                              <h2 className='py-2 px-2'>Rating</h2>
                              <Field type="number" name="rating" className='rounded-lg border border-slate-400 h-9 w-full px-2' max={5} />
                              <ErrorMessage name="rating" component="div" className="text-red-600 text-sm" />
                            </div>
                          </div>
                            <h2 className='py-2 px-2'>Review</h2>
                            <Field type="text" name="review" className='rounded-lg border border-slate-400 h-9 w-full px-2' maxLength={100} />
                            <ErrorMessage name="review" component="div" className="text-red-600 text-sm" />
                            <h2 className='py-2 px-2'>Description</h2>
                            <Field as="textarea" name="description" className='rounded-lg border border-slate-400 h-24 w-full px-2' maxLength={100} />
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