import type { SidebarNavStruct } from "@docs-website/types/sidebar-navigation";

// when adding a new page you need to add it to the gitignore exception, because this folder is generated by the sqlite downlaoder

const sidebarNav: SidebarNavStruct = [
	{ title: "SQLite Bridge", type: "primary" },
	{ title: "Getting Started", type: "secondary" },
	{ title: "Installation", filePath: "bridge/install", type: "inner", level: 0 },
	{ title: "C SDK", filePath: "bridge/csdk", type: "inner", level: 0 },
	{ title: "Shell", filePath: "bridge/shell", type: "inner", level: 0 },
]

export default sidebarNav;
