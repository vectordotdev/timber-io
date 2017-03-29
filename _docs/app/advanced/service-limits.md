---
breadcrumbs: Timber App / Advanced
title: Service Limits
---

Timber does not impose traditional limits on the number of fields or the depth of nesting.
Instead, the limits are based on our underlying technology:

1. Each log line payload (metadata included) cannot exceed `2mb`.
2. Any field's full path (ex: `path.to.field`) cannot exceed `128 characters`.
3. Custom field values must be of a consistent type. For example, if you send `my.custom.field=1`,
   all subsequent values for that field must also be `numbers`. You _cannnot_ send a string or
   a boolean, for example.
4. The Timber native fields are validated to ensure consistency. Validation constraints for these
   fields can be found in our [schema & fields doc]({% link _docs/app/basics/events-and-context.md %}).

### Timber does *not*...

1. Timber does _not_ rate limit. Send data as fast as you'd like.
2. Timber does _not_ limit the number of hosts that can send send logs.
3. Timber does _not_ limit the number of custom fields you can store.
4. Timber does _not_ limit the depth of custom field nesting (beyond the 128 character limit).
5. Timber does _not_ limit the number of team members you can have.
6. Timber does _not_ limit the number apps you can have.
7. Timber does _not_ limit the number of organizations you can have.


<div class="next">
  Next: [{{ page.next.title }} <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>]({{ page.next.url }})
</div>