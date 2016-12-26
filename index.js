module.exports = {
	book: {
		assets: "./asset",
		css: ["style.css"]
	},
	hooks: {
		page: function (page)
		{
			page.sections.forEach(function(section)
			{
				section.content = section.content.replace(/[♥♦]/g, "<span class='redsuit'>$&</span>");
			});

			return page;
		}
	}
}
