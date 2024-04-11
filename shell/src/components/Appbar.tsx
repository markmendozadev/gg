import { Link } from "react-router-dom";

import { Box } from "@mui/material";

const pages = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Dashboard",
    path: "/dashboard",
  },
];

function Appbar({ key = "" }: { key?: string }) {
  // const navigate = useNavigate();
  return (
    <Box>
      <div>
        <div>
          <div>
            {pages
              .filter((page) => (key !== "" ? page.path === key : page))
              .map((page) => (
                <Link
                  key={page.title}
                  // onClick={() => navigate(page.path)}

                  to={page.path}
                  style={{
                    marginBottom: 2,
                    marginTop: 2,
                    color: "black",
                    display: "block",
                    textDecoration: "none",
                  }}
                >
                  {page.title}
                </Link>
              ))}
          </div>
        </div>
      </div>
    </Box>
  );
}
export default Appbar;
