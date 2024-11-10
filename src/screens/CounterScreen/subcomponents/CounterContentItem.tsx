
import { CardHeader, Avatar, CardMedia, Typography, Box } from "@mui/material";
import { Card } from "../../../components/UI";

import { counterTypes } from "../../../types";
import { red } from "@mui/material/colors";
import CounterContentKeyWords from "./CounterContentKeyWords";

const CounterContentItem = ({ item }: { item: counterTypes.Item }) => {
    if (!item.data.length) return null;
    const currentItem = item.data[0],
        avatarLetter = currentItem.secondary_creator?.[0]?.[0].toUpperCase() ?? currentItem.title[0] ,
        createdDate = new Date(currentItem.date_created).toLocaleDateString();

    return (
        <Card>
            {avatarLetter && <CardHeader
                sx={{pl: '0px'}}
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }}>
                        {avatarLetter}
                    </Avatar>
                }
                title={currentItem.title}
                subheader={createdDate && `Created at: ${createdDate}`}
            />}
            {!!item.links.length && 
                <CardMedia
                    component="img"
                    height="194"
                    image={item.links[0].href}
                    alt="Paella dish"
                    sx={{mb: 1}}
                />
            }
                {currentItem.location &&
                    <Typography>
                        Location: {currentItem.location}
                    </Typography>
                }
                {currentItem.description && 
                    <Typography sx={{ wordBreak: 'break-word' }}>
                        Description: {currentItem.description}
                    </Typography>
                }
                {currentItem.secondary_creator && 
                    <Typography sx={{ wordBreak: 'break-word' }}>
                        Secondary creator: {currentItem.secondary_creator}
                    </Typography>
                }
                <CounterContentKeyWords keywords={currentItem.keywords} />
        </Card>
    );
};

export default CounterContentItem;