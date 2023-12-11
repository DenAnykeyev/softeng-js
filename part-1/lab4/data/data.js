const colors = [
	'lavenderblush', 'slateblue',
	'black', 'olivedrab',
	'peru', 'olive',
	'hotpink', 'transparent',
	'lightyellow', 'aliceblue',
	'burlywood', 'khaki',
	'saddlebrown', 'lightgray',
	'royalblue', 'darkkhaki',
	'lightsteelblue', 'paleturquoise',
	'darkcyan', 'slategray',
	'springgreen', 'aqua',
	'wheat', 'dodgerblue',
	'deeppink', 'tan',
	'mistyrose', 'midnightblue',
	'rosybrown', 'palevioletred',
	'green', 'mediumturquoise',
	'palegoldenrod', 'tomato',
	'mediumpurple', 'bisque',
	'dimgrey', 'beige',
	'sienna', 'mediumspringgreen',
	'mediumaquamarine', 'navajowhite',
	'gold', 'firebrick',
	'fuchsia', 'violet',
	'honeydew', 'purple',
	'blue', 'darkorange',
	'peachpuff', 'darkseagreen',
	'plum', 'darkblue',
	'lightseagreen', 'lightgoldenrodyellow',
	'lightslategray', 'white',
	'floralwhite', 'azure',
	'dimgray', 'orchid',
	'gainsboro', 'lightslategrey',
	'whitesmoke', 'magenta',
	'darkorchid', 'lemonchiffon',
	'blanchedalmond', 'yellow',
	'lightcyan', 'darkslategrey',
	'limegreen', 'aquamarine',
	'lightgreen', 'mediumblue',
	'indianred', 'indigo',
	'linen', 'darkred',
	'darkslategray', 'orange',
	'lawngreen', 'goldenrod',
	'ivory', 'orangered',
	'maroon', 'grey',
	'darkgoldenrod', 'deepskyblue',
	'mediumvioletred', 'mediumslateblue',
	'lightgrey', 'mintcream',
	'steelblue', 'darkviolet',
	'red', 'mediumseagreen',
	'chartreuse', 'papayawhip',
	'forestgreen', 'skyblue',
	'cyan', 'pink',
	'darkgreen', 'cornsilk',
	'turquoise', 'sandybrown',
	'darkgray', 'seashell',
	'oldlace', 'darkgrey',
	'blueviolet', 'darksalmon',
	'palegreen', 'lightblue',
	'greenyellow', 'ghostwhite',
	'darkolivegreen', 'crimson',
	'snow', 'lightcoral',
	'chocolate', 'yellowgreen',
	'cornflowerblue', 'cadetblue',
	'moccasin', 'darkturquoise',
	'slategrey', 'darkmagenta',
	'thistle', 'lightskyblue',
	'darkslateblue', 'silver',
	'seagreen', 'coral',
	'lavender', 'brown',
	'powderblue', 'lightsalmon',
	'lime', 'navy',
	'antiquewhite', 'lightpink',
	'salmon', 'mediumorchid',
	'rebeccapurple', 'teal',
	'gray'
];

