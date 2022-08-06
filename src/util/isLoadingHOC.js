//Reference: https://blog.bitsrc.io/building-a-universal-higher-order-component-page-loader-for-your-react-app-46d74f7a6958
/**
 * Higher-Order Component Page Loader 
 * @param {Component} WrappedComponent The component to be loaded
 * @param {String} loadingMessage The message to be displayed while the component is loading
 */
import Loading from "components/Loading";
import { useState } from "react";

export const IsLoadingHOC = (WrappedComponent, loadingMessage) => {
  function HOC(props) {
    const [isLoading, setIsLoading] = useState(true);

    const setLoadingState = isComponentLoading => {
      setIsLoading(isComponentLoading);
    }

    return (
      <>
        {isLoading && <Loading message={loadingMessage}/>}
        <WrappedComponent {...props} setLoading={setLoadingState} />
      </>
    )
  }
  return HOC;
}

export default IsLoadingHOC;

