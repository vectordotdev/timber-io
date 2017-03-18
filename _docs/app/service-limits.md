---
category: Timber App
category_order: 5
title: Service Limits
page_order: 11
sections: text, attributes
---

Timber does _not_ impose direct limits to the log line payload structure or any other uses
of the software. The limits are more general:

1. The resulting log line payload size must be less than `2mb`.
2. Any field's full path must be less than or equal to `128` characters.
3. Custom fields of the same name must be of the same type. If you send `custom.field=1`, all
   subsequent values for that field must also be `numbers`. You _cannnot_ send
   `custom.field=string`.
4. General field limits are defined in our [schema & fields doc]({% link _docs/app/schema-fields.md %})

## Timber does *not*...

1. Timber does _not_ rate limit. Send data as fast as you'd like.
2. Timber does _not_ limit the number of custom fields you can store.
3. Timber does _not_ limit the depth of custom field nesting.
4. Timber does _not_ limit the number of team members you can have.
5. Timber does _not_ limit the number apps you can have.
6. Timber does _not_ limit the number of organizations you can have.