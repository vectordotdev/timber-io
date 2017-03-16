---
category: Timber App
category_order: 5
title: SQL Query Your Logs
page_order: 2
sections: text, attributes
---

<div class="info-notice">This feature is in private beta. If interested, please email beta@timber.io</div>


Timber supports the traditional SQL `SELECT` queries for your logs. It works like just SQL:
issue a query, get back a table of results. This is a power feature and provides
direct, clean access to your data.


## Synopsis

```
[ WITH with_query [, ...] ]
SELECT [ ALL | DISTINCT ] select_expr [, ...]
[ FROM from_item [, ...] ]
[ WHERE condition ]
[ GROUP BY [ ALL | DISTINCT ] grouping_element [, ...] ]
[ HAVING condition]
[ { UNION | INTERSECT | EXCEPT } [ ALL | DISTINCT ] select ]
[ ORDER BY expression [ ASC | DESC ] [, ...] ]
[ LIMIT [ count | ALL ] ]
```

where `from_item` is one of:

```
table_name [ [ AS ] alias [ ( column_alias [, ...] ) ] ]
```

```
from_item join_type from_item [ ON join_condition | USING ( join_column [, ...] ) ]
```

and `join_type` is one of:

```
[ INNER ] JOIN
LEFT [ OUTER ] JOIN
RIGHT [ OUTER ] JOIN
FULL [ OUTER ] JOIN
CROSS JOIN
```

and `grouping_element` is one of:

```
()
expression
GROUPING SETS ( ( column [, ...] ) [, ...] )
CUBE ( column [, ...] )
ROLLUP ( column [, ...] )
```

## Schema (available columns)

All of your data is stored within a single table called `logs`. The columns available
can be found in our [schema / fields]({% link _docs/app/schema-fields.md %}) page.