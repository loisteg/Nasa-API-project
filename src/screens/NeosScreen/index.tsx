import { Button } from "@mui/material";
import { Loader } from "../../components/UI";
import { NeosCard } from "./subcomponents";

import { useGetNeos } from "../../hooks";

import { routes } from "../../constants";

import { neoTypes } from "../../types";

const NeosScreen = () => {
    const {data, isLoading, list, showLoadButton, setPage} = useGetNeos();

    if (!data && isLoading) return <Loader />;
    if (!data) return null;

    const handleLoadMore = () => {
        setPage(previousState => previousState + 1);
    };

    const cardPress = (id: neoTypes.NearEarth['id']) => {
        window.location.href = `${routes.NEO.pathName}/${id}`;
    };

    return (
        <>
            {list.map((item) => (
                <NeosCard key={item.id} info={item} onPress={() => cardPress(item.id)}/>
            ))}

            {showLoadButton && <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Button 
                    variant="contained"
                    onClick={handleLoadMore}
                    disabled={isLoading}
                >
                    Load 20 next cards
                </Button>
            </div>}
        </>
    );
};

export default NeosScreen;
