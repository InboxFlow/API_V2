import { useLocation } from "@remix-run/react";
import { V2LayoutNavLinkContainer } from "./styles";

type V2LayoutNavLinkProps = {
  to: string;
  label: string;
  baseUrl?: string;
};

function V2LayoutNavLink(props: V2LayoutNavLinkProps) {
  const { label, to, baseUrl = "/client/v2" } = props;

  const { pathname } = useLocation();
  const isActive = pathname === baseUrl + to ? "active" : "";

  return (
    <V2LayoutNavLinkContainer to={baseUrl + to} className={isActive}>
      {label}
    </V2LayoutNavLinkContainer>
  );
}

export { V2LayoutNavLink };
