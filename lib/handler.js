class Handler {
    constructor() {
        this._use = [];
        this._func = null;
    }

    get handler() {
        return (req, res) => this._use.reduceRight((a, v) => () => v(req, res, a), () => this._func(req, res))();
    }

    use(...middleware) {
        middleware.forEach(m => this._use.push(m));
        return this;
    }

    handle(func) {
        this._func = func;
        return this;
    }
}

module.exports = Handler;