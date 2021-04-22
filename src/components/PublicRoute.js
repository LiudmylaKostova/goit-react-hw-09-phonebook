import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { getIsAuthenticated } from '../redux/auth/authSelectors';

/**
 * - Если маршрут ограниченный и юзер залогинен, рендерит редирект на redirectTo
 * - В противном случае рендерит компонент
 *
 */

export default function PublicRoute({
  children,
  restricted = false,
  redirectTo = '/',
  ...routeProps
}) {
  const isAuthenticated = useSelector(getIsAuthenticated);
  const shouldRedirect = isAuthenticated && restricted;
  return (
    <Route {...routeProps}>
      {shouldRedirect ? <Redirect to={redirectTo} /> : children}
    </Route>
  );
}

// import { Route, Redirect } from 'react-router-dom';
// import { connect } from 'react-redux';
// import { getIsAuthenticated } from '../redux/auth/authSelectors';

// const PublicRoute = ({
//   component: Component,
//   isAuthenticated,
//   redirectTo,
//   ...routeProps
// }) => (
//   <Route
//     {...routeProps}
//     render={props =>
//       isAuthenticated && routeProps.restricted ? (
//         <Redirect to={redirectTo} />
//       ) : (
//         <Component {...props} />
//       )
//     }
//   />
// );

// const mapStateToProps = state => ({
//   isAuthenticated: getIsAuthenticated(state),
// });

// export default connect(mapStateToProps)(PublicRoute);
