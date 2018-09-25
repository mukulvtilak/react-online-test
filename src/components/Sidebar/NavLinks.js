// sidebar nav links
export default {
	category1: [
		{
			"menu_title": "sidebar.dashboard",
			"menu_icon": "zmdi zmdi-view-dashboard",
			"child_routes": [
				{
					"menu_title": "sidebar.ecommerce",
					"path": "/app/dashboard/ecommerce",
				},
				{
					"path": "/horizontal/dashboard/saas",
					"menu_title": "sidebar.saas"
				},
				{
					"path": "/agency/dashboard/agency",
					"menu_title": "sidebar.agency"
				},
				{
					"path": "/boxed/dashboard/news",
					"menu_title": "sidebar.news"
				},
			]
		}
	]
}
