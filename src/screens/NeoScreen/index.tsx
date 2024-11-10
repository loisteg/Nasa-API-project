import { Navigate } from "react-router-dom";
import { Link, Box, Chip } from "@mui/material";
import { ErrorImage, Loader } from "../../components/UI";
import { NeoDescription, NeoTable } from "./subcomponents";

import { useParams } from "react-router-dom";
import { useGetNeo } from "../../hooks";

import { routes } from "../../constants";

const NeoScreen = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useGetNeo(id);

  if (!id) return <Navigate to={routes.NEOS.path} />;

  if (!data && isLoading) return <Loader />;

  return (
    <Box sx={{position: 'relative'}}>
      <Link href={routes.NEOS.path}>Back</Link>
      {isError && <ErrorImage />}
      {!!data && (
        <>
          <Chip label={data.id}
            color={data.is_potentially_hazardous_asteroid ? 'error' : 'success'}
            sx={{position: 'absolute', top: 10, right: 10}}
          />
          <Box sx={{display: 'flex', flexDirection: 'column', gap: 2, mt: '45px'}}>
            <NeoDescription info={data} />
            <NeoTable info={data.close_approach_data} />
          </Box>
        </>
      )}
    </Box>
  )
}

export default NeoScreen