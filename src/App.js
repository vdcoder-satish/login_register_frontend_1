import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Routes,Route}from 'react-router-dom'
import HomeComponent from './features/home/homeComponent';
import LoginComponent from './features/login/loginComponent';
import RegisterationComponent from './features/register/registerComponent';
import DashboardComponent from './features/dashboard/dashboardComponent';
import React,{Suspense,lazy} from 'react';
import ForgetPasswordComponent from './features/forgetPassword/forgetPasswordComponent';
function App() {
  const Home=React.lazy(()=>import('../src/features/home/homeComponent'));
  const Dashboard=React.lazy(()=>import('../src/features/dashboard/dashboardComponent'));
  const Register=React.lazy(()=>import('../src/features/register/registerComponent'));
  const Login=React.lazy(()=>import('../src/features/login/loginComponent'));
  const fp=React.lazy(()=>import('../src/features/forgetPassword/forgetPasswordComponent'))
  return (
    <div className="App">
     <Router>
<Suspense  fallback={<h3>...Loading</h3>}>
<Routes>
        <Route path='' Component={Home}/>
        <Route path='/login' Component={Login}/>
        <Route path='/register' Component={Register}/>
        <Route path='/dashboard' Component={Dashboard}/>
        <Route path='/fp' Component={ForgetPasswordComponent}/>

      </Routes>
</Suspense>
     </Router>
    </div>
  );
}

export default App;
