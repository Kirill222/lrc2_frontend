import CssBaseline from '@material-ui/core/CssBaseline'
import ResponsiveDrawer from './components/ResponsiveDrawer/ResponsiveDrawer'
import {Switch, Route, Link} from 'react-router-dom'
import Books from './components/ResponsiveDrawer/Books/Books'
import UploadBookForm from './components/ResponsiveDrawer/Books/UploadBookForm'
import BookDetailsPage from './components/ResponsiveDrawer/Books/BookDetailsPage'


function App() {
  
  return (
    <div className="App">
      <CssBaseline />     
      <ResponsiveDrawer>
        <Switch>
          <Route path='/book/:bookId' component={BookDetailsPage}/>
          <Route path='/books' component={Books}/>
          <Route path='/upload' component={UploadBookForm}/>
        </Switch>
      </ResponsiveDrawer>
    </div>
  )
}

export default App
