import CssBaseline from '@material-ui/core/CssBaseline'
import ResponsiveDrawer from './components/ResponsiveDrawer/ResponsiveDrawer'
import {Switch, Route, Link} from 'react-router-dom'
import Books from './components/Books/Books'
import UploadBookForm from './components/Books/UploadBookForm'
import BookDetailsPage from './components/Books/BookDetailsPage'
import FormikForm from './components/Books/FormikForm'


function App() {
  
  return (
    <div className="App">
      <CssBaseline />     
      <ResponsiveDrawer>
        <Switch>
          <Route path='/book/:bookId' component={BookDetailsPage}/>
          <Route path='/books' component={Books}/>
          <Route path='/upload' component={UploadBookForm}/>
          <Route path='/test' component={FormikForm}/>

        </Switch>
      </ResponsiveDrawer>
    </div>
  )
}

export default App
