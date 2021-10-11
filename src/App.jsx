import CssBaseline from '@material-ui/core/CssBaseline'
import ResponsiveDrawer from './components/ResponsiveDrawer/ResponsiveDrawer'
import {Switch, Route} from 'react-router-dom'
import Books from './components/Books/Books'
import HomePage from './components/HomePage/HomePage'
import UploadBookForm from './components/Books/UploadBookForm'
import BookDetailsPage from './components/Books/BookDetailsPage'
import SignupPage from './components/AuthPages/SignupPage'
import LoginPage from './components/AuthPages/LoginPage'


function App() {
  
  return (
    <div className="App">
      <CssBaseline />     
      <ResponsiveDrawer>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/book/:bookId' component={BookDetailsPage}/>
          <Route path='/books' component={Books}/>
          <Route path='/upload' component={UploadBookForm}/>
          <Route path='/signup' component={SignupPage}/>
          <Route path='/login' component={LoginPage}/>
        </Switch>
      </ResponsiveDrawer>
    </div>
  )
}

export default App
