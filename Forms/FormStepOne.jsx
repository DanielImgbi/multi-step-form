import './FormStepOne.css';
import { useFormik } from 'formik';


const FormStepOne = () => {
    const Formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: ''
        }
    });

    console.log(Formik.values);
    return (
        <form className="form-container">
            <div className="form-group">
                <h3>Personal info</h3>
                <small>Please provide your name, email address, and phone number.</small>
            </div>
            
            <div className="form-group">
                <div className="form-control">
                    <div className='div'>
                        <label htmlFor="name">Name</label>
                    </div>
                    <input type="text" name="name"
                        value={Formik.values.name}
                        onChange={Formik.handleChange}
                        onBlur={Formik.handleBlur}
                        id="name"
                        className="input" />
                </div>
            </div>

            <div className="form-group">
                <div className="form-control">
                    <div className='div'>
                        <label htmlFor="email">Email Address</label>
                    </div>
                    <input type="email" name="email"
                        value={Formik.values.email}
                        onChange={Formik.handleChange} 
                        onBlur={Formik.handleBlur}
                        id="email"
                        className="input" />
                </div>
            </div> 

            <div className="form-group">
                <div className="form-control">
                    <div className='div'>
                        <label htmlFor="phone">Phone Number</label>
                    </div>
                    <input type="tel" name="phone"
                        value={Formik.values.phone}
                        onChange={Formik.handleChange}
                        onBlur={Formik.handleBlur}
                        id="phone"
                        className="input" />
                </div>
            </div>
        </form>
    )
}

export default FormStepOne; 