const argb = [
	[255, 240, 245, 1], [106, 90, 205, 1],
	[0, 0, 0, 1], [107, 142, 35, 1],
	[205, 133, 63, 1], [128, 128, 0, 1],
	[255, 105, 180, 1], [0, 0, 0, 0],
	[255, 255, 224, 1], [240, 248, 255, 1],
	[222, 184, 135, 1], [240, 230, 140, 1],
	[139, 69, 19, 1], [211, 211, 211, 1],
	[65, 105, 225, 1], [189, 183, 107, 1],
	[176, 196, 222, 1], [175, 238, 238, 1],
	[0, 139, 139, 1], [112, 128, 144, 1],
	[0, 255, 127, 1], [0, 255, 255, 1],
	[245, 222, 179, 1], [30, 144, 255, 1],
	[255, 20, 147, 1], [210, 180, 140, 1],
	[255, 228, 225, 1], [25, 25, 112, 1],
	[188, 143, 143, 1], [219, 112, 147, 1],
	[0, 128, 0, 1], [72, 209, 204, 1],
	[238, 232, 170, 1], [255, 99, 71, 1],
	[147, 112, 219, 1], [255, 228, 196, 1],
	[105, 105, 105, 1], [245, 245, 220, 1],
	[160, 82, 45, 1], [0, 250, 154, 1],
	[102, 205, 170, 1], [255, 222, 173, 1],
	[255, 215, 0, 1], [178, 34, 34, 1],
	[255, 0, 255, 1], [238, 130, 238, 1],
	[240, 255, 240, 1], [128, 0, 128, 1],
	[0, 0, 255, 1], [255, 140, 0, 1],
	[255, 218, 185, 1], [143, 188, 143, 1],
	[221, 160, 221, 1], [0, 0, 139, 1],
	[32, 178, 170, 1], [250, 250, 210, 1],
	[119, 136, 153, 1], [255, 255, 255, 1],
	[255, 250, 240, 1], [240, 255, 255, 1],
	[105, 105, 105, 1], [218, 112, 214, 1],
	[220, 220, 220, 1], [119, 136, 153, 1],
	[245, 245, 245, 1], [255, 0, 255, 1],
	[153, 50, 204, 1], [255, 250, 205, 1],
	[255, 235, 205, 1], [255, 255, 0, 1],
	[224, 255, 255, 1], [47, 79, 79, 1],
	[50, 205, 50, 1], [127, 255, 212, 1],
	[144, 238, 144, 1], [0, 0, 205, 1],
	[205, 92, 92, 1], [75, 0, 130, 1],
	[250, 240, 230, 1], [139, 0, 0, 1],
	[47, 79, 79, 1], [255, 165, 0, 1],
	[124, 252, 0, 1], [218, 165, 32, 1],
	[255, 255, 240, 1], [255, 69, 0, 1],
	[128, 0, 0, 1], [128, 128, 128, 1],
	[184, 134, 11, 1], [0, 191, 255, 1],
	[199, 21, 133, 1], [123, 104, 238, 1],
	[211, 211, 211, 1], [245, 255, 250, 1],
	[70, 130, 180, 1], [148, 0, 211, 1],
	[255, 0, 0, 1], [60, 179, 113, 1],
	[127, 255, 0, 1], [255, 239, 213, 1],
	[34, 139, 34, 1], [135, 206, 235, 1],
	[0, 255, 255, 1], [255, 192, 203, 1],
	[0, 100, 0, 1], [255, 248, 220, 1],
	[64, 224, 208, 1], [244, 164, 96, 1],
	[169, 169, 169, 1], [255, 245, 238, 1],
	[253, 245, 230, 1], [169, 169, 169, 1],
	[138, 43, 226, 1], [233, 150, 122, 1],
	[152, 251, 152, 1], [173, 216, 230, 1],
	[173, 255, 47, 1], [248, 248, 255, 1],
	[85, 107, 47, 1], [220, 20, 60, 1],
	[255, 250, 250, 1], [240, 128, 128, 1],
	[210, 105, 30, 1], [154, 205, 50, 1],
	[100, 149, 237, 1], [95, 158, 160, 1],
	[255, 228, 181, 1], [0, 206, 209, 1],
	[112, 128, 144, 1], [139, 0, 139, 1],
	[216, 191, 216, 1], [135, 206, 250, 1],
	[72, 61, 139, 1], [192, 192, 192, 1],
	[46, 139, 87, 1], [255, 127, 80, 1],
	[230, 230, 250, 1], [165, 42, 42, 1],
	[176, 224, 230, 1], [255, 160, 122, 1],
	[0, 255, 0, 1], [0, 0, 128, 1],
	[250, 235, 215, 1], [255, 182, 193, 1],
	[250, 128, 114, 1], [186, 85, 211, 1],
	[102, 51, 153, 1], [0, 128, 128, 1],
	[128, 128, 128, 1]
];

module.exports.colors = colors;
module.exports.argb = argb;