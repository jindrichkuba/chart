import { QueryClient } from 'react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      refetchOnMount: false,
      keepPreviousData: true,
      retry: false,
      cacheTime: 60 * 60 * 1000,
    },
  },
});

export default queryClient;
