import {
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from '@rspress/core/runtime';
import {toHref} from './Link';

export function useHistory() {
  const navigate = useNavigate();
  return {
    push(target, state) {
      navigate(toHref(target), state === undefined ? undefined : {state});
    },
    replace(target, state) {
      navigate(toHref(target), {
        replace: true,
        ...(state === undefined ? {} : {state}),
      });
    },
    goBack() {
      navigate(-1);
    },
  };
}

export {useLocation, useNavigate, useParams, useSearchParams};
