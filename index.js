exports.decorateConfig = (config) => {
    return Object.assign({}, config, {
				backgroundColor: "#25242e",
				cursorColor: "#db00be",
				cursorAccentColor: "#db00be",
				borderColor: "#54daff",
				foregroundColor: '#fff',
				colors: {
					black: '#000000',
					red: '#C51E14',
					green: '#1DC121',
					yellow: '#C7C329',
					blue: '#4fcdff',
					magenta: '#ff94fa',
					cyan: '#20C5C6',
					white: '#C7C7C7',
					lightBlack: '#686868',
					lightRed: '#FD6F6B',
					lightGreen: '#67F86F',
					lightYellow: '#FFFA72',
					lightBlue: '#6A76FB',
					lightMagenta: '#FD7CFC',
					lightCyan: '#68FDFE',
					lightWhite: '#FFFFFF',
				  },
				css: `
					${config.css || ''}
					.tabs_nav .tabs_list .tab_text {
						color: yellow;
					}
					.tabs_nav .tabs_title {s
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


