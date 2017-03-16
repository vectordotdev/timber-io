---
category: Timber App
category_order: 5
title: Seek To Time
page_order: 4
sections: interface component, nlp, linking
---

# Interface Component

Within the Timber app you can seek to a specific time. You'll noticed this component
in the top right of the interface:

![Seek to time](/assets/img/docs/time-seeker.png){:class="img-responsive"}


# NLP

You can also type dates / times in natural language:

1. `today at 3m`
2. `last wednesday at 4:01pm` (last meaning, last week)
3. `wednesday at 4:01pm` (the most recent wednesday, past or future)


# Linking

After seeking to a date the URL will update with a `date=` parameter. Simply copy
that URL, anyone navigating to the URL will jump to the same time. Ex:

    https://app.timber.io/organizations/timber/apps/my-app-production/console?date=Mon+Mar+13+2017+14%3A00%3A00+GMT-0500+%28CDT%29