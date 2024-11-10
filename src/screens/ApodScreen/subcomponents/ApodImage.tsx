import { ImageListItem } from "@mui/material";

import { apodTypes } from "../../../types";

const ApodImage = ({ item }: { item: apodTypes.Apod }) => {
    const uri = item.thumbnail_url ? item.thumbnail_url : item.url;

    return (
        <ImageListItem key={uri}>
            <img
                srcSet={`${uri}?w=248&fit=crop&auto=format&dpr=2 2x`}
                src={`${uri}?w=248&fit=crop&auto=format`}
                alt={item.title}
            />
        </ImageListItem>
    )
}

export default ApodImage;