import React, {
  createContext,
  useMemo,
  useState,
  useEffect,
  useContext,
} from 'react';
import { Container, Spinner } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { isAuthenticated } from '../api/userApi';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const providerValue = useMemo(
    () => ({
      user,
      setUser,
      isAuth,
      setIsAuth,
      isLoading,
    }),
    [user, isAuth, isLoading],
  );

  useEffect(() => {
    setIsLoading(true);
    isAuthenticated().then((data) => {
      setUser(data.user);
      setIsAuth(data.isAuthenticated);
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      {isLoading ? (
        <Container className="text-center pt-5">
          <Spinner
            animation="border"
            size="lg"
            style={{
              width: '3.5rem',
              height: '3.5rem',
            }}
          />
        </Container>
      ) : (
        <AuthContext.Provider value={providerValue}>
          {children}
        </AuthContext.Provider>
      )}
    </>
  );
};

export default AuthProvider;

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuthContext must be used within the AuthProvider');
  }
  return context;
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
