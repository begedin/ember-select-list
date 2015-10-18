# ember-select-list

ember-select-list is a basic `<select>` component which strives to replace the old `{{view 'select'}}` while following the modern ember paradigm of "data-down-actions-up" as closely as possible.

## Demo

http://begedin.github.io/ember-select-list

## Installation

* ember install ember-select-list

## Using the addon

A straight replacement of the old select view would be done in the following way.

The following handlebars markup

```handlebars
{{view "select"
       content=programmers
       optionValuePath="content.id"
       optionLabelPath="content.firstName"
       value=selectedProgrammerId}}
```

can be replaced with

```handlebars
  {{select-list content=programmers
                optionValuePath='id'
                optionLabelPath='firstName'
                value=selectedProgrammerId
                action=(action (mut selectedProgrammerId))}}

```

As clear from the markup, the default behavior of the `value` binding is one way. In order to make it two-way, using the `mut` helper is required. Additionally, label and value paths do not require speficying the root element name.

### Using attribute bindings

The following attribute bindings are supported: `disabled`, `tabindex`, `required`, `title`


### Nesting is supported

The following syntax for label and value paths is supported and will work.

```handlebars
{{select-list content=myData
              optionValuePath='level1.level2.id'
              optionLabelPath='level1.level2.label'}}
```


### Not specifying a value or label path will work

This will work

```handlebars
{{select-list content=myData
              optionLabelPath='level1.level2.label'}}
```

As will this

```handlebars
{{select-list content=myData
              optionValuePath='level1.level2.id'}}
```

The corresponding component property will simply be set to the value of the entire selected item in the content array.

### You can use it with a collection of simple strings, or complex objects.

content can be int he format of `['Item A', 'Item B', ...]` or `[ ObjectA, ObjectB, ...]`.

### Instead of using `mut`, you can bind it to any action you want

```handlebars
  {{select-list content=myData
                action='myCustomAction'}}

```

The action will be triggered when the selection is changed.

## Ember support

This addon should currently work with ember@1.13.x. It may also work with ember@2.x, but I haven't tested it. Official support for ember@2.x is planned.
