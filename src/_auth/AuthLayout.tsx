import { Outlet, Navigate } from "react-router-dom";

function AuthLayout() {
  let isAuthenticated = false;

  return (
    <>
      {isAuthenticated ? (
        <Navigate to="/" />
      ) : (
        <>
          <section>
            <Outlet />
          </section>
        </>
      )}
    </>
  );
}

export default AuthLayout;
