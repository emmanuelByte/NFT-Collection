import '../styles/globals.css';

// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// toast.configure();

function MyApp({ Component, pageProps }) {
  return (
    <div>
      {/* <ToastContainer /> */}
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
