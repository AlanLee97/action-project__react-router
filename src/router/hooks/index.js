import { useContext } from "react";
import { RouterContext } from "../components/Router";

export function useHistory() {
  const context = useContext(RouterContext);
  return context.history;
}

export function useLocation() {
  const context = useContext(RouterContext);
  return context.location;
}

export function useNavigate() {
  const context = useContext(RouterContext);
  return context.history.push;
}