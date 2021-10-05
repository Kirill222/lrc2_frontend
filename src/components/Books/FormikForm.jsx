import {useFormik} from 'formik'

const FormikForm = () => {    

    const formik = useFormik({
        initialValues: {
            name: '',   //these names correspond to name properties of inputs
            email: '',
            channel: '',
        },
        onSubmit: values => {   //automatically receives the state of the form (values object). From here we can do an API requests           
            console.log(values)            
        }
    })

    //console.log(formik.values)

    return (
        <form onSubmit={formik.handleSubmit}>
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" onChange={formik.handleChange} value={formik.values.name} />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" onChange={formik.handleChange} value={formik.values.email}  />
            </div>
            <div>
                <label htmlFor="channel">Channel</label>
                <input type="text" id="channel" name="channel" onChange={formik.handleChange} value={formik.values.channel}  />
            </div>
            <div>
                <input id="book_cover" name="book_cover" type="file" />
            </div>
            <button type="submit">Submit</button>
        </form>
    )
}

export default FormikForm