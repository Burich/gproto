const prod = {
    isDev: false,
    link: (path) => {
        return `/gproto${path}`;
    }
};

const dev = {
    isDev: true,
    link: (path) => {
        return path;
    }
};

export const config = process.env.NODE_ENV === 'development' ? dev : prod;