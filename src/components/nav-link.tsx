import { Link, LinkProps, useLocation } from "react-router-dom";

type NavLinkProps = LinkProps;

export function NavLink({ ...props }: NavLinkProps) {
  const { pathname } = useLocation();
  return (
    <Link
      data-current={pathname === props.to}
      className="flex items-center text-sm font-medium gap-2 text-muted-foreground hover:text-foreground data-[current=true]:text-foreground"
      {...props}
    />
  );
}
