---
category: Timber App
category_order: 4
title: Log Event JSON Schema
page_order: 3
sections: text, attributes
---

All logs within Timber adhere to our [log event JSON schema](https://github.com/timberio/log-event-json-schema).
You can view a list of fields, types, and descriptions in the [schema.json file](https://github.com/timberio/log-event-json-schema/blob/master/schema.json).

# Normalized Schema

You'll notice our schema is normalized. Meaning it is not language or framework specific.
This has a variety of benefits:

1. Events across multiple apps, of various languages, share the same schema.
2. Queries can span across multiple apps.
3. Queries can be applied to multiple apps.
4. Normalizes data consumption for down-stream consumers (alerts, bi-tools, data viz, etc)


# Versioning and Releases

Schema changes are [released within Github](https://github.com/timberio/log-event-json-schema/releases)
and follow the [semver specification](http://semver.org/).

