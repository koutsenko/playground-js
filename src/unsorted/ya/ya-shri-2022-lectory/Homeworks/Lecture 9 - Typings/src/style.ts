import { color } from './colors';
import { markdown, mdOptionsList } from './md';
import { colors, CharacterStyleOptions, Colors, TextStyleOptions } from './model';

function isMarkdownOptions(options: CharacterStyleOptions) {
    return mdOptionsList.some(key => key in options);
}

function styleImpl(text: string, options: Record<string, boolean | string | string[]>) {
    if (text.length === 0) {
        return text;
    }
    if ('font' in options || 'background' in options || 'effects' in options) {
        return color(text, options);
    }
    if (isMarkdownOptions(options)) {
        return markdown(text, options);
    }
    return text;
}

const colorsObj = new Map(colors.map((color) => 
    [
        color, 
        (text: string) => console.log(style(text, { font: color }))
    ]
));

export const style = Object.assign(styleImpl, {
    log: (text: string, options: Record<string, boolean | string | string[]>) => {
        console.log(style(text, options));
    },
    color: (x: Colors) => {
        const log = colorsObj.get(x);
        return log || console.log;
    },
});
