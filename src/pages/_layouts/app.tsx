import { Outlet } from "react-router-dom";

export function AppLayout() {
  return (
    <div>
      <h1>Header do APP</h1>

      <div>
        <Outlet />
      </div>
    </div>
  );
}
