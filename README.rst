.. This README is meant for consumption by humans and pypi. Pypi can render rst files so please do not use Sphinx features.
   If you want to learn more about writing documentation, please check out: http://docs.plone.org/about/documentation_styleguide_addons.html
   This text does not appear on pypi or github. It is a comment.

==========================
collective.z3cform.select2
==========================

EXPERIMENTAL. This is a work in progress.
There is still a javascript issue with the zc3form widget.

Features
--------

- select2 facetednavigation widget for 2-level vocabulary created with collective.taxonomy
  Select "Select2" criteria in facetednavigation and select a taxonomy.
- select2 z3c.form widget that works nice with 2-level vocabulary created with collective.taxonomy
- Upon installation, the default zc3form widget for List/Set of Choice will be select2 based.


Translations
------------

- One constant Faceted.taxonomyAllString currently in French.


Installation
------------

Install collective.z3cform.select2 by adding it to your buildout::

    [buildout]

    ...

    eggs =
        collective.z3cform.select2
    zcml =
        collective.z3cform.select2


and then running ``bin/buildout``


Contribute
----------

- Issue Tracker: https://github.com/collective/collective.z3cform.select2/issues
- Source Code: https://github.com/collective/collective.z3cform.select2


Support
-------

If you are having issues, please let us know.


License
-------

The project is licensed under the GPLv2.
