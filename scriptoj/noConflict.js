(() => {
    const flag = window.$;
    window.$ = {
        noConflict () {
            window.$ = flag;
            return this;
        }
    }
})();
