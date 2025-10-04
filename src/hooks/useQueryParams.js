import { useSearchParams } from 'react-router';

const useQueryParams = () => {
  const [searchParams] = useSearchParams();
  return Object.fromEntries([...searchParams]);
};

export default useQueryParams;