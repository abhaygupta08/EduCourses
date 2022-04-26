import { lazy } from 'react';
import { Redirect, Route } from 'react-router-dom';

const Home = lazy(() => import('../Home'));
const Course = lazy(() => import('../Course'));
const CoursesPage = lazy(() => import('../CoursesPage'));
const Search = lazy(() => import('../Search'));
const Catagories = lazy(() => import('../Catagories'));

export default function Routes(){
    return (<>
            <Route exact path="/home">
              <Redirect to={'/'} />
            </Route>
            <Route exact path="/" component={Home} />
            <Route exact path="/courses" component={CoursesPage} />
            <Route exact path="/courses/:courseId" component={Course} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/catagories" component={Catagories} />
            <Route path="*">
              <Redirect to={'/'} />
            </Route>
    </>

    );
  }