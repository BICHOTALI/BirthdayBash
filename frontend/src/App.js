import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './Home'
import BirthdayIndex from './birthdays/BirthdayIndex'
import BirthdayDetails from './birthdays/BirthdayDetails'
import Navigation from './Navigation'
import Error404 from './Error404'
import NewBirthdayForm from './birthdays/NewBirthdayForm'
import EditBirthdayForm from './birthdays/EditBirthdaysForm'
import SignUpForm from './users/SignUpForm'
import LoginForm from './users/LoginForm'
import CurrentUserProvider from './contexts/CurrentUser'

function App() {
  return (
    <CurrentUserProvider>
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/sign-up" component={SignUpForm} />
          <Route exact path="/login" component={LoginForm} />
          <Route exact path="/birthdayss" component={BirthdayIndex} />
          <Route exact path="/birthdays/new" component={NewBirthdayForm} />
          <Route exact path="/birthdays/:birthdayId" component={BirthdayDetails} />
          <Route exact path="/birthdays/:birthdayId/edit" component={EditBirthdayForm} />
          <Route path="/" component={Error404} />
        </Switch>
      </BrowserRouter>
    </CurrentUserProvider>
  );
}

export default App;
