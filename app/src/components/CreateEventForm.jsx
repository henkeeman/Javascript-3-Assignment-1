import { useEffect, useState } from 'react';
import axios from 'axios'


let titleValue = '';
let informationValue = '';
let dateValue = '';
  

const CreateEventForm = () => {

  // const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyN2Q0YmJhMTg4ODI2MGUwZGUzZjU0MiIsImlhdCI6MTY1MzM4NTA2MCwiZXhwIjoxNjUzMzg4NjYwfQ.nRm1YwCktCMR16jb49of046VGJAIPkL7_W3_F_NDSJs'

  const errorsInitState = {title: '', information: '', date: ''}
  const [errors,setErrors] = useState(errorsInitState);

  const postTest = () => {


  // const config = {
  //   headers: { Authorization: `Bearer ${token}` }
  // };

  const bodyParameters = {
    title: titleValue,
    information: informationValue,
    date: dateValue
  };
// Skriv komma här efter "bodyparamaters"
  axios.post( 
    'http://localhost:5000/api/products',
  bodyParameters
  // config
  ).then((response) => console.log(response)).catch((error) => console.log(error));

}

const onChangeTitle = (event) => {
  titleValue = event.target.value;
  console.log(titleValue)
}
  const onChangeInfo = (event) => {
  informationValue = event.target.value;
  console.log(informationValue)
}
const onChangeDate = (event) => {
  dateValue = event.target.value;
  console.log(dateValue);
}

const onSubmit = (event) => {
  let error = false;
  let tempErrorObj = {...errorsInitState}
  if(titleValue === '' || titleValue === null)
  {
    error = true;
    tempErrorObj.title = 'Title cant be empty'
  }
  if(informationValue === '' || informationValue === null)
  {
    error = true;
    tempErrorObj.information = 'Information cant be left empty'
  }
  if(dateValue === '' || dateValue === null)
  {
    error = true;
    tempErrorObj.date = 'You must select a date'
  }
  if(error)
  {
    event.preventDefault();
  }
  console.log(errors.title)
  console.log(errors.information)
  console.log(errors.date)
  setErrors(tempErrorObj)
  if(!error)
  {
    console.log(error)
    console.log('va')
    postTest();
  }}
  useEffect(() => {



  })


    return(
      <div>
        <form onSubmit={onSubmit} className="eventForm">
        <div className="form-group">
          <label for="exampleInputTitle" style={{width: '600px'}}>Title</label >
          <input type="text" className="form-control" id="exampleInputTitle" aria-describedby="titleHelp" onChange={onChangeTitle} placeholder="Please enter a Title for the event"/>
          <small id="emailHelp" className="form-text text-muted"></small>
        </div>
        <div className="input-group" rows="10" style={{width: '600px'}}>
            <span className="input-group-text">Information</span>
            <textarea className="form-control" aria-label="With textarea" onChange={onChangeInfo} placeholder="Please enter some general information about the event"></textarea>
        </div>
        <div>
            <label for="datePicker">Date:</label>
            <input type="datetime-local" id="datePicker" onChange={onChangeDate} name="datePicker"/>
        </div>
        
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
        <div className='errorDiv'>
          {errors.title.length > 0 && <div className="alert alert-warning" role="alert">{errors.title}</div>}
          {errors.information.length > 0 && <div className="alert alert-warning" role="alert">{errors.information}</div>}
          {errors.date.length > 0 && <div className="alert alert-warning" role="alert">{errors.date}</div>}
        </div>
      </div>
        
      

    )


}

export default CreateEventForm;