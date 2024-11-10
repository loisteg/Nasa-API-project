import CounterContentItem from './CounterContentItem';

import { useCounterContext } from "../../../hooks";

const CounterContent = () => {
    const { data, isLoading, isError } = useCounterContext();

    if (isLoading) return <div>Loading...</div>;
    if (isError) return null
    if (!data) return null;
    
    return (
        <div>{data.collection.items.map((item) => <CounterContentItem key={item.data[0].nasa_id} item={item} />)}</div>
    );
};

export default CounterContent;