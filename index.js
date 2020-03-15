exports.decorateConfig = (config) => {
    return Object.assign({}, config, {
				backgroundColor: "#2a3354",
				cursorColor: "#db00be",
				cursorAccentColor: "#db00be",
				borderColor: "#54daff",
				css: `
					${config.css || ''}
					.tabs_nav .tabs_list .tab_text {
						color: yellow;
					}
					.tabs_nav .tabs_title {
						color: yellow;
					}
					.terms_terms:before {
						content: "";
						display: 'block';
						position: absolute;
						z-index: 1;
						top: 0;
						left: 0;
						width: 100%;
						height: 100%;
						background-image: url(${__dirname + '/image/minato.svg'});
						background-size: auto 80%;
						background-position: right bottom;
						background-repeat: no-repeat;
						opacity: 0.3;
					}
					.xterm .xterm-viewport {
						background-color: rgba(0,0,0,0) !impotant;
					}
        `
    });
}


