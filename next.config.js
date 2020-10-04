const withFonts = require('next-fonts');

module.exports = withFonts({
    webpack(config, _options) {
        return config;
    }
});
