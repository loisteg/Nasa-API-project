import { assetsPathes } from '../../constants';

const ErrorImage = () => {
    return (
        <img src={assetsPathes.ERROR} style={{display: 'block', width: '250px', height: '250px', objectFit:'contain', margin: '0 auto'}} alt="Error" />
    )
}

export default ErrorImage;