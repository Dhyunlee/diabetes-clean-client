import ReactDOM from "react-dom/client";
import AppLayout from "components/App";
import { Global } from "@emotion/react";
import { reset } from "styles/reset";
import { BrowserRouter } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Failed to find the root element");
const root = ReactDOM.createRoot(rootElement);

const queryClient = new QueryClient({
  // defaultOptions: {
  //   queries: {
  //     refetchOnWindowFocus: false,
  //   }
  // }
});

root.render(
  <>
    <Global styles={reset} />

    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
        <AppLayout />
      </QueryClientProvider>
    </BrowserRouter>
  </>
);
