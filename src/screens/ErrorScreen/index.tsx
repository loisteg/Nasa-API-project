
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import { ErrorImage } from "../../components/UI";

import { routes } from "../../constants";
import { blue } from "@mui/material/colors";


const ErrorScreen = () => {
    return (
        <div>
            <ErrorImage/>
            <Typography sx={{mt: 1, 'textAlign': 'center', 'fontWeight': 'bold', 'fontSize': '15px'}}>Oops! Page doesn't exist</Typography>
            <Link
                to={routes.NEOS.path}
                style={{'display': 'block', 'marginTop': '30px', 'textAlign': 'center', 'fontWeight': 'bold', 'fontSize': '24px', 'color': blue[500] }}>
                Back to main page
            </Link>
        </div>
    )
}

export default ErrorScreen;