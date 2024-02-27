import type { SidebarNavStruct } from "@docs-website/types/sidebar-navigation";

// when adding a new page you need to add it to the gitignore exception, because this folder is generated by the sqlite downlaoder

const sidebarNav: SidebarNavStruct = [
	{ title: "SQLite", type: "primary" },
	//{ title: "Getting Started", type: "secondary" },
	//{ filePath: "sqlite/lang_install", type: "inner", level: 0 },
	//{ filePath: "sqlite/lang_csdk", type: "inner", level: 0 },
	//{ filePath: "sqlite/lang_shell", type: "inner", level: 0 },
	{ title: "Basic Syntax", type: "secondary" },
	{ filePath: "sqlite/lang_altertable", type: "inner", level: 0 },
	{ filePath: "sqlite/lang_analyze", type: "inner", level: 0 },
	{ filePath: "sqlite/lang_createindex", type: "inner", level: 0 },
	{ filePath: "sqlite/lang_createtable", type: "inner", level: 0 },
	{ filePath: "sqlite/lang_createtrigger", type: "inner", level: 0 },
	{ filePath: "sqlite/lang_createview", type: "inner", level: 0 },
	{ filePath: "sqlite/lang_createvtab", type: "inner", level: 0 },
	{ filePath: "sqlite/lang_delete", type: "inner", level: 0 },
	{ filePath: "sqlite/lang_dropindex", type: "inner", level: 0 },
	{ filePath: "sqlite/lang_droptable", type: "inner", level: 0 },
	{ filePath: "sqlite/lang_droptrigger", type: "inner", level: 0 },
	{ filePath: "sqlite/lang_dropview", type: "inner", level: 0 },
	{ filePath: "sqlite/lang_explain", type: "inner", level: 0 },
	{ filePath: "sqlite/lang_insert", type: "inner", level: 0 },
	{ filePath: "sqlite/lang_reindex", type: "inner", level: 0 },
	{ filePath: "sqlite/lang_replace", type: "inner", level: 0 },
	{ filePath: "sqlite/lang_returning", type: "inner", level: 0 },
	{ filePath: "sqlite/lang_select", type: "inner", level: 0 },
	{ filePath: "sqlite/lang_update", type: "inner", level: 0 },
	{ filePath: "sqlite/lang_upsert", type: "inner", level: 0 },
	{ filePath: "sqlite/lang_vacuum", type: "inner", level: 0 },
	{ filePath: "sqlite/lang_comment", type: "inner", level: 0 },
	{ filePath: "sqlite/lang_transaction", type: "inner", level: 0 },
	{ filePath: "sqlite/lang_savepoint", type: "inner", level: 0 },
	// functions
	{ title: "Functions and Clauses", type: "secondary" },
	{ title: "Mathematical Functions", filePath: "sqlite/lang_mathfunc", type: "inner", level: 0 },
	{ title: "Scalar Functions", filePath: "sqlite/lang_corefunc", type: "inner", level: 0 },
	{ title: "JSON Functions And Operators", filePath: "sqlite/json1", type: "inner", level: 0 },
	{ title: "Date And Time Functions", filePath: "sqlite/lang_datefunc", type: "inner", level: 0 },
	{ title: "Aggregate Functions", filePath: "sqlite/lang_aggfunc", type: "inner", level: 0 },
	{ title: "ON CONFLICT Clause", filePath: "sqlite/lang_conflict", type: "inner", level: 0 },
	{ title: "WITH Clause", filePath: "sqlite/lang_with", type: "inner", level: 0 },
	{ title: "INDEXED BY Clause", filePath: "sqlite/lang_indexedby", type: "inner", level: 0 },
	{ title: "SQL Language Expressions", filePath: "sqlite/lang_expr", type: "inner", level: 0 },
	{ title: "SQLite Keywords", filePath: "sqlite/lang_keywords", type: "inner", level: 0 },
	// disabled
	// { filePath: "sqlite/lang_attach", type: "inner", level: 0 },
	// { filePath: "sqlite/lang_detach", type: "inner", level: 0 },
	// { filePath: "sqlite/lang_naming", type: "inner", level: 0 },
];

export default sidebarNav;
