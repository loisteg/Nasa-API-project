import { neoMiddleware } from '../api/neoApi';
import { apodMiddleware } from '../api/apodApi';
import { counterMiddleware } from '../api/counterApi';

export default [neoMiddleware, apodMiddleware, counterMiddleware];
