import Env from '../config/env';

const roots = {
    'development': {
        javacore: "http://106.14.96.49:9999",
        noderoot: 'http://athena.ichezheng.com',
    },
    'production': {
        // javacore: "http://106.15.43.147:9999",
        javacore: "http://tenant.baozhengTech.com",
        noderoot: 'http://zeus.ichezheng.com',
    }
}

export default roots[Env];
