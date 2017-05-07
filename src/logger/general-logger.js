import bunyan from 'bunyan';
import configs from '../configs/lib/settings.config';

const configDetails = configs[process.env.NODE_ENV];

export default bunyan.createLogger({
  name: configDetails.app,
  streams: [
    {
      level: 'info',
      stream: configDetails.logging.info,
      period: '1d',
      count: 3,
    }, {
      level: 'error',
      path: configDetails.logging.error,
      period: '1d',
      count: 3,
    },
  ],
});